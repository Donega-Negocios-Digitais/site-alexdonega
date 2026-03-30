# Plano: Componentizar Seções do Mapa de Funil

## Objetivo
Extrair 10 seções da página `/servicos/mapa-de-funil/index.astro` em componentes Astro reutilizáveis (com props) e criar páginas de preview para cada um em `/previews/`.

---

## Decisões
- **Props**: Todos os componentes receberão props para reutilização
- **JS**: Pricing terá JS incluso no componente (toggle + comparison table)
- **Quem Constrói com Você**: Apenas a seção Alex Donega (funnel-about)
- **CSS**: Cada componente terá seu próprio `<style>` scoped com o CSS relevante extraído do bloco único da página

---

## Estrutura de Arquivos

### Componentes (`src/components/funnel/`)

| # | Componente | Arquivo | Seção Original |
|---|-----------|---------|----------------|
| 1 | FunnelWarningBanner | `FunnelWarningBanner.astro` | `.warning-banner` (linhas 15-22) |
| 2 | FunnelHero | `FunnelHero.astro` | `.funnel-hero` (linhas 25-93) |
| 3 | FunnelMethodology | `FunnelMethodology.astro` | `.funnel-methodology` (linhas 456-512) |
| 4 | FunnelDeliverables | `FunnelDeliverables.astro` | `.funnel-deliverables-visual` (linhas 614-694) |
| 5 | FunnelPackageComplete | `FunnelPackageComplete.astro` | `.funnel-package-complete` (linhas 696-867) |
| 6 | FunnelAbout | `FunnelAbout.astro` | `.funnel-about` (linhas 932-1002) |
| 7 | FunnelPricing | `FunnelPricing.astro` | `.funnel-pricing-tiers` (linhas 1148-1542) |
| 8 | FunnelGuaranteeDual | `FunnelGuaranteeDual.astro` | `.funnel-guarantee-dual` (linhas 1544-1591) |
| 9 | FunnelFaq | `FunnelFaq.astro` | `.funnel-faq` (linhas 1593-1668) |
| 10 | FunnelFinalCta | `FunnelFinalCta.astro` | `.funnel-tldr` (linhas 1670-1714) |

### Previews (`src/pages/previews/`)

| # | Preview | Arquivo |
|---|---------|---------|
| 1 | Funnel Warning Banner | `funnel-warning-banner.astro` |
| 2 | Funnel Hero | `funnel-hero.astro` |
| 3 | Funnel Methodology | `funnel-methodology.astro` |
| 4 | Funnel Deliverables | `funnel-deliverables.astro` |
| 5 | Funnel Package Complete | `funnel-package-complete.astro` |
| 6 | Funnel About | `funnel-about.astro` |
| 7 | Funnel Pricing | `funnel-pricing.astro` |
| 8 | Funnel Guarantee Dual | `funnel-guarantee-dual.astro` |
| 9 | Funnel FAQ | `funnel-faq.astro` |
| 10 | Funnel Final CTA | `funnel-final-cta.astro` |

---

## Detalhamento por Componente

### 1. FunnelWarningBanner
**Preview slug:** `funnel-warning-banner`

```typescript
interface Props {
  text: string;              // "6 vagas disponíveis este mês"
  ctaText: string;           // "Simule seu lucro antes que feche"
  ctaHref: string;           // "#pricing"
}
```

**CSS extraído:** `.warning-banner`, `.warning-content`, `.warning-icon`, `.warning-text`

---

### 2. FunnelHero
**Preview slug:** `funnel-hero`

```typescript
interface Props {
  eyebrow: string;           // "Simulação de Lucratividade"
  title: string;             // HTML com spans permitidos
  titleHighlight: string;    // "Antes de Investir"
  subtitle: string;
  ctaText: string;           // "Simular meu lucro agora"
  ctaHref: string;           // "#pricing"
  proofBadges: { icon: string; text: string }[];
  stars?: number;            // default 5
}
```

**CSS extraído:** `.funnel-hero`, `.hero-bg`, `.grid-pattern`, `.funnel-viz`, `.bg-glow`, `.hero-content`, `.hero-eyebrow`, `.hero-title`, `.hero-subtitle`, `.hero-cta`, `.hero-social-proof`, `.hero-stars`, `.proof-badge`, `@keyframes pulse-glow`

---

### 3. FunnelMethodology
**Preview slug:** `funnel-methodology`

```typescript
interface MethodologyStep {
  letter: string;            // "M", "A", "P", "S"
  icon: string;              // SVG markup
  title: string;             // "Mapear"
  description: string;
}

interface Props {
  eyebrow: string;           // "Como fazemos"
  title: string;             // "Metodologia MAPS"
  subtitle: string;          // HTML com <strong> tags
  steps: MethodologyStep[];
}
```

