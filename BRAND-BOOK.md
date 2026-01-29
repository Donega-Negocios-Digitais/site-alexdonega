# BRAND BOOK - alexdonega.com.br
## Guia Completo de Identidade Visual

**Versão:** 2.0
**Data:** 28/01/2026
**Status:** Validado

---

## 1. INFORMAÇÕES TÉCNICAS

### Stack Tecnológico

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Astro** | ^4.0.0 | Framework SSG/SSR |
| **Tailwind CSS** | ^3.4.19 | CSS Framework |
| **tailwindcss-animate** | ^1.0.7 | Animações |
| **Sharp** | ^0.34.5 | Processamento de imagens |

### Utilitários CSS

- **class-variance-authority** ^0.7.1 - Criação de variantes
- **clsx** ^2.1.1 - Merge condicional de classes
- **tailwind-merge** ^3.4.0 - Merge inteligente de classes

### Domínio e Hospedagem

- **URL de Produção:** `https://alexdonega.com.br/`
- **DNS/CDN:** Cloudflare
- **Porta Dev:** 4000

### Scripts NPM

```bash
npm run dev      # Servidor desenvolvimento (porta 4000)
npm run build    # Build produção
npm run preview  # Preview do build
```

---

## 2. ESTRUTURA DO PROJETO

```
C:\dev\sites\site-alexdonega2\
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── AnimatedHero.astro
│   │   ├── PostCard.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       └── Badge.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── portfolio.astro
│   │   ├── politicas.astro
│   │   ├── politica-de-privacidade.astro
│   │   ├── politica-de-cookies.astro
│   │   ├── termos-de-uso.astro
│   │   ├── cursos/
│   │   │   ├── claude-code-em-1-dia.astro
│   │   │   ├── engenharia-de-contexto.astro
│   │   │   └── segundo-cerebro-obsidian.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── content/
│   │   └── blog/          # 116 posts markdown
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       └── utils.ts
├── public/
│   ├── favicons/
│   ├── fonts/
│   ├── img/
│   │   ├── avatars/
│   │   ├── icons/
│   │   ├── logos/
│   │   └── projects/
│   └── videos/
└── [documentação .md na raiz]
```

---

## 3. PÁGINAS DO SITE

### URLs Localhost (porta 4000)

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | index.astro | Homepage |
| `/portfolio` | portfolio.astro | Portfólio |
| `/blog` | blog/index.astro | Lista de posts |
| `/blog/[slug]` | blog/[slug].astro | Posts dinâmicos |
| `/cursos/claude-code-em-1-dia` | cursos/claude-code-em-1-dia.astro | Curso |
| `/cursos/engenharia-de-contexto` | cursos/engenharia-de-contexto.astro | Curso |
| `/cursos/segundo-cerebro-obsidian` | cursos/segundo-cerebro-obsidian.astro | Curso |
| `/politicas` | politicas.astro | Hub políticas |
| `/politica-de-privacidade` | politica-de-privacidade.astro | Privacidade |
| `/politica-de-cookies` | politica-de-cookies.astro | Cookies |
| `/termos-de-uso` | termos-de-uso.astro | Termos |

**Nota:** Existem também 3 páginas HTML legadas em subdiretórios específicos.

---

## 4. SISTEMA DE CORES

### Paleta Principal (CSS Custom Properties)

```css
:root {
  --background: #0a0a0a;      /* Preto profundo - fundo principal */
  --foreground: #e5e5e5;      /* Cinza claro - texto principal */
  --card: #1a1a1a;            /* Cinza escuro - fundo de cards */
  --card-hover: #222222;      /* Cinza - hover de cards */
  --accent: #d87757;          /* LARANJA CORAL - cor primária */
  --accent-hover: #e8866a;    /* Laranja claro - hover */
  --border: #2a2a2a;          /* Cinza escuro - bordas */
  --muted: #9ca3af;           /* Cinza médio - texto secundário */
  --muted-foreground: #d1d5db; /* Cinza claro - texto terciário */
  --radius: 16px;             /* Border radius padrão */
}
```

