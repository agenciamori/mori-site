# Rodada de otimização com base no Search Console (nov/2026)

**Fonte:** Google Search Console, propriedade `https://agenciamori.com.br/`, pesquisa Web.
**Janelas:** últimos 3 meses (17/08 a 17/11/2026) e comparação **antes x depois da migração**
(17/08 a 08/10, site antigo × 20/10 a 17/11, site novo em Eleventy).
**Coletado em:** 18/11/2026.

> **Limites dos dados.** O site novo está no ar desde 09/10 e as reescritas de médicos e advogados
> são de 09 e 10/10, ou seja, têm cerca de 5 semanas de dados. Os volumes de clique são baixos
> (86 cliques no site todo em 3 meses), então posição e impressões indicam mais do que CTR.
> O GSC oculta as consultas anônimas, por isso a soma das consultas fica abaixo do total da página.
> Nenhuma mudança garante ganho de posição.

---

## Resumo

| Página | Impr. 3m | Cliques 3m | Pos. média | Últimos 28 dias | Leitura |
|---|---|---|---|---|---|
| /servicos/google-meu-negocio/ | 422* | 12 | 31–50 | 188 impr, 12 cliques, pos 25,7 | Melhor CTR do site (6,4%). Fraca em "consultoria/consultor" e "otimização" |
| /seo-para-pequenas-empresas/ | 645 | 0 | 36 | 484 impr, pos 31,8 | Muita demanda, posição 26–50, zero cliques |
| /seo-para-dentistas/ | 263* | 5 | 7,6 | 166 impr, pos 7,2 | **Caso de sucesso**: termo principal saiu da posição 21 para 2,9 |
| /seo-para-advogados/ | 353* | 5 | 27–61 | barra: 120 impr, pos 60,9 | **Piorou**: termo principal 36 → 64 depois da reescrita |
| /seo-para-franquias/ | 53 | 3 | 10,2 | 20 impr, pos 9,6 | Pouco volume, já na 1ª página |
| /seo-para-medicos/ | 1.133* | 1 | 50–55 | 434 impr, pos 55,5 | Maior volume, posição ruim, termo principal 49 → 55 |
| /seo-para-clinicas-de-estetica/ | 158 | 0 | 34 | 112 impr, pos 31,4 | Busca comercial ("consultoria", "agência") que a página não usa |

\* soma das versões com e sem barra final (ver item técnico abaixo).

### O que os dados mostram

1. **O modelo de dentistas funciona e advogados/médicos ainda não chegaram lá.** As três viraram guia
   informativo na mesma semana. A SERP de "seo para advogados" e "seo para médicos" mostra só guias,
   então o formato está certo. A diferença é a **prova própria**: dentistas tem um case real do mesmo
   setor (PJ Odontologia). Médicos usa o mesmo case odontológico com o título "clínica de saúde", e
   advogados não tem nenhum case. Pode ser também o tempo (5 semanas), mas este é o ponto que dá para
   controlar.
2. **As buscas comerciais ("consultoria", "consultor", "agência", "especialista") aparecem em quase
   todas as páginas** e o texto quase não usa essas palavras. GMN e clínica de estética usam
   "consultoria" zero vezes. Pequenas empresas usa "agência" zero vezes.
3. **Dentistas não precisa de posição, precisa de CTR.** Na posição 2,9, 47 impressões geraram 0
   cliques nos últimos 28 dias. Title e description são o maior ganho aqui.
4. **Médicos está recebendo as buscas de "clínica".** "seo para clínicas", "seo para clínica" e
   "seo local para clínicas" somam cerca de 200 impressões, posição 55–64, todas caindo em
   /seo-para-medicos/, enquanto /seo-para-clinicas/ tem só 39 impressões.

### Item técnico: URLs com e sem barra

