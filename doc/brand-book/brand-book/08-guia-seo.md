---
name: estrategia-seo-indices
description: Define estratégia de SEO técnico com estrutura de URLs, metatags, canonical, sitemap, robots, schema markup e monitoracao. Use ao iniciar projeto, revisar SEO existente, preparar migração ou reduzir risco de perda de indexação.
---

# Guia de Documentação de Estratégia de SEO e Índices

## Objetivo

Criar documentação completa de estratégia de SEO e indexação que defina como o site é estruturado para mecanismos de busca, incluindo meta tags, sitemap, robots.txt, estrutura de URLs, schema markup e estratégias de monitoramento.

## Quando Usar Este Guia

- Ao planejar SEO técnico para novo projeto
- Ao documentar configurações de indexação existentes
- Ao criar diretrizes de conteúdo para busca
- Ao otimizar visibilidade em mecanismos de busca
- Ao configurar sitemap e robots.txt
- Ao implementar schema markup

## Workflow de Documentação

Copie este checklist e acompanhe o progresso:

```
Progresso da Documentação:
- [ ] 1. Identificar fonte da verdade (arquivos de config)
- [ ] 2. Mapear estrutura de URLs e roteamento
- [ ] 3. Documentar meta tags implementadas
- [ ] 4. Configurar sitemap.xml
- [ ] 5. Configurar robots.txt
- [ ] 6. Implementar estratégia de canonical tags
- [ ] 7. Adicionar schema markup (JSON-LD)
- [ ] 8. Definir estratégia de Open Graph/Twitter Cards
- [ ] 9. Configurar monitoramento (Google Search Console)
- [ ] 10. Criar seção de anti-padrões
- [ ] 11. Revisar com time de marketing/dev
```

## Passo 1: Identificação de Fonte da Verdade

Documente onde configurações de SEO vivem:

| Local | Propósito | O que Documentar |
|-------|-----------|------------------|
| `src/layouts/Layout.astro` | Meta tags globais | `<title>`, `<meta>`, Open Graph |
| `astro.config.mjs` | Configuração do site | `site`, URL base para sitemap |
| `public/sitemap.xml` | Mapa do site para crawlers | Todas URLs indexáveis |
| `public/robots.txt` | Diretrizes para crawlers | Allow/disallow regras |
| Componentes de SEO | Meta tags dinâmicas | `<SEO>` component |
| `public/robots.txt` | Arquivo de instruções para bots | Sitemap reference, disallow rules |

**Ação:** Execute `grep -r "meta\|title\|description" src/` para encontrar meta tags.

## Passo 2: Estrutura de URLs

### 2.1. Padrões de Roteamento

Documente a estrutura de URLs do site:

| Tipo de Página | Padrão de URL | Exemplo | Indexável? |
|----------------|---------------|---------|------------|
| Home | `/` | `https://exemplo.com/` | Sim |
| Sobre | `/sobre` | `https://exemplo.com/sobre` | Sim |
| Blog (listagem) | `/blog` | `https://exemplo.com/blog` | Sim |
| Blog (post) | `/blog/:slug` | `https://exemplo.com/blog/post-slug` | Sim |
| Categoria | `/blog/:categoria` | `https://exemplo.com/blog/tecnologia` | Sim |
| Página de erro | `/404` | `https://exemplo.com/404` | Não |
| Páginas de busca | `/buscar?q=` | `https://exemplo.com/buscar?q=termo` | Não |

### 2.2. Convenções de URL

- **Use kebab-case**: `/meu-artigo` não `/MeuArtigo`
- **Minimize profundidade**: `/blog/post` é melhor que `/arquivo/2024/01/post`
- **Palavras-chave relevantes**: URLs descritivas, não numéricas
- **Evite parâmetros**: `/produto/camisa` é melhor que `/produto?id=123`
- **Lowercase**: Sempre use minúsculas
- **Trailing slash**: Escolha um padrão (com ou sem `/` no final)

## Passo 3: Meta Tags Essenciais

### 3.1. Meta Tags Base

