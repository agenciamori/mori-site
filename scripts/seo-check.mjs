// Checagem de SEO do site gerado (_site). Rode depois do build: npm run build && npm run check
// Erros (ERRO) devem ser corrigidos antes do deploy. Avisos (aviso) são para revisar.
import fs from "node:fs";
import path from "node:path";

const SITE = "_site";
const ORIGIN = "https://agenciamori.com.br";
const index = JSON.parse(fs.readFileSync(".cache/seo-index.json", "utf8"));
const meta = new Map(index.map((p) => [p.url, p]));

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []);

const fileToUrl = (f) => "/" + path.relative(SITE, f).replace(/index\.html$/, "").replace(/\\/g, "/");
const strip = (s) => s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const redirects = fs.existsSync(`${SITE}/_redirects`)
  ? fs.readFileSync(`${SITE}/_redirects`, "utf8").split("\n").filter((l) => l.trim() && !l.startsWith("#")).map((l) => l.trim().split(/\s+/)[0])
  : [];

const pages = walk(SITE).map((f) => {
  const html = fs.readFileSync(f, "utf8");
  return { f, url: fileToUrl(f), html };
});
const urls = new Set(pages.map((p) => p.url));
const inbound = new Map(pages.map((p) => [p.url, 0]));
const titles = new Map(), descs = new Map();
let errors = 0, warnings = 0;
const report = [];

for (const p of pages) {
  const issues = [];
  const err = (m) => { issues.push("  ERRO  " + m); errors++; };
  const warn = (m) => { issues.push("  aviso " + m); warnings++; };
  const h = p.html;
  const m = meta.get(p.url) || {};

  const title = (h.match(/<title>([\s\S]*?)<\/title>/) || [])[1]?.trim() || "";
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
  const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((x) => strip(x[1]));
  const body = h.slice(h.indexOf("<body"));
  const text = strip(body);

  if (!title) err("sem <title>");
  else if (title.length > 65) warn(`title com ${title.length} caracteres (ideal até 60-65)`);
  else if (title.length < 30) warn(`title curto (${title.length})`);
  if (!desc) err("sem meta description");
  else if (desc.length > 160) warn(`description com ${desc.length} caracteres (ideal até 155-160)`);
  else if (desc.length < 70) warn(`description curta (${desc.length})`);
  if (canon !== ORIGIN + p.url) err(`canonical "${canon}" diferente de ${ORIGIN + p.url}`);
  if (h1s.length !== 1) err(`${h1s.length} H1 na página (deve ter 1)`);
  if (/—/.test(title + desc + text)) err("contém travessão (—)");
  if (/noindex/.test(h) && !m.noindex) warn("tem noindex");

  titles.set(title, [...(titles.get(title) || []), p.url]);
  descs.set(desc, [...(descs.get(desc) || []), p.url]);

  for (const [, json] of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch { err("JSON-LD inválido"); }
  }
  for (const [, tag] of body.matchAll(/(<img\b[^>]*>)/g)) {
    if (!/\balt="[^"]+"/.test(tag)) warn("imagem sem alt: " + tag.slice(0, 80));
  }

  // Links internos
  for (const [, href] of body.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    let u = href;
    if (u.startsWith(ORIGIN)) u = u.slice(ORIGIN.length) || "/";
    if (!u.startsWith("/") || u.startsWith("//")) continue;
    const pathOnly = u.split("#")[0].split("?")[0] || "/";
    if (pathOnly.startsWith("/assets/")) continue;
    if (urls.has(pathOnly)) { if (pathOnly !== p.url) inbound.set(pathOnly, inbound.get(pathOnly) + 1); continue; }
    if (urls.has(pathOnly + "/")) { warn(`link sem barra final: ${href}`); inbound.set(pathOnly + "/", inbound.get(pathOnly + "/") + 1); continue; }
    if (redirects.includes(pathOnly)) { warn(`link aponta para um redirect: ${href}`); continue; }
    err(`link quebrado: ${href}`);
  }

  // Palavra-chave principal (campo "keyword" no front matter)
  if (m.keyword) {
    const k = norm(m.keyword);
    if (!norm(title).includes(k)) warn(`keyword "${m.keyword}" não está no title`);
    if (!h1s.some((x) => norm(x).includes(k))) warn(`keyword "${m.keyword}" não está no H1`);
    if (!norm(desc).includes(k)) warn(`keyword "${m.keyword}" não está na description`);
    const first = norm(text.split(" ").slice(0, 150).join(" "));
    if (!first.includes(k)) warn(`keyword "${m.keyword}" não aparece no início do texto`);
  }
  const words = text.split(" ").length;
  if (words < 500 && !p.url.startsWith("/contato")) warn(`texto curto: ~${words} palavras`);

  if (issues.length) report.push(`${p.url}\n${issues.join("\n")}`);
}

for (const [u, n] of inbound) if (n === 0 && u !== "/") { report.push(`${u}\n  ERRO  página órfã (nenhum link interno aponta para ela)`); errors++; }
for (const [t, us] of titles) if (t && us.length > 1) { report.push(`title duplicado "${t}": ${us.join(", ")}`); errors++; }
for (const [d, us] of descs) if (d && us.length > 1) { report.push(`description duplicada: ${us.join(", ")}`); errors++; }

console.log(report.join("\n\n") || "Tudo certo.");
console.log(`\n${pages.length} páginas · ${errors} erro(s) · ${warnings} aviso(s)`);
process.exit(errors ? 1 : 0);
