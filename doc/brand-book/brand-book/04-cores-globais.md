---
name: cores-globais
description: Guia completo de tokens de cor, mapeamento Tailwind 3 e modelo equivalente para Tailwind 4.
---

# 04 - Cores Globais

## Objetivo
Documentar com detalhe onde as cores vivem, como escrever tokens e como manter consistencia visual no projeto.

## Source of truth atual
- `src/styles/globals.css`
- `tailwind.config.mjs`
- `src/layouts/Layout.astro` (variaveis locais adicionais)
- `src/layouts/BlogLayout.astro` (variaveis locais adicionais)
- `src/components/Header.astro` e `src/components/PostCard.astro` (variaveis locais adicionais)

## Estado atual (implementado hoje)

### Tokens globais ativos em `src/styles/globals.css`
```css
:root {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --card: #1a1a1a;
  --card-hover: #222222;
  --accent: #d87757;
  --accent-hover: #e8866a;
  --border: #2a2a2a;
  --muted: #9ca3af;
  --muted-foreground: #d1d5db;
  --radius: 16px;
}
```

### Mapeamento principal no Tailwind 3 (`tailwind.config.mjs`)
```js
colors: {
  background: '#0a0a0a',
  foreground: '#e5e5e5',
  card: { DEFAULT: '#1a1a1a', hover: '#222222' },
  accent: { DEFAULT: '#d87757', hover: '#e8866a', light: 'rgba(216, 119, 87, 0.1)' },
  muted: { DEFAULT: '#9ca3af', foreground: '#d1d5db' },
  border: '#2a2a2a',
  primary: { DEFAULT: '#d87757', foreground: '#0a0a0a' },
  secondary: { DEFAULT: '#111111', foreground: '#e5e5e5' },
  destructive: { DEFAULT: '#ef4444', foreground: '#ffffff' },
  ring: '#d87757',
}
```

## Diagnostico tecnico
1. O projeto ja tem tokens semanticos bons para dark theme.
2. Existem variaveis de cor repetidas em estilos locais de layout/componentes.
3. O projeto esta em Tailwind 3, com `darkMode: 'class'`, mas opera na pratica com tema escuro unico.

## Padrao de escrita (obrigatorio)
- Nome de token CSS: `--nome-kebab-case`.
- Nome semantico antes de nome literal de cor (preferir `--accent` a `--orange-500` no contexto global).
- Classe utilitaria deve ser semantica (`bg-background`, `text-foreground`, `border-border`).
- Quando criar token novo: registrar em `globals.css` e mapear no `tailwind.config.mjs`.

## Tabela de uso rapido (token -> uso -> classe)

| Token | Uso visual | Classe Tailwind recomendada |
|---|---|---|
| `--background` | fundo principal | `bg-background` |
| `--foreground` | texto principal | `text-foreground` |
| `--card` | fundo de card | `bg-card` |
| `--card-hover` | hover de card | `bg-card-hover` |
| `--accent` | CTA e destaque | `bg-accent`, `text-accent` |
| `--accent-hover` | hover de CTA | `hover:bg-accent-hover` |
| `--border` | borda padrao | `border-border` |
| `--muted` | texto secundario | `text-muted` |
| `--muted-foreground` | texto terciario | `text-muted-foreground` |
| `--radius` | arredondamento base | `rounded-lg/md/sm` (via config) |

## Modelo completo (expandido) para este projeto - Tailwind 3
Este bloco segue sua estrutura de exemplo, preenchido com a paleta atual do projeto.

```css
:root {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --card: #1a1a1a;
  --card-foreground: #e5e5e5;
  --popover: #1a1a1a;
  --popover-foreground: #e5e5e5;
  --primary: #d87757;
  --primary-foreground: #0a0a0a;
  --secondary: #111111;
  --secondary-foreground: #e5e5e5;
  --muted: #1f2937;
  --muted-foreground: #9ca3af;
  --accent: #d87757;
  --accent-foreground: #0a0a0a;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #2a2a2a;
  --input: #2a2a2a;
  --ring: #d87757;
  --chart-1: #d87757;
  --chart-2: #e8866a;
  --chart-3: #f3a284;
  --chart-4: #f7b79f;
  --chart-5: #fbd3c4;
  --sidebar: #111111;
  --sidebar-foreground: #e5e5e5;
  --sidebar-primary: #d87757;
  --sidebar-primary-foreground: #0a0a0a;
  --sidebar-accent: #222222;
  --sidebar-accent-foreground: #e5e5e5;
  --sidebar-border: #2a2a2a;
  --sidebar-ring: #d87757;
  --font-sans: Geist, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-serif: "Source Serif 4", Georgia, serif;
  --font-mono: "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-x: 0px;
  --shadow-y: 4px;
  --shadow-blur: 8px;
  --shadow-spread: -1px;
  --shadow-opacity: 0.1;
  --shadow-color: hsl(0 0% 0%);
  --shadow-2xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
  --shadow: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
  --shadow-md: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

/* Projeto atual e dark-first.
   Este bloco .dark e opcional para futura expansao de tema duplo. */
.dark {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --card: #1a1a1a;
  --card-foreground: #e5e5e5;
  --popover: #1a1a1a;
  --popover-foreground: #e5e5e5;
  --primary: #d87757;
  --primary-foreground: #0a0a0a;
  --secondary: #111111;
  --secondary-foreground: #e5e5e5;
  --muted: #1f2937;
  --muted-foreground: #9ca3af;
  --accent: #d87757;
  --accent-foreground: #0a0a0a;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #2a2a2a;
  --input: #2a2a2a;
  --ring: #d87757;
}
```

## Modelo equivalente para Tailwind 4 (`@theme inline`)
Se o projeto migrar para Tailwind 4, usar o mapeamento abaixo:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-serif: var(--font-serif);
  --font-mono: var(--font-mono);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}
```

## Fluxo para criar/alterar token de cor

```text
[Definir necessidade visual]
          |
          v
[Criar/ajustar token em globals.css]
          |
          v
[Mapear no tailwind.config.mjs]
          |
          v
[Aplicar classe semantica no componente]
          |
          v
[Validar contraste + consistencia no site]
```

## Nao fazer
- Nao hardcodar hex em varios componentes quando o token ja existe.
- Nao criar token semantico duplicado com mesmo papel visual.
- Nao quebrar a coerencia do `accent` sem revisar CTA e estados hover.
- Nao misturar naming literal e naming semantico sem criterio.

## Checklist rapido
- [ ] Token foi declarado no lugar correto?
- [ ] Tailwind 3 recebeu mapeamento correspondente?
- [ ] Nome do token descreve funcao, nao tom literal?
- [ ] Contraste e legibilidade estao aceitos?
- [ ] Docs de cor foram atualizados?
