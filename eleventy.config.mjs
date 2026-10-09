import fs from "node:fs";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/llms.txt": "llms.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

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