```html
<!-- Título da página -->
<title>Título da Página | Nome do Site</title>

<!-- Descrição (meta description) -->
<meta name="description" content="Descrição concisa e atrativa do conteúdo (150-160 caracteres).">

<!-- Charset e Viewport -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Robots -->
<meta name="robots" content="index, follow">
```

### 3.2. Open Graph (Facebook/LinkedIn)

```html
<meta property="og:title" content="Título do Compartilhamento">
<meta property="og:description" content="Descrição para social media">
<meta property="og:image" content="https://exemplo.com/img/og-image.jpg">
<meta property="og:url" content="https://exemplo.com/pagina">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
```

### 3.3. Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título do Tweet">
<meta name="twitter:description" content="Descrição do Tweet">
<meta name="twitter:image" content="https://exemplo.com/img/twitter-image.jpg">
```

### 3.4. Canonical Tags

```html
<!-- Evita conteúdo duplicado -->
<link rel="canonical" href="https://exemplo.com/pagina-canonical">
```

## Passo 4: Sitemap.xml

### 4.1. Estrutura do Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://exemplo.com/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://exemplo.com/sobre</loc>
    <lastmod>2024-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://exemplo.com/blog/post-slug</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

### 4.2. Gerando Sitemap no Astro

**Instalação:**
```bash
npx @astrojs/sitemap
```

**Configuração:**
```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexdonega.com.br', // Obrigatório para sitemap funcionar
  integrations: [sitemap()],
});
```

**Sitemap gerado automaticamente em:**
- `/sitemap-index.xml` - Sitemap principal
- `/sitemap-0.xml` - Primeiro lote de URLs (gerado no build)

### 4.3. Personalizando Sitemap no Astro

Para control avançado sobre URLs no sitemap:

```astro
---
// src/pages/sitemap.xml.ts
import { getCollection } from 'astro:content';

function generateSiteMap(posts: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://alexdonega.com.br/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://alexdonega.com.br/blog</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      ${posts.map(post => `
        <url>
          <loc>https://alexdonega.com.br/blog/${post.slug}</loc>
          <lastmod>${new Date(post.data.pubDate).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`;
}

export async function GET(context) {
  const posts = await getCollection('blog');
  return new Response(generateSiteMap(posts), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
---
```

### 4.4. Prioridades de Sitemap

| Tipo de Página | Priority | Change Frequency |
|----------------|----------|------------------|
| Home | 1.0 | daily |
| Blog (listagem) | 0.9 | weekly |
| Blog posts | 0.7 | weekly/monthly |
| Páginas principais | 0.8 | monthly |
| Categorias/tags | 0.5 | weekly |
| Páginas antigas | 0.3-0.5 | monthly/yearly |

## Passo 5: Robots.txt

### 5.1. Configuração Básica

```
# Permitir todos os bots
User-agent: *
Allow: /

# Bloquear áreas específicas
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Sitemap
Sitemap: https://exemplo.com/sitemap-index.xml
```

### 5.2. Bloquear Bot Específico

```
# Bloquear bot específico
User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /private/
```

### 5.3. Robots.txt com Controle de AI Crawlers (2025)

```
# robots.txt para alexdonega.com.br
# Atualizado para 2025 com controle de AI crawlers

# ============================================
# BOTS DE BUSCA PRINCIPAIS (permitir todos)
# ============================================
User-agent: *
Allow: /
Crawl-delay: 1

# ============================================
# ÁREAS BLOQUEADAS PARA TODOS
# ============================================
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /.well-known/

# ============================================
# CONTROLAR AI CRAWLERS (2025)
# ============================================
# OpenAI GPTBot
User-agent: GPTBot
Disallow: /

# OpenAI ChatGPT
User-agent: ChatGPT-User
Disallow: /

# Google AI (Google-Extended)
User-agent: Google-Extended
Disallow: /

# Anthropic Claude
User-agent: Claude-Web
Disallow: /

# Common Crawl (usado para treino de IA)
User-agent: CCBot
Disallow: /

# ============================================
# PERMITIR AI CRAWLERS EM ÁREAS ESPECÍFICAS
# ============================================
# Exemplo: permitir GPTBot apenas no blog
# User-agent: GPTBot
# Allow: /blog/
# Disallow: /

# ============================================
# SITEMAP
# ============================================
Sitemap: https://alexdonega.com.br/sitemap-index.xml
```

**Principais AI Crawlers em 2025:**

| Bot | Proprietário | Finalidade |
|-----|--------------|------------|
| `GPTBot` | OpenAI | Treino do ChatGPT |
| `ChatGPT-User` | OpenAI | Browse do ChatGPT |
| `Google-Extended` | Google | Treino do Gemini/Bard |
| `Claude-Web` | Anthropic | Treino do Claude |
| `CCBot` | Common Crawl | Dataset público para IAs |
| `FacebookBot` | Meta | Treino de modelos |

**Nota:** Bloquear AI crawlers pode impedir que seu conteúdo seja usado por IAs, mas também pode reduzir visibilidade em ferramentas que usam esses dados.

## Passo 6: Schema Markup (JSON-LD)

### 6.1. Schema de Organização

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nome da Empresa",
  "url": "https://exemplo.com",
  "logo": "https://exemplo.com/img/logo.png",
  "sameAs": [
    "https://twitter.com/empresa",
    "https://linkedin.com/company/empresa"
  ]
}
</script>
```

### 6.2. Schema de Artigo (Blog Post)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título do Artigo",
  "author": {
    "@type": "Person",
    "name": "Nome do Autor"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "description": "Descrição do artigo",
  "image": "https://exemplo.com/img/article-cover.jpg"
}
</script>
```

### 6.3. Schema de Breadcrumb

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://exemplo.com/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://exemplo.com/blog"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Título do Post"
  }]
}
</script>
```

### 6.4. Schema de Blog Post Completo (Astro)

```astro
---
// src/components/SchemaBlogPost.astro
interface Props {
  title: string;
  description: string;
  image: string;
  pubDate: Date;
  modifiedDate?: Date;
  author: string;
  url: string;
}

