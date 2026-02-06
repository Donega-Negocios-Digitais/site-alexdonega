# Plano de Arquitetura Astro - site-alexdonega

## 1. Objetivo

Organizar a estrutura de pastas e arquivos do projeto `site-alexdonega` para aderir ao padrao de arquitetura Astro definido no brandbook, mantendo as URLs atuais e reduzindo risco de regressao.

## 2. Status Atual (Diagnostico)

### 2.1. O que ja esta alinhado

- Estrutura base Astro existe:
  - `src/pages/`
  - `src/layouts/`
  - `src/components/`
  - `src/content/`
  - `src/lib/`
  - `src/styles/`
  - `public/`
- Blog usa Content Collections (`src/content/config.ts` + `src/content/blog/*`).
- Layouts e componentes principais estao separados (`Layout.astro`, `Header.astro`, `Footer.astro`).

### 2.2. Pontos fora do padrao do brandbook

- Existem paginas HTML completas dentro de `src/pages/**/index.html`:
  - `src/pages/claude-code-em-1-dia/index.html`
  - `src/pages/engenharia-de-contexto-aplicado-ao-marketing-digital/index.html`
  - `src/pages/segundo-cerebro-com-obsidian/index.html`
- Paths de favicon no layout estao inconsistentes com a pasta `public/favicons`.
- Ha mistura de organizacao de CSS/asset que precisa consolidacao para ficar previsivel.

## 3. Referencia Oficial Astro (validacao)

- Routing (file-based): https://docs.astro.build/en/guides/routing/
- Project structure: https://docs.astro.build/en/basics/project-structure/
- Layouts: https://docs.astro.build/en/basics/layouts/
- Content Collections: https://docs.astro.build/en/guides/content-collections/

Conclusao: o brandbook esta majoritariamente correto para Astro e pode ser usado como base da reorganizacao.

## 4. Decisoes Fechadas para esta migracao

- Manter Astro 4 neste ciclo (sem upgrade de versao).
- Executar migracao em fases incrementais.
- Preservar URLs atuais como requisito obrigatorio.
- Padronizar assets publicos em caminhos absolutos de `public/`.

## 5. Arquitetura Alvo

```text
src/
├── pages/              # rotas .astro (e dinamicas [slug])
├── layouts/            # layouts compartilhados
├── components/         # componentes reutilizaveis
│   └── ui/             # primitivas de UI
├── content/            # markdown tipado
│   └── config.ts       # schema (Astro 4)
├── styles/             # estilos globais
└── lib/                # utilitarios puros

public/
├── favicons/
├── img/
└── videos/
```

## 6. Plano de Execucao

### Fase 0 - Baseline e inventario

1. Mapear todas as rotas atuais (`.astro` e `.html`).
2. Criar matriz rota -> arquivo -> layout -> assets dependentes.
3. Definir prioridade por impacto (home, blog, landing pages).

### Fase 1 - Normalizacao de estrutura e contratos

1. Validar contrato de cada pasta conforme `03-planejar-arquitetura-repo.md`.
2. Ajustar referencias globais de assets (ex.: favicons).
3. Garantir naming conventions:
   - paginas: kebab-case
   - componentes: PascalCase

### Fase 2 - Migracao de paginas HTML para Astro

1. Migrar cada `src/pages/**/index.html` para `index.astro`.
2. Reaproveitar `src/layouts/Layout.astro` nas paginas migradas.
3. Extrair blocos repetidos para `src/components/` quando houver duplicacao.
4. Manter metadados SEO equivalentes por pagina.

### Fase 3 - Consolidacao de estilos e assets

1. Revisar arquivos de CSS legados e consolidar:
   - global em `src/styles/globals.css`
   - especifico em scoped style por componente/pagina
2. Eliminar caminhos relativos frageis para assets.
3. Garantir que todos os assets usados existam em `public/`.

### Fase 4 - Validacao final

1. Build de producao sem erro.
2. Verificacao de rotas principais.
3. Verificacao de 404 para imagem/video/favicon.
4. Revisao final de aderencia ao brandbook.

## 7. Impacto em interfaces publicas

- Nao deve haver mudanca de URL publica.
- Nao deve haver mudanca de slug de blog.
- Pode haver mudanca interna de arquivos-fonte (HTML -> Astro) sem impacto externo.

## 8. Testes e Criterios de Aceite

### Testes minimos

1. `npm run build` finalizando sem erro.
2. Rotas validas:
   - `/`
   - `/blog`
   - `/blog/[slug]`
   - `/portfolio`
   - `/brand`
   - `/claude-code-em-1-dia/`
   - `/engenharia-de-contexto-aplicado-ao-marketing-digital/`
   - `/segundo-cerebro-com-obsidian/`
3. Assets sem erro:
   - favicons
   - imagens das paginas
   - videos

### Aceite final

- Estrutura alinhada com guia `03-planejar-arquitetura-repo.md`.
- Nenhuma rota quebrada.
- Nenhum asset critico quebrado.
- Documento de arquitetura atualizado apos implementacao.

## 9. Riscos e Mitigacao

- Risco: quebra visual na migracao de HTML para Astro.
  - Mitigacao: migracao pagina a pagina com comparacao visual.
- Risco: links de assets quebrarem por path incorreto.
  - Mitigacao: padronizar para caminhos absolutos de `public/`.
- Risco: regressao SEO.
  - Mitigacao: conferir title, description, OG e canonical nas paginas migradas.

## 10. Proximo passo (execucao)

Iniciar pela Fase 0 com inventario completo das rotas e abrir checklist de acompanhamento por pagina migrada.

---

## 11. Status de execucao (06/02/2026)

### Concluido nesta rodada

- Documentacao principal corrigida:
  - `README.md` (porta correta e links existentes)
  - `doc/COMECE-AQUI.md` (reescrito para refletir estado real)
  - `doc/brand-book/BRAND-BOOK.md` (estrutura/rotas/assets atualizados)
- Guias do codex com links internos corrigidos:
  - `doc/brand-book/brand-book/01-indice-guias.md`
  - referencias cruzadas de `02` a `07` para nomes reais dos arquivos (`02` a `10`)
- Ajustes de paths de imagem no codigo:
  - `src/components/PostCard.astro`
  - `src/layouts/BlogLayout.astro`
  - `src/content/blog/por-que-o-whatsapp-no-foi-feito-para-vendas-e-como-o-novo-envio-resolve-isso-de-verdade.md`

### Validacoes executadas

- `npm run build` finalizando com sucesso.
- Verificacao de links markdown (fora posts) sem quebrados.
- Varredura de assets referenciados em `src/` encontrou 1 pendencia.

### Pendencia conhecida

- Arquivo ausente: `public/videos/alex-intro.mp4`
  - referencia atual: `src/pages/index.astro`
  - impacto: video principal da home nao carrega quando reproduzido.
