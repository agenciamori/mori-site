# Content Brief: SEO para advogados (v3, otimização com GSC + SERP + raio-x próprio do mapa)

- **Página:** https://agenciamori.com.br/seo-para-advogados/ (URL mantida)
- **Modo:** melhoria. A tabela da OAB "artigo por artigo" da v2 é o ponto forte da página e fica. Entram um dado próprio
  (raio-x do mapa), a camada comercial que a página perdeu e os grupos de consulta do GSC.
- **Pesquisa:** google.com.br, 18/11/2026. GSC de 17/08 a 17/11/2026.
- **Briefings anteriores:** `briefings/ajuste-seo-para-advogados.md` (página comercial antiga) e `briefings/seo-para-advogados-v2.md` (guia)

---

## Situação atual (Search Console)

**O que aconteceu.** A página comercial antiga (~830 palavras) estava na **posição 4** para "agência especialista em seo para
advogados". Em 10/10 ela virou guia informativo. Desde então:

| Consulta | Antes (17/08–08/10) | Depois (20/10–17/11) |
|---|---|---|
| seo para advogados | pos 36,0 · 79 impr | **pos 64,2** · 52 impr |

**O Google ainda usa a URL antiga** (`/seo-para-advogados`, sem barra, que já redireciona com 301) para as buscas
**comerciais**, e a nova para as **informativas**:

| Consulta (últimos 28 dias) | URL antiga (sem barra) | URL nova (com barra) |
|---|---|---|
| especialista em seo para advogados | **pos 5,9** (1 clique) | pos 40,7 |
| agência especialista em seo para advogados | **pos 10,2** | n/d |
| seo para escritórios de advocacia | **pos 3,0** | pos 64,5 |
| especialista em seo jurídico | **pos 7,3** | pos 41,5 |
| agência de seo jurídico | **pos 19,5** | n/d |
| seo para advogados / seo advogados | n/d | pos 62–64 |
| seo local para advogados | n/d | pos 39,8 |
| estratégia de seo para advogados | n/d | pos 99 |

**Diagnóstico**
1. **A camada comercial sumiu.** Quando o Google terminar de consolidar a URL antiga na nova, as posições 3 a 10 em buscas
   comerciais podem se perder, porque a página nova quase não fala de agência ou especialista em SEO jurídico. "SEO jurídico"
   aparece zero vezes.
2. **Concorrentes do nicho.** O guia compete com sites jurídicos (ADVBOX, Migalhas, Projuris) e agências só de advocacia
   (Rockham, SEO Jurídico). Sem case de advogado, a página precisa de **outra prova própria**.
3. **Tempo.** A reescrita tem 5 semanas, então parte da queda é instabilidade.

---

## Search Intent

**"seo para advogados" é mista: 5 guias e 3 páginas de agência.**

| # | Resultado | Tipo |
|---|---|---|
| 1 | advbox.com.br/blog/seo-na-advocacia/ | Guia (software jurídico) |
| 2 | migalhas.com.br (Migalhas de Peso) | Artigo (portal jurídico) |
| 3 | rockham.com.br/seo-para-advogados | **Agência de marketing jurídico** (guia longo) |
| 4 | seojuridico.com.br | **Agência/curso** |
| 5 | projuris.com.br/blog/o-que-e-seo/ | Guia (software jurídico) |
| 6 | loydigital.com.br/solucoes/seo-para-advogados | **Agência** |
| 7 | chatjuridico.com.br/blog | Guia |
| 8 | LinkedIn ("guia completo") | Artigo |

**O AI Overview** define o termo (citando Migalhas), menciona a ética e os "pilares do SEO jurídico": páginas por área de
atuação, conteúdo educativo sem promessa, SEO técnico (menos de 3 s, HTTPS, schema), SEO local etc. Ele cita Migalhas,
publinet1, Rockham e ADVBOX. Também devolve perguntas de qualificação: **"Qual a principal área de atuação do seu
escritório?"** e "Já tem site ou começa do zero?".

**Também perguntam:** "O SEO é gratuito?", "Quanto custa fazer SEO?", "Qual o melhor marketing para advogado?", "Qual a IA mais
indicada para advogados?".

