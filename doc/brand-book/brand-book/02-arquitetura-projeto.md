---
name: arquitetura-projeto
description: Mapa completo de pastas, responsabilidades, fluxos de implementacao e contratos estruturais do projeto.
---

# 02 - Arquitetura do Projeto

## Objetivo
Definir, com alto nivel de detalhe, como o repositorio esta organizado e como cada pasta deve evoluir sem quebrar padroes.

## Visao macro da arquitetura
- Arquitetura orientada a paginas e conteudo.
- Astro como orquestrador de rotas, layouts e build.
- Componentizacao para reuso de UI.
- Conteudo desacoplado em collection (`src/content/blog`).
- Assets estaticos servidos de `public/`.

## Estrutura de pastas (estado atual)

```text
F:\site-alexdonega
|-- astro.config.mjs
|-- tailwind.config.mjs
|-- package.json
|-- _routes.json
|-- src
|   |-- components
|   |   |-- AnimatedHero.astro
|   |   |-- Footer.astro
|   |   |-- Header.astro
|   |   |-- PostCard.astro
|   |   `-- ui
|   |      |-- Badge.astro
|   |      |-- Button.astro
|   |      `-- Card.astro
|   |-- layouts
|   |   |-- Layout.astro
|   |   `-- BlogLayout.astro
|   |-- pages
|   |   |-- index.astro
|   |   |-- portfolio.astro
|   |   |-- politicas.astro
|   |   |-- politica-de-privacidade.astro
|   |   |-- politica-de-cookies.astro
|   |   |-- termos-de-uso.astro
|   |   |-- brand.astro
|   |   |-- blog
|   |   |   |-- index.astro
|   |   |   `-- [slug].astro
|   |   |-- cursos
|   |   |   |-- claude-code-em-1-dia.astro
|   |   |   |-- engenharia-de-contexto.astro
|   |   |   `-- segundo-cerebro-obsidian.astro
|   |   |-- claude-code-em-1-dia
|   |   |   `-- index.html
|   |   |-- engenharia-de-contexto-aplicado-ao-marketing-digital
|   |   |   `-- index.html
|   |   `-- segundo-cerebro-com-obsidian
|   |       `-- index.html
|   |-- content
|   |   |-- config.ts
|   |   `-- blog
|   |      `-- *.md (116 arquivos)
|   |-- styles
|   |   `-- globals.css
|   |-- lib
|   |   `-- utils.ts
|   `-- assets
|-- public
|   |-- favicons
|   |-- img
|   |   |-- avatars
|   |   |-- icons
|   |   |-- logos
|   |   `-- projects
|   `-- videos
`-- doc
    `-- brand-book
```

## Contrato por pasta (o que deve ter)

### `src/pages/` (rotas)
Responsabilidade:
- definir endpoints da aplicacao via file-based routing.

Deve conter:
- paginas `.astro` para rotas principais.
- subpastas para rotas agrupadas (`blog/`, `cursos/`).
- paginas dinamicas quando necessario (`[slug].astro`).

Pode conter:
- `index.html` legado em subpastas isoladas enquanto houver migracao.

Nao deve conter:
- componentes reutilizaveis de uso global.
- utilitarios genericos (isso vai em `src/lib/`).

### `src/layouts/` (casca estrutural)
Responsabilidade:
- padronizar `head`, fontes, SEO base, header/footer e slot de conteudo.

Deve conter:
- layout base (`Layout.astro`).
- layout especializado (`BlogLayout.astro`).

Nao deve conter:
- regra de negocio de pagina especifica.

### `src/components/` (blocos reutilizaveis)
Responsabilidade:
- componentes reutilizaveis entre paginas.

Deve conter:
- componentes macro (Header/Footer/Hero/Card).
- subpasta `ui/` para primitives (Button/Card/Badge).

Nao deve conter:
- rota completa.
- dados de conteudo de pagina hardcoded sem necessidade.

### `src/content/` (dados editoriais)
Responsabilidade:
- centralizar conteudo em markdown e schema.

Deve conter:
- `config.ts` com schema oficial.
- colecao `blog/` com frontmatter valido.

Nao deve conter:
- componentes visuais.

### `src/styles/` (base global)
Responsabilidade:
- tokens globais CSS e utilitarios estruturantes.

Deve conter:
- `globals.css` com `:root`, `@layer base/components/utilities`.

Nao deve conter:
- CSS de pagina especifica longa (preferir local na pagina/componente quando isolado).

### `src/lib/` (utilitarios)
Responsabilidade:
- funcoes utilitarias sem acoplamento de rota.

Deve conter:
- helpers de classe/string/data (ex.: `cn()`).

### `public/` (assets estaticos)
Responsabilidade:
- ativos servidos diretamente por caminho HTTP.

Deve conter:
- imagens, icones, logos, videos, favicons.

Nao deve conter:
- codigo executavel de aplicacao.

## Fluxos principais

### Fluxo de renderizacao de pagina Astro

```text
[Usuario requisita URL]
          |
          v
[Arquivo em src/pages decide a rota]
          |
          v
[Pagina importa Layout + Components]
          |
          v
[Astro compila HTML/CSS/JS]
          |
          v
[Build/Response entregue]
```

### Fluxo de conteudo do blog

```text
[Novo .md em src/content/blog]
          |
          v
[Schema em src/content/config.ts valida]
          |
          v
[src/pages/blog/index.astro lista]
          |
          v
[src/pages/blog/[slug].astro renderiza]
```

### Fluxo de criacao de feature

```text
[Requisito]
    |
    v
[Decisao de rota/pasta]
    |
    +--> pagina nova? -> src/pages
    |
    +--> bloco reutilizavel? -> src/components
    |
    +--> estilo global? -> src/styles/globals.css + tailwind.config.mjs
    |
    v
[Implementar]
    |
    v
[Validar npm run dev + npm run build]
    |
    v
[Atualizar docs em doc/brand-book/]
```

## Regras de nomeacao
- Paginas: kebab-case (`politica-de-cookies.astro`).
- Componentes Astro: PascalCase (`Header.astro`).
- Arquivos de conteudo: slug amigavel SEO em kebab-case.
- Tokens CSS: kebab-case (`--accent-hover`).

## Pontos de atencao arquitetural (estado atual)
1. Existem estilos locais grandes em alguns layouts/componentes; manter consistencia com tokens globais.
2. Existem paginas `.html` legadas em `src/pages/*/index.html`; evitar replicar esse padrao em novos desenvolvimentos.
3. O blog usa layout e estilos proprios; mudancas globais devem ser testadas tambem no contexto de blog.

## Nao fazer
- Nao criar pasta paralela de pages fora de `src/pages`.
- Nao duplicar `Header` e `Footer` manualmente em cada pagina.
- Nao publicar conteudo do blog sem passar no schema de `src/content/config.ts`.
- Nao quebrar padrao de caminhos de assets em `public/`.

## Checklist rapido
- [ ] Pasta alvo da mudanca foi escolhida corretamente?
- [ ] Arquivo novo respeita naming convention?
- [ ] Fluxo de pagina/layout/componente continua limpo?
- [ ] `npm run build` validou a mudanca?
- [ ] Documentacao arquitetural foi atualizada quando necessario?
