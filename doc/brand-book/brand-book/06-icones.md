---
name: icones
description: Guia detalhado de estrategia de icones, inventario atual, padrao de construcao e processo de adocao.
---

# 06 - Icones

## Objetivo
Padronizar onde os icones vivem, como devem ser implementados e como selecionar novas fontes de icones.

## Source of truth atual
- `src/components/AnimatedHero.astro`
- `src/components/Header.astro`
- `src/layouts/BlogLayout.astro`
- `src/pages/brand.astro`
- `public/img/icons/`

## Inventario atual

### A) Icones inline (SVG no markup)
Onde:
- `src/components/AnimatedHero.astro`
- `src/components/Header.astro`
- `src/layouts/BlogLayout.astro`
- `src/pages/brand.astro`

Caracteristica:
- icones de interface (menu, seta, chevrons, compartilhamento etc.)
- controle direto de `stroke`, `fill`, hover e animacao.

### B) Icones em arquivo estatico
Onde:
- `public/img/icons/`

Arquivos atuais:
- `icone-apple-notes.webp`
- `icone-bloco-notas.webp`
- `icone-evernote.webp`
- `icone-google-docs.webp`
- `icone-google-drive.webp`
- `icone-google-keep.webp`
- `icone-notion.webp`
- `icone-obsidian.svg`
- `icone-roam-research.webp`

Uso tipico:
- logos de ferramentas/apps em secoes visuais.

## Padrao tecnico de implementacao

### Regra 1 - quando usar SVG inline
Usar SVG inline para:
- icone de botao.
- icone com animacao.
- icone que precisa herdar cor de texto (`currentColor`).

Exemplo:
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
  <path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
```

### Regra 2 - quando usar arquivo em `public/img/icons`
Usar arquivo estatico para:
- logos de terceiros.
- icones ilustrativos de app/produto.
- ativos reutilizados em varias paginas sem variacao de traco.

Exemplo:
```html
<img src="/img/icons/icone-obsidian.svg" alt="Logo Obsidian" width="48" height="48" loading="lazy" />
```

### Regra 3 - acessibilidade
- Icone decorativo: `aria-hidden="true"` no SVG.
- Icone informativo em botao/link: `aria-label` no elemento pai.
- Toda imagem de icone (`img`) deve ter `alt` descritivo.

### Regra 4 - consistencia visual
- usar `viewBox` coerente (normalmente `0 0 24 24`).
- padronizar espessura (`stroke-width`) por contexto.
- preferir `currentColor` para tema e estados hover.

## Fontes recomendadas para buscar icones

| Fonte | Estilo | Quando usar |
|---|---|---|
| Heroicons | limpo/outline/solid | interface moderna com boa consistencia |
| Lucide | minimalista | UI de produto e painis |
| Tabler Icons | tecnica, boa cobertura | interface com muitos estados |
| Phosphor Icons | versatil (weights) | sistemas com variacao de peso |
| Iconoir | traco leve | interfaces editoriais |

Sugestao de criterio de escolha:
1. escolher apenas 1 familia base por contexto de UI.
2. manter consistencia de stroke/fill.
3. evitar misturar 3+ estilos diferentes na mesma pagina.

## Processo de adocao de novo icone

```text
[Necessidade de novo icone]
          |
          v
[Escolher fonte (Heroicons/Lucide/etc.)]
          |
          v
[Validar estilo com design atual]
          |
          +--> Interface dinamica? -> SVG inline
          |
          +--> Asset estatico? ----> public/img/icons
          |
          v
[Aplicar acessibilidade]
          |
          v
[Documentar origem e uso]
```

## Convencoes de nome de arquivo
- Prefixo padrao: `icone-`.
- Nome em kebab-case: `icone-nome-do-recurso.ext`.
- Extensao:
  - `svg` para vetorial/line icon quando possivel.
  - `webp` para icones raster de apps.

## Nao fazer
- Nao incluir biblioteca completa de icones sem necessidade.
- Nao misturar varios estilos sem criterio.
- Nao usar SVG sem `viewBox`.
- Nao publicar icone sem revisao de acessibilidade.

## Checklist rapido
- [ ] O tipo de icone (inline x arquivo) foi escolhido corretamente?
- [ ] Acessibilidade esta correta?
- [ ] O estilo visual esta consistente com o restante da pagina?
- [ ] Nome e local do arquivo seguem convencao?
