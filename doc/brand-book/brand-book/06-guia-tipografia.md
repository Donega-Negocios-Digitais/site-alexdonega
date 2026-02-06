---
name: governar-tipografia
description: Define sistema tipográfico com fonte Geist, hierarquia de tamanhos, pesos e line-heights. Use ao padronizar UI, melhorar legibilidade ou revisar consistência tipográfica.
---

# Sistema Tipográfico - Geist Font

## Objetivo

Estabelecer padrões claros para uso de tipografia no projeto, garantindo consistência visual, legibilidade adequada e maintenibilidade através da fonte Geist integrada com Tailwind.

## Quando Usar Este Guia

- Ao criar novos componentes com texto
- Ao ajustar tamanhos ou pesos de fonte
- Ao implementar hierarquia visual
- Ao revisar legibilidade e acessibilidade
- Ao padronizar tipografia através do site

## Fonte do Projeto

### Visão Geral

| Aspecto | Valor |
|---------|-------|
| **Fonte principal** | Geist (Variable Font) |
| **Origem** | [Geist Font](https://vercel.com/font/geist) - Vercel |
| **Estilo** | Geometric sans-serif, moderno |
| **Pesos carregados** | 100-900 (variable) |
| **Referência** | `src/layouts/Layout.astro` |

### Cadeia de Fallback

```css
font-family: 'Geist', system-ui, -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Carregamento da Fonte

```html
<!-- Preconnect para performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Geist: Variable font com todos os pesos -->
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
      rel="stylesheet">
```

---

## Hierarquia de Tamanhos

### Tabela Completa

| Papel | Tamanho | Peso | Line-height | Classe Tailwind | Uso |
|-------|---------|------|-------------|-----------------|------|
| **Hero H1** | 48-56px | 700-800 | 1.1 | `text-5xl md:text-6xl font-bold` | Títulos principais de hero |
| **H1** | 36-40px | 700 | 1.2 | `text-4xl md:text-5xl font-bold` | Títulos de página |
| **H2** | 28-32px | 600-700 | 1.25 | `text-3xl md:text-4xl font-bold` | Seções principais |
| **H3** | 24px | 600 | 1.3 | `text-2xl font-semibold` | Subseções |
| **H4** | 20px | 500-600 | 1.4 | `text-xl font-medium` | Sub-subseções |
| **Corpo** | 16px | 400 | 1.6 | `text-base` | Parágrafos (padrão) |
| **Corpo grande** | 18px | 400 | 1.6 | `text-lg` | Parágrafos destacados |
| **Secundário** | 14px | 400 | 1.5 | `text-sm` | Texto de suporte |
| **Caption/Meta** | 12-13px | 500 | 1.4 | `text-xs font-medium` | Datas, tags, metadata |
| **Botão** | 14-16px | 500-600 | 1.2-1.4 | `text-sm md:text-base font-medium` | CTAs, botões |

---

## Configuração Tailwind

### Font Family

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Geist',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
    },
  },
};
```

### Base Typography

```css
/* globals.css + Layout.astro */
body {
  font-family: 'Geist', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
```

---

## Padrões de Uso

### Títulos

```astro
<!-- H1 - Título da página -->
<h1 class="text-4xl md:text-5xl font-bold text-foreground">
  Título Principal da Página
</h1>

<!-- H2 - Seção -->
<h2 class="text-3xl md:text-4xl font-bold text-foreground">
  Título de Seção
</h2>

<!-- H3 - Subseção -->
<h3 class="text-2xl font-semibold text-foreground">
  Título de Subseção
</h3>

<!-- H4 - Card/Título pequeno -->
<h4 class="text-xl font-medium text-foreground">
  Título de Card
</h4>
```

### Parágrafos

```astro
<!-- Parágrafo padrão -->
<p class="text-base text-foreground leading-relaxed">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore.
</p>

<!-- Parágrafo destacado -->
<p class="text-lg text-foreground leading-relaxed">
  Parágrafo com destaque visual, ideal para introduções.
</p>
```

### Texto Secundário

```astro
<!-- Texto de suporte -->
<p class="text-sm text-muted-foreground">
  Texto secundário para descrições e informações de suporte.
</p>

<!-- Meta/caption -->
<span class="text-xs font-medium text-muted">
  15 Jan 2024 • 5 min de leitura
</span>
```

### Botões

```astro
<!-- Botão principal -->
<button class="text-sm md:text-base font-medium bg-accent hover:bg-accent-hover">
  Chamada para Ação
</button>

<!-- Botão pequeno -->
<button class="text-xs font-medium px-4 py-2">
  Botão Pequeno
</button>
```

---

## Pesos e Estilos

### Escala de Pesos Geist

| Peso | Valor | Uso Recomendado | Tailwind |
|------|-------|-----------------|----------|
| Thin | 100 | Texto decorativo, grandes títulos | `font-thin` |
| Extra Light | 200 | Ênfase sutil | `font-extralight` |
| Light | 300 | Subtítulos grandes | `font-light` |
| Regular | 400 | Corpo de texto, parágrafos | `font-normal` |
| Medium | 500 | Subtítulos, botões | `font-medium` |
| Semi Bold | 600 | Títulos, destaques | `font-semibold` |
| Bold | 700 | Títulos principais, CTAs | `font-bold` |
| Extra Bold | 800 | Hero titles, impacto | `font-extrabold` |
| Black | 900 | Display, ênfase máxima | `font-black` |

### Padrões de Combinação

```astro
<!-- Título + Subtítulo -->
<h1 class="text-5xl font-bold text-foreground">
  Título Principal
</h1>
<p class="text-xl font-medium text-muted-foreground mt-2">
  Subtítulo com peso médio
</p>

<!-- Card com hierarquia -->
<div class="bg-card p-6 rounded-lg">
  <h3 class="text-2xl font-semibold text-foreground">
    Título do Card
  </h3>
  <p class="text-base text-muted-foreground mt-2">
    Descrição com peso regular
  </p>
  <span class="text-xs font-medium text-muted mt-4">
    Metadata
  </span>
</div>
```

---

## Letter Spacing e Tracking

### Padrões de Tracking

```astro
<!-- Título com tracking tight (padrão) -->
<h2 class="text-4xl font-bold tracking-tight">
  Título Compacto
</h2>

<!-- Uppercase com tracking wide -->
<span class="text-xs font-semibold tracking-widest uppercase">
  Categoria
</span>

<!-- Badge com tracking normal -->
<span class="text-sm font-medium tracking-normal">
  Badge Normal
</span>
```

### Valores de Tracking

| Contexto | Tracking | Classe |
|----------|---------|--------|
| Títulos grandes | -0.025em | `tracking-tight` |
| Uppercase | 0.1em | `tracking-widest` |
| Normal | 0 | `tracking-normal` |
| Texto corpo | 0.01em | `tracking-wide` |

---

## Responsividade

### Padrão Mobile-First

```astro
<!-- Título responsivo -->
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
  Responsivo: 36px → 40px → 48px
</h1>

<!-- Parágrafo responsivo -->
<p class="text-base md:text-lg">
  Responsivo: 16px → 18px
</p>
```

### Breakpoints do Projeto

| Breakpoint | Largura | Ajuste Típico |
|------------|---------|----------------|
| Mobile (padrão) | < 768px | Tamanho base |
| Tablet (md) | ≥ 768px | +1 tamanho de fonte |
| Desktop (lg) | ≥ 1024px | +1 tamanho de fonte |
| Large (xl) | ≥ 1280px | Ajustes finos |

---

## Acessibilidade

### Tamanho Mínimo

| Contexto | Tamanho Mínimo | Classe |
|----------|----------------|--------|
| Desktop corpo | 16px | `text-base` |
| Mobile corpo | 14px aceitável, 16px preferível | `text-sm md:text-base` |
| Botões | 14px | `text-sm` |
| Caption/Meta | 12px | `text-xs` |

### Legibilidade

- ✅ **Line-height**: 1.6 para corpo de texto
- ✅ **Parágrafos**: Separação clara (margin ou space-y)
- ✅ **Largura de linha**: Máximo 70-80 caracteres
- ✅ **Contraste**: Seguir tokens de cor do design system

### Hierarquia Semântica

```astro
<!-- ✅ Correto - Hierarquia lógica -->
<article>
  <h1>Título do Artigo</h1>
  <h2>Seção Principal</h2>
  <p>Parágrafo de introdução...</p>
  <h3>Subseção</h3>
  <p>Mais conteúdo...</p>
</article>

<!-- ❌ Evitar - Pular níveis -->
<h1>Título</h1>
<h3>Subseção (pulou H2)</h3>
```

---

## Melhores Práticas

1. **Use classes Tailwind**: Nunca hardcode tamanho em pixels
2. **Respeite a hierarquia**: H1 → H2 → H3 sem pular níveis
3. **Consistência de pesos**: Máximo 3 pesos por seção
4. **Mobile-first**: Defina mobile, depois `md:` e `lg:`
5. **Line-height adequado**: 1.6 para corpo, 1.1-1.3 para títulos
6. **Font-smoothing**: Sempre use `-webkit-font-smoothing: antialiased`

---

## Anti-Padrões

- ❌ NAO hardcode tamanhos: `style="font-size: 20px"`
- ❌ NAO pule níveis de hierarquia (H1 → H3)
- ❌ NAO use muitos pesos no mesmo contexto (limite 3)
- ❌ NAO use line-height pequeno (<1.5) para corpo
- ❌ NAO ignore responsividade (testar sempre mobile)
- ❌ NAO use tracking excessivo em corpo de texto
- ❌ NAO misture families sem critério claro

---

## Exemplos de Implementação

### Card Completo

```astro
<div class="bg-card rounded-lg border border-border p-6">
  <!-- Tag/Categoria -->
  <span class="text-xs font-semibold tracking-widest uppercase text-accent">
    Categoria
  </span>

  <!-- Título -->
  <h3 class="text-xl font-semibold text-foreground mt-3">
    Título do Card
  </h3>

  <!-- Descrição -->
  <p class="text-base text-muted-foreground mt-2 leading-relaxed">
    Breve descrição do conteúdo do card com linha-height
    adequado para legibilidade.
  </p>

  <!-- Metadata -->
  <div class="flex items-center gap-2 mt-4">
    <span class="text-xs font-medium text-muted">
      5 min de leitura
    </span>
    <span class="text-muted-foreground">•</span>
    <span class="text-xs font-medium text-muted">
      15 Jan 2024
    </span>
  </div>
</div>
```

### Seção Hero

```astro
<section class="py-20">
  <div class="max-w-4xl">
    <!-- Badge -->
    <span class="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
      Novo Conteúdo
    </span>

    <!-- Título Hero -->
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
      Título Principal com
      <span class="text-accent">Destaque</span>
    </h1>

    <!-- Subtítulo -->
    <p class="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed">
      Subtítulo descritivo com tamanho adequado e bom espaçamento
      para leitura confortável.
    </p>

    <!-- CTAs -->
    <div class="flex gap-4 mt-8">
      <button class="bg-accent hover:bg-accent-hover text-white text-sm md:text-base font-medium rounded-full px-6 py-3">
        Ação Principal
      </button>
      <button class="bg-card hover:bg-card-hover border border-border text-foreground text-sm md:text-base font-medium rounded-full px-6 py-3">
        Secundário
      </button>
    </div>
  </div>
</section>
```

### Lista de Posts

```astro
<div class="space-y-6">
  {posts.map(post => (
    <article class="bg-card hover:bg-card-hover rounded-lg border border-border p-6 transition-colors">
      <!-- Metadata -->
      <div class="flex items-center gap-2 text-xs font-medium text-muted">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>

      <!-- Título -->
      <h2 class="text-xl md:text-2xl font-semibold text-foreground mt-2">
        {post.title}
      </h2>

      <!-- Descrição -->
      <p class="text-base text-muted-foreground mt-2 line-clamp-2">
        {post.description}
      </p>

      <!-- Tag -->
      <span class="inline-block text-xs font-medium text-accent mt-4">
        {post.category}
      </span>
    </article>
  ))}
</div>
```

---

**Relacionado:** Para definir as cores do projeto, consulte [`05-guia-cores.md`](./05-guia-cores.md). Para padronizar ícones, consulte [`07-guia-icones.md`](./07-guia-icones.md).


