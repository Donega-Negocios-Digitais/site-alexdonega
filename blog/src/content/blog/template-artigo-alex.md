---
title: "template-artigo-alex"
pubDate: "2026-01-01T20:00:59.341Z"
tags: []
draft: false
author: "Alex Donega"
tipo_nota: "artigo"
---

> [!info]+ Detalhes do Artigo
> **Objetivo:** [O que este artigo promete entregar?]
>
> **Fonte:** [Nome do site/blog]
> **Autor:** `VIEW[{pessoa}]`
> **Link:** `VIEW[{url}][link]`
> **Publicado:** `VIEW[{data_criado}]`
> **Tipo:** `VIEW[{tipo_conteudo}]`

> [!abstract]+ Materiais Complementares
>
> **Videos Relacionados**
> - [Título do vídeo](url)
>
> **Artigos Relacionados**
> - [Título do artigo](url)
>
> **Ferramentas Mencionadas**
> - [Ferramenta](url) - Descrição breve

> [!tip]- Léxico
>
> - [Conceito 1](/blog/conceito-1): Definição breve
> - [Conceito 2](/blog/conceito-2): Definição breve

> [!robot]- Sugestões da IA
>
> - **Leituras Recomendadas:**
>     - Recurso 1
> - **Ferramentas Úteis:**
>     - Ferramenta 1

---

## Resumo Executivo

[Síntese do artigo em 3-5 linhas - o que foi abordado e o valor entregue]

---

## Números-Chave

| Métrica | Valor |
|:--------|:------|
| **Métrica 1** | Valor |
| **Métrica 2** | Valor |

---

## Conteúdo Principal

### Seção 1: [Título]

[Conteúdo]

### Seção 2: [Título]

[Conteúdo]

### Seção 3: [Título]

[Conteúdo]

---

## Advertências Importantes

> [!warning] Avisos Críticos
>
> **1. [Título do Aviso]**
> [Descrição do caveat/limitação]
>
> **2. [Título do Aviso]**
> [Descrição do caveat/limitação]

---

## Insights & Aprendizados

**O que funcionou bem:**
- [Insight 1]
- [Insight 2]

**O que posso adaptar:**
- [Adaptação 1]
- [Adaptação 2]

**Ideias para aplicar:**
- [Ideia 1]
- [Ideia 2]

---

## Próximos Passos

- [ ] [Ação 1]
- [ ] [Ação 2]
- [ ] [Ação 3]

---
## Propriedades da nota

> [!note]- 📋 Propriedades Gerais do Obsidian
>
>> **📝 Identificação**
>
> | Campo      | Valor                    |
> |:-----------|:-------------------------|
> | **Título** | `INPUT[text:titulo]`     |
>
>> **🔗 Conexões**
>
> | Campo           | Valor                                                                 |
> |:----------------|:----------------------------------------------------------------------|
> | **Pai**         | `INPUT[suggester(optionQuery("")):pai]`                               |
> | **Coleção**     | `INPUT[inlineSelect(option(financeiro, Financeiro), option(growth, Growth), option(ia, IA), option(lideranca, Liderança), option(marketing, Marketing), option(negocios, Negócios), option(produtividade, Produtividade), option(pkm, PKM), option(saas, SaaS), option(tecnologia, Tecnologia), option(vendas, Vendas)):colecao]` |
> | **Área**        | `INPUT[suggester(optionQuery("Esforços/Áreas")):area]`                         |
> | **Projeto**     | `INPUT[suggester(optionQuery("#projeto")):projeto]`                   |
> | **Autor**       | `INPUT[suggester(optionQuery("Atlas/Pessoas")):pessoa]`                      |
> | **Relacionado** | `INPUT[inlineListSuggester(optionQuery(""), useLinks(true)):relacionado]` |
>
>> **📊 Classificação**
>
> | Campo      | Valor                                                                 |
> |:-----------|:----------------------------------------------------------------------|
> | **Tipo**   | `INPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]` |
> | **Tags**   | `INPUT[inlineList:tags]`                                              |
> | **Status** | `INPUT[inlineSelect(option(nao_iniciado, ⬜ Não Iniciado), option(em_andamento, 🔄 Em Andamento), option(concluido, ✅ Concluído), option(pausado, ⏸️ Pausado), option(cancelado, ❌ Cancelado)):status]` |
>
>> **📅 Temporal**
>
> | Campo          | Valor                      |
> |:---------------|:---------------------------|
> | **Criado**     | `INPUT[date:data_criado]`       |
> | **Atualizado** | `INPUT[date:data_atualizado]`   |
>
>> **🎨 Visual**
>
> | Campo         | Valor                                                            |
> |:--------------|:-----------------------------------------------------------------|
> | **Visual da Nota** | `INPUT[inlineSelect(option(normal, Normal), option(wide-page, Wide Page), option(dashboard, Dashboard)):cssclasses]` |
> | **Modo Leitura** | `INPUT[toggle(onValue(preview), offValue(source)):obsidianUIMode]` |
> | **Imagem Destaque**    | `INPUT[text:imagem_destaque]`                                             |
>
>> **🌐 Compartilhar  link**
>
> | Campo          | Valor                                               |
> |:---------------|:----------------------------------------------------|
> | **Share Link** | `INPUT[text(placeholder(https://...)):share_link]`  |
> | **Share Upd.** | `INPUT[text:share_updated]`                         |

> [!note]- 🚀 Propriedades SaaS
>
> | Campo             | Valor                                                              |
> |:------------------|:-------------------------------------------------------------------|
> | **Mostrar Bloco** | `INPUT[toggle(onValue(true), offValue(false)):mostrar_bloco_saas]` |
> | **Status SaaS**   | `INPUT[toggle(onValue(true), offValue(false)):status_saas]`        |

> [!note]- 📰 Propriedades do Artigo
>
> | Campo            | Valor                          |
> |:-----------------|:-------------------------------|
> | **URL**          | `INPUT[text(placeholder(https://...)):url]`  |
> | **Tipo Conteúdo** | `INPUT[inlineSelect(option(educacional, Educacional), option(curadoria, Curadoria), option(historia, História Pessoal), option(listicle, Lista), option(contrarian, Opinião Contrária), option(tutorial, Tutorial), option(entrevista, Entrevista), option(analise, Análise), option(estudo_de_caso, Estudo de Caso), option(lancamento, Lançamento), option(opiniao, Opinião), option(outro, Outro)):tipo_conteudo]`  |