O GSC mostra impressões divididas entre `/seo-para-medicos` e `/seo-para-medicos/` (o mesmo acontece
em advogados, GMN, dentistas e SEO local). **Verifiquei e está resolvido:** todas as versões sem barra
já respondem com 301 para a versão com barra, o canonical usa barra e nenhum link interno aponta para a
versão sem barra. As impressões sem barra são do site antigo.

**Exceção que merece atenção:** nos últimos 28 dias o Google ainda mostra a URL antiga
`/seo-para-advogados` (sem barra) nas posições 3–11 para buscas comerciais ("especialista em seo para
advogados", "agência de seo jurídico", "seo para escritórios de advocacia"). Ele ainda guarda a versão
comercial antiga. Quando consolidar na URL nova, essas posições podem sumir se a página nova não tiver
sinais comerciais. **Ação:** inspecionar `/seo-para-advogados/` no GSC e pedir indexação depois das
mudanças abaixo.

---

## 1. /servicos/google-meu-negocio/

**Consultas (3 meses, URLs somadas)**

| Consulta | Impr. | Cliques | Pos. |
|---|---|---|---|
| especialista em google meu negócio | 64 | 4 | 13,1 |
| otimização google meu negócio (+ variações) | 49 | 0 | 40–45 |
| consultoria google meu negócio (+ "de") | 44 | 0 | 75–79 |
| consultor google meu negócio / negocio | 27 | 0 | 56–71 |
| empresa de otimização google meu negócio | 17 | 0 | 44,8 |
| especialista google meu negócio / especialistas | 15 | 0 | 21–36 |
| agência para gerenciar google meu negócio | 12 | 0 | 52,8 |
| especialista em google maps | 6 | 0 | 9,2 |
| gerenciamento do GMN no tatuapé / gestão em guarulhos | 8 | 0 | 39–58 |

**Diagnóstico:** "especialista" já funciona (posição 13, 4 cliques). "Consultoria/consultor" (cerca de
70 impressões) e "otimização" (cerca de 65) têm demanda, e a página não fala em consultoria nenhuma vez.

**Ações**
- **Title:** `Especialista em Google Meu Negócio: consultoria e otimização | Mori`
  (mantém "especialista" na frente, porque é o que gera clique).
- **Description:** `Especialista e consultoria em Google Meu Negócio: otimização completa da ficha e gestão mensal para sua empresa aparecer no Google Maps. Diagnóstico gratuito.`
- **Novo H2: "Consultoria de Google Meu Negócio ou gestão mensal?"** Explicar as duas formas: consultoria
  pontual (auditoria e plano, a equipe do cliente executa) e gestão contínua. Isso também atende
  "consultor" e "agência para gerenciar".
- **Novo H2: "Otimização do Google Meu Negócio: checklist completo"**, uma lista numerada de 10 a 12
  itens (categoria, serviços, área, horários, fotos, posts, perguntas, avaliações, links, atributos).
  Atende "otimização" e "empresa de otimização" e gera um trecho fácil de citar.
- Pôr **"Google Maps"** no H1 ou no primeiro parágrafo ("especialista em google maps" está na posição 9).
- Se a Mori atende Tatuapé, Zona Leste e Guarulhos, incluir uma linha "Onde atendemos" com essas regiões.
- **GEO/E-E-A-T:** o número "93% mais contatos no Top 3" aparece no hero, no stat-box e no FAQ schema
  sem fonte. Citar a fonte ou trocar por um número próprio (case PJ: 9ª → Top 3 no mapa). Incluir
  byline e data de atualização, como nos guias.
- 2 perguntas novas no FAQ: "Quanto custa uma consultoria de Google Meu Negócio?" e "Qual a diferença
  entre consultoria e gestão do Google Meu Negócio?".

## 2. /seo-para-pequenas-empresas/

**Consultas (3 meses)**

| Consulta | Impr. | Pos. | Antes → depois da migração |
|---|---|---|---|
| seo para pequenas empresas | 404 | 30,4 | nova, pos 26,2 em 28 dias |
| consultoria seo para pequenas empresas | 180 | 51,6 | nova, pos 47,8 |
| agência (de) seo para pequenas empresas (sp) | ~70 | 25–73 | melhorando (54 → 26 na variação "sp") |
| seo para pequenas empresas sp | 20 | 31,0 | 50,6 → 29,4 |
| variações em espanhol | 24 | 12–22 | ignorar |

**Diagnóstico:** é a página com mais potencial imediato. São cerca de 650 impressões com zero cliques,
na posição 26–50. A SERP mostra só guias ("o que é", "por onde começar", "guia prático"). A página tem
1.577 palavras, contra cerca de 3.100 a 3.400 nos guias de dentistas, médicos e advogados. Ela não tem
definição no topo, byline, data, "quanto custa" nem case. Não usa "agência" nenhuma vez e não cita
São Paulo.

**Ações** (levar a página ao padrão do guia de dentistas)
- **Title:** `SEO para Pequenas Empresas: guia prático e consultoria | Mori`
- **Bloco de definição logo abaixo do H1**, com 40 a 60 palavras: "SEO para pequenas empresas é...".
- **Byline e data** ("Por Gabriel Arruda · Atualizado em ...").
- **Transformar "As 4 prioridades" num passo a passo numerado** ("Como fazer SEO para pequena empresa:
  passo a passo").
- **Novo H2: "Quanto custa SEO para pequenas empresas"**, com faixas ou com os fatores que definem o
  preço. Também entra no FAQ.
- **Na seção "Consultoria ou projeto completo"**, incluir "consultoria de SEO para pequenas empresas" e
  "agência de SEO em São Paulo" de forma natural.
- **Um mini-case** de pequena empresa (FHENG, 2live ou outro), com números.
- Meta: chegar a cerca de 2.500–3.000 palavras sem enchimento.

## 3. /seo-para-dentistas/ (ganhou posição, falta CTR)

| Consulta | Impr. | Cliques | Pos. | Antes → depois |
|---|---|---|---|---|
| seo para dentistas | 88 | 3 | 4,6 | **21 → 2,9** |
| seo para dentista | 51 | 0 | 3,3 | **15,9 → 2,9** |
| seo odontologia | 16 | 0 | 8,8 | |
| seo para consultório | 9 | 0 | 32,6 | |
| seo dentista | 6 | 0 | 6,2 | |
| seo para odontopediatra | 4 | 0 | 10,8 | |
| seo para especialista em harmonização orofacial | 4 | 0 | 64,2 | |
| agencia seo para dentistas | 2 | 0 | 11,0 | |

**Diagnóstico:** posição 3 com CTR de 1–3%. Provavelmente há AI Overview e anúncios acima do resultado,
e o title atual ("guia prático com case real") é genérico perto dos concorrentes.

**Ações**
- **Title com o número do case:** `SEO para Dentistas: como uma clínica chegou ao Top 1 do Google | Mori`
- **Description com os números:** `Passo a passo de SEO para dentistas com um case real: +150 leads e do 9º lugar ao Top 3 no mapa do Google. Perfil, site, avaliações e IAs.`
- Pôr **"SEO para odontologia"** no primeiro parágrafo ou num H2 ("SEO para odontologia e clínicas
  odontológicas").
- Em "SEO por procedimento", incluir **odontopediatria** e **harmonização orofacial** como linhas próprias.
- Na seção "Fazer sozinho ou contratar uma agência", usar o termo **"agência de SEO para dentistas"** e
  ligar ao CTA (posição 11, perto da 1ª página).
- Acompanhar o CTR por 4 semanas depois da troca do title.

## 4. /seo-para-advogados/ (prioridade alta: perdeu posição)

| Consulta | Impr. 3m | Pos. URL nova (28 dias) | Pos. URL antiga (28 dias) |
|---|---|---|---|
| seo para advogados | 132 | **64,2** (era 36) | n/d |
| seo advogados | 31 | 62,0 | n/d |
| estratégia de seo para advogados | 33 | 99,0 | n/d |
| especialista em seo para advogados | 14 | 40,7 | **5,9** |
| agência especialista em seo para advogados | 6 | n/d | **10,2** |
| seo para escritórios de advocacia | 8 | 64,5 | **3,0** |
| agência de seo jurídico / especialista em seo jurídico / seo jurídico | 19 | 41–88 | **7–20** |
| seo local para advogados | 9 | 39,8 | n/d |
| legal seo / consultor seo para abogados | 14 | ignorar | |

**Diagnóstico:** a página antiga (comercial) ia bem nas buscas "especialista/agência/SEO jurídico", e o
Google ainda a usa. A nova (guia) está na posição 60+ até para o termo principal. Ela não usa "SEO
jurídico" nenhuma vez, usa "escritório(s) de advocacia" só 2 vezes e não tem nenhum case ou prova da Mori.

**Ações**
- **Title:** `SEO para Advogados e Escritórios de Advocacia: guia e regras da OAB | Mori`
- **Definição:** "SEO para advogados, também chamado de **SEO jurídico**, é..."
- **Novo H2 comercial no fim do guia: "Agência especialista em SEO para advogados: como a Mori trabalha"**,
  com escopo, etapas e prazo. Recupera a intenção que a URL antiga atendia sem descaracterizar o guia.
- Renomear "Perfil no Google para advogados..." para **"SEO local para advogados: o perfil do escritório no Google"**.
- Trocar "estratégia" em um H2: "Como fazer SEO para advogados: estratégia passo a passo".
- **Prova:** incluir um case ou dado de escritório atendido pela Mori, com autorização. A regra da OAB
  limita a publicidade do advogado, não a da agência. Se não houver case jurídico, usar dados de
  experiência ("o que vimos em X escritórios") em vez de nada.
- Depois de publicar: **pedir indexação** de `/seo-para-advogados/` no GSC.

## 5. /seo-para-franquias/

| Consulta | Impr. | Pos. |
|---|---|---|
| seo para franquias | 25 | 16,0 (9,8 em 28 dias) |

**Diagnóstico:** pouco volume e já está na 1ª página, com CTR de 5,7%. É a prioridade mais baixa.

**Ações (leves)**
- Incluir "SEO local para franquias" e "SEO para redes com várias unidades" num H2 ou no primeiro parágrafo.
- Byline, data e uma frase de definição no topo.
- Links internos a partir de /servicos/seo-local/ e da home com a âncora "SEO para franquias".

## 6. /seo-para-medicos/ (maior volume)

| Consulta | Impr. | Pos. | Antes → depois |
|---|---|---|---|
| seo para médicos / medicos / médico / medico | 427 | 49–62 | 49 → 55 (piorou) |
| seo para clínicas / clínica / clinicas / clínica médica / local para clínicas | ~210 | 46–100 | estável |
| seo para consultório | 68 | 48,9 | 50 → 36 (melhorou) |
| seo para saúde | 64 | 58,9 | 50 → 69 |
| consultor / especialista em seo para médicos | 91 | 40–64 | especialista: 58 → 32 |
| seo médico / medico | 37 | 30–39 | |
| seo local para médicos | 17 | 45,5 | |
| seo para hospitais | 16 | 40,7 | 67 → 29 |
| seo para especialista em [medicina do adolescente, preventiva, nuclear, biomedicina, hematologista/infectologista pediátrico, administração em saúde] | ~57 | 28–89 | |

**Diagnóstico**
- O case da página é odontológico (PJ Odontologia) com o H2 "uma clínica de saúde que atendemos". Para
  quem busca "SEO para médicos", é prova de outro setor, um sinal fraco de experiência (E-E-A-T) num
  tema de saúde.
- **Canibalização:** cerca de 210 impressões de "seo para clínica(s)" caem aqui em vez de
  /seo-para-clinicas/.
- "Consultor/especialista em SEO para médicos" (91 impressões) não tem resposta: "consultor" aparece
  zero vezes.
- A cauda longa por especialidade já aparece e pode crescer.

**Ações**
- **Title:** `SEO para Médicos e Consultórios: guia com as regras do CFM | Mori`
- **Case médico real**, se houver. Se não houver, renomear o H2 com honestidade ("O que um case
  odontológico ensina para o consultório médico") e reforçar a prova com experiência própria.
- **Novo H2: "Consultor de SEO para médicos: o que esperar"**, com link para /sobre/fundador/
  (página do consultor).
- **Separar médico de clínica:** trazer o link "SEO para clínicas" para o primeiro terço da página
  ("Se você tem uma clínica com várias especialidades, veja...") e, na outra rodada, fortalecer
  /seo-para-clinicas/ com os termos "seo para clínicas", "seo local para clínicas" e "seo para clínica
  médica".
- **Ampliar a tabela "SEO por especialidade"** com as especialidades que já aparecem no GSC (medicina do
  adolescente, preventiva, nuclear, hematologia e infectologia pediátricas, biomedicina) e uma linha
  "hospitais e saúde".
- Manter "seo para consultório", que está melhorando.

## 7. /seo-para-clinicas-de-estetica/

| Consulta | Impr. | Pos. |
|---|---|---|
| consultoria de seo para clínica estética | 60 | 38,4 (35,5 em 28 dias) |
| agência de seo para clínica estética | 33 | 33,3 |
| seo para clínicas de estética | 18 | 29,9 |
| seo para site de clínica estética | 18 | 34,4 |
| seo para especialista em harmonização orofacial | 4 | 41,2 |

**Diagnóstico:** toda a busca é comercial, e a página já é comercial, então a intenção bate. Mas a
consulta nº 1 é "consultoria", e a página nunca usa a palavra. Ela também é curta (1.579 palavras), sem
byline, data nem case.

**Ações**
- **Title:** `Agência e Consultoria de SEO para Clínica de Estética | Mori`
- **Novo H2: "Consultoria de SEO para clínica de estética: como funciona"**, com entregáveis e etapas.
- Renomear "Uma página para cada procedimento..." para **"SEO para o site da clínica de estética: uma
  página para cada procedimento"**.
- Incluir **harmonização orofacial** na lista de injetáveis/procedimentos (a consulta já aparece aqui e
  na página de dentistas).
- Link para /servicos/google-meu-negocio/ (já existe a busca "google meu negocio para clinicas de estetica").
- Byline, data e um case ou dado da Mori.

---

## Ordem sugerida

| # | Página | Por quê | Esforço |
|---|---|---|---|
| 1 | Dentistas: title e description | Posição 3 sem clique; mudança pequena com retorno rápido | Baixo |
| 2 | Advogados | Perdeu posição; risco de perder as buscas comerciais que a URL antiga ainda segura | Médio |
| 3 | Pequenas empresas | 650 impressões, zero cliques, página curta para uma SERP de guias | Médio/alto |
| 4 | Google Meu Negócio | Página que mais converte; incluir consultoria e otimização | Baixo/médio |
| 5 | Clínica de estética | Incluir "consultoria" e corrigir o title | Baixo |
| 6 | Médicos | Maior volume, mas pede um case médico e a separação de clínicas | Médio/alto |
| 7 | Franquias | Já na 1ª página, pouco volume | Baixo |

**Depois de publicar:** atualizar o campo `updated` de cada página com a data real da mudança, pedir
indexação das URLs alteradas no GSC e comparar posição e CTR por consulta 4 e 8 semanas depois.

## Pendências que dependem do Gabriel

1. Existe case de **escritório de advocacia** ou de **médico/clínica médica** que possa ser publicado?
2. A Mori atende presencialmente **Tatuapé, Zona Leste e Guarulhos**? (página GMN)
3. Qual é a fonte do dado **"93% mais contatos no Top 3"**? Se não houver, trocar pelo número do case PJ.
4. Faixa de preço (ou fatores de preço) para "quanto custa" em pequenas empresas e consultoria GMN.
