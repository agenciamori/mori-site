# Briefing: Hub de segmentos

- **URL:** /segmentos/ (página nova)
- **Template:** hub
- **Keyword:** sem keyword própria. A função é organizar e dar link a todas as páginas de segmento e ser o pai delas no breadcrumb.

## Estrutura

1. H1: SEO para cada tipo de negócio
2. Introdução curta: por que SEO muda por segmento (como o cliente busca, regras do conselho, ticket, ciclo de venda)
3. **Por modelo de negócio:** Pequenas Empresas, Empresas B2B (cards com 1 frase cada)
4. **Saúde:** Médicos, Clínicas, Clínicas de Estética, Dentistas, Transplante Capilar
5. **Escritórios:** Advogados, Arquitetos, Imobiliárias, Contabilidade
6. **Serviços locais:** Restaurantes, Hotéis, Assistência Técnica, Franquias, Desentupidoras, Vidraçarias, Energia Solar
7. **Indústria e B2B:** Indústrias, Transportadoras, Demolidoras, Facilities
8. "Não achou seu segmento?" com CTA
9. CTA final

Cada grupo tem 2 a 3 frases próprias explicando o que esse grupo tem em comum (ex.: Saúde = conselhos de classe, busca por
sintoma e procedimento, confiança). Cada card tem 1 frase única. Isso evita uma página só de links.

## Comportamento no lançamento

Os cards aparecem conforme as páginas existem: o hub lê a lista de segmentos de um arquivo de dados
(`src/_data/segmentos.json`). Segmento sem página publicada não aparece. Esse mesmo arquivo alimenta o menu e o rodapé.

## Links internos

- **Linka para:** todos os segmentos e páginas por modelo de negócio
- **Recebe de:** menu (Segmentos), rodapé, Home, breadcrumb de todos os segmentos

## Schema

CollectionPage + ItemList com os segmentos, BreadcrumbList.
