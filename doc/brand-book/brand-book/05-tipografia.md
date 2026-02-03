---
name: tipografia
description: Sistema tipografico detalhado com inventario real do codigo, hierarquia de uso e padrao de evolucao.
---

# 05 - Tipografia

## Objetivo
Padronizar o uso de fontes, tamanhos, pesos e combinacoes tipograficas em todo o projeto.

## Source of truth atual
- `tailwind.config.mjs` (fonte sans padrao)
- `src/layouts/Layout.astro` (import Geist + base global)
- `src/layouts/BlogLayout.astro` (import Source Serif 4 + Inter)
- `src/components/PostCard.astro` (titulo editorial)
- `src/components/Header.astro` (escala de navegacao)

## Inventario real de fontes no projeto

### 1) Geist (principal)
Onde aparece:
- import em `src/layouts/Layout.astro` via Google Fonts.
- fallback configurado no `body` de `Layout.astro`.
- `fontFamily.sans` definido em `tailwind.config.mjs`.

Papel:
- fonte base do site institucional e componentes gerais.

### 2) Source Serif 4 (editorial)
Onde aparece:
- import em `src/layouts/BlogLayout.astro`.
- titulos de blog e card em `BlogLayout.astro` e `PostCard.astro`.

Papel:
- titulos longos/editoriais e blocos de leitura.

### 3) Inter (blog UI)
Onde aparece:
- base de `body` no `BlogLayout.astro`.
- elementos de interface no layout do blog.

Papel:
- texto utilitario no contexto de blog.

### 4) Monospace (codigo)
Onde aparece:
- blocos de codigo no `BlogLayout.astro` usando `Courier New`.

Papel:
- exibicao de `code` e `pre`.

## Escala de tamanhos observada no codigo

| Contexto | Tamanhos encontrados |
|---|---|
| Layout base | 16px |
| Header | 14px, 16px, 18px, 20px |
| Blog body | 16px, 18px |
| Blog headings | 20px, 24px, 28px, 32px, 42px |
| Card de post | 12px, 13px, 14px, 15px, 22px |
| Button UI | `text-xs`, `text-sm`, `text-base` |

## Hierarquia tipografica recomendada (padrao unificado)

| Papel | Familia | Peso | Tamanho | Line-height | Uso |
|---|---|---|---|---|---|
| H1 hero | Geist | 700 | 40-56px | 1.1-1.2 | titulo de secao principal |
| H1 blog | Source Serif 4 | 600 | 38-46px | 1.2 | titulo de artigo |
| H2 | Source Serif 4 | 600 | 28-34px | 1.25 | secoes principais |
| H3 | Source Serif 4 | 600 | 22-26px | 1.3 | subsecoes |
| Body principal | Geist/Inter | 400 | 16-18px | 1.6-1.8 | paragrafos |
| Body secundario | Geist/Inter | 400 | 14-15px | 1.5-1.7 | suporte |
| Caption/meta | Geist/Inter | 500 | 12-13px | 1.4 | datas/tags |
| Button | Geist | 500-600 | 12-16px | 1.2-1.4 | CTA e controles |
| Code | Monospace | 400 | 13-15px | 1.5 | blocos de codigo |

## Regras de composicao

### Regra 1 - fonte base
- Fora de contexto editorial, usar `font-sans` (Geist).

### Regra 2 - fonte serif
- Usar `Source Serif 4` para titulos de leitura longa e cards editoriais.

### Regra 3 - consistencia por pagina
- Cada pagina deve usar no maximo 2 familias principais (sans + serif), mais mono para codigo.

### Regra 4 - contraste de peso
- Evitar usar muitos pesos na mesma secao (ex.: 400, 500 e 700 ja cobrem quase todos cenarios).

## Exemplos prontos

### Exemplo A - Secao institucional
```astro
<section class="space-y-4">
  <h2 class="text-3xl md:text-4xl font-bold text-foreground">Titulo</h2>
  <p class="text-base md:text-lg text-muted-foreground">Texto de suporte.</p>
</section>
```

### Exemplo B - Titulo editorial
```astro
<h1 class="text-4xl md:text-5xl font-semibold text-foreground" style="font-family: 'Source Serif 4', Georgia, serif;">
  Titulo do artigo
</h1>
```

### Exemplo C - Botao padrao
```astro
<button class="h-10 px-6 text-sm font-medium rounded-full">
  Acao principal
</button>
```

## Fluxo para introduzir ajuste tipografico

```text
[Necessidade de legibilidade/identidade]
              |
              v
[Definir papel tipografico (H1, body, caption...)]
              |
              v
[Escolher familia + tamanho + peso]
              |
              v
[Aplicar em componente/layout]
              |
              v
[Validar desktop + mobile + contraste]
```

## Nao fazer
- Nao adicionar fonte nova sem justificativa forte e alinhamento previo.
- Nao misturar varias familias sem papel claro.
- Nao definir tamanho fora da hierarquia sem necessidade.
- Nao quebrar consistencia entre blog e paginas institucionais sem documentar.

## Checklist rapido
- [ ] A familia escolhida bate com o papel (UI vs editorial)?
- [ ] Tamanho e peso estao dentro da escala recomendada?
- [ ] A leitura no mobile foi validada?
- [ ] A mudanca foi aplicada de forma consistente?