### Cores Tailwind Estendidas

```javascript
// tailwind.config.mjs
colors: {
  background: '#0a0a0a',
  foreground: '#e5e5e5',
  card: { DEFAULT: '#1a1a1a', hover: '#222222' },
  accent: {
    DEFAULT: '#d87757',       // COR PRINCIPAL
    hover: '#e8866a',
    light: 'rgba(216, 119, 87, 0.1)'
  },
  primary: { DEFAULT: '#d87757', foreground: '#0a0a0a' },
  secondary: { DEFAULT: '#111111', foreground: '#e5e5e5' },
  destructive: { DEFAULT: '#ef4444', foreground: '#ffffff' },
  muted: { DEFAULT: '#9ca3af', foreground: '#d1d5db' },
  border: '#2a2a2a',
  ring: '#d87757'
}
```

### Gradientes em Uso

| Nome | Codigo | Uso |
|------|--------|-----|
| **CTA Button** | `linear-gradient(to right, rgb(249,115,22), rgb(234,88,12))` | Botoes principais |
| **Card Image** | `linear-gradient(135deg, var(--accent), #ff9966)` | Fallback PostCard |
| **Hero Glow** | `radial-gradient(ellipse at 50% 0%, rgba(216,119,87,0.08), transparent)` | AnimatedHero |

### Tema

