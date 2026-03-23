# BRAND BOOK - alexdonega.com.br
## Guia Completo de Identidade Visual

**Versão:** 2.0
**Data:** 06/02/2026
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
G:\Downloads\site-alexdonega\
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
│   │   ├── portfolio/index.astro
│   │   ├── politicas/
│   │   │   ├── index.astro
│   │   │   ├── politica-de-privacidade/index.astro
│   │   │   ├── politica-de-cookies/index.astro
│   │   │   └── termos-de-uso/index.astro
│   │   ├── brand/index.astro
│   │   ├── claude-code-em-1-dia/index.astro
│   │   ├── engenharia-de-contexto-aplicado-ao-marketing-digital/index.astro
│   │   ├── segundo-cerebro-com-obsidian/index.astro
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
│   ├── img/
│   │   ├── avatars/
│   │   ├── campaigns/
│   │   ├── icons/
│   │   ├── logos/
│   │   ├── people/
│   │   └── projects/
│   └── videos/
└── doc/
```

---

## 3. PÁGINAS DO SITE

### URLs Localhost (porta 4000)

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | index.astro | Homepage |
| `/portfolio` | portfolio/index.astro | Portfólio |
| `/blog` | blog/index.astro | Lista de posts |
| `/blog/[slug]` | blog/[slug].astro | Posts dinâmicos |
| `/brand` | brand/index.astro | Brand Book público |
| `/claude-code-em-1-dia` | claude-code-em-1-dia/index.astro | Landing |
| `/engenharia-de-contexto-aplicado-ao-marketing-digital` | engenharia-de-contexto-aplicado-ao-marketing-digital/index.astro | Landing |
| `/segundo-cerebro-com-obsidian` | segundo-cerebro-com-obsidian/index.astro | Landing |
| `/cursos/claude-code-em-1-dia` | cursos/claude-code-em-1-dia.astro | Curso |
| `/cursos/engenharia-de-contexto` | cursos/engenharia-de-contexto.astro | Curso |
| `/cursos/segundo-cerebro-obsidian` | cursos/segundo-cerebro-obsidian.astro | Curso |
| `/politicas` | politicas/index.astro | Hub políticas |
| `/politicas/politica-de-privacidade` | politicas/politica-de-privacidade/index.astro | Privacidade |
| `/politicas/politica-de-cookies` | politicas/politica-de-cookies/index.astro | Cookies |
| `/politicas/termos-de-uso` | politicas/termos-de-uso/index.astro | Termos |

**Nota:** Existem 3 landing pages standalone em `.astro` na raiz de `src/pages/` (sem arquivo `.html` legado).

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
/public/img/people/
├── alex-donega.webp
├── alex-donega-autor-blog.webp
├── alex-donega-palestrante.webp
└── diegocarmona.webp

/public/img/campaigns/
└── whatsapp-vendas.png
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
| Paginas Astro | 15 |
| Paginas HTML legadas em `src/pages` | 0 |
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

---

## 10. ESTILIZAÇÃO E EFEITOS DA HOME

### Background Animado (36 Linhas Neon)

O background principal utilizado na Home (Hero Section) tem fundo `background: #000;` e consiste em um vetor SVG complexo de 36 linhas orgânicas e pontos simulando fluxo de dados pulsante em neon, rodando com a biblioteca nativa `<animateMotion>` sobre paths do SVG.

<details>
<summary><b>Clique para ver a estrutura principal do SVGs e Threads (exemplo)</b></summary>

```html
<div class="hero-background" style="position: absolute; inset: 0; z-index: 1;">
  <svg class="animated-lines" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width: 100%; height: 100%;">
    <defs>
      <!-- Gradientes base do neon -->
      <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(255,255,255,1)" />
        <stop offset="30%" stop-color="rgba(251,146,60,1)" />
        <stop offset="70%" stop-color="rgba(249,115,22,0.8)" />
        <stop offset="100%" stop-color="rgba(249,115,22,0)" />
      </radialGradient>
      
      <!-- Fundo ambiente / brilho atrás das linhas -->
      <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
        <stop offset="0%" stop-color="rgba(249,115,22,0.15)" />
        <stop offset="40%" stop-color="rgba(251,146,60,0.08)" />
        <stop offset="80%" stop-color="rgba(234,88,12,0.05)" />
        <stop offset="100%" stop-color="rgba(0,0,0,0)" />
      </radialGradient>

      <!-- Fades dinâmicos nas pontas das linhas -->
      <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(0,0,0,1)" />
        <stop offset="15%" stop-color="rgba(249,115,22,0.8)" />
        <stop offset="85%" stop-color="rgba(249,115,22,0.8)" />
        <stop offset="100%" stop-color="rgba(0,0,0,1)" />
      </linearGradient>

      <!-- Efeito de blur para brilho intenso do neon -->
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g>
      <!-- Background ellipses criando os flares espaciais laranjas do fundo -->
      <ellipse cx="300" cy="350" rx="400" ry="200" fill="url(#heroTextBg)" filter="url(#heroTextBlur)" opacity="0.6" />
      
      <!-- 36 threads com caminhos aleatórios via cubic beziers. Exemplo thread 1: -->
      <path id="thread1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#threadFade1)" stroke-width="0.8" fill="none" opacity="0.8" />
      <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <!-- A bolinha que corre ao longo do path -->
        <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#thread1" /></animateMotion>
      </circle>
      <!-- ... -->
    </g>
  </svg>
</div>
```
</details>

### Estilização dos Elementos Principais Exclusivos

Códigos chave do visual de componentes dinâmicos da home.

```css
/* Container de Fundo (Black base e Dark Fade) */
.hero-section {
  background: #000;
}
.section-dark {
  /* Transição em background dark nas listagens da home */
  background: linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%);
}

/* Typography Gradient Exclusivo no Heading 1 (Span `IA.`) */
.text-gradient {
  background: linear-gradient(135deg, #f97316, #fb923c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Efeito Animado no texto ('Contexto.') de hachuras movendo */
.text-styled {
  position: relative;
  font-style: italic;
  font-weight: 300;
  display: inline-flex;
}
.text-styled::after {
  content: attr(data-text);
  position: absolute;
  left: 0.04em;
  top: 0.04em;
  background: linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 0);
  z-index: -1;
  background-size: 0.06em 0.06em;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: line-shadow 15s linear infinite;
}

@keyframes line-shadow {
  0% { background-position: 0 0; }
  100% { background-position: 100% -100%; }
}

/* Glow e Blur Base de Cards e Vídeo (Luz pulsante orgânica) */
.video-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%);
  filter: blur(60px);
  z-index: -1;
  animation: glow-pulse 4s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

/* Glassmorphism Badge estilo Cyber com Dot vermelho pulsando */
.badge {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(249, 115, 22, 0.3);
  color: rgb(251, 146, 60);
  border-radius: 9999px;
}
.badge-dot {
  width: 8px; height: 8px;
  background: #f97316;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

/* Efeito Shimmer metálico que corre pelo botão Gradient */
.btn-primary {
  background: linear-gradient(to right, rgb(249, 115, 22), rgb(234, 88, 12));
  border: 1px solid rgba(251, 146, 60, 0.3);
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.25);
  overflow: hidden; /* Cortar bordas do brilho */
}
.btn-primary::before {
  content: '';
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  100% { left: 100%; }
}

/* Cards de Cursos Modernos na Home com gradiente sutil branco e sombra laranja on hover */
.course-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}
.course-card:hover {
  border-color: rgba(249, 115, 22, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(249, 115, 22, 0.15);
}
```
