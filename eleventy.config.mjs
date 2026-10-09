import fs from "node:fs";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/llms.txt": "llms.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  // Link de WhatsApp com mensagem pré-preenchida (identifica de qual página veio o lead)
  eleventyConfig.addFilter("wa", (msg) => {
    const base = "https://wa.me/5511960620253";
    return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
  });

  // Schemas JSON-LD gerados a partir do front matter das páginas novas
  const stripHtml = (s) => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  eleventyConfig.addFilter("pageSchemas", (d, site) => {
    const abs = (u) => (u.startsWith("http") ? u : site.url + u);
    const out = [];
    out.push({
      "@context": "https://schema.org", "@type": "ProfessionalService", "@id": site.url + "/#organizacao",
      name: site.name, url: site.url + "/",
      description: "Agência de SEO Local e GEO em São Paulo, especializada em posicionar empresas no Google e nas inteligências artificiais.",
      areaServed: { "@type": "Country", name: "Brasil" },
      contactPoint: { "@type": "ContactPoint", telephone: site.phone, contactType: "customer service", areaServed: "BR", availableLanguage: "Portuguese" },
      sameAs: [site.instagram, site.linkedin],
    });
    if (d.breadcrumbs && d.breadcrumbs.length) {
      out.push({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [{ name: "Início", url: "/" }, ...d.breadcrumbs].map((b, i) => ({
          "@type": "ListItem", position: i + 1, name: b.name, item: abs(b.url || d.url),
        })),
      });
    }
    if (d.service) {
      out.push({
        "@context": "https://schema.org", "@type": "Service", serviceType: d.service.type,
        description: d.service.description, url: abs(d.url),
        provider: { "@id": site.url + "/#organizacao" }, areaServed: { "@type": "Country", name: "Brasil" },
      });
    }
    if (d.faq && d.faq.length) {
      out.push({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: d.faq.map((f) => ({ "@type": "Question", name: stripHtml(f.q), acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) } })),
      });
    }
    for (const x of d.extra || []) out.push({ "@context": "https://schema.org", ...x });
    return out.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n");
  });

  // Índice usado pelo script de checagem de SEO (npm run check). Não vai pro site.
  eleventyConfig.addCollection("seoIndex", (api) => {
    const pages = api.getAll().filter((p) => p.url && !p.data.eleventyExcludeFromCollections);
    const index = pages.map((p) => ({
      url: p.url,
      input: p.inputPath,
      keyword: p.data.keyword || null,
      noindex: !!p.data.noindex,
    }));
    fs.mkdirSync(".cache", { recursive: true });
    fs.writeFileSync(".cache/seo-index.json", JSON.stringify(index, null, 2));
    return [];
  });

  eleventyConfig.addCollection("sitemap", (api) =>
    api.getAll()
      .filter((p) => p.url && p.data.sitemap !== false && !p.data.noindex && !p.data.eleventyExcludeFromCollections)
      .sort((a, b) => a.url.localeCompare(b.url))
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
