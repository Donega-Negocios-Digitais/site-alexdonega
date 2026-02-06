---
name: stack-tecnologico
description: Inventario tecnico completo da stack atual, regras de adocao e limites arquiteturais do projeto.
---

# 01 - Stack Tecnologico

## Objetivo
Descrever a stack real do projeto, com versoes e responsabilidades, para reduzir ambiguidade durante implementacoes.

## Snapshot tecnico atual

### Dependencias principais

| Camada | Pacote | Versao atual | Papel |
|---|---|---|---|
| Framework | `astro` | `^4.0.0` | Estrutura de paginas, build, roteamento, content collections |
| Integracao CSS | `@astrojs/tailwind` | `^6.0.2` | Integra Tailwind ao pipeline Astro |
| CSS utilitario | `tailwindcss` | `^3.4.19` | Sistema de utilitarios e design tokens mapeados |
| Plugin animacao | `tailwindcss-animate` | `^1.0.7` | Keyframes/utilitarios para animacoes |
| Imagem | `sharp` | `^0.34.5` | Processamento e otimizacao de imagens |
| Variantes de classe | `class-variance-authority` | `^0.7.1` | API de variantes em componentes |
| Merge de classes | `clsx` | `^2.1.1` | Composicao condicional de classes |
| Merge Tailwind | `tailwind-merge` | `^3.4.0` | Resolve conflitos de classes Tailwind |

### Scripts npm oficiais

| Comando | Acao | Quando usar |
|---|---|---|
| `npm run dev` | sobe servidor local Astro | desenvolvimento diario |
| `npm run build` | gera build de producao | antes de validar deploy |
| `npm run preview` | preview da build local | validacao final do build |

## Arquivos centrais da stack
- `package.json`: versoes e scripts.
- `astro.config.mjs`: site, build, server, integrations.
- `tailwind.config.mjs`: tokens de tema e plugins.
- `src/styles/globals.css`: tokens globais CSS e utilitarios base.
- `src/lib/utils.ts`: helper `cn()` (clsx + tailwind-merge).

## Configuracao atual do Astro (pontos criticos)
- `site`: `https://alexdonega.com.br/`
- `base`: `/`
- `build.format`: `directory`
- `build.assets`: `_astro`
- `server.port`: `4000`
- `server.host`: `true`
- Integracao ativa: `tailwind()`

## Configuracao atual do Tailwind 3 (pontos criticos)
- `darkMode`: `'class'`
- `content`: scanning em `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- `theme.extend.colors`: tokens semanticos (`background`, `accent`, `muted`, etc.)
- `theme.extend.fontFamily.sans`: `Geist + fallbacks`
- Plugin ativo: `tailwindcss-animate`

## Camadas da stack e fronteiras

### 1) Camada de apresentacao (UI)
- Fontes de verdade: `src/components/`, `src/layouts/`, `src/pages/`.
- Regras:
  - layout e estrutura com Astro + Tailwind.
  - evitar CSS global novo sem necessidade.

### 2) Camada de conteudo
- Fontes de verdade: `src/content/blog/` e `src/content/config.ts`.
- Regras:
  - metadados precisam respeitar schema Zod.
  - novos posts entram como `.md` em `src/content/blog/`.

### 3) Camada de assets estaticos
- Fontes de verdade: `public/` (img, videos, favicons).
- Regras:
  - caminho estavel e previsivel.
  - diferenciar asset de marca (logo) vs asset de conteudo.

### 4) Camada de build/deploy
- Fontes de verdade: `astro.config.mjs`, `_routes.json`.
- Regras:
  - build precisa sair sem erro de rota/asset.
  - dominio final precisa bater com `site` do Astro.

## Fluxo tecnico da stack (visao operacional)

```text
[markdown/content] ----\
                        \
[astro pages/layouts] ---> [Astro Build] ---> [HTML/CSS/JS estatico em dist]
                        /
[tailwind + globals] ---/
```

## O que pode ser adicionado sem alinhamento previo
- Novo componente Astro em `src/components/`.
- Nova pagina Astro em `src/pages/`.
- Novo token de cor/fonte seguindo padrao atual.
- Novo post markdown seguindo schema.

## O que exige alinhamento previo
- Troca de framework principal.
- Migracao Tailwind 3 -> Tailwind 4.
- Introducao de biblioteca de icones nova.
- Mudanca do dominio principal.
- Mudanca do modelo de renderizacao padrao (ex.: virar SSR-first).

## Nao fazer
- Nao adicionar dependencia apenas para resolver problema simples de CSS/HTML.
- Nao duplicar logica de layout que ja existe em `src/layouts/`.
- Nao ignorar o `site` de `astro.config.mjs` ao preparar deploy.
- Nao criar bypass ao schema do blog para publicar conteudo.

## Checklist rapido
- [ ] Versao e dependencia nova estao justificadas?
- [ ] Mudanca respeita Astro 4 + Tailwind 3 atual?
- [ ] `npm run build` passou?
- [ ] Documentacao da stack foi atualizada se necessario?