**As buscas comerciais** ("agência de seo para advogados", "seo jurídico") são 100% páginas de agência: Rockham, Phase4 ("qual a
melhor agência..."), Netlinks, Grupo KOP, Loy, RTAG, Focus, GAMSEO. Perguntas: "Quanto custa contratar uma agência de SEO?",
"Qual a melhor agência de SEO?".

**Decisão:** **página híbrida**, como a Rockham, que ranqueia nas duas SERPs com uma única página. O guia continua (é o formato
majoritário e o AI Overview cita guias), e a página ganha uma **seção comercial forte** no último terço e "SEO jurídico" e
"escritórios de advocacia" no title, no H1 e nos H2.

**Público:** advogado autônomo ou sócio de escritório pequeno ou médio, leigo em SEO, com medo do Código de Ética; parte já
procura quem contratar.

## Competitor Analysis

Notas de 1 a 10 em Profundidade, Formatação, SEO e UX (total sobre 40).

| # | URL | Principais H2 | Palavras | Nota | Principal falha |
|---|-----|---------------|----------|------|-----------------|
| 1 | advbox.com.br/blog/seo-na-advocacia/ | o que é SEO / SEO jurídico; diretrizes da OAB; importância; como o Google funciona; **15 fatores de ranqueamento**; como aplicar; o que não fazer | ~3.000 | 26/40 | Teoria genérica de ranqueamento, zero perfil no Google, nada de IAs. OAB sem artigos |
| 2 | rockham.com.br/seo-para-advogados | importância na captação; diretrizes da OAB; 5 etapas (palavras-chave, on-page, conteúdo, **SEO local com 11 H3**, link building) | longo | 29/40 | Estatísticas de terceiros sem fonte primária ("96% buscam online"); sem case com números; OAB genérica |
| 3 | projuris.com.br/blog/o-que-e-seo/ (atualizado 11/08/2026) | o que é; SEO x anúncio; sinais de confiança; **cuidados legais e práticas de risco**; passo a passo; métricas; erros; FAQ; autor especialista | ~2.600 | 28/40 | Zero perfil no Google e mapa; sem dados próprios |
| 4 | migalhas.com.br | o que é; técnicas; resultados | ~1.000 | 17/40 | Raso, sem norma, sem local. Ranqueia pela autoridade do portal |
| 5 | seojuridico.com.br / loydigital / chatjuridico | páginas de agência e curso | n/d | n/d | Comerciais, não abertas em detalhe |
| — | **Mori hoje** | o que é; jornada; **OAB artigo por artigo**; passo a passo; perfil no Google (escritório x advogado, categorias, avaliações); site; por área; conteúdo ético (evite x prefira); IAs; erros; Ads; prazo; agência | ~3.100 | 28/40 | Sem prova própria, sem camada comercial, sem "SEO jurídico" |

**Média dos analisados:** ~2.200 palavras (guias completos: 2.600–3.000+).

## Content Gaps and Opportunities

**Lacunas de tópico** (nenhum concorrente cobre)
- **Dado próprio sobre o mapa do Google para advogados.** Nenhum concorrente mostra como estão de verdade os perfis que
  aparecem no topo. **Coletamos isso em 18/11/2026** (ver Raio-x abaixo). É o principal ganho de informação, no lugar do case
  que não existe.
- **A tensão entre o que funciona no mapa e o que é permitido.** 62% dos perfis do topo põem área ou cidade no nome, contra as
  diretrizes do Google, e alguns usam "especialista", que a OAB restringe. Ninguém explica o risco nem a alternativa.
- **OAB artigo por artigo aplicada ao SEO:** só a Mori tem. **Manter e destacar.**

**Lacunas de profundidade**
- **SEO local:** a Rockham tem 11 H3 de perfil e local. A Mori tem 3 H3 bons, mas sem NAP, diretórios jurídicos nem schema.
  → Reforçar com uma checklist.
- **Pesquisa de palavras-chave por área:** ADVBOX e Rockham cobrem, a Mori não. → H3 curto no passo 2.
- **Quanto custa / SEO é gratuito?** (PAA nas duas SERPs) → Novo bloco e FAQ.

**Lacunas de qualidade**
- Estatísticas sem fonte nos concorrentes ("96%", "75%"). → A Mori usa **o próprio dado, com método e data**.
- Camada comercial da Mori: "agência" aparece só no último H2. → Seção "Agência de SEO para advogados".

**Prioridade das lacunas** (impacto × vantagem ÷ esforço)
1. Raio-x do mapa (alto × único ÷ baixo, porque os dados já foram coletados)
2. Seção comercial "Agência de SEO jurídico / para advogados" (alto, protege posições 3–10 ÷ baixo)
3. "SEO jurídico" e "escritórios de advocacia" no title, H1 e H2 (médio ÷ baixo)
4. SEO local reforçado (médio ÷ baixo)
5. Quanto custa / SEO é gratuito (médio ÷ baixo)

---

## Raio-x do mapa: 40 perfis de advogados em São Paulo (dado próprio)

**Método:** busca local do Google (aba "Lugares"), 18/11/2026, a partir de São Paulo. Os 10 primeiros resultados **não
patrocinados** de quatro buscas: "advogado trabalhista são paulo", "advogado de família são paulo", "advogado previdenciário são
paulo" e "advogado criminalista são paulo". São 40 posições, com alguns escritórios repetidos entre buscas. A contagem de
"nome com termo de busca" considera só acréscimos claros ao nome (área, cidade, bairro, "24h", "especialista") separados por
"-", "/" ou "|". Nomes que podem ser a razão social (ex.: "X Advocacia Trabalhista") **não** foram contados.

| Busca | Nome com área, cidade ou "24h" | Categoria genérica ("Advogado" / "Serviços jurídicos") | "Aberto 24 horas" | Mediana de avaliações | Menor nº de avaliações no top 10 |
|---|---|---|---|---|---|
| advogado trabalhista SP | 5 de 10 | 5 de 9 | 6 de 10 | 106 | 6 |
| advogado de família SP | 7 de 10 | 1 de 10 | 6 de 10 | 88 | 15 |
| advogado previdenciário SP | 4 de 10 | 4 de 10 | 3 de 10 | 83 | 14 |
| advogado criminalista SP | 9 de 10 | 1 de 10 | 10 de 10 | 229 | 45 |
| **Total** | **25 de 40 (62%)** | **11 de 39 (28%)** | **25 de 40 (62%)** | ~100 | 6 |

**Achados para a página** (texto em linguagem do leitor):
1. **6 em cada 10 perfis do topo põem área ou cidade no nome**, como "Advogado Criminalista São Paulo SP - Dr. Fulano". As
   diretrizes do Google proíbem isso, e o perfil pode ser suspenso. Funciona até alguém denunciar, e na advocacia o concorrente
   é quem mais denuncia.
2. **"Especialista" aparece no nome de perfis do topo.** Para o Google é só um nome, mas o Provimento 205/2021 (art. 3º, III)
   veda anunciar especialidade sem título.
3. **Quase 3 em cada 10 usam categoria genérica** ("Serviços jurídicos" ou "Advogado") e mesmo assim aparecem. Quem escolhe a
   categoria certa da área (advogado trabalhista, de família, previdenciário, criminal) sai na frente sem risco nenhum.
4. **Avaliação importa, mas não decide sozinha:** há perfil no top 10 com **6 avaliações**. Proximidade, categoria e
   relevância também pesam.
5. **No criminal, 10 de 10 aparecem como "Aberto 24 horas".** Em área de urgência, horário real e contato fácil são pré-requisito.

*(Os nomes dos escritórios **não** vão para a página. Só os números agregados e exemplos genéricos.)*

---

## Winning Outline

**H1:** SEO para advogados e escritórios de advocacia: o guia prático para ser encontrado no Google e nas IAs, dentro das
regras da OAB
**URL Slug:** /seo-para-advogados/ (mantida)
**Target Word Count:** ~3.700 palavras (concorrentes de 2.600 a 3.000+; Mori hoje ~3.100). O ganho vem do raio-x e da camada comercial.

Legenda: **[MANTER]** · **[REFORÇAR]** · **[NOVO]** · **FS** alvo de featured snippet ou citação em IA.

### Hero [REFORÇAR] ~90
- H1 acima. A lede cita o raio-x: "...e o que encontramos ao analisar 40 perfis de advogados que aparecem no topo do mapa em
  São Paulo".
- Byline e data atualizada.
- **Faixa de números do raio-x:** **62%** põem área ou cidade no nome do perfil · **28%** usam categoria genérica · **6** avaliações
  bastaram para um perfil estar no top 10.
- CTAs: diagnóstico (WhatsApp) e "Ver o raio-x do mapa" (#raio-x).

### 1. O que é SEO para advogados (SEO jurídico) [REFORÇAR] ~220 · FS
- H2 **"O que é SEO para advogados (SEO jurídico)"**.
- Definição de 40 a 60 palavras: "SEO para advogados, também chamado de SEO jurídico, é..."
- Manter o parágrafo de "publicidade passiva" (art. 2º, VII), que é único na SERP.

### 2. Como o cliente procura um advogado hoje [MANTER] ~200

### 3. SEO e o Provimento 205/2021: o que a OAB diz sobre cada ação [MANTER] ~400
- É o diferencial da página. Sem cortes.

### 4. Como fazer SEO para escritórios de advocacia: passo a passo [REFORÇAR] ~650 · FS (lista)
- H2 com "escritórios de advocacia" e "estratégia" no corpo da introdução ("a estratégia de SEO que seguimos...").
- Manter os 7 passos.
- **Passo 2:** H3 curto **"Como descobrir as buscas da sua área"**: autocomplete, "As pessoas também perguntam" e Search Console,
  com um exemplo trabalhista ("fui demitido...", "rescisão indireta", "advogado trabalhista + bairro").

### 5. Raio-x do mapa: o que têm os escritórios que aparecem no topo em SP [NOVO] ~450
- H2 com o dado. É o principal ganho de informação da página.
- Parágrafo de método (2 frases: data, 4 buscas, 40 posições, só orgânicos).
- Tabela resumida (busca × nome com termo × categoria genérica × 24h × mediana de avaliações).
- **5 achados** em lista, cada um com 1 frase "o que fazer no seu escritório".
- Frase de fechamento: "o atalho do nome com palavra-chave existe, mas na advocacia ele soma dois riscos, o do Google e o da
  OAB. Dá para competir sem ele".

### 6. SEO local para advogados: o perfil do escritório no Google [REFORÇAR, renomear] ~450
- O H2 atual ("Perfil no Google para advogados...") vira **"SEO local para advogados: o perfil do escritório no Google"**.
- Manter os 3 H3 (escritório ou advogado, categorias e serviços, avaliações com discrição).
- **H3 novo: "Nome do perfil: o atalho que dá problema"**, ligando ao achado 1 do raio-x.
- **Checklist novo** (6 itens): nome real; categoria da área; áreas como serviços; NAP igual em site, OAB, JusBrasil e
  diretórios; fotos reais e sóbrias; horário real.

### 7. O que o site de um escritório precisa ter [MANTER] ~150

### 8. SEO por área do Direito: local ou nacional? [MANTER + 1 frase] ~300
- Responde à pergunta do AI Overview ("qual a principal área de atuação?").
- Incluir na linha do criminal o dado do raio-x (10 de 10 com 24h).

### 9. Conteúdo jurídico que posiciona sem ferir a ética [MANTER] ~250

### 10. Como o escritório aparece no ChatGPT e nas IAs do Google [MANTER/REFORÇAR] ~220 · FS
- Garantir uma resposta direta de 40 a 60 palavras no topo da seção. Link → /servicos/geo/.

### 11. Os erros que mais vemos em escritórios [REFORÇAR] ~150
- Incluir "nome do perfil com área e cidade" e "categoria genérica" (dados do raio-x).

### 12. SEO ou Google Ads para advogados? [MANTER] ~120

### 13. Quanto tempo leva e quanto custa? [REFORÇAR, juntar prazo e custo] ~260 · FS
- Manter o "sem prazo fechado".
- **"SEO é gratuito?"** (PAA): fazer o próprio perfil e escrever conteúdo não custa dinheiro, custa tempo. O que se paga é
  estratégia, site e execução.
- **Fatores de custo:** número de áreas, endereços, local ou nacional, concorrência da área na cidade, situação do site. Sem valores.

### 14. Agência de SEO para advogados: como escolher e como a Mori trabalha [NOVO, substitui "Fazer sozinho ou contratar"] ~420
- Secundárias **"agência de SEO para advogados"**, **"especialista em SEO jurídico"** e **"agência de SEO jurídico"** no H2 e nos H3.
  Protege as posições 3 a 10 da URL antiga.
- Manter o parágrafo "dá para começar sozinho".
- H3 **"Como escolher uma agência de SEO jurídico"**: lista de 6 itens (conhece o Provimento 205/2021? mostra dados reais?
  promete posição? usa nome com palavra-chave ou avaliações compradas? mede contatos? tem fidelidade?). Responde a "qual a
  melhor agência de SEO?" sem autoelogio, o que também é exigência ética para o cliente.
- H3 **"Como a Mori trabalha com escritórios"**: diagnóstico, plano por área e região, execução mensal (perfil, site, conteúdo
  revisado pelo advogado, avaliações com discrição, IAs), dashboard, sem fidelidade. "Atendemos escritórios de várias áreas em
  São Paulo e em todo o Brasil". Link do consultor → /sobre/fundador/.
- **Sem case inventado.** Se o Gabriel liberar algum aprendizado anônimo de escritórios atendidos, entra aqui em 2 a 3 frases.

### 15. FAQ [REFORÇAR] 8 perguntas ~500
- Manter: o que é; advogado pode fazer SEO; pode ter perfil no Maps; pode pedir avaliação; Google Ads; palavra especialista.
- **Trocar** "Quanto tempo leva" (agora coberto na seção 13) por **"Posso colocar a área e a cidade no nome do perfil do Google?"**
  (resposta: não, diretrizes do Google, risco de suspensão, alternativa: categoria e serviços).
- **Atualizar** "Quanto custa" para remeter à seção 13 em 1 frase.

### 16. Fontes e referências [NOVO] ~60
- Provimento 205/2021 (OAB) · Diretrizes para representar a empresa no Perfil da Empresa (support.google.com/business) ·
  Raio-x Mori, 18/11/2026 (método descrito na seção 5).

---

## Recommended Meta Tags

**Title** (56 caracteres)
`SEO para Advogados: guia, regras da OAB e agência | Mori`

**Meta Description** (144 caracteres)
`SEO para advogados e escritórios: passo a passo dentro do Provimento 205/2021 e um raio-x de 40 perfis no mapa do Google em SP. Veja como fazer.`

**Schema:** Article (atualizar headline, description, dateModified, `datePublished` 2026-10-10, about + "SEO jurídico") e
Service, que já existe.

---

## Unique Angle and Information Gain

É a única página do top 10 com **dado próprio sobre o mapa do Google na advocacia**. Analisamos 40 posições do topo em quatro
áreas em São Paulo e mostramos o que está por trás delas: 62% usam área ou cidade no nome, quase 30% usam categoria
genérica, um perfil está no top 10 com 6 avaliações e todos os criminalistas aparecem como 24 horas.

A página junta esse dado com a única leitura do **Provimento 205/2021 artigo por artigo aplicada ao SEO**, o que mostra ao
advogado **onde o atalho do mapa vira risco** com o Google e com a OAB e como competir sem ele. Também é a única que responde,
na mesma página, "como fazer" e "como escolher uma agência de SEO jurídico" sem autoelogio.

## E-E-A-T Requirements

- Byline Gabriel Arruda e data visível igual ao `dateModified`.
- **Método do raio-x explícito** (data, buscas, critério de contagem, limitação: retrato de um dia e de uma localização).
- Nenhum nome de escritório publicado no raio-x.
- Links para o texto oficial do Provimento 205/2021 e para as diretrizes do Google.
- Sem case inventado e sem "atendemos X escritórios" sem número confirmado.

## Internal Linking Opportunities

| Âncora | Destino | Onde |
|---|---|---|
| otimização do Google Meu Negócio | /servicos/google-meu-negocio/ | Seção 6 |
| gestão de avaliações | /servicos/gestao-de-avaliacoes/ | Seção 6 [MANTER] |
| GEO para escritórios | /servicos/geo/ | Seção 10 |
| Gabriel Arruda, consultor de SEO | /sobre/fundador/ | Seção 14 |
| SEO local | /servicos/seo-local/ | Seção 6 |
| SEO para contabilidade (outro profissional liberal) | /seo-para-contabilidade/ | Seção 8, opcional |

**Links para cá:** de /seo-para-pequenas-empresas/ (já existe), de /sobre/fundador/ (já existe) e, novo, de /servicos/seo-local/ e
/servicos/google-meu-negocio/ com a âncora "SEO para advogados".

## Republicação

- `updated` e `dateModified` na data da publicação; byline "Atualizado em".
- Depois do deploy: **inspecionar `/seo-para-advogados/` no GSC e pedir indexação**. Acompanhar em 4 e 8 semanas, separando as
  consultas comerciais (especialista, agência, SEO jurídico, escritórios) das informativas.

---

## Pendências antes de escrever

1. **Raio-x:** posso publicar os números agregados (sem nomes de escritórios), com o método e a data?
2. Existe algum **aprendizado anônimo** de escritórios que a Mori já atendeu (sem números, se preferir) para a seção 14?
