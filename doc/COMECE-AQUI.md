# COMECE AQUI - site-alexdonega

Guia rapido para iniciar, entender estrutura e achar os documentos corretos.

## 1) Rodar o projeto

```bash
npm install
npm run dev
# abrir: http://localhost:4000/
```

Build de validacao:

```bash
npm run build
```

## 2) Estrutura principal (estado atual)

- `src/pages/`: rotas Astro
- `src/layouts/`: layouts compartilhados
- `src/components/`: componentes reutilizaveis
- `src/content/blog/`: 116 posts markdown
- `src/styles/globals.css`: estilos globais
- `public/img/`: imagens estaticas
- `public/videos/`: videos estaticos
- `doc/brand-book/`: documentacao tecnica

## 3) Rotas principais

- `/` -> `src/pages/index.astro`
- `/blog` -> `src/pages/blog/index.astro`
- `/blog/[slug]` -> `src/pages/blog/[slug].astro`
- `/portfolio` -> `src/pages/portfolio/index.astro`
- `/brand` -> `src/pages/brand/index.astro`
- `/politicas` -> `src/pages/politicas/index.astro`
- `/politica-de-privacidade` -> `src/pages/politica-de-privacidade/index.astro`
- `/politica-de-cookies` -> `src/pages/politica-de-cookies/index.astro`
- `/termos-de-uso` -> `src/pages/termos-de-uso/index.astro`
- `/cursos/claude-code-em-1-dia` -> `src/pages/cursos/claude-code-em-1-dia.astro`
- `/cursos/engenharia-de-contexto` -> `src/pages/cursos/engenharia-de-contexto.astro`
- `/cursos/segundo-cerebro-obsidian` -> `src/pages/cursos/segundo-cerebro-obsidian.astro`
- `/claude-code-em-1-dia` -> `src/pages/claude-code-em-1-dia/index.astro`
- `/engenharia-de-contexto-aplicado-ao-marketing-digital` -> `src/pages/engenharia-de-contexto-aplicado-ao-marketing-digital/index.astro`
- `/segundo-cerebro-com-obsidian` -> `src/pages/segundo-cerebro-com-obsidian/index.astro`

## 4) Documentos que usar

- Visao geral tecnica/visual:
  - `doc/brand-book/BRAND-BOOK.md`
- Arquitetura Astro (pasta, contratos, componentizacao):
  - `doc/brand-book/brand-book/04-arquitetura-projeto-astro.md`
- Stack e renderizacao:
  - `doc/brand-book/brand-book/02-stack-tecnologia.md`
  - `doc/brand-book/brand-book/03-estrategia-renderizacao.md`
- Plano de reorganizacao do projeto:
  - `plano.md`

## 5) Checklist rapido

- [ ] `npm run dev` abre em `http://localhost:4000/`
- [ ] `npm run build` sem erro
- [ ] Home, Blog e Portfolio carregam sem 404 de assets
- [ ] Documentacao acessa arquivos existentes (sem link quebrado)
