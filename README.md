# 🎓 Curadoria Que Poupa

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietário-red?style=for-the-badge)

**Seu Tempo e Dinheiro**

[Ver Site](#) • [Documentação](#) • [Reportar Bug](https://github.com/alexdonega/site-alexdonega/issues)

</div>

---

## 📋 Visão Geral do Projeto

**Nome:** Curadoria Que Poupa
**Tagline:** Seu Tempo e Dinheiro
**Descrição:** Plataforma de cursos curados sobre marketing digital, copywriting, tráfego pago e IA
**Público-alvo:** Empreendedores digitais, marketers, criadores de conteúdo
**Diferencial:** Cursos filtrados e testados pelo autor (Alex Donega)

### 🎯 Propósito

Ajudar profissionais a encontrar cursos de qualidade sem perder tempo e dinheiro com opções de baixa qualidade. Cada curso listado foi pessoalmente testado e validado por Alex Donega, especialista em marketing digital e IA.

### 🌟 Features Principais

- ✅ **32 cursos curados** em 4 categorias (Copy, Tráfego, IA, Mentorias)
- ✅ **Sistema de filtros inteligente** (apenas um filtro ativo por vez)
- ✅ **Performance otimizada** com responsive images (WebP + fallback)
- ✅ **Design responsivo** para mobile, tablet e desktop
- ✅ **Lazy loading** para carregamento rápido

---

## 🏗️ Arquitetura Técnica

### Estrutura de Pastas

```
site-alexdonega/
├── index.html                          # Página principal (arquivo único)
├── README.md                           # Este arquivo
├── INTEGRACAO-IMAGENS.md              # Guia de integração de imagens
├── README-PERFORMANCE.md              # Guia de performance
│
├── assets/
│   ├── img/
│   │   ├── cursos/                    # ⚠️ CRIAR: Imagens dos 32 cards (384 arquivos)
│   │   │   ├── engenharia-contexto-320.webp
│   │   │   ├── engenharia-contexto-320.jpg
│   │   │   ├── engenharia-contexto-400.webp
│   │   │   ├── engenharia-contexto-400.jpg
│   │   │   ├── engenharia-contexto-480.webp
│   │   │   ├── engenharia-contexto-480.jpg
│   │   │   ├── engenharia-contexto-640.webp
│   │   │   ├── engenharia-contexto-640.jpg
│   │   │   ├── engenharia-contexto-800.webp
│   │   │   ├── engenharia-contexto-800.jpg
│   │   │   ├── engenharia-contexto-960.webp
│   │   │   ├── engenharia-contexto-960.jpg
│   │   │   └── ... (repetir para 32 cursos)
│   │   │
│   │   ├── logos/                     # Logos de portfólio
│   │   │   ├── logo-novo-envio.svg
│   │   │   ├── logo-doface-branca-cortada.webp
│   │   │   └── logo-operacao-de-vendas.webp
│   │   │
│   │   └── alex-donega.webp          # Foto hero
│   │
│   └── favicons/                      # Favicons
│       ├── favicon-32x32.png
│       ├── favicon-16x16.png
│       └── apple-touch-icon.png
│
├── originals/                         # ⚠️ CRIAR: Imagens originais pré-conversão
│   ├── engenharia-contexto.jpg
│   ├── claude-code.jpg
│   └── ... (32 imagens no total)
│
├── convert-images.sh                  # Script Bash de conversão
├── convert-images.py                  # Script Python de conversão
├── integrar-html.py                   # Script de integração usado
│
└── curso-cards-optimized.html        # Código fonte dos cards (referência)
```

---

## 🖼️ GUIA COMPLETO DE IMAGENS (CRÍTICO)

### ⚠️ ATENÇÃO: Status Atual das Imagens

**Status:** ❌ **PENDENTE - Imagens não criadas ainda**

O HTML está completamente integrado com responsive images, mas as imagens físicas ainda precisam ser adicionadas. Siga as tabelas abaixo para criar todas as imagens necessárias.

---

### 📊 TABELA 1: Imagens dos Cards - Seção "Formação Contínua" (32 Cursos)

**Total de arquivos necessários:** 384 imagens (32 cursos × 12 versões cada)

**Estrutura por curso:** Cada curso precisa de 6 tamanhos × 2 formatos (WebP + JPEG)

| ID | Nome do Curso | Slug Base | Tags | Tamanhos Necessários | Caminho | Status |
|----|---------------|-----------|------|----------------------|---------|--------|
| 01 | Engenharia de Contexto Aplicada | `engenharia-contexto` | ia, copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 02 | Claude Code em 1 Dia | `claude-code` | ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 03 | Segundo Cérebro no Obsidian | `segundo-cerebro` | ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 04 | Copywriting com IA | `copywriting-ia` | copy, ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 05 | Tráfego Pago Inteligente | `trafego-pago` | trafego, ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 06 | Mentoria SaaS Enxuto | `mentoria-saas` | mentorias | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 07 | Estratégias de Marketing Digital | `marketing-digital` | copy, trafego | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 08 | Automação com N8N | `automacao-n8n` | mentorias, ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 09 | Facebook Ads Avançado | `facebook-ads` | trafego | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 10 | Headlines que Vendem | `headlines` | copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 11 | ChatGPT para Negócios | `chatgpt-negocios` | ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 12 | Gestão de Produtos | `gestao-produtos` | mentorias | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 13 | Funis de Webinar | `funis-webinar` | trafego, copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 14 | Prompt Engineering | `prompt-engineering` | ia, mentorias | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 15 | Storytelling para Vendas | `storytelling` | copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 16 | Google Ads Masterclass | `google-ads` | trafego | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 17 | Lançamentos Digitais | `lancamentos` | mentorias, copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 18 | Midjourney Criativo | `midjourney` | ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 19 | Anúncios com IA | `anuncios-ia` | trafego, ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 20 | Copy com Claude | `copy-claude` | copy, ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 21 | Scale de MicroSaaS | `scale-microsaas` | mentorias | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 22 | Emails que Convertem | `emails` | copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 23 | YouTube Ads | `youtube-ads` | trafego | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 24 | Conteúdo com IA | `conteudo-ia` | ia, copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 25 | Growth Hacking | `growth-hacking` | mentorias, trafego | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 26 | VSL Completo | `vsl` | copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 27 | Agentes de IA | `agentes-ia` | ia | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 28 | Remarketing Pro | `remarketing` | trafego, copy | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 29 | Validação de Ideias | `validacao` | mentorias | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 30 | IA para Tráfego | `ia-trafego` | ia, trafego | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 31 | Cartas de Vendas | `cartas-vendas` | copy, mentorias | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |
| 32 | RAG Avançado | `rag-avancado` | ia, mentorias | 320, 400, 480, 640, 800, 960px | `/assets/img/cursos/` | ❌ Pendente |

---

### 📐 TABELA 2: Especificações Detalhadas por Tamanho

Cada curso precisa de **12 arquivos** (6 tamanhos × 2 formatos):

| Tamanho (Largura) | Altura | Proporção | Uso Principal | Formato WebP | Formato JPEG | Peso Máximo |
|-------------------|--------|-----------|---------------|--------------|--------------|-------------|
| **320px** | 480px | 2:3 | Mobile 1× | ✅ Obrigatório | ✅ Fallback | 20-25 KB |
| **400px** | 600px | 2:3 | Tablet 1× | ✅ Obrigatório | ✅ Fallback | 25-30 KB |
| **480px** | 720px | 2:3 | Desktop 1× | ✅ Obrigatório | ✅ Fallback | 35-40 KB |
| **640px** | 960px | 2:3 | Mobile 2× (Retina) | ✅ Obrigatório | ✅ Fallback | 40-50 KB |
| **800px** | 1200px | 2:3 | Tablet 2× (Retina) | ✅ Obrigatório | ✅ Fallback | 55-65 KB |
| **960px** | 1440px | 2:3 | Desktop 2× (Retina) | ✅ Obrigatório | ✅ Fallback | 70-85 KB |

**Exemplo de nomenclatura para o curso "Engenharia de Contexto Aplicada":**
```
engenharia-contexto-320.webp  (20 KB)
engenharia-contexto-320.jpg   (30 KB)
engenharia-contexto-400.webp  (25 KB)
engenharia-contexto-400.jpg   (35 KB)
engenharia-contexto-480.webp  (35 KB)
engenharia-contexto-480.jpg   (50 KB)
engenharia-contexto-640.webp  (40 KB)
engenharia-contexto-640.jpg   (60 KB)
engenharia-contexto-800.webp  (55 KB)
engenharia-contexto-800.jpg   (75 KB)
engenharia-contexto-960.webp  (70 KB)
engenharia-contexto-960.jpg   (95 KB)
```

---

### 📸 TABELA 3: Outras Imagens do Site

| ID | Nome do Arquivo | Descrição | Tamanho | Formato | Peso Máx | Caminho | Status |
|----|-----------------|-----------|---------|---------|----------|---------|--------|
| OG-01 | `og-image.jpg` | Imagem para compartilhamento social (Open Graph/Twitter) | 1200×630px | JPEG | 100 KB | `/assets/img/` | ⚠️ **CRIAR** |
| HERO-01 | `alex-donega.webp` | Foto hero principal | 400×400px | WebP | 50 KB | `/assets/img/` | ✅ Existente |
| LOGO-01 | `logo-novo-envio.svg` | Logo Novo Envio | Vetorial | SVG | 5 KB | `/assets/img/logos/` | ✅ Existente |
| LOGO-02 | `logo-doface-branca-cortada.webp` | Logo Doface | 120×40px | WebP | 8 KB | `/assets/img/logos/` | ✅ Existente |
| LOGO-03 | `logo-operacao-de-vendas.webp` | Logo Operação Vendas | 120×40px | WebP | 8 KB | `/assets/img/logos/` | ✅ Existente |
| FAV-01 | `favicon-32x32.png` | Favicon 32px | 32×32px | PNG | 2 KB | `/assets/favicons/` | ✅ Existente |
| FAV-02 | `favicon-16x16.png` | Favicon 16px | 16×16px | PNG | 1 KB | `/assets/favicons/` | ✅ Existente |
| FAV-03 | `apple-touch-icon.png` | Ícone iOS | 180×180px | PNG | 10 KB | `/assets/favicons/` | ✅ Existente |

---

## 🔧 Especificações Técnicas das Imagens

### Requisitos Gerais

```yaml
Formatos Aceitos:
  - Primário: WebP (qualidade 85%, effort 6)
  - Secundário: JPEG (qualidade 85%, progressive)
  - Logos: SVG (vetorial quando possível)
  - Ícones: SVG ou PNG com transparência

Aspect Ratio Obrigatório:
  - Cards de cursos: 2:3 (vertical, estilo poster)
  - Hero: 1:1 (quadrado)
  - Logos: Variável (manter proporção original)

Otimização:
  - Remover metadados EXIF
  - Comprimir com TinyPNG, Squoosh ou Sharp
  - Usar progressive JPEG
  - WebP com método 6 (máxima compressão)

Nomenclatura:
  - Padrão: kebab-case (ex: segundo-cerebro-480.webp)
  - Idioma: português-br
  - Sem caracteres especiais (acentos, espaços)
  - Incluir tamanho no nome: -320, -400, -480, etc.

Alt Text (SEO):
  - Descritivo e conciso (max 125 caracteres)
  - Incluir palavra-chave do curso
  - Exemplo: "Engenharia de Contexto Aplicada - Curso IA e Copywriting 2024"
```

---

### 💻 Código Exemplo para Responsive Images

#### Exemplo 1: Card de Curso (Picture Element Completo)

```html
<!-- Card com Responsive Images - Prioridade Alta (Above the Fold) -->
<div class="curso-card" data-tags="ia,copy">
    <div class="curso-poster">
        <picture>
            <!-- Desktop: WebP 2× Retina -->
            <source media="(min-width: 1024px)"
                    type="image/webp"
                    srcset="assets/img/cursos/engenharia-contexto-480.webp 1x,
                            assets/img/cursos/engenharia-contexto-960.webp 2x">

            <!-- Desktop: JPEG 2× Fallback -->
            <source media="(min-width: 1024px)"
                    type="image/jpeg"
                    srcset="assets/img/cursos/engenharia-contexto-480.jpg 1x,
                            assets/img/cursos/engenharia-contexto-960.jpg 2x">

            <!-- Tablet: WebP 2× -->
            <source media="(min-width: 768px)"
                    type="image/webp"
                    srcset="assets/img/cursos/engenharia-contexto-400.webp 1x,
                            assets/img/cursos/engenharia-contexto-800.webp 2x">

            <!-- Tablet: JPEG 2× Fallback -->
            <source media="(min-width: 768px)"
                    type="image/jpeg"
                    srcset="assets/img/cursos/engenharia-contexto-400.jpg 1x,
                            assets/img/cursos/engenharia-contexto-800.jpg 2x">

            <!-- Mobile: WebP 2× -->
            <source type="image/webp"
                    srcset="assets/img/cursos/engenharia-contexto-320.webp 1x,
                            assets/img/cursos/engenharia-contexto-640.webp 2x">

            <!-- Mobile: JPEG 2× Default (Fallback Universal) -->
            <img src="assets/img/cursos/engenharia-contexto-320.jpg"
                 srcset="assets/img/cursos/engenharia-contexto-320.jpg 1x,
                         assets/img/cursos/engenharia-contexto-640.jpg 2x"
                 alt="Engenharia de Contexto Aplicada - Curso IA e Copywriting 2024"
                 width="480"
                 height="720"
                 loading="eager"
                 fetchpriority="high"
                 decoding="sync"
                 style="width: 100%; height: 100%; object-fit: cover;">
        </picture>
    </div>
    <div class="curso-info">
        <h4 class="curso-title">Engenharia de Contexto Aplicada</h4>
        <div class="curso-tags">
            <span class="curso-tag ia">IA</span>
            <span class="curso-tag copy">Copy</span>
        </div>
        <span class="curso-year">2024</span>
    </div>
</div>
```

#### Exemplo 2: Card com Lazy Loading (Below the Fold)

```html
<!-- Card 7+ - Lazy Loading -->
<div class="curso-card" data-tags="copy,trafego">
    <div class="curso-poster">
        <picture>
            <source media="(min-width: 1024px)" type="image/webp"
                    srcset="assets/img/cursos/marketing-digital-480.webp 1x,
                            assets/img/cursos/marketing-digital-960.webp 2x">
            <source media="(min-width: 1024px)" type="image/jpeg"
                    srcset="assets/img/cursos/marketing-digital-480.jpg 1x,
                            assets/img/cursos/marketing-digital-960.jpg 2x">
            <!-- ... outras sources ... -->
            <img src="assets/img/cursos/marketing-digital-320.jpg"
                 alt="Estratégias de Marketing Digital - Copy e Tráfego 2024"
                 width="480"
                 height="720"
                 loading="lazy"
                 decoding="async"
                 style="width: 100%; height: 100%; object-fit: cover;">
        </picture>
    </div>
    <!-- ... resto do card ... -->
</div>
```

---

## 🎨 Sistema de Filtros (Funcionalidade)

### Comportamento: Radio Button (Apenas UM filtro ativo)

**Implementação:** JavaScript Vanilla (sem jQuery)

**Localização no código:** `index.html` (linhas 2424-2530)

**Funcionamento:**
1. Usuário clica em um filtro (ex: "Copy")
2. Todos os outros filtros são desmarcados automaticamente
3. Apenas o filtro clicado fica ativo (classe `.active`)
4. Cards são filtrados por `data-tags`

**Classes CSS:**
- `.filter-tag` - Estado padrão do botão
- `.filter-tag.active` - Botão selecionado (fundo laranja #FF6B35)
- `.curso-card.dimmed` - Cards não correspondem ao filtro (opacidade 0.2)
- `.curso-card.highlighted` - Cards correspondem ao filtro (scale 1.05)

**Data Attributes:**
```html
<!-- Filtros -->
<button class="filter-tag active" data-filter="todos">Todos</button>
<button class="filter-tag" data-filter="copy">Copy</button>
<button class="filter-tag" data-filter="trafego">Tráfego</button>
<button class="filter-tag" data-filter="ia">IA</button>
<button class="filter-tag" data-filter="mentorias">Mentorias</button>

<!-- Cards -->
<div class="curso-card" data-tags="ia,copy">...</div>
<div class="curso-card" data-tags="trafego">...</div>
```

### Código de Referência (JavaScript)

```javascript
// Acervo Cinematográfico - Filtros (Comportamento Radio Button)
function initAcervoFilters() {
    const filters = document.querySelectorAll('.filter-tag');
    const cards = document.querySelectorAll('.curso-card');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const tag = filter.dataset.filter;

            // COMPORTAMENTO RADIO BUTTON: Remove 'active' de TODOS os filtros
            filters.forEach(f => f.classList.remove('active'));

            // Adiciona 'active' apenas no filtro clicado
            filter.classList.add('active');

            if (tag === 'todos') {
                // Mostra todos os cards no estado normal
                cards.forEach(card => {
                    card.classList.remove('dimmed', 'highlighted');
                });
            } else {
                // Aplica filtro específico
                cards.forEach(card => {
                    const cardTags = card.dataset.tags.split(',');
                    const hasMatch = cardTags.includes(tag);

                    card.classList.toggle('dimmed', !hasMatch);
                    card.classList.toggle('highlighted', hasMatch);
                });
            }
        });
    });
}

// Inicializa ao carregar a página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAcervoFilters);
} else {
    initAcervoFilters();
}
```

---

## 🎨 Estilos e Design System

### Paleta de Cores

```css
:root {
    /* Cores Principais */
    --bg-main: #0a0a0a;           /* Preto (fundo principal) */
    --bg-secondary: #141414;       /* Preto mais claro */
    --bg-card: #1a1a1a;           /* Fundo dos cards */

    /* Texto */
    --text-white: #ffffff;         /* Branco (títulos) */
    --text-gray: #a3a3a3;         /* Cinza (texto corpo) */
    --text-muted: #6b6b6b;        /* Cinza escuro (secundário) */

    /* Acentos */
    --accent: #D87757;            /* Laranja (primário) */
    --accent-hover: #C06545;      /* Laranja escuro (hover) */
    --accent-light: rgba(216, 119, 87, 0.1);  /* Laranja transparente */

    /* Bordas */
    --border: rgba(255, 255, 255, 0.1);  /* Branco 10% */
}
```

### Tipografia

```css
/* Fontes */
font-family:
  - Títulos/Serifadas: 'Source Serif 4', Georgia, serif
  - Corpo/Sans-serif: 'Inter', -apple-system, sans-serif

/* Tamanhos Base */
Mobile:  16px (body), 24px (h2), 18px (h3)
Desktop: 18px (body), 48px (h2), 24px (h3)

/* Pesos */
Regular: 400
Medium:  500
Semibold: 600
Bold:    700
```

### Breakpoints Responsivos

```css
/* Mobile First */
Base: 0-767px (mobile)

@media (min-width: 768px) {
    /* Tablet */
}

@media (min-width: 1024px) {
    /* Desktop */
}
```

### Espaçamento

```css
/* Sistema de Espaçamento (múltiplos de 8px) */
--spacing-xs:  8px;
--spacing-sm:  16px;
--spacing-md:  24px;
--spacing-lg:  32px;
--spacing-xl:  48px;
--spacing-2xl: 64px;
```

---

## ✅ Checklist de Desenvolvimento

### 🟢 CONCLUÍDO

- [x] Estrutura HTML base (arquivo único)
- [x] Layout responsivo mobile-first (3 breakpoints)
- [x] Sistema de filtros funcional (radio button)
- [x] Remoção ícones play dos cards (decisão de design)
- [x] Responsive images com Picture element
- [x] Loading strategy (eager/lazy)
- [x] WebP + JPEG fallback configurado
- [x] Alt text para SEO
- [x] Width/height para prevenir CLS
- [x] CSS otimizado (mobile-first)
- [x] JavaScript vanilla (sem dependências)

### 🟡 EM ANDAMENTO

- [ ] Otimização de performance (aguardando imagens)
- [ ] Testes cross-browser
- [ ] Validação HTML/CSS (W3C)

### 🔴 PENDENTE (CRÍTICO - BLOQUEANTE)

- [ ] **Criar 32 imagens originais** (pasta `originals/`)
- [ ] **Converter imagens** (rodar script Python/Bash)
- [ ] **Validar imagens** (384 arquivos esperados)
- [ ] Testar Lighthouse (Performance > 90)
- [ ] SEO meta tags completas
- [ ] Schema.org structured data
- [ ] Analytics (Google Analytics 4)
- [ ] Formulário de contato funcional
- [ ] Integração com plataforma de checkout
- [ ] Certificado SSL (HTTPS)

### 🟣 FUTURO (Melhorias)

- [ ] Service Worker (PWA)
- [ ] Modo escuro (toggle)
- [ ] Busca de cursos
- [ ] Ordenação personalizada
- [ ] Sistema de reviews
- [ ] Blog integrado
- [ ] Newsletter signup

---

## 🚀 Guia de Deploy

### Ambiente Local

```bash
# 1. Clone o repositório
git clone https://github.com/alexdonega/site-alexdonega.git
cd site-alexdonega

# 2. Abra diretamente (site estático)
# Opção A: Abrir index.html no navegador
open index.html  # Mac
start index.html # Windows

# Opção B: Usar servidor local (recomendado)
npx serve .
# Acesse: http://localhost:3000

# Opção C: Python SimpleHTTPServer
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Preparar Imagens (OBRIGATÓRIO antes do deploy)

```bash
# 1. Criar pasta e adicionar imagens originais
mkdir originals
# Copie 32 imagens JPG/PNG para originals/

# 2. Converter imagens (escolha um método)

# Método A: Python (Windows/Mac/Linux)
pip install Pillow
python convert-images.py

# Método B: Bash (Mac/Linux/WSL)
chmod +x convert-images.sh
./convert-images.sh

# 3. Validar
# Devem existir 384 arquivos em assets/img/cursos/
ls assets/img/cursos/ | wc -l
# Saída esperada: 384
```

### Deploy em Produção

#### Opção 1: Netlify (Recomendado)

```bash
# 1. Conectar repositório GitHub
# Acesse: https://app.netlify.com/start

# 2. Configurar build
Build command: (deixe vazio - site estático)
Publish directory: ./
Branch to deploy: main

# 3. Configurar domínio customizado
Site settings → Domain management
# Adicione: www.curadoriaquepoupa.com.br

# 4. Configurar redirects (arquivo netlify.toml)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Opção 2: Vercel

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
# Siga as instruções interativas

# 3. Produção
vercel --prod
```

#### Opção 3: GitHub Pages

```bash
# 1. Settings → Pages
# Source: Deploy from a branch
# Branch: main / (root)

# 2. Acessar
# https://alexdonega.github.io/site-alexdonega/
```

### Checklist Pré-Deploy

```markdown
- [ ] Todas as 384 imagens criadas e otimizadas
- [ ] Teste em Chrome, Firefox, Safari, Edge
- [ ] Lighthouse Performance > 90 (mobile e desktop)
- [ ] Links funcionando (verificar href)
- [ ] Formulários testados
- [ ] Meta tags SEO configuradas
- [ ] Favicon funcionando
- [ ] Google Analytics configurado
- [ ] Backup do código
- [ ] Domínio configurado + SSL
```

---

## 🛠️ Scripts de Otimização de Imagens

### Script 1: Conversão em Bash (Mac/Linux/WSL)

**Arquivo:** `convert-images.sh`

```bash
#!/bin/bash
#############################################
# Script de Conversão em Batch - Cursos
# Converte 32 imagens para 6 tamanhos × 2 formatos
#############################################

INPUT_DIR="originals"
OUTPUT_DIR="assets/img/cursos"
QUALITY_WEBP=85
QUALITY_JPEG=85
SIZES=(320 400 480 640 800 960)

# Criar diretório de saída
mkdir -p "$OUTPUT_DIR"

echo "Iniciando conversao de imagens..."

total=0
success=0

# Loop por todos os arquivos
for file in "$INPUT_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    [ -e "$file" ] || continue

    filename=$(basename "$file")
    basename="${filename%.*}"

    echo "Processando: $filename"

    for width in "${SIZES[@]}"; do
        height=$((width * 3 / 2))  # Aspect ratio 2:3

        # Gerar WebP
        cwebp -q $QUALITY_WEBP \
              -resize $width $height \
              -mt \
              "$file" \
              -o "$OUTPUT_DIR/${basename}-${width}.webp" 2>/dev/null

        # Gerar JPEG
        convert "$file" \
                -resize "${width}x${height}^" \
                -gravity center \
                -extent "${width}x${height}" \
                -quality $QUALITY_JPEG \
                -strip \
                "$OUTPUT_DIR/${basename}-${width}.jpg" 2>/dev/null
    done

    ((total++))
    ((success++))
    echo "Completo: $basename (12 arquivos)"
done

echo "========================================="
echo "Conversao concluida!"
echo "   Imagens processadas: $success/$total"
echo "   Arquivos gerados: $((success * 12))"
echo "========================================="
```

**Como usar:**
```bash
chmod +x convert-images.sh
./convert-images.sh
```

---

### Script 2: Conversão em Python (Windows/Mac/Linux)

**Arquivo:** `convert-images.py`

```python
#!/usr/bin/env python3
"""
Script Python para conversão em batch de imagens
Gera 6 tamanhos otimizados em WebP + JPEG
Requer: pip install Pillow
"""

import os
from PIL import Image
from pathlib import Path

INPUT_DIR = "originals"
OUTPUT_DIR = "assets/img/cursos"
QUALITY_WEBP = 85
QUALITY_JPEG = 85
SIZES = [320, 400, 480, 640, 800, 960]

def convert_image(input_path, basename):
    try:
        with Image.open(input_path) as img:
            # Converter para RGB se necessário
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background

            for width in SIZES:
                height = int(width * 1.5)  # Aspect ratio 2:3
                resized = img.resize((width, height), Image.Resampling.LANCZOS)

                # Salvar WebP
                webp_path = OUTPUT_DIR / f"{basename}-{width}.webp"
                resized.save(webp_path, 'WEBP', quality=QUALITY_WEBP, method=6)

                # Salvar JPEG
                jpeg_path = OUTPUT_DIR / f"{basename}-{width}.jpg"
                resized.save(jpeg_path, 'JPEG', quality=QUALITY_JPEG,
                           optimize=True, progressive=True)

        return True
    except Exception as e:
        print(f"  Erro: {e}")
        return False

def main():
    print("Iniciando conversao de imagens...")

    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(parents=True, exist_ok=True)

    if not input_path.exists():
        print(f"Diretorio '{INPUT_DIR}' nao encontrado!")
        return

    extensions = ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG']
    images = []
    for ext in extensions:
        images.extend(input_path.glob(ext))

    if not images:
        print(f"Nenhuma imagem encontrada em '{INPUT_DIR}'!")
        return

    total = len(images)
    success = 0

    for img_path in images:
        basename = img_path.stem
        print(f"Processando: {img_path.name}")

        if convert_image(img_path, basename):
            success += 1
            print(f"Completo: {basename} (12 arquivos)\n")

    print("=========================================")
    print("Conversao concluida!")
    print(f"   Imagens processadas: {success}/{total}")
    print(f"   Arquivos gerados: {success * 12}")
    print("=========================================")

if __name__ == "__main__":
    main()
```

**Como usar:**
```bash
pip install Pillow
python convert-images.py
```

---

### Script 3: Validação de Imagens (Bônus)

**Arquivo:** `validate-images.js`

```javascript
/**
 * Script de Validação de Imagens
 * Verifica se todas as imagens necessárias existem e estão otimizadas
 */

const fs = require('fs');
const path = require('path');

const CURSOS = [
    'engenharia-contexto', 'claude-code', 'segundo-cerebro', 'copywriting-ia',
    'trafego-pago', 'mentoria-saas', 'marketing-digital', 'automacao-n8n',
    'facebook-ads', 'headlines', 'chatgpt-negocios', 'gestao-produtos',
    'funis-webinar', 'prompt-engineering', 'storytelling', 'google-ads',
    'lancamentos', 'midjourney', 'anuncios-ia', 'copy-claude',
    'scale-microsaas', 'emails', 'youtube-ads', 'conteudo-ia',
    'growth-hacking', 'vsl', 'agentes-ia', 'remarketing',
    'validacao', 'ia-trafego', 'cartas-vendas', 'rag-avancado'
];

const TAMANHOS = [320, 400, 480, 640, 800, 960];
const FORMATOS = ['webp', 'jpg'];
const BASE_PATH = 'assets/img/cursos';

let totalEsperado = CURSOS.length * TAMANHOS.length * FORMATOS.length;
let totalEncontrado = 0;
let faltando = [];
let pesados = [];

console.log('\n🔍 Validando imagens...\n');

CURSOS.forEach(curso => {
    TAMANHOS.forEach(tamanho => {
        FORMATOS.forEach(formato => {
            const filename = `${curso}-${tamanho}.${formato}`;
            const filepath = path.join(BASE_PATH, filename);

            if (fs.existsSync(filepath)) {
                totalEncontrado++;

                // Verificar tamanho do arquivo
                const stats = fs.statSync(filepath);
                const sizeKB = Math.round(stats.size / 1024);

                // Limites por tamanho
                const limites = {
                    320: { webp: 25, jpg: 35 },
                    400: { webp: 30, jpg: 40 },
                    480: { webp: 40, jpg: 55 },
                    640: { webp: 50, jpg: 70 },
                    800: { webp: 65, jpg: 85 },
                    960: { webp: 85, jpg: 105 }
                };

                const limite = limites[tamanho][formato];

                if (sizeKB > limite) {
                    pesados.push({ filename, sizeKB, limite });
                }

                console.log(`✅ ${filename} - ${sizeKB} KB`);
            } else {
                faltando.push(filename);
                console.log(`❌ ${filename} - FALTANDO`);
            }
        });
    });
});

// Relatório final
console.log('\n=========================================');
console.log('📊 RELATÓRIO DE VALIDAÇÃO');
console.log('=========================================');
console.log(`Total esperado: ${totalEsperado} arquivos`);
console.log(`Total encontrado: ${totalEncontrado} arquivos`);
console.log(`Faltando: ${faltando.length} arquivos`);
console.log(`Acima do peso: ${pesados.length} arquivos`);

if (faltando.length > 0) {
    console.log('\n❌ ARQUIVOS FALTANDO:');
    faltando.forEach(f => console.log(`   - ${f}`));
}

if (pesados.length > 0) {
    console.log('\n⚠️  ARQUIVOS ACIMA DO PESO:');
    pesados.forEach(({filename, sizeKB, limite}) => {
        console.log(`   - ${filename}: ${sizeKB} KB (limite: ${limite} KB)`);
    });
}

if (totalEncontrado === totalEsperado && pesados.length === 0) {
    console.log('\n🎉 TODAS AS IMAGENS VALIDADAS COM SUCESSO!');
} else {
    console.log('\n⚠️  VALIDAÇÃO INCOMPLETA - Veja erros acima');
}

console.log('=========================================\n');
```

**Como usar:**
```bash
node validate-images.js
```

---

## 📞 Contato e Suporte

### Equipe do Projeto

**Desenvolvedor Principal:** Alex Donega
**Design & UX:** [Nome do Designer]
**Copywriting:** [Nome do Copywriter]
**SEO:** [Nome do Especialista SEO]

### Como Contribuir

Para adicionar ou substituir imagens:

1. **Siga as especificações da Tabela 2** (tamanhos, formatos, pesos)
2. **Use os nomes exatos** da Tabela 1 (slugs corretos)
3. **Execute o script de otimização** (Python ou Bash)
4. **Valide com o script** `validate-images.js`
5. **Teste no navegador** (Chrome, Firefox, Safari, Edge)

### Reportar Problemas

**Bugs:** Abra uma [issue no GitHub](https://github.com/alexdonega/site-alexdonega/issues)
**Sugestões:** Pull Request ou email para [contato@alexdonega.com.br]
**Documentação:** Consulte `INTEGRACAO-IMAGENS.md` para detalhes técnicos

---

## 📄 Licença e Direitos

```
© 2024 Alex Donega - Curadoria Que Poupa
Todos os direitos reservados aos criadores dos cursos listados.

Licença do código: MIT License
Licença de conteúdo: Todos os direitos reservados

AVISO IMPORTANTE:
- As imagens de cursos são propriedade dos respectivos criadores
- Uso autorizado apenas para fins de curadoria educacional
- Placeholders temporários devem ser substituídos antes do lançamento
- Respeitar direitos autorais de terceiros
```

---

## 🎯 Roadmap

### Q1 2024
- [x] Estrutura HTML/CSS
- [x] Sistema de filtros
- [x] Responsive images
- [ ] Adicionar 32 imagens finais
- [ ] Deploy em produção

### Q2 2024
- [ ] Blog integrado
- [ ] Sistema de reviews
- [ ] Newsletter
- [ ] Modo escuro

### Q3 2024
- [ ] PWA (Progressive Web App)
- [ ] Busca avançada
- [ ] Ordenação personalizada
- [ ] Integração com plataforma de vendas

---

## 📚 Documentação Adicional

- [INTEGRACAO-IMAGENS.md](./INTEGRACAO-IMAGENS.md) - Guia completo de integração de imagens
- [README-PERFORMANCE.md](./README-PERFORMANCE.md) - Quick start de performance
- [CHANGELOG.md](./CHANGELOG.md) - Histórico de mudanças
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guia de contribuição

---

<div align="center">

**Desenvolvido com ❤️ por Alex Donega**

[Site](https://alexdonega.com.br) • [LinkedIn](https://linkedin.com/in/alexdonega) • [YouTube](https://youtube.com/@alexdonega)

</div>