const { title, description, image, pubDate, modifiedDate, author, url } = Astro.props;

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": pubDate.toISOString(),
  "dateModified": modifiedDate?.toISOString() || pubDate.toISOString(),
  "author": {
    "@type": "Person",
    "name": author,
    "url": "https://alexdonega.com.br"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Alex Donega",
    "logo": {
      "@type": "ImageObject",
      "url": "https://alexdonega.com.br/assets/img/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
};
---
<script type="application/ld+json" set:html={JSON.stringify(schema)}></script>
```

**Uso no BlogLayout.astro:**
```astro
<SchemaBlogPost
  title={title}
  description={description || ""}
  image={image || "/assets/img/og-default.jpg"}
  pubDate={pubDate}
  modifiedDate={pubDate}
  author="Alex Donega"
  url={Astro.url.href}
/>
```

### 6.5. Schema de Person (Autor)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alex Donega",
  "url": "https://alexdonega.com.br",
  "image": "https://alexdonega.com.br/images/alex-donega-autor-blog.webp",
  "jobTitle": "Especialista em IA e Context Engineering",
  "sameAs": [
    "https://linkedin.com/in/alexdonega",
    "https://twitter.com/alexdonega"
  ],
  "description": "Ajudo empreendedores a dominar IA de verdade usando Context Engineering."
}
</script>
```

## Passo 7: Componente de SEO (Exemplo)

```astro
---
// src/components/SEO.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article';
}

const {
  title,
  description,
  image = '/img/og-default.jpg',
  canonical,
  type = 'website'
} = Astro.props;

const site = Astro.site?.toString() || '';
const url = canonical || new URL(Astro.url.pathname, site).href;
const ogImage = new URL(image, site).href;
---

<!-- Meta Tags Base -->
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={url} />

<!-- Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:url" content={url} />
<meta property="og:type" content={type} />
<meta property="og:locale" content="pt_BR" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />
```

**Uso:**
```astro
<SEO
  title="Título da Página"
  description="Descrição otimizada para SEO"
  image="/img/og-image.jpg"
  type="article"
/>
```

## Passo 8: Estratégia de Canonical Tags

### 8.1. Quando Usar Canonical

- **Conteúdo duplicado**: Mesmo conteúdo em múltiplas URLs
- **URLs com parâmetros**: `/produto?id=123` vs `/produto/123`
- **Versões HTTP/HTTPS**: Redirecionar para HTTPS
- **www vs não-www**: Escolha um canônico
- **URLs de impressão**: `/imprimir/artigo` canonical para `/artigo`

### 8.2. Exemplo de Implementação

```html
<!-- Página principal -->
<link rel="canonical" href="https://exemplo.com/artigo">

<!-- Página com parâmetros (canonical aponta para principal) -->
<link rel="canonical" href="https://exemplo.com/artigo">
<!-- Mesmo que URL atual seja: https://exemplo.com/artigo?utm_source=newsletter -->
```

## Passo 9: Monitoramento e Ferramentas

### 9.1. Google Search Console

- **Verificar propriedade**: Adicionar `meta name="google-site-verification"`
- **Enviar sitemap**: Submeter sitemap.xml no GSC
- **Monitorar erros**: Rastreamento, indexação, segurança
- **Performance**: Core Web Vitals, LCP, FID, CLS

### 9.2. Métricas Chave

| Métrica | O que Mede | Valor Alvo |
|---------|-------------|------------|
| **LCP** | Largest Contentful Paint | < 2.5s |
| **FID** | First Input Delay | < 100ms |
| **CLS** | Cumulative Layout Shift | < 0.1 |
| **Taxa de indexação** | Páginas indexadas / Total | > 90% |

### 9.3. Ferramentas de Validação SEO

**Ferramentas do Google:**

| Ferramenta | Uso | Link |
|------------|-----|------|
| **Google Search Console** | Monitoramento de indexação, erros, performance | [search.google.com/search-console](https://search.google.com/search-console) |
| **Rich Results Test** | Validar schema markup e rich snippets | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| **Schema Markup Validator** | Validar JSON-LD | [validator.schema.org](https://validator.schema.org) |
| **PageSpeed Insights** | Core Web Vitals | [pagespeed.web.dev](https://pagespeed.web.dev) |
| **Mobile-Friendly Test** | Teste de compatibilidade mobile | [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly) |

**Ferramentas de Terceiros:**

| Ferramenta | Uso | Link |
|------------|-----|------|
| **Ahrefs Site Audit** | Auditoria completa de SEO | [ahrefs.com/site-audit](https://ahrefs.com/site-audit) |
| **Screaming Frog** | Crawl técnico do site | [screamingfrog.co.uk](https://www.screamingfrog.co.uk) |
| **Open Graph Debugger** | Validar Open Graph | [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) |
| **Twitter Card Validator** | Validar Twitter Cards | [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) |

### 9.4. Verificação de Meta Tags

**Comando para verificar meta tags em produção:**
```bash
curl -s https://alexdonega.com.br | grep -E "(meta title|og:|twitter:)"
```

**Extensões de navegador recomendadas:**
- **Chrome:** SEO Meta in 1 Click
- **Firefox:** Multi-SEO Tools
- **Edge:** Detailed SEO Extension

## Passo 10: Checklist de Go-Live SEO

Antes de lançar ou atualizar SEO:

- [ ] Todas páginas têm título único (50-60 caracteres)
- [ ] Todas páginas têm meta description única (150-160 caracteres)
- [ ] URLs usam kebab-case e são descritivas
- [ ] Sitemap.xml inclui todas URLs indexáveis
- [ ] Robots.txt configura corretamente allow/disallow
- [ ] Canonical tags implementadas onde necessário
- [ ] Open Graph images configuradas (1200x630px)
- [ ] Schema markup adicionado para conteúdo principal
- [ ] Google Search Console configurado
- [ ] Analytics configurado para monitoramento
- [ ] SSL/TLS habilitado (HTTPS)
- [ ] Site responsivo e mobile-friendly

## Melhores Práticas

1. **Conteúdo é Rei**: Meta tags ajudam, mas conteúdo quality é essencial
2. **Consistência de URL**: Escolha um padrão e mantenha
3. **Títulos Únicos**: Cada página deve ter título único e descritivo
4. **Imagens Otimizadas**: Use alt text, nomes descritivos, compressão
5. **Performance**: SEO técnico inclui速度 (velocidade de carregamento)
6. **Mobile-First**: Google prioriza versão mobile para indexação

## Exemplo de Uso

```
Usuário: "Estou lançando um blog de tecnologia. Como devo configurar SEO?"

IA: [Usa guia-estratégia-índices]
- Documenta estrutura de URLs: /blog, /blog/:slug
- Configura sitemap.xml com integração @astrojs/sitemap
- Cria componente SEO.astro com meta tags + Open Graph
- Adiciona schema markup Article para posts
- Configura robots.txt permitindo blog
- Define estratégia de canonical tags
- Configura Google Search Console
- Fornece checklist de go-live SEO
```

## Anti-Padrões a Evitar

- ❌ NAO deixe páginas sem título ou meta description
- ❌ NAO use títulos duplicados em múltiplas páginas
- ❌ NAO bloqueie robots.txt em áreas importantes
- ❌ NAO use meta keywords (obsoleto, desperdício)
- ❌ NAO ignore canonical tags em conteúdo duplicado
- ❌ NAO use URLs longas e não descritivas
- ❌ NAO esqueça de otimizar imagens (alt, tamanho, formato)
- ❌ NAO ignore mobile-friendliness (Google indexa mobile primeiro)
- ❌ NAO use block de crawlers sem motivo válido
- ❌ NAO esqueça de atualizar sitemap após mudanças
- ❌ NAO use schema markup sem validar no Schema Validator
- ❌ NAO bloquee todos AI crawlers sem considerar impacto na visibilidade

## Exemplo Prático - alexdonega.com.br

### Meta Tags Implementadas (Layout.astro)
```astro
<!-- Meta Tags Base -->
<title>{title} | Alex Donega</title>
<meta name="description" content={description || "Ajudo empreendedores a dominar IA de verdade usando Context Engineering."}>
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content={title}>
<meta property="og:description" content={description}>
<meta property="og:image" content={ogImage || "https://alexdonega.com.br/assets/img/og-image.jpg"}>
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
```

### Schema Sugerido para o Projeto
```astro
<!-- Adicionar ao Layout.astro -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alex Donega",
  "url": "https://alexdonega.com.br",
  "jobTitle": "Especialista em IA e Context Engineering",
  "description": "Ajudo empreendedores a dominar IA de verdade usando Context Engineering.",
  "sameAs": []
}
</script>
```

## Template de Documentação Final

```markdown
# Estratégia de SEO e Índices

## Fonte da Verdade
- `src/layouts/Layout.astro` - Meta tags globais
- `src/components/SEO.astro` - Componente de meta tags
- `astro.config.mjs` - Config do site
- `public/sitemap.xml` - Mapa do site
- `public/robots.txt` - Diretrizes para crawlers

## Estrutura de URLs
[Tabela de padrões de roteamento]

## Meta Tags Implementadas
[Lista de meta tags por tipo de página]

## Sitemap
[Configuração e URLs incluídas]

## Robots.txt
[Regras de allow/disallow]

## Canonical Tags
[Estratégia de URLs canônicas]

## Schema Markup
[Tipos de schema implementados]

## Open Graph / Social
[Configuração de compartilhamento]

## Monitoramento
[Ferramentas e métricas]

## Checklist Go-Live
[Validações pré-lançamento]

## Anti-Padrões
[O que evitar]
```

## Checklist de Revisão Final

- [ ] Estrutura de URLs documentada e consistente?
- [ ] Meta tags implementadas (title, description, OG)?
- [ ] Sitemap.xml configurado e atualizado?
- [ ] Robots.txt configurado corretamente?
- [ ] Canonical tags implementadas onde necessário?
- [ ] Schema markup adicionado para conteúdo principal?
- [ ] Open Graph images otimizadas (1200x630px)?
- [ ] Google Search Console configurado?
- [ ] Core Web Vitals monitorados?
- [ ] Site mobile-friendly validado?
- [ ] Seção de anti-padrões incluída?
- [ ] Documentação pode ser usada por time de marketing?
