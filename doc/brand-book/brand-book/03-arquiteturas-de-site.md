---
name: arquiteturas-de-site
description: Guia detalhado de modelos arquiteturais web, criterios de escolha e matriz de decisao para este projeto.
---

# 03 - Arquiteturas de Site

## Objetivo
Padronizar como decidir entre SSG, SSR, Hibrida, SPA e MPA no contexto deste projeto.

## Modelos arquiteturais

### 1) SSG (Static Site Generation)
Definicao:
- HTML gerado no build.

Pontos fortes:
- alta performance inicial.
- SEO excelente por entregar HTML pronto.
- menor custo de infraestrutura.

Pontos de cuidado:
- dados dinamicos por usuario exigem estrategias extras.
- rebuild pode ser necessario para atualizar conteudo.

Quando usar:
- paginas institucionais.
- blog.
- landing pages.
- conteudo que muda em janelas controladas.

### 2) SSR (Server Side Rendering)
Definicao:
- HTML gerado no servidor a cada request.

Pontos fortes:
- resposta dinamica por usuario/requisicao.
- bom para dados atualizados em tempo real.

Pontos de cuidado:
- custo e complexidade operacional maiores.
- latencia de resposta pode aumentar.

Quando usar:
- dashboards autenticados.
- paginas com dados de sessao/request.
- personalizacao forte por usuario.

### 3) Hibrida (SSG + SSR)
Definicao:
- mistura paginas estaticas e dinamicas no mesmo projeto.

Pontos fortes:
- equilibrio entre performance e dinamismo.

Pontos de cuidado:
- exige governanca clara para nao virar arquitetura confusa.

Quando usar:
- produto com area publica de conteudo + area autenticada.

### 4) SPA (Single Page Application)
Definicao:
- app principal roda no client com roteamento client-side.

Pontos fortes:
- interacoes ricas sem reload completo.
- UX de aplicacao desktop-like.

Pontos de cuidado:
- carga inicial maior.
- SEO exige cuidado extra.

Quando usar:
- produto altamente interativo e stateful.
- fluxo de app com muitas transicoes internas.

### 5) MPA (Multi Page Application)
Definicao:
- cada rota entrega documento de pagina.

Pontos fortes:
- simples de manter.
- SEO naturalmente forte.
- isolamento por pagina.

Pontos de cuidado:
- transicoes entre paginas nao sao tipo app SPA por padrao.

Quando usar:
- sites institucionais, conteudo e blog.

## Arquitetura oficial deste projeto
- Base oficial: **MPA + SSG-first com Astro**.
- Componentes com interacao pontual via scripts locais quando necessario.
- Blog estruturado por content collection.

## Como as rotas atuais se encaixam

| Grupo de rota | Arquivos atuais | Estrategia recomendada |
|---|---|---|
| Home/Institucional | `src/pages/index.astro`, `portfolio.astro`, politicas | SSG/MPA |
| Blog listagem | `src/pages/blog/index.astro` | SSG/MPA |
| Blog detalhe | `src/pages/blog/[slug].astro` + `src/content/blog/*.md` | SSG/MPA |
| Cursos em Astro | `src/pages/cursos/*.astro` | SSG/MPA |
| Paginas HTML legadas | `src/pages/*/index.html` | manter estavel e migrar gradualmente |

## Matriz de decisao (pratica)

| Tipo de pagina | SEO critico | Personalizacao por usuario | Atualizacao de dados | Escolha base |
|---|---|---|---|---|
| Conteudo institucional | alta | baixa | baixa/media | SSG |
| Blog/artigo | alta | baixa | media | SSG |
| Landing de campanha | alta | baixa | media | SSG |
| Area logada com dados privados | media | alta | alta | SSR ou Hibrida |
| App com interacao intensa | baixa/media | alta | alta | SPA (somente se necessario) |

## Arvore de decisao rapida

```text
Pagina precisa SEO forte?
    |
    sim -----------------> Conteudo muda por usuario?
                             |
                            nao ----> SSG/MPA (padrao do projeto)
                             |
                            sim ----> Hibrida ou SSR
    |
   nao -----------------> UI muito interativa e stateful?
                             |
                            sim ----> SPA (avaliar custo)
                             |
                            nao ----> MPA simples
```

## Fluxo de aprovacao para excecao arquitetural

```text
[Necessidade de SSR/SPA]
          |
          v
[Documento curto com motivo tecnico]
          |
          v
[Comparar com padrao SSG-first]
          |
          v
[Aprovar ou rejeitar]
          |
          v
[Se aprovado: documentar no README BrainBook]
```

## Nao fazer
- Nao migrar para SSR/SPA por preferencia pessoal sem requisito tecnico.
- Nao misturar paradigmas de renderizacao sem documentar impacto.
- Nao criar nova pagina dinamica sem analisar SEO e custo de manutencao.

## Checklist rapido
- [ ] A escolha arquitetural bate com tipo de pagina?
- [ ] SEO/performance/custo foram avaliados?
- [ ] Excecao ao padrao foi documentada?
- [ ] Impacto de deploy e monitoracao foi considerado?
