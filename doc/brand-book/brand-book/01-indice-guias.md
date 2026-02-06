---
name: indice-guias-brand-book-codex
description: Organiza os 10 guias tecnicos do brand book em trilha de uso, mapeia qual documento usar por contexto e define fluxo de aplicacao ponta a ponta. Cada guia segue formato padrao com frontmatter e secoes operacionais.
---

# Codex de Guias Técnicos - Brand Book

Colecao de guias operacionais para orientar decisoes e implementacoes tecnicas em projetos web, com foco em consistencia, prevencao de bugs e qualidade de entrega.

## Sobre

Este codex contem 10 guias interconectados que cobrem o ciclo completo de desenvolvimento web: desde a stack tecnologica definida ate o deployment. Cada guia segue um formato padrao com frontmatter YAML, secoes de uso, exemplos praticos e referencias.

## Guias Disponiveis

| # | Arquivo | Foco |
|---|---------|------|
| 01 | [`02-stack-tecnologia.md`](./02-stack-tecnologia.md) | Stack tecnologica definida (Astro + Tailwind) |
| 02 | [`03-estrategia-renderizacao.md`](./03-estrategia-renderizacao.md) | Decisao entre SSG/SSR/Hibrida |
| 03 | [`04-arquitetura-projeto-astro.md`](./04-arquitetura-projeto-astro.md) | Arquitetura de repositorio, contratos por pasta e naming |
| 04 | [`05-guia-cores.md`](./05-guia-cores.md) | Design tokens, temas e mapeamento de cores |
| 05 | [`06-guia-tipografia.md`](./06-guia-tipografia.md) | Hierarquia tipografica, legibilidade e responsividade |
| 06 | [`07-guia-icones.md`](./07-guia-icones.md) | Sistema de icones, acessibilidade e convencoes |
| 07 | [`08-guia-seo.md`](./08-guia-seo.md) | SEO tecnico, metadados, sitemap, robots e monitoracao |
| 08 | [`09-guia-cloudflare-dns.md`](./09-guia-cloudflare-dns.md) | DNS/deployment com SSL, cache, troubleshooting e rollback |
| 09 | [`10-orquestracao-brand-book.md`](./10-orquestracao-brand-book.md) | Orquestra uso combinado dos guias em fluxos complexos |

## Ordem Recomendada para Projeto Novo

```
01. Stack → 02. Renderizacao → 03. Arquitetura → 04-06. Design System → 07-08. SEO/Deploy → 09. Orquestracao
```

1. [`02-stack-tecnologia.md`](./02-stack-tecnologia.md) - Define tecnologias (framework, CSS, build)
2. [`03-estrategia-renderizacao.md`](./03-estrategia-renderizacao.md) - Decide estrategia de renderizacao por rota
3. [`04-arquitetura-projeto-astro.md`](./04-arquitetura-projeto-astro.md) - Organiza estrutura de pastas
4. [`05-guia-cores.md`](./05-guia-cores.md) - Sistema de cores
5. [`06-guia-tipografia.md`](./06-guia-tipografia.md) - Sistema tipografico
6. [`07-guia-icones.md`](./07-guia-icones.md) - Sistema de icones
7. [`08-guia-seo.md`](./08-guia-seo.md) - SEO tecnico
8. [`09-guia-cloudflare-dns.md`](./09-guia-cloudflare-dns.md) - Deployment
9. [`10-orquestracao-brand-book.md`](./10-orquestracao-brand-book.md) - Consolidacao (multi-frentes)

## Como Usar

1. **Identifique o contexto** da sua tarefa
2. **Consulte a tabela** abaixo para encontrar o guia adequado
3. **Copie o workflow/checklist** do guia selecionado
4. **Preencha os templates** com dados reais do projeto
5. **Execute o checklist final** para garantir qualidade

### Exemplo de Uso

```
Pedido: "Quero criar um blog com SEO forte"

Fluxo:
1. Usar 02-stack-tecnologia → Stack definida (Astro + Tailwind)
2. Usar 03-estrategia-renderizacao → Define SSG para rotas publicas
3. Usar 04-arquitetura-projeto-astro → Define estrutura /blog/[slug]
4. Usar 05-guia-cores → Define paleta e tokens
5. Usar 08-guia-seo → Configura meta tags, sitemap
6. Usar 09-guia-cloudflare-dns → Configura dominio e SSL
```

## Qual Guia Usar por Tipo de Pedido

| Tipo de pedido | Guia principal | Apoio recomendado |
|---|---|---|
| Escolher tecnologias do projeto | [`02-stack-tecnologia.md`](./02-stack-tecnologia.md) | [`03-estrategia-renderizacao.md`](./03-estrategia-renderizacao.md) |
| Definir SSG, SSR, SPA ou hibrido | [`03-estrategia-renderizacao.md`](./03-estrategia-renderizacao.md) | [`02-stack-tecnologia.md`](./02-stack-tecnologia.md) |
| Organizar pastas e contratos do repositorio | [`04-arquitetura-projeto-astro.md`](./04-arquitetura-projeto-astro.md) | [`10-orquestracao-brand-book.md`](./10-orquestracao-brand-book.md) |
| Ajustar paleta, tokens e tema | [`05-guia-cores.md`](./05-guia-cores.md) | [`06-guia-tipografia.md`](./06-guia-tipografia.md) |
| Padronizar fontes e escala de texto | [`06-guia-tipografia.md`](./06-guia-tipografia.md) | [`05-guia-cores.md`](./05-guia-cores.md) |
| Padronizar icones e acessibilidade | [`07-guia-icones.md`](./07-guia-icones.md) | [`05-guia-cores.md`](./05-guia-cores.md) |
| Melhorar SEO tecnico e indexacao | [`08-guia-seo.md`](./08-guia-seo.md) | [`03-estrategia-renderizacao.md`](./03-estrategia-renderizacao.md) |
| Configurar dominio, DNS, SSL e cache | [`09-guia-cloudflare-dns.md`](./09-guia-cloudflare-dns.md) | [`08-guia-seo.md`](./08-guia-seo.md) |
| Pedido amplo com varias frentes | [`10-orquestracao-brand-book.md`](./10-orquestracao-brand-book.md) | Guias especializados necessarios |

## Fluxo Logico de Decisoes

```
INICIO
   │
   ▼
01-Stack Tecnologica (Astro + Tailwind definidos)
   │
   ▼
02-Estrategia de Renderizacao (SSG/SSR/Hibrida)
   │
   ▼
03-Arquitetura do Projeto (pastas/contratos)
   │
   ▼
04-06-Design System (cores → tipografia → icones)
   │
   ▼
07-SEO Tecnico + 08-Deployment
   │
   ▼
09-Orquestracao (quando multi-frentes)
```

**Regra de ouro**: A stack tecnologica ja esta definida (Astro + Tailwind). Comece direto pela estrategia de renderizacao e arquitetura.

## Formato Padrao dos Guias

Todos os guias seguem esta estrutura:

```yaml
---
name: nome-do-guia
description: O que faz e quando usar
---

# Titulo
## Objetivo
## O que é [Tema]
## Quando Usar Este Guia
## Como Usar
## Exemplos Praticos
## Referencias
```

---

**Versao:** 1.1 | **Atualizado:** 2025-02-05


