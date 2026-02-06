---
name: indice-guias-brand-book-codex
description: Organiza os 9 guias tecnicos do brand book em trilha de uso, mapeia qual documento usar por contexto e define fluxo de aplicacao ponta a ponta. Cada guia segue formato padrao com frontmatter, workflow operacional e checklist de validacao.
---

# Codex de Guias Técnicos - Brand Book

Colecao de guias operacionais para orientar decisoes e implementacoes tecnicas em projetos web, com foco em consistencia, prevencao de bugs e qualidade de entrega.

## Sobre

Este codex contem 9 guias interconectados que cobrem o ciclo completo de desenvolvimento web: desde a escolha da stack tecnologica ate o deployment. Cada guia segue um formato padrao com frontmatter YAML, workflow passo a passo, exemplos praticos e checklist de validacao.

## Guias Disponiveis

| # | Arquivo | Foco |
|---|---------|------|
| 01 | [`escolher-stack-web.md`](./01-escolher-stack-web.md) | Escolha e documentacao de stack tecnologica |
| 02 | [`decidir-renderizacao-web.md`](./02-decidir-renderizacao-web.md) | Decisao entre SSG/SSR/Hibrida/SPA/MPA |
| 03 | [`planejar-arquitetura-repo.md`](./03-planejar-arquitetura-repo.md) | Arquitetura de repositorio, contratos por pasta e naming |
| 04 | [`governar-sistema-cores.md`](./04-governar-sistema-cores.md) | Design tokens, temas e mapeamento de cores |
| 05 | [`governar-tipografia.md`](./05-governar-tipografia.md) | Hierarquia tipografica, legibilidade e responsividade |
| 06 | [`governar-icones.md`](./06-governar-icones.md) | Sistema de icones, acessibilidade e convencoes |
| 07 | [`estrategia-seo-indices.md`](./07-estrategia-seo-indices.md) | SEO tecnico, metadados, sitemap, robots e monitoracao |
| 08 | [`operar-cloudflare-dns.md`](./08-operar-cloudflare-dns.md) | DNS/deployment com SSL, cache, troubleshooting e rollback |
| 09 | [`orquestrar-brand-book.md`](./09-orquestrar-brand-book.md) | Orquestra uso combinado dos guias em fluxos complexos |

## Ordem Recomendada para Projeto Novo

```
01. Stack → 02. Renderizacao → 03. Arquitetura → 04-06. Design System → 07-08. SEO/Deploy → 09. Orquestracao
```

1. [`01-escolher-stack-web.md`](./01-escolher-stack-web.md) - Define tecnologias (framework, CSS, build)
2. [`02-decidir-renderizacao-web.md`](./02-decidir-renderizacao-web.md) - Decide estrategia de renderizacao por rota
3. [`03-planejar-arquitetura-repo.md`](./03-planejar-arquitetura-repo.md) - Organiza estrutura de pastas
4. [`04-governar-sistema-cores.md`](./04-governar-sistema-cores.md) - Sistema de cores
5. [`05-governar-tipografia.md`](./05-governar-tipografia.md) - Sistema tipografico
6. [`06-governar-icones.md`](./06-governar-icones.md) - Sistema de icones
7. [`07-estrategia-seo-indices.md`](./07-estrategia-seo-indices.md) - SEO tecnico
8. [`08-operar-cloudflare-dns.md`](./08-operar-cloudflare-dns.md) - Deployment
9. [`09-orquestrar-brand-book.md`](./09-orquestrar-brand-book.md) - Consolidacao (multi-frentes)

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
1. Usar 01-escolher-stack-web → Escolhe Astro (otimo para SSG)
2. Usar 02-decidir-renderizacao-web → Define SSG para rotas publicas
3. Usar 03-planejar-arquitetura-repo → Define estrutura /blog/[slug]
4. Usar 04-governar-sistema-cores → Define paleta e tokens
5. Usar 07-estrategia-seo-indices → Configura meta tags, sitemap
6. Usar 08-operar-cloudflare-dns → Configura dominio e SSL
```

## Qual Guia Usar por Tipo de Pedido

| Tipo de pedido | Guia principal | Apoio recomendado |
|---|---|---|
| Escolher tecnologias do projeto | [`01-escolher-stack-web.md`](./01-escolher-stack-web.md) | [`02-decidir-renderizacao-web.md`](./02-decidir-renderizacao-web.md) |
| Definir SSG, SSR, SPA ou hibrido | [`02-decidir-renderizacao-web.md`](./02-decidir-renderizacao-web.md) | [`01-escolher-stack-web.md`](./01-escolher-stack-web.md) |
| Organizar pastas e contratos do repositorio | [`03-planejar-arquitetura-repo.md`](./03-planejar-arquitetura-repo.md) | [`09-orquestrar-brand-book.md`](./09-orquestrar-brand-book.md) |
| Ajustar paleta, tokens e tema | [`04-governar-sistema-cores.md`](./04-governar-sistema-cores.md) | [`05-governar-tipografia.md`](./05-governar-tipografia.md) |
| Padronizar fontes e escala de texto | [`05-governar-tipografia.md`](./05-governar-tipografia.md) | [`04-governar-sistema-cores.md`](./04-governar-sistema-cores.md) |
| Padronizar icones e acessibilidade | [`06-governar-icones.md`](./06-governar-icones.md) | [`04-governar-sistema-cores.md`](./04-governar-sistema-cores.md) |
| Melhorar SEO tecnico e indexacao | [`07-estrategia-seo-indices.md`](./07-estrategia-seo-indices.md) | [`02-decidir-renderizacao-web.md`](./02-decidir-renderizacao-web.md) |
| Configurar dominio, DNS, SSL e cache | [`08-operar-cloudflare-dns.md`](./08-operar-cloudflare-dns.md) | [`07-estrategia-seo-indices.md`](./07-estrategia-seo-indices.md) |
| Pedido amplo com varias frentes | [`09-orquestrar-brand-book.md`](./09-orquestrar-brand-book.md) | Guias especializados necessarios |

## Fluxo Logico de Decisoes

```
INICIO
   │
   ▼
01-Escolher Stack (Astro/Next/Vue/...)
   │
   ▼
02-Decidir Renderizacao (SSG/SSR/Hibrida)
   │
   ▼
03-Planejar Arquitetura (pastas/contratos)
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

**Regra de ouro**: A escolha da stack (01) influencia diretamente as opcoes de renderizacao (02). Por isso, stack vem primeiro.

## Formato Padrao dos Guias

Todos os guias seguem esta estrutura:

```yaml
---
name: nome-do-guia
description: O que faz e quando usar
---

# Titulo
## Objetivo
## Quando Usar Este Guia
## Workflow (checklist copiavel)
## Passos (detalhamento)
## Melhores Praticas
## Anti-Padroes a Evitar
## Checklist de Revisao Final
```

---

**Versao:** 1.1 | **Atualizado:** 2025-02-05