**CSS extraído:** `.funnel-methodology`, `.methodology-timeline`, `.methodology-step` (e subclasses)

---

### 4. FunnelDeliverables
**Preview slug:** `funnel-deliverables`

```typescript
interface DeliverableItem {
  imageKey: string;          // "diagrama-mapa-funil"
  icon: string;              // SVG markup
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;           // "O que você recebe"
  title: string;             // "Seus Relatórios de Simulação"
  subtitle: string;
  introText: string;         // HTML
  items: DeliverableItem[];
  connectionText?: string;   // HTML com link
  connectionHref?: string;   // "#pacote-completo"
}
```

**CSS extraído:** `.funnel-deliverables-visual`, `.visual-wrapper`, `.visual-list`, `.visual-item`, `.visual-image`, `.visual-connection` + JS de toggle de imagem

---

### 5. FunnelPackageComplete
**Preview slug:** `funnel-package-complete`

```typescript
interface PackageItem {
  title: string;
  description: string;
}

interface MetricItem {
  icon: string;              // SVG
  iconVariant: string;       // "revenue" | "traffic" | etc
  title: string;
  description: string;
  highlight?: boolean;
}

interface Props {
  id?: string;               // "pacote-completo"
  eyebrow: string;           // "Tudo Incluído"
  title: string;             // "Seu Pacote de Mapeamento"
  subtitle: string;
  leftTitle: string;         // "Processo & Suporte"
  leftItems: PackageItem[];
  rightTitle: string;        // "Métricas Simuladas"
  metrics: MetricItem[];
  ctaText: string;
  ctaHref: string;
}
```

**CSS extraído:** `.funnel-package-complete`, `.package-wrapper`, `.package-left`, `.package-right`, `.package-list`, `.metrics-grid`, `.metric-card` (e subclasses)

---

### 6. FunnelAbout
**Preview slug:** `funnel-about`

```typescript
interface AboutPhase {
  title: string;             // <strong>text</strong>
  description: string;
}

interface AboutPlayer {
  photo: string;             // URL da imagem
  name: string;
  role: string;
}

interface Props {
  eyebrow: string;           // "Quem Constrói com Você"
  name: string;              // "Alex Donega"
  photo: string;             // URL da foto
  bio: string;
  phases: AboutPhase[];
  mission: string;           // HTML com <em>
  playersLabel: string;
  players: AboutPlayer[];
  trustText: string;         // HTML com <span>
}
```

**CSS extraído:** `.funnel-about`, `.about-wrapper`, `.about-image`, `.about-content`, `.about-phases`, `.about-players` (e subclasses)

---

### 7. FunnelPricing
**Preview slug:** `funnel-pricing`

```typescript
interface TierFeature {
  included: boolean;
  highlight?: boolean;
  text: string;              // HTML permitido (para <strong>)
}

interface Tier {
  id: string;                // "diagnóstico" | "estratégia" | "implementação"
  badge: string;             // "Para Começar"
  badgeVariant: string;      // "starter" | "popular" | "premium"
  name: string;
  tagline: string;
  priceParcelado: { installments: string; value: string };
  priceAvista: { value: string; full: string };
  featured?: boolean;
  featuredBadge?: string;    // "Mais Popular"
  scarcity?: string;
  features: TierFeature[];
  supportDays: number;
  guaranteeDays: number;
  ctaText: string;
  ctaVariant: string;        // "outline" | "primary" | "premium"
  dataPacote: string;        // nome para o modal
}

interface ComparisonRow {
  feature: string;
  diagnostico: string;       // "✓" | "—" | text
  estrategia: string;
  implementacao: string;
}

interface Props {
  eyebrow: string;           // "Escolha seu pacote"
  title: string;             // "3 opções para validar seu funil"
  subtitle: string;
  tiers: Tier[];
  comparisonRows?: ComparisonRow[];
  trustSignals?: { icon: string; text: string }[];
}
```

**CSS extraído:** `.funnel-pricing-tiers`, `.pricing-grid-3`, `.tier-card` (e subclasses), `.pricing-toggle-wrapper`, `.comparison-table-wrapper`, `.trust-signals`
**JS extraído:** Toggle parcelado/à vista + comparison table toggle

---

### 8. FunnelGuaranteeDual
**Preview slug:** `funnel-guarantee-dual`

```typescript
interface Props {
  eyebrow: string;           // "Garantia"
  title: string;             // "Duas garantias..."
