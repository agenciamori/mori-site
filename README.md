# Site da Agência Mori

Site estático gerado com [Eleventy](https://www.11ty.dev/) e publicado no Netlify.

## Comandos

```bash
npm install        # primeira vez
npm start          # servidor local em http://localhost:8080 (recarrega ao salvar)
npm run build      # gera o site em _site/
npm run check      # checagem de SEO do _site (rode depois do build)
```

## Onde fica cada coisa

| Pasta / arquivo | O que é |
| --- | --- |
| `src/` | Páginas. Cada pasta vira uma URL (`src/sobre/index.html` → `/sobre/`) |
| `src/_includes/layouts/base.njk` | Estrutura comum: head, GA4, canonical, schema, menu e rodapé |
| `src/_includes/partials/` | Menu (`nav.njk`) e rodapé (`footer.njk`) |
| `src/_data/menu.json` | Itens do menu e do rodapé. Página nova no menu = uma linha aqui |
| `src/_data/site.json` | URL, WhatsApp, GA4, redes sociais, CNPJ |
| `src/assets/css/site.css` | CSS comum a todas as páginas. CSS específico fica no `pageCss` da página |
| `src/sitemap.njk` | Gera o `sitemap.xml` com todas as páginas automaticamente |
| `src/_redirects` | Redirecionamentos 301 do Netlify |
| `briefings/` | Briefing de cada página nova (não vai pro site) |
| `scripts/seo-check.mjs` | Checagem de SEO |

## Padrão de URL

Todas as URLs terminam com barra: `/servicos/seo-local/`. É o comportamento nativo do Netlify
para pastas; links internos, canonical e sitemap seguem esse padrão.

## Campos de uma página (front matter)

`title`, `description`, `permalink`, `updated` (data da última atualização, vai pro sitemap),
`keyword` (palavra-chave principal, usada pela checagem), `pageCss`, `schemas`,
`sitemap: false` ou `noindex: true` quando a página não deve ser indexada.