- **Modo:** Dark Mode exclusivo (sem light mode)
- **Identidade:** Alto contraste com acentos em laranja coral (#d87757)

---

## 5. TIPOGRAFIA

### Fonte Principal

```css
font-family: 'Geist', system-ui, -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, sans-serif;
```

- **Fonte:** Geist (Google Fonts)
- **Pesos:** 100-900 (variable font)
- **Importacao:** Via `<link>` no Layout.astro

### Fonte Secundaria (Blog)

```css
font-family: 'Source Serif 4', Georgia, serif;
```

- **Uso:** Titulos de posts em PostCard.astro

### Escala de Tamanhos

| Classe Tailwind | Tamanho | Uso |
|-----------------|---------|-----|
| `text-xs` | 12px | Badges, labels, datas |
| `text-sm` | 14px | Descricoes, nav-links |
| `text-base` | 16px | Body padrao |
| `text-lg` | 18px | Subtitulos |
| `text-xl` | 20px | Headings pequenos |
| `text-2xl` | 24px-28px | Headings medios |
| `text-3xl` | 30px-48px | Headings grandes |
| `text-6xl` | 96px | Hero title desktop |

### Pesos

| Classe | Peso | Uso |
|--------|------|-----|
| `font-light` | 300 | Texto estilizado |
| `font-normal` | 400 | Corpo padrao |
| `font-medium` | 500 | Botoes, links |
| `font-semibold` | 600 | Titulos de cards |
| `font-bold` | 700 | Titulos principais, logo |

---

## 6. ICONES

### Abordagem

**Nao ha bibliotecas de icones externas** (Lucide, Heroicons, FontAwesome).

Todos os icones sao **SVGs inline** customizados.

### Icones Disponiveis

```html
<!-- Menu Hamburger (3 linhas) -->
<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"></path>
</svg>

<!-- Seta Direita -->
<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
</svg>
```

### Arquivos SVG no Projeto

| Arquivo | Localizacao |
|---------|-------------|
| logo-novo-envio.svg | `/public/img/logos/` |
| icone-obsidian.svg | `/public/img/icons/` |

---

## 7. ASSETS E LOGOS

### Favicons

```
/public/favicons/
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-192.png
├── favicon-512.png
└── apple-touch-icon.png
```

- **Favicon raiz:** `/favicon.ico`

### Imagens Principais

```
/public/img/
├── alex-donega.webp              # Foto principal
├── alex-donega-autor-blog.webp   # Avatar blog
├── alex-donega-palestrante.webp  # Foto palestrante
├── diegocarmona.webp             # Outro avatar
└── whatsapp-vendas.png           # Icone WhatsApp
```

### Logos de Projetos

```
/public/img/logos/
├── logo-doface-branca-cortada.webp
├── logo-insightzap.webp
├── logo-novo-envio.svg
└── logo-operacao-de-vendas.webp
```

### Icones de Apps

```
/public/img/icons/
├── icone-notion.webp
├── icone-obsidian.svg
├── icone-roam-research.webp
├── icone-evernote.webp
├── icone-google-keep.webp
├── icone-google-drive.webp
├── icone-google-docs.webp
├── icone-bloco-notas.webp
└── icone-apple-notes.webp
```

### Videos

```
/public/videos/
├── case-studies/
│   ├── callstack-slideshow.webm
│   └── Gentrace+Cover.webm
└── testimonials/
    ├── testimonial-ano-short-vertical.webm
    ├── testimonial-gentrace-short-vertical.webm
    └── testimonial-sturdy-short-vertical.webm
```

---

## 8. COMPONENTES

### Componentes Principais

| Componente | Arquivo | Descricao |
|------------|---------|-----------|
| **Header** | Header.astro | Navegacao sticky responsiva |
| **Footer** | Footer.astro | Rodape com links |
| **AnimatedHero** | AnimatedHero.astro | Hero section com animacoes SVG |
| **PostCard** | PostCard.astro | Card para posts de blog |

### Componentes UI

| Componente | Arquivo | Variantes |
|------------|---------|-----------|
| **Button** | ui/Button.astro | primary, secondary, ghost, outline + tamanhos |
| **Card** | ui/Card.astro | Wrapper generico |
| **Badge** | ui/Badge.astro | Para tags e labels |

### Layouts

| Layout | Arquivo | Uso |
|--------|---------|-----|
| **Layout** | Layout.astro | Layout base (4KB) |
| **BlogLayout** | BlogLayout.astro | Layout de posts (31KB) |

### Padrao de Uso

```astro
---
import Layout from '../layouts/Layout.astro';
import AnimatedHero from '../components/AnimatedHero.astro';
---

<Layout title="Titulo da Pagina">
  <AnimatedHero />
  <section class="max-w-7xl mx-auto px-4 py-20">
    <!-- Conteudo -->
  </section>
</Layout>
```

---

## 9. DIRETRIZES DE USO

### Classes CSS Globais

```css
/* Container padrao */
.container { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }

/* Efeito shimmer para botoes */
.shimmer-button { @apply relative overflow-hidden; }
```

### Border Radius

```javascript
borderRadius: {
  lg: '16px',
  md: '12px',
  sm: '8px'
}
```

### Animacoes Disponiveis

| Nome | Duracao | Uso |
|------|---------|-----|
| `shimmer` | 3s infinite | Efeito brilho em botoes |
| `accordion-down` | 0.2s | Abertura de accordions |
| `accordion-up` | 0.2s | Fechamento de accordions |

### Content Collections (Blog)

```typescript
// src/content/config.ts
schema: z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  author: z.string().default('Alex Donega'),
  image: z.string().optional(),
  // Metadados Obsidian
  tipo_nota: z.string().nullable().optional(),
  area: z.string().nullable().optional(),
  projeto: z.string().nullable().optional(),
  url_original: z.string().nullable().optional(),
})
```

**Total de posts:** 116 arquivos markdown em `/src/content/blog/`

---

## RESUMO ESTATISTICO

| Categoria | Quantidade |
|-----------|-----------|
| Paginas Astro | 11 |
| Paginas HTML legadas | 3 |
| Componentes principais | 4 |
| Componentes UI | 3 |
| Layouts | 2 |
| Posts de Blog | 116 |
| Favicons | 5 + 1 .ico |
| Logos | 4 |
| Icones de apps | 9 |
| Videos | 5 |
| Arquivos documentacao | 11 |

---

**Status:** VALIDADO E COMPLETO
