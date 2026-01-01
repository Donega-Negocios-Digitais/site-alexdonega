---
title: "Busca Híbrida - Engenharia de Contexto e IA Agêntica - Elastic"
pubDate: "2025-11-12T00:00:00.000Z"
tags:
  - "artigo"
  - "engenharia-de-contexto"
  - "hybrid-search"
  - "agentic-ai"
  - "elastic"
  - "elasticsearch"
  - "rag"
  - "busca-semantica"
  - "busca-lexica"
  - "rrf"
draft: false
author: "Woody Walton"
tipo_nota: "artigo"
area: "[[Esforços/Áreas/Empresas/MyMess/MyMess.md|MyMess]]"
url_original: "https://www.elastic.co/search-labs/pt/blog/context-engineering-hybrid-search-evolution-agentic-ai"
---

# [Hybrid Search Context Engineering Agentic AI - Elastic](/blog/hybrid-search-context-engineering-agentic-ai---elastic)

> [!compass] **[MyMess](/blog/moc---projeto-mymess)** » [Estudos](/blog/dashboard---estudos-mymess) » Engenharia de Contexto

---

> [!info]+ Detalhes do Artigo
> **Ler:** [A evolução da busca híbrida e da engenharia de contexto](https://www.elastic.co/search-labs/pt/blog/context-engineering-hybrid-search-evolution-agentic-ai)
> **Fonte:** [Elastic](/blog/elastic) (Search Labs - Blog Técnico)
> **Autores:** Woody Walton (Senior Principal Solutions Architect)
> **Publicado:** 12 de Novembro de 2025

> [!abstract]+ Materiais Complementares
>
> **Tipos de Busca**
> - Busca Léxica (keywords)
> - Busca Semântica (vetores)
> - Busca Híbrida (combinação)
>
> **Tecnologias Elasticsearch**
> - Reciprocal Rank Fusion (RRF)
> - ES|QL query language
> - Inference API
> - Multi-stage retrieval

> [!tip]- Léxico
>
> **Tecnologia e IA**
> - **Semantic Loss**: Perda de significado ao fragmentar documentos para embeddings
> - **Context Engineering**: Evolução além de prompt engineering para fornecer informação relevante aos LLMs
>
> **Outros Conceitos**
> - **Hybrid Search**: Combinação de busca léxica tradicional com busca semântica baseada em vetores
>
> **Técnicas e Estratégias**
> - **RRF (Reciprocal Rank Fusion)**: Técnica para mesclar resultados de diferentes tipos de busca
> [!question]- Pontos para Aprofundar (Sugestão da IA)
>
> - **Como balancear busca léxica vs semântica?**
>     - Testar diferentes pesos no RRF
> - **Qual o impacto de semantic loss em RAG?**
>     - Experimentar diferentes estratégias de chunking
> - **Como implementar multi-stage retrieval?**
>     - Explorar pipeline do Elasticsearch

> [!robot]- Sugestões Complementares
>
> - **Leituras Recomendadas:**
>     - Documentação Elasticsearch
>     - Papers sobre RRF
> - **Ferramentas Úteis:**
>     - **Elasticsearch** - Busca híbrida
>     - **Cohere** - Modelos de embedding
>     - **Google Vertex AI** - Inference API
> - **Exercícios Práticos:**
>     - Configurar busca híbrida no Elasticsearch
>     - Comparar resultados léxicos vs semânticos vs híbridos

---

## Resumo

Artigo técnico de **Woody Walton** (Elastic) sobre a evolução da busca híbrida para Context Engineering em sistemas de IA Agentic. Define hybrid search como a combinação de "busca léxica tradicional com compreensão semântica de LLMs e busca por similaridade de vetores". Critica RAG puro baseado em vetores pelo problema de **semantic loss** ao fragmentar documentos. Apresenta tecnologias Elasticsearch como RRF, ES|QL e multi-stage retrieval para potencializar agentes de IA.

**Definição central:** "Context engineering representa a evolução além de prompt engineering - agentes de IA requerem informação adicional relevante e eficiente que o LLM precisa considerar ao gerar respostas."

---

## Principais Conceitos

### Hybrid Search vs Abordagens Isoladas

A tabela abaixo resume as informações principais.

| Tipo de Busca | Força | Fraqueza |
|:--------------|:------|:---------|
| **Léxica** | Décadas de refinamento, precisão com termos exatos | Requer terminologia exata |
| **Semântica** | Captura significado, independe de keywords | Perde intenção subjetiva, pode generalizar demais |
| **Híbrida** | Combina forças de ambas | Complexidade de implementação |

### Context Engineering vs Prompt Engineering

A tabela a seguir detalha os campos e seus valores.

| Aspecto | Prompt Engineering | Context Engineering |
|:--------|:-------------------|:--------------------|
| **Foco** | Craftar a pergunta | Fornecer contexto relevante |
| **Escopo** | Instrução única | Sistema completo de retrieval |
| **Aplicação** | LLMs simples | Agentic AI workflows |

---

## Detalhamento

### O Problema do RAG Puro

> [!warning] Semantic Loss
> A crítica principal ao RAG baseado apenas em vetores:
> - Fragmentar documentos para embeddings causa **"perda semântica"**
> - "Vector databases são databases, não são search engines"

### Tecnologias Elasticsearch para Context Engineering

Os dados abaixo mostram a estrutura e configurações.

| Tecnologia | Função |
|:-----------|:-------|
| **Multi-stage retrieval** | Recuperação em etapas com reranking semântico |
| **RRF (Reciprocal Rank Fusion)** | Mescla resultados de diferentes tipos de busca |
| **Inference API** | Integração com Cohere e Google Vertex AI |
| **ES\|QL** | Query language combinando busca tradicional e semântica |

### Fluxo de Busca Híbrida

```
Query do usuário → Busca Léxica (keywords)
                → Busca Semântica (vetores)
                → RRF merge → Reranking → Resultados
```

### Aplicação em Agentic AI

Hybrid search potencializa "agentic AI workflows" ao habilitar agentes a:

1. **Entender semanticamente** requisições do usuário
2. **Raciocinar sobre passos** de ação
3. **Selecionar ferramentas** apropriadas
4. **Fundamentar respostas** em contexto recuperado (não alucinações)

---

## Mapa de Conceitos

O diagrama abaixo ilustra o fluxo do processo, mostrando as etapas e suas conexões.

```mermaid
flowchart TD
    A[Hybrid Search] --> B[Busca Léxica]
    A --> C[Busca Semântica]
    A --> D[Context Engineering]

    B --> B1[Keywords]
    B --> B2[Precisão]

    C --> C1[Vetores/Embeddings]
    C --> C2[Significado]

    D --> D1[Evolução de PE]
    D --> D2[Agentic AI]

    E[Elasticsearch] --> E1[RRF]
    E --> E2[ES|QL]
    E --> E3[Inference API]
    E --> E4[Multi-stage]

    F[Problemas RAG] --> F1[Semantic Loss]
    F --> F2[Fragmentação]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e1f5fe
    style F fill:#ffcdd2
```

---

## Insights & Aprendizados

**O que funcionou bem:**
- Crítica fundamentada ao RAG puro (semantic loss)
- Explicação clara de hybrid search
- Conexão direta entre retrieval e context engineering
- Tecnologias específicas do Elasticsearch

**O que posso adaptar para o MyMess:**
- **Hybrid search**: Implementar para retrieval de briefings de clientes
- **RRF**: Combinar busca por keywords com semântica em bases de conhecimento
- **Multi-stage retrieval**: Usar para refinar contexto antes de passar ao LLM
- **Semantic loss awareness**: Cuidado ao fragmentar documentos longos

**Ideias para aplicar:**
- Implementar Elasticsearch para base de conhecimento de marketing
- Criar pipeline híbrido: léxico para termos técnicos + semântico para intenção
- Testar RRF com diferentes pesos para casos de uso específicos
- Evitar fragmentação excessiva de briefings longos

---

## Recursos Adicionais

- [Elastic Search Labs - Context Engineering](https://www.elastic.co/search-labs/pt/blog/context-engineering-hybrid-search-evolution-agentic-ai)
- [Elastic](https://www.elastic.co/)
- [Elasticsearch](https://www.elastic.co/elasticsearch/)
- [Elastic Search Labs](https://www.elastic.co/search-labs)

---

## Propriedades da nota

> [!note]- Propriedades Gerais do Obsidian
>
>> **Identificação**
>
> | Campo      | Valor                    |
> |:-----------|:-------------------------|
> | **Título** | `INPUT[text:titulo]`     |
>
>> **Conexões**
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
>> **Classificação**
>
> | Campo      | Valor                                                                 |
> |:-----------|:----------------------------------------------------------------------|
> | **Tipo**   | `INPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]` |
> | **Tags**   | `INPUT[inlineList:tags]`                                              |
> | **Status** | `INPUT[inlineSelect(option(nao_iniciado, ⬜ Não Iniciado), option(em_andamento, 🔄 Em Andamento), option(concluido, ✅ Concluído), option(pausado, ⏸️ Pausado), option(cancelado, ❌ Cancelado)):status]` |
>
>> **Temporal**
>
> | Campo          | Valor                      |
> |:---------------|:---------------------------|
> | **Criado**     | `INPUT[date:data_criado]`       |
> | **Atualizado** | `INPUT[date:data_atualizado]`   |

> [!note]- Propriedades SaaS
>
> | Campo             | Valor                                                              |
> |:------------------|:-------------------------------------------------------------------|
> | **Mostrar Bloco** | `INPUT[toggle(onValue(true), offValue(false)):mostrar_bloco_saas]` |
> | **Status SaaS**   | `INPUT[toggle(onValue(true), offValue(false)):status_saas]`        |

> [!note]- Propriedades do Artigo
>
> | Campo            | Valor                          |
> |:-----------------|:-------------------------------|
> | **URL**          | `INPUT[text(placeholder(https://...)):url_artigo]`  |
> | **Fonte**        | `INPUT[text:fonte]`  |
> | **Autor**        | `INPUT[text:autor]`  |
> | **Data Publicação** | `INPUT[date:data_publicacao]`  |
> | **Tipo Conteúdo** | `INPUT[inlineSelect(option(educacional, Educacional), option(curadoria, Curadoria), option(historia, História Pessoal), option(listicle, Lista), option(contrarian, Opinião Contrária), option(tutorial, Tutorial), option(entrevista, Entrevista), option(analise, Análise), option(estudo_de_caso, Estudo de Caso), option(lancamento, Lançamento), option(opiniao, Opinião), option(outro, Outro)):tipo_conteudo]`  |

