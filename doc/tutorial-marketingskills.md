# Guia Completo: Marketing Skills for AI Agents

> **Repositório:** [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
> **Autor:** Corey Haines — [corey.co](https://corey.co)
> **Licença:** MIT (uso livre)
> **Estrelas:** 18.4k+ no GitHub
> **Versão atual:** v1.5.0 (Março 2026)

---

## Sumário

1. [O que é o Marketing Skills](#1-o-que-é-o-marketing-skills)
2. [Para Quem Serve](#2-para-quem-serve)
3. [Como Funciona — A Arquitetura](#3-como-funciona--a-arquitetura)
4. [Pré-requisitos](#4-pré-requisitos)
5. [Instalação — 6 Métodos](#5-instalação--6-métodos)
6. [Configuração Inicial — Product Marketing Context](#6-configuração-inicial--product-marketing-context)
7. [Guia de Uso](#7-guia-de-uso)
8. [Catálogo Completo das 33 Skills](#8-catálogo-completo-das-33-skills)
9. [Ferramentas Integradas — 70+ Tools](#9-ferramentas-integradas--70-tools)
10. [Fluxos de Trabalho End-to-End](#10-fluxos-de-trabalho-end-to-end)
11. [Estrutura Interna do Repositório](#11-estrutura-interna-do-repositório)
12. [Contribuição e Personalização](#12-contribuição-e-personalização)
13. [Atualização e Manutenção](#13-atualização-e-manutenção)
14. [Links e Recursos Úteis](#14-links-e-recursos-úteis)

---

## 1. O que é o Marketing Skills

**Marketing Skills** é uma coleção de **33 skills (habilidades) em formato Markdown** que ensinam agentes de IA — como Claude Code, OpenAI Codex, Cursor, Windsurf e qualquer agente compatível com a [Agent Skills Spec](https://agentskills.io) — a executar tarefas de marketing com frameworks profissionais e melhores práticas.

Em vez de pedir ao seu agente de IA para "escrever um copy" e receber algo genérico, você instala essas skills e o agente passa a aplicar metodologias de **CRO (Otimização de Conversão), Copywriting, SEO, Análise, Email Marketing, Growth Engineering e muito mais** — tudo com a profundidade de um profissional de marketing experiente.

### O que são "Skills"?

Skills são **arquivos Markdown com instruções detalhadas** que dão ao agente de IA conhecimento especializado e workflows para tarefas específicas. Quando você adiciona essas skills ao seu projeto, o agente reconhece quando você está trabalhando em uma tarefa de marketing e aplica automaticamente os frameworks e melhores práticas certos.

Cada skill contém:
- **Frontmatter YAML** com nome, descrição e triggers (palavras-chave que ativam a skill)
- **Instruções passo a passo** para o agente seguir
- **Frameworks e metodologias** profissionais de marketing
- **Referências adicionais** em subdiretórios (templates, guias, scripts)
- **Conexões entre skills** para workflows integrados

---

## 2. Para Quem Serve

| Perfil | Como Usa |
|--------|----------|
| **Founders/Startups** | Executam marketing completo sem equipe — CRO, copy, SEO, email, growth |
| **Marketing Técnicos** | Aceleram implementação — tracking, A/B tests, schema markup, programmatic SEO |
| **Copywriters** | Geram e iteram copy com frameworks profissionais, editam e otimizam |
| **Growth Engineers** | Constroem free tools, programas de referral, funil de conversão |
| **Equipes de Produto** | Onboarding CRO, pricing strategy, churn prevention |
| **Agências** | Escalam entrega — múltiplos projetos com consistência de qualidade |

**Novo no terminal e agentes de código?** Corey criou o guia companion [Coding for Marketers](https://codingformarketers.com).

---

## 3. Como Funciona — A Arquitetura

### O Pilar Central: `product-marketing-context`

Todas as 33 skills se conectam através de um arquivo central chamado **`product-marketing-context.md`**. Este é o **pilar fundamental** — toda skill verifica este arquivo primeiro para entender seu produto, público-alvo e posicionamento antes de fazer qualquer coisa.

```
                            ┌──────────────────────────────────────┐
                            │      product-marketing-context       │
                            │    (lido por todas as skills antes   │
                            │     de executar qualquer tarefa)     │
                            └──────────────────┬───────────────────┘
                                               │
    ┌──────────────┬─────────────┬─────────────┼─────────────┬──────────────┬──────────────┐
    ▼              ▼             ▼             ▼             ▼              ▼              ▼
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ ┌──────────┐ ┌─────────────┐ ┌───────────┐
│  SEO &   │ │   CRO    │ │Content & │ │  Paid &    │ │ Growth & │ │  Sales &    │ │ Strategy  │
│ Content  │ │          │ │   Copy   │ │Measurement │ │Retention │ │    GTM      │ │           │
├──────────┤ ├──────────┤ ├──────────┤ ├────────────┤ ├──────────┤ ├─────────────┤ ├───────────┤
│seo-audit │ │page-cro  │ │copywritng│ │paid-ads    │ │referral  │ │revops       │ │mktg-ideas │
│ai-seo    │ │signup-cro│ │copy-edit │ │ad-creative │ │free-tool │ │sales-enable │ │mktg-psych │
│site-arch │ │onboard   │ │cold-email│ │ab-test     │ │churn-    │ │launch       │ │customer-  │
│programm  │ │form-cro  │ │email-seq │ │analytics   │ │ prevent  │ │pricing      │ │research   │
│schema    │ │popup-cro │ │social    │ │            │ │          │ │competitor   │ │           │
│content   │ │paywall   │ │          │ │            │ │          │ │             │ │           │
└────┬─────┘ └────┬─────┘ └────┬─────┘ └─────┬──────┘ └────┬─────┘ └──────┬──────┘ └─────┬─────┘
     │            │            │              │             │              │              │
     └────────────┴─────┬──────┴──────────────┴─────────────┴──────────────┴──────────────┘
                        │
         Skills se referenciam entre si:
           copywriting <-> page-cro <-> ab-test-setup
           revops <-> sales-enablement <-> cold-email
           seo-audit <-> schema-markup <-> ai-seo
           customer-research -> copywriting, page-cro, competitor-alternatives
```

### Como as Skills se Conectam

Quando você pede ao agente para "otimizar minha landing page", ele:

1. **Lê o `product-marketing-context.md`** para entender seu produto e público
2. **Ativa a skill `page-cro`** automaticamente
3. **Analisa a página** usando frameworks de CRO profissional
4. **Pode sugerir** testes A/B (`ab-test-setup`) ou reescrita de copy (`copywriting`)
5. **Tudo conectado** — sem você precisar explicar contexto repetidamente

---

## 4. Pré-requisitos

### Obrigatório

| Requisito | Detalhes |
|-----------|----------|
| **Agente de IA compatível** | Claude Code, OpenAI Codex, Cursor, Windsurf, ou qualquer agente que suporte a [Agent Skills Spec](https://agentskills.io) |
| **Node.js 18+** | Necessário apenas para usar as 51 ferramentas CLI inclusas |

### Opcional (mas recomendado)

| Recurso | Para que serve |
|---------|----------------|
| **Git** | Para clonar/atualizar o repositório |
| **npx** | Para instalar via CLI (método recomendado) |
| **API Keys** | Das ferramentas de marketing que quiser usar (GA4, Stripe, Mailchimp, etc.) |
| **MCP Servers** | Para integração direta com ferramentas como GA4, Stripe, Mailchimp |

---

## 5. Instalação — 6 Métodos

### Metodo 1: CLI Install (Recomendado)

Use [npx skills](https://github.com/vercel-labs/skills) para instalar diretamente:

```bash
# Instalar TODAS as 33 skills
npx skills add coreyhaines31/marketingskills

# Instalar apenas skills específicas
npx skills add coreyhaines31/marketingskills --skill page-cro copywriting email-sequence

# Listar skills disponíveis
npx skills add coreyhaines31/marketingskills --list
```

Isso instala automaticamente em `.agents/skills/` (e cria symlinks em `.claude/skills/` para compatibilidade com Claude Code).

---

### Metodo 2: Claude Code Plugin

Instale via sistema de plugins integrado do Claude Code:

```bash
# Adicionar o marketplace
/plugin marketplace add coreyhaines31/marketingskills

# Instalar todas as skills de marketing
/plugin install marketing-skills
```

---

### Metodo 3: Clone e Copie

Clone o repositório completo e copie a pasta de skills:

```bash
# Clonar o repositório
git clone https://github.com/coreyhaines31/marketingskills.git

# Copiar todas as skills para o diretório do seu projeto
cp -r marketingskills/skills/* .agents/skills/

# (Opcional) Copiar as ferramentas CLI também
cp -r marketingskills/tools/* .agents/tools/
```

---

### Metodo 4: Git Submodule

Adicione como submodule para facilitar atualizações:

```bash
# Adicionar como submodule
git submodule add https://github.com/coreyhaines31/marketingskills.git .agents/marketingskills

# As skills ficam acessíveis em:
# .agents/marketingskills/skills/
```

Para atualizar depois:
```bash
git submodule update --remote .agents/marketingskills
```

---

### Metodo 5: Fork e Personalize

Ideal se você quer customizar as skills para seu negócio:

1. **Fork** o repositório no GitHub
2. **Edite** as skills conforme suas necessidades
3. **Clone** seu fork nos seus projetos:

```bash
git clone https://github.com/SEU-USUARIO/marketingskills.git
cp -r marketingskills/skills/* .agents/skills/
```

---

### Metodo 6: SkillKit (Multi-Agente)

Use [SkillKit](https://github.com/rohitg00/skillkit) para instalar skills em múltiplos agentes de IA (Claude Code, Cursor, Copilot, etc.) de uma vez:

```bash
# Instalar todas as skills
npx skillkit install coreyhaines31/marketingskills

# Instalar skills específicas
npx skillkit install coreyhaines31/marketingskills --skill page-cro copywriting

# Listar skills disponíveis
npx skillkit install coreyhaines31/marketingskills --list
```

---

### Atualização de v1.0 para v1.5

Se você usava a v1.0, as skills agora usam `.agents/` em vez de `.claude/` para o arquivo de contexto. Mova manualmente:

```bash
mkdir -p .agents
mv .claude/product-marketing-context.md .agents/product-marketing-context.md
```

As skills ainda verificam `.claude/` como fallback, então nada quebra se você não migrar.

---

## 6. Configuração Inicial — Product Marketing Context

Antes de usar qualquer skill de marketing, configure o **Product Marketing Context** — o arquivo central que todas as skills leem.

### Como criar

Basta pedir ao seu agente:

```
"Vamos configurar o contexto de marketing do meu produto"
```

Ou invoque diretamente:

```
/product-marketing-context
```

### O que o agente vai fazer

1. **Verificar se o arquivo já existe** em `.agents/product-marketing-context.md`
2. **Se existir:** resume o que está capturado e pergunta o que atualizar
3. **Se não existir:** oferece duas opções:
   - **Auto-draft a partir do codebase** (recomendado) — o agente estuda seu README, landing pages, package.json, etc. e rascunha um V1
   - **Começar do zero** — caminha por cada seção conversacionalmente

### As 12 Seções do Contexto

| # | Seção | O que Captura |
|---|-------|---------------|
| 1 | **Product Overview** | Descrição de uma linha, o que faz, categoria, tipo, modelo de negócio |
| 2 | **Target Audience** | Empresas-alvo, decisores, caso de uso principal, Jobs to be Done |
| 3 | **Personas** | (B2B) User, Champion, Decision Maker, Financial Buyer, Technical Influencer |
| 4 | **Problems & Pain Points** | Desafio central, por que alternativas falham, custo emocional |
| 5 | **Competitive Landscape** | Competidores diretos, secundários e indiretos |
| 6 | **Differentiation** | Diferenciais, como faz diferente, por que é melhor |
| 7 | **Objections & Anti-Personas** | Top 3 objeções, quem NÃO é bom fit |
| 8 | **Switching Dynamics** | 4 Forças do JTBD: Push, Pull, Habit, Anxiety |
| 9 | **Customer Language** | Frases verbatim dos clientes, palavras para usar/evitar, glossário |
| 10 | **Brand Voice** | Tom, estilo, personalidade da marca |
| 11 | **Proof Points** | Métricas, clientes notáveis, depoimentos, temas de valor |
| 12 | **Goals** | Objetivo de negócio, ação de conversão, métricas atuais |

### Resultado

O arquivo é salvo em `.agents/product-marketing-context.md` e **todas as outras 32 skills passam a usá-lo automaticamente**. Você nunca mais precisa repetir "meu produto é X para Y" — o contexto já está lá.

---

## 7. Guia de Uso

### Forma 1: Linguagem Natural (Recomendada)

Basta pedir ao seu agente normalmente. Ele detecta automaticamente qual skill usar:

```
"Me ajuda a otimizar essa landing page para conversões"
→ Ativa page-cro

"Escreve copy da homepage do meu SaaS"
→ Ativa copywriting

"Configura tracking do GA4 para signups"
→ Ativa analytics-tracking

"Cria uma sequência de 5 emails de boas-vindas"
→ Ativa email-sequence

"Audita o SEO do meu site"
→ Ativa seo-audit

"Planeja um teste A/B para o headline"
→ Ativa ab-test-setup

"Escreve um cold email para prospecção B2B"
→ Ativa cold-email

"Define a estratégia de preço do meu produto"
→ Ativa pricing-strategy
```

### Forma 2: Slash Commands

Você também pode invocar skills diretamente:

```
/page-cro
/copywriting
/analytics-tracking
/email-sequence
/seo-audit
/ab-test-setup
/cold-email
/pricing-strategy
/ai-seo
/paid-ads
/ad-creative
/social-content
/referral-program
/free-tool-strategy
/launch-strategy
/marketing-ideas
/customer-research
/competitor-alternatives
/schema-markup
/site-architecture
/programmatic-seo
/content-strategy
/signup-flow-cro
/onboarding-cro
/form-cro
/popup-cro
/paywall-upgrade-cro
/churn-prevention
/copy-editing
/sales-enablement
/revops
/marketing-psychology
/lead-magnets
```

### Forma 3: Claude Code com Injeção Dinâmica (Avançado)

Se usa Claude Code, pode injetar o contexto automaticamente no topo das skills usando `` !`command` ``:

```markdown
Product context: !`cat .agents/product-marketing-context.md 2>/dev/null || echo "No product context file found — ask the user about their product before proceeding."`
```

Outras injeções úteis:
```markdown
Data atual: !`date +%Y-%m-%d`
Branch atual: !`git branch --show-current 2>/dev/null`
Commits recentes: !`git log --oneline -5 2>/dev/null`
```

> **Nota:** Essa sintaxe é exclusiva do Claude Code. Outros agentes verão a string literal ao invés de executá-la.

---

## 8. Catálogo Completo das 33 Skills

### Conversão e Otimização (CRO)

---

#### `page-cro` — Otimização de Conversão de Páginas

**Para que serve:** Analisar e otimizar qualquer página de marketing (homepage, landing pages, pricing, features, blog posts) para aumentar conversões.

**Quando usar:**
- "Minha landing page não está convertendo"
- "O bounce rate tá muito alto"
- "Melhora as conversões dessa página"
- Compartilhar uma URL e pedir feedback

**O que faz:**
- Analisa clareza da proposta de valor
- Avalia headlines, CTAs, hierarquia visual
- Verifica sinais de confiança e social proof
- Identifica pontos de fricção
- Gera recomendações: Quick Wins, High-Impact, Test Ideas
- Oferece alternativas de copy com racional

**Exemplo de comando:**
```
"Analisa minha landing page em meusite.com/signup e sugere melhorias de conversão"
```

**Skills relacionadas:** `signup-flow-cro`, `form-cro`, `popup-cro`, `copywriting`, `ab-test-setup`

---

#### `signup-flow-cro` — Otimização de Fluxo de Signup

**Para que serve:** Otimizar fluxos de cadastro, registro, criação de conta ou ativação de trial.

**Quando usar:**
- "Meu fluxo de signup tem muita drop-off"
- "Quero melhorar a taxa de ativação de trial"
- "O formulário de registro é muito longo?"

**Skills relacionadas:** `page-cro`, `onboarding-cro`, `form-cro`

---

#### `onboarding-cro` — Otimização de Onboarding Pós-Signup

**Para que serve:** Otimizar a experiência pós-cadastro — ativação de usuário, first-run experience, time-to-value.

**Quando usar:**
- "Usuários cadastram mas não usam"
- "Preciso reduzir o time-to-value"
- "Meu onboarding está confuso"

**Skills relacionadas:** `signup-flow-cro`, `churn-prevention`, `analytics-tracking`

---

#### `form-cro` — Otimização de Formulários

**Para que serve:** Otimizar qualquer formulário que NÃO é de signup — lead capture, contato, demo request, etc.

**Quando usar:**
- "Meu formulário de contato não converte"
- "Muitos abandonam o formulário de demo"
- "Quero reduzir campos sem perder informação"

**Skills relacionadas:** `page-cro`, `signup-flow-cro`, `popup-cro`

---

#### `popup-cro` — Otimização de Popups e Modais

**Para que serve:** Criar ou otimizar popups, modals, overlays, slide-ins ou banners para conversão.

**Quando usar:**
- "Cria um popup de captura de email"
- "Meu popup tem taxa de rejeição alta"
- "Quando mostrar o popup sem irritar?"

**Skills relacionadas:** `page-cro`, `form-cro`, `copywriting`

---

#### `paywall-upgrade-cro` — Otimização de Paywalls e Upgrades

**Para que serve:** Criar ou otimizar paywalls in-app, telas de upgrade, modais de upsell ou feature gates.

**Quando usar:**
- "Cria uma tela de upgrade para meu plano premium"
- "O paywall não está convertendo"
- "Quando mostrar o paywall?"

**Skills relacionadas:** `pricing-strategy`, `page-cro`, `copywriting`

---

### Conteúdo e Copy

---

#### `copywriting` — Copywriting de Marketing

**Para que serve:** Escrever, reescrever ou melhorar copy de marketing para qualquer página — homepage, landing pages, pricing, features, about, produto.

**Quando usar:**
- "Escreve copy da minha homepage"
- "Esse copy está fraco, melhora"
- "Preciso de headline e CTA"
- "Help me describe my product"
- "Valor proposition", "tagline", "hero section"

**O que faz:**
- Aplica princípios: clareza > criatividade, benefícios > features, especificidade > vagueza
- Gera copy organizado por seção com anotações explicando cada escolha
- Oferece 2-3 alternativas para headlines e CTAs
- Gera meta title e meta description para SEO

**Framework de página:**
| Seção | Propósito |
|-------|-----------|
| Headline + Subheadline | Proposta de valor principal |
| Primary CTA | Ação principal com copy orientado a valor |
| Social Proof | Logos, stats, depoimentos |
| Problem/Pain | Mostra que entende a situação |
| Solution/Benefits | 3-5 benefícios chave |
| How It Works | 3-4 passos, reduz complexidade percebida |
| Objection Handling | FAQ, comparações, garantias |
| Final CTA | Recap de valor + CTA + reversão de risco |

**Skills relacionadas:** `copy-editing`, `page-cro`, `email-sequence`, `popup-cro`, `ab-test-setup`

---

#### `copy-editing` — Edição e Revisão de Copy

**Para que serve:** Editar, revisar ou melhorar copy de marketing existente.

**Quando usar:**
- "Revê esse copy"
- "Edita essa página"
- "Esse texto está confuso"
- Polir e refinar rascunhos

**Skills relacionadas:** `copywriting` (use copy-editing DEPOIS do rascunho)

---

#### `cold-email` — Cold Emails B2B

**Para que serve:** Escrever cold emails e sequências de follow-up que geram respostas.

**Quando usar:**
- "Escreve um cold email para prospecção"
- "Cria uma sequência de 5 cold emails"
- "Meu cold email não recebe respostas"

**O que faz:**
- Aplica frameworks de cold email que funcionam
- Cria sequências de follow-up com timing adequado
- Usa linguagem do cliente (não jargão da empresa)
- Evita templates genéricos e spammy

**Skills relacionadas:** `revops`, `sales-enablement`, `copywriting`

---

#### `email-sequence` — Sequências de Email Automatizadas

**Para que serve:** Criar ou otimizar sequências de email, drip campaigns, fluxos automatizados ou emails de ciclo de vida.

**Quando usar:**
- "Cria uma welcome sequence de 5 emails"
- "Melhora meu drip de nurturing"
- "Sequence de re-engajamento para inativos"
- "Onboarding por email"

**O que faz:**
- Planeja a sequência completa com timing, objetivos e métricas
- Escreve cada email com copy profissional
- Define triggers e condições de envio
- Sugere métricas para medir sucesso

**Skills relacionadas:** `copywriting`, `cold-email`, `copy-editing`

---

#### `social-content` — Conteúdo para Redes Sociais

**Para que serve:** Criar, agendar ou otimizar conteúdo para LinkedIn, Twitter/X, Instagram, etc.

**Quando usar:**
- "Cria posts de LinkedIn para a semana"
- "Agenda conteúdo de Twitter"
- "Melhora meu post de Instagram"

**Skills relacionadas:** `content-strategy`, `copywriting`

---

### SEO e Descoberta

---

#### `seo-audit` — Auditoria de SEO

**Para que serve:** Auditar, revisar ou diagnosticar problemas de SEO no site.

**Quando usar:**
- "Audita o SEO do meu site"
- "Meu site não rankeia no Google"
- "Problemas técnicos de SEO"
- "O que preciso melhorar para SEO?"

**O que faz:**
- Análise técnica (velocidade, mobile, indexação)
- SEO on-page (titles, metas, headings, conteúdo)
- Verifica problemas comuns (broken links, canonicals, redirects)
- Gera relatório priorizado de ações

**Skills relacionadas:** `schema-markup`, `ai-seo`, `site-architecture`, `programmatic-seo`

---

#### `ai-seo` — Otimização para Buscadores de IA

**Para que serve:** Otimizar conteúdo para buscadores de IA (ChatGPT, Perplexity, Google AI Overviews), ser citado por LLMs, aparecer em respostas geradas por IA.

**Quando usar:**
- "Quero aparecer no ChatGPT"
- "Como otimizar para AI Overviews?"
- "Ser citado por LLMs"
- "AEO", "GEO", "LLMO"

**O que faz:**
- Otimização para AI Engine Optimization (AEO)
- Generative Engine Optimization (GEO)
- Estruturação de conteúdo para citação por LLMs
- Markup e dados estruturados para IA

**Skills relacionadas:** `seo-audit`, `schema-markup`, `content-strategy`

---

#### `programmatic-seo` — SEO Programático

**Para que serve:** Criar páginas otimizadas para SEO em escala usando templates e dados.

**Quando usar:**
- "Cria 1000 páginas de SEO automaticamente"
- "Quero gerar páginas de 'alternativas ao X'"
- "SEO em escala com templates"

**O que faz:**
- Define templates de página
- Cria estrutura de dados para geração
- Planeja arquitetura de URLs
- Gera páginas com variações de conteúdo

**Skills relacionadas:** `seo-audit`, `site-architecture`, `content-strategy`

---

#### `site-architecture` — Arquitetura do Site

**Para que serve:** Planejar, mapear ou reestruturar a hierarquia de páginas, navegação, estrutura de URLs e linking interno.

**Quando usar:**
- "Reorganiza a estrutura do meu site"
- "Planeja a arquitetura de URLs"
- "Melhora a navegação"
- "Sitemap e linking interno"

**Skills relacionadas:** `seo-audit`, `programmatic-seo`, `content-strategy`

---

#### `competitor-alternatives` — Páginas de Comparação

**Para que serve:** Criar páginas de comparação com competidores ("X vs Y", "Alternativas ao X") para SEO e sales enablement.

**Quando usar:**
- "Cria uma página 'Alternativas ao Competidor'"
- "Página de comparação X vs Y"
- "Queremos rankear para 'melhor alternativa ao Z'"

**Skills relacionadas:** `seo-audit`, `programmatic-seo`, `content-strategy`, `sales-enablement`

---

#### `schema-markup` — Dados Estruturados (Schema.org)

**Para que serve:** Adicionar, corrigir ou otimizar schema markup e dados estruturados no site.

**Quando usar:**
- "Adiciona schema markup"
- "Rich snippets no Google"
- "Dados estruturados para meu produto"
- "Organization schema", "FAQ schema", "Review schema"

**Skills relacionadas:** `seo-audit`, `ai-seo`

---

#### `content-strategy` — Estratégia de Conteúdo

**Para que serve:** Planejar uma estratégia de conteúdo, decidir o que criar, determinar tópicos.

**Quando usar:**
- "Planeja minha estratégia de conteúdo"
- "Que tópicos cobrir no blog?"
- "Calendar de conteúdo"
- "Como criar conteúdo que rankeia?"

**Skills relacionadas:** `seo-audit`, `programmatic-seo`, `social-content`

---

### Paid e Distribuição

---

#### `paid-ads` — Anúncios Pagos

**Para que serve:** Criar e gerenciar campanhas de anúncios no Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X, TikTok.

**Quando usar:**
- "Cria uma campanha de Google Ads"
- "Melhora meus anúncios no Facebook"
- "Estratégia de LinkedIn Ads para B2B"

**Skills relacionadas:** `ad-creative`, `analytics-tracking`

---

#### `ad-creative` — Criação de Criativos de Anúncio

**Para que serve:** Gerar, iterar e escalar criativos de anúncios — headlines, descriptions, primary text, criativos completos.

**Quando usar:**
- "Gera 20 variações de headline para ads"
- "Cria criativos para campanha de Meta"
- "Itera nos meus anúncios baseado em performance"

**Skills relacionadas:** `paid-ads`, `copywriting`

---

### Métricas e Testes

---

#### `analytics-tracking` — Tracking e Analytics

**Para que serve:** Configurar, melhorar ou auditar tracking de analytics e métricas.

**Quando usar:**
- "Configura GA4 para meu site"
- "Adiciona tracking de eventos para signups"
- "Audita meu setup de analytics"
- "Pixels, eventos, conversões"

**O que faz:**
- Configura GA4, Mixpanel, PostHog, Segment, etc.
- Define eventos e propriedades
- Implementa tracking de conversões
- Cria dashboards de métricas

**Skills relacionadas:** `ab-test-setup`, `page-cro`

---

#### `ab-test-setup` — Configuração de Testes A/B

**Para que serve:** Planejar, desenhar ou implementar um teste A/B ou experimento.

**Quando usar:**
- "Planeja um teste A/B para o headline"
- "Como configurar um split test?"
- "Preciso testar duas versões"
- "Significância estatística"
- "Sample size"

**O que faz:**
- Desenha hipóteses estruturadas
- Calcula sample size necessário
- Define métricas primárias, secundárias e guardrails
- Configura variantes e alocação de tráfego
- Documenta resultados e aprendizados

**Framework de hipótese:**
```
Because [observação/dados],
we believe [mudança]
will cause [resultado esperado]
for [público].
We'll know this is true when [métricas].
```

**Tabela de sample size:**
| Baseline | +10% Lift | +20% Lift | +50% Lift |
|----------|-----------|-----------|-----------|
| 1% | 150k/variant | 39k/variant | 6k/variant |
| 3% | 47k/variant | 12k/variant | 2k/variant |
| 5% | 27k/variant | 7k/variant | 1.2k/variant |
| 10% | 12k/variant | 3k/variant | 550/variant |

**Skills relacionadas:** `page-cro`, `analytics-tracking`, `copywriting`

---

### Retenção

---

#### `churn-prevention` — Prevenção de Churn

**Para que serve:** Reduzir churn, construir fluxos de cancelamento, configurar save offers, recuperar pagamentos falhos.

**Quando usar:**
- "Meus clientes estão cancelando muito"
- "Cria um flow de cancelamento com save offer"
- "Recuperar pagamentos falhos (dunning)"
- "Reduzir churn rate"

**Skills relacionadas:** `onboarding-cro`, `revops`, `email-sequence`

---

### Growth Engineering

---

#### `free-tool-strategy` — Estratégia de Ferramentas Gratuitas

**Para que serve:** Planejar, avaliar ou construir ferramentas gratuitas para marketing — geração de leads, valor de SEO, viralidade.

**Quando usar:**
- "Que free tool posso criar para atrair tráfego?"
- "Avalia se vale a pena criar uma calculadora"
- "Estratégia de tool-led growth"
- "Ferramenta gratuita como lead magnet"

**Skills relacionadas:** `programmatic-seo`, `content-strategy`, `referral-program`

---

#### `referral-program` — Programa de Referral

**Para que serve:** Criar, otimizar ou analisar programas de referral, afiliados ou estratégias de word-of-mouth.

**Quando usar:**
- "Cria um programa de referral"
- "Como configurar afiliados?"
- "Programa de indicação para meu SaaS"
- "Word-of-mouth strategy"

**Skills relacionadas:** `free-tool-strategy`, `pricing-strategy`, `analytics-tracking`

---

### Estratégia e Monetização

---

#### `marketing-ideas` — Ideias de Marketing

**Para que serve:** Gerar ideias de marketing, inspiração e estratégias para SaaS ou software.

**Quando usar:**
- "Me dá ideias de marketing para meu SaaS"
- "O que posso fazer para crescer?"
- "Estratégias de marketing que funcionam"
- "140 SaaS marketing ideas"

**Skills relacionadas:** Todas as outras skills

---

#### `marketing-psychology` — Psicologia do Marketing

**Para que serve:** Aplicar princípios psicológicos, mental models e behavioral science ao marketing.

**Quando usar:**
- "Que princípios de psicologia usar no copy?"
- "Mental models para marketing"
- "Behavioral economics aplicado"
- "Como usar ancoragem, escassez, prova social?"

**Skills relacionadas:** `copywriting`, `page-cro`, `pricing-strategy`

---

#### `launch-strategy` — Estratégia de Lançamento

**Para que serve:** Planejar lançamento de produto, anúncio de feature ou estratégia de release.

**Quando usar:**
- "Planeja o lançamento do meu produto"
- "Estratégia de release de nova feature"
- "Go-to-market para startup"
- "Product launch checklist"

**Skills relacionadas:** `paid-ads`, `social-content`, `email-sequence`, `PR`

---

#### `pricing-strategy` — Estratégia de Preço

**Para que serve:** Ajuda com decisões de pricing, packaging e estratégia de monetização.

**Quando usar:**
- "Como precificar meu SaaS?"
- "Devo ter planos diferentes?"
- "Estratégia de freemium vs trial"
- "Pricing page copy"

**Skills relacionadas:** `page-cro`, `copywriting`, `revops`

---

### Sales e RevOps

---

#### `revops` — Revenue Operations

**Para que serve:** Operações de receita, gestão do ciclo de leads, handoff de marketing para vendas.

**Quando usar:**
- "Configura lead scoring"
- "Melhora o handoff marketing-vendas"
- "Pipeline management"
- "CRM automation"

**Skills relacionadas:** `sales-enablement`, `analytics-tracking`, `cold-email`

---

#### `sales-enablement` — Sales Enablement

**Para que serve:** Criar collateral de vendas — pitch decks, one-pagers, docs de objection handling, scripts de demo.

**Quando usar:**
- "Cria um pitch deck"
- "One-pager de vendas"
- "Como responder objeções?"
- "Script de demo"

**Skills relacionadas:** `revops`, `cold-email`, `copywriting`

---

### Research

---

#### `customer-research` — Pesquisa de Cliente

**Para que serve:** Conduzir, analisar ou sintetizar pesquisa de cliente — entrevistas, surveys, support tickets, review mining, Reddit/G2/forum research, personas, voice of customer.

**Quando usar:**
- "Analisa depoimentos de clientes"
- "Cria personas baseadas em research"
- "Mining de reviews do G2"
- "Voice of customer synthesis"

**Skills relacionadas:** `copywriting`, `page-cro`, `competitor-alternatives`, `product-marketing-context`

---

#### `lead-magnets` — Lead Magnets

**Para que serve:** Criar, planejar ou otimizar lead magnets para captura de email ou geração de leads.

**Quando usar:**
- "Cria um lead magnet"
- "Que lead magnet funciona melhor?"
- "Checklist, ebook, template?"
- "Otimizar conversão do lead magnet"

**Skills relacionadas:** `content-strategy`, `email-sequence`, `free-tool-strategy`

---

## 9. Ferramentas Integradas — 70+ Tools

O Marketing Skills inclui integração com **70+ ferramentas de marketing** organizadas em:

### CLI Tools (51 ferramentas)

Ferramentas CLI de **zero dependências** (Node.js 18+) que funcionam diretamente no terminal. Cada uma usa `fetch` nativo e autenticação via variáveis de ambiente.

**Padrão de uso:**
```bash
# Sintaxe consistente em todas
TOOL_API_KEY=sua_chave node tools/clis/nome-da-ferramenta.js <recurso> <ação> [opções]

# Exemplo com GA4
GA4_API_KEY=sua_chave node tools/clis/ga4.js events list --property-id=123

# Dry-run para testar sem enviar
node tools/clis/ga4.js events list --dry-run
```

### Ferramentas MCP-Enabled (14 nativas + Composio)

Ferramentas com **MCP Servers** disponíveis para interação direta do agente:

| Ferramenta | Categoria | MCP |
|-----------|-----------|-----|
| **GA4** | Analytics | ✓ |
| **Stripe** | Payments | ✓ |
| **Mailchimp** | Email | ✓ |
| **Google Ads** | Ads | ✓ |
| **Resend** | Email Transacional | ✓ |
| **Zapier** | Automação | ✓ |
| **ZoomInfo** | Data B2B | ✓ |
| **Clay** | Data Enrichment | ✓ |
| **Supermetrics** | Data Aggregation | ✓ |
| **Coupler** | Data Pipelines | ✓ |
| **Outreach** | Sales Engagement | ✓ |
| **Crossbeam** | Partner Ecosystem | ✓ |
| **Introw** | Partner Management | ✓ |
| **Composio** | Integration Layer (500+ tools) | ✓ |

### Composio — Acesso MCP a 500+ Ferramentas

Para ferramentas que não têm MCP nativo (HubSpot, Salesforce, Meta Ads, LinkedIn Ads, Google Sheets, Slack, Notion, etc.), o **Composio** fornece acesso via um único MCP server:

```bash
# Setup do Composio
npx @composio/mcp@latest setup
```

### Registro Completo por Categoria

#### Analytics
| Ferramenta | Melhor Para | CLI | MCP |
|-----------|-------------|-----|-----|
| **GA4** | Web analytics, ecossistema Google | ✓ | ✓ |
| **Mixpanel** | Product analytics, event tracking | ✓ | - |
| **Amplitude** | Product analytics, cohort analysis | ✓ | - |
| **PostHog** | Open-source analytics, session replay | ✓ | - |
| **Segment** | CDP, routing de dados | ✓ | - |
| **Adobe Analytics** | Enterprise analytics | ✓ | - |
| **Plausible** | Privacy-focused analytics | ✓ | - |

#### SEO
| Ferramenta | Melhor Para | CLI | MCP |
|-----------|-------------|-----|-----|
| **Google Search Console** | Dados de busca autoritativos | ✓ | - |
| **SEMrush** | Análise competitiva, keyword research | ✓ | - |
| **Ahrefs** | Análise de backlinks, content research | ✓ | - |
| **DataForSEO** | SERP tracking, on-page audits | ✓ | - |
| **Keywords Everywhere** | Keyword research rápido | ✓ | - |

#### CRM
| Ferramenta | Melhor Para | CLI | MCP |
|-----------|-------------|-----|-----|
| **HubSpot** | SMB, marketing + sales | ✓ | Composio |
| **Salesforce** | Enterprise, vendas complexas | ✓ | Composio |
| **Close** | SMB, high-velocity sales | ✓ | - |

#### Payments
| Ferramenta | Melhor Para | CLI | MCP |
|-----------|-------------|-----|-----|
| **Stripe** | SaaS subscriptions, developer-friendly | ✓ | ✓ |
| **Paddle** | Billing com tax compliance | ✓ | - |

#### Email
| Ferramenta | Melhor Para | CLI | MCP |
|-----------|-------------|-----|-----|
| **Mailchimp** | SMB email marketing | ✓ | ✓ |
| **Customer.io** | Messaging behavior-based | ✓ | - |
| **SendGrid** | Transactional email em escala | ✓ | - |
| **Resend** | Transactional dev-friendly | ✓ | ✓ |
| **Kit (ConvertKit)** | Creator/newsletter | ✓ | - |
| **Beehiiv** | Newsletter platform | ✓ | - |
| **Klaviyo** | E-commerce email + SMS | ✓ | - |
| **Postmark** | Deliverability-focused | ✓ | - |
| **Brevo (Sendinblue)** | Email + SMS, popular na UE | ✓ | - |
| **ActiveCampaign** | Email automation + CRM | ✓ | - |

#### Ads
| Ferramenta | Melhor Para | CLI | MCP |
|-----------|-------------|-----|-----|
| **Google Ads** | Search intent, tráfego qualificado | ✓ | ✓ |
| **Meta Ads** | Demand gen, visual, B2C | ✓ | Composio |
| **LinkedIn Ads** | B2B, targeting por cargo | ✓ | Composio |
| **TikTok Ads** | Demografia jovem, vídeo | ✓ | - |

#### Data Enrichment
| Ferramenta | Melhor Para | CLI | MCP |
|-----------|-------------|-----|-----|
| **Clearbit** | Company/person enrichment | ✓ | - |
| **Apollo** | B2B prospecting, email finding | ✓ | - |
| **ZoomInfo** | B2B contacts, intent data | ✓ | ✓ |
| **Clay** | Waterfall enrichment, 75+ providers | ✓ | ✓ |

#### Referral & Affiliate
| Ferramenta | Melhor Para | CLI |
|-----------|-------------|-----|
| **Rewardful** | Affiliate programs nativo Stripe | ✓ |
| **Tolt** | SaaS affiliate programs | ✓ |
| **Mention Me** | Enterprise referral | ✓ |
| **Dub.co** | Link tracking, attribution | ✓ |
| **PartnerStack** | Enterprise partner programs | ✓ |

#### CMS & Headless CMS
| Ferramenta | Melhor Para | CLI |
|-----------|-------------|-----|
| **WordPress** | Blogs, content sites | ✓ |
| **Webflow** | Marketing sites | ✓ |
| **Shopify** | E-commerce | ✓ |
| **Sanity** | Headless CMS flexível | ✓ |
| **Contentful** | Enterprise headless CMS | ✓ |
| **Strapi** | Open-source headless CMS | ✓ |

---

## 10. Fluxos de Trabalho End-to-End

### Fluxo 1: Lançar um Novo Produto/SaaS

```bash
# Passo 1: Configurar contexto do produto
/product-marketing-context

# Passo 2: Pesquisar clientes e mercado
/customer-research
→ Analisa reviews, entrevistas, fóruns → define personas e VOC

# Passo 3: Definir estratégia de preço
/pricing-strategy
→ Define planos, freemium vs trial, valor

# Passo 4: Escrever copy da homepage e landing page
/copywriting
→ Homepage completa com hero, benefits, social proof, CTA

# Passo 5: Otimizar para conversão
/page-cro
→ Analisa e otimiza as páginas para máxima conversão

# Passo 6: Configurar SEO
/seo-audit
→ Auditoria técnica + on-page

/schema-markup
→ Dados estruturados para rich snippets

/ai-seo
→ Otimização para ChatGPT, Perplexity, AI Overviews

# Passo 7: Criar sequência de email de onboarding
/email-sequence
→ Welcome sequence + onboarding emails

# Passo 8: Configurar analytics
/analytics-tracking
→ GA4 + eventos de conversão + dashboards

# Passo 9: Planejar lançamento
/launch-strategy
→ Timeline, canais, PR, ads

# Passo 10: Criar conteúdo social
/social-content
→ Posts de LinkedIn, Twitter, etc.

# Passo 11: Configurar ads
/paid-ads
→ Campanhas Google + Meta
/ad-creative
→ Criativos para as campanhas
```

---

### Fluxo 2: Otimizar uma Landing Page Existente

```bash
# Passo 1: Entender o contexto
/product-marketing-context

# Passo 2: Auditar a página atual
/page-cro
→ Quick Wins + High-Impact Changes + Test Ideas

# Passo 3: Melhorar o copy
/copywriting
→ Novas versões de headline, subheadline, seções

# Passo 4: Polir o copy
/copy-editing
→ Revisão linha a linha

# Passo 5: Configurar testes A/B
/ab-test-setup
→ Hipóteses, sample size, métricas

# Passo 6: Verificar tracking
/analytics-tracking
→ Garantir que conversões estão sendo medidas

# Passo 7: Otimizar SEO da página
/schema-markup
→ Dados estruturados para rich snippets
```

---

### Fluxo 3: Criar uma Máquina de Growth

```bash
# Passo 1: Ideias de crescimento
/marketing-ideas
→ 140 ideias de marketing SaaS filtradas para seu contexto

# Passo 2: Criar uma ferramenta gratuita
/free-tool-strategy
→ Calculadora, template, tool que atrai tráfego

# Passo 3: SEO programático para a ferramenta
/programmatic-seo
→ Gerar páginas de SEO em escala

# Passo 4: Configurar programa de referral
/referral-program
→ Programa de indicações com incentivos

# Passo 5: Reduzir churn
/churn-prevention
→ Flow de cancelamento + dunning + save offers

# Passo 6: Criar lead magnets
/lead-magnets
→ Checklists, templates, ebooks para captura

# Passo 7: Criar conteúdo estratégico
/content-strategy
→ Calendar de conteúdo + tópicos

# Passo 8: Páginas de comparação com competidores
/competitor-alternatives
→ "Alternativas ao X" para SEO
```

---

## 11. Estrutura Interna do Repositório

```
marketingskills/
├── .claude-plugin/
│   └── marketplace.json        # Manifesto do plugin Claude Code
├── .github/
│   └── ...                     # Templates de issues e PRs
├── skills/                     # 33 skills de marketing
│   └── skill-name/
│       ├── SKILL.md            # Arquivo principal (obrigatório, <500 linhas)
│       ├── references/         # Documentação detalhada (opcional)
│       │   └── guide.md
│       ├── scripts/            # Código executável (opcional)
│       │   └── helper.py
│       └── assets/             # Templates, dados (opcional)
│           └── template.json
├── tools/                      # 70+ ferramentas de marketing
│   ├── clis/                   # 51 CLIs zero-dependência (Node.js)
│   │   ├── ga4.js
│   │   ├── stripe.js
│   │   ├── mailchimp.js
│   │   └── ...
│   ├── composio/               # Integration layer Composio
│   │   ├── README.md
│   │   └── marketing-tools.md
│   ├── integrations/           # Guias de integração por ferramenta
│   │   ├── ga4.md
│   │   ├── stripe.md
│   │   ├── hubspot.md
│   │   └── ... (31+ guias)
│   └── REGISTRY.md             # Índice de todas as ferramentas
├── AGENTS.md                   # Guidelines para agentes de IA
├── CLAUDE.md                   # "AGENTS.md" (alias)
├── CONTRIBUTING.md             # Guia de contribuição
├── LICENSE                     # MIT
├── README.md                   # Documentação principal
├── VERSIONS.md                 # Controle de versão das skills
├── validate-skills.sh          # Script de validação
└── validate-skills-official.sh # Script oficial de validação
```

### Formato de uma Skill

Cada `SKILL.md` segue este formato:

```yaml
---
name: skill-name                    # Obrigatório, 1-64 chars, lowercase + hyphens
description: Quando usar esta skill. # Obrigatório, 1-1024 chars, incluir trigger phrases
metadata:
  version: 1.2.0                    # Opcional
  author: Corey Haines              # Opcional
---

# Skill Name

Instruções detalhadas para o agente...
```

### Convenções de Nomenclatura

- **Válido:** `page-cro`, `email-sequence`, `ab-test-setup`
- **Inválido:** `Page-CRO`, `-page`, `page--cro`
- Regras: lowercase, números e hífens apenas, sem hífens consecutivos, nome bate com diretório

---

## 12. Contribuição e Personalização

### Como Contribuir

1. **Fork** o repositório
2. **Crie uma branch:** `git checkout -b feature/nova-skill`
3. **Crie o diretório:** `mkdir -p skills/sua-skill`
4. **Crie o SKILL.md** com frontmatter e instruções
5. **Teste localmente** com um agente de IA
6. **Abra um PR** usando o template apropriado

### Checklist de Qualidade

- [ ] `name` bate com o nome do diretório
- [ ] `name` segue regras (lowercase, hífens, sem `--`)
- [ ] `description` tem 1-1024 chars com trigger phrases
- [ ] `SKILL.md` tem menos de 500 linhas
- [ ] Sem dados sensíveis ou credenciais
- [ ] Segue padrões de skills existentes

### Sugerir uma Nova Skill

Abra uma [skill request](https://github.com/coreyhaines31/marketingskills/issues/new?template=skill-request.yml) no GitHub.

### Personalizar para Seu Negócio

A melhor forma de personalizar:

1. **Fork** o repositório
2. **Edite** as skills existentes com suas frameworks, glossário e templates
3. **Adicione** skills customizadas para seus processos específicos
4. **Clone** seu fork em cada projeto

---

## 13. Atualização e Manutenção

### Verificando Atualizações

As skills verificam automaticamente o arquivo `VERSIONS.md` no GitHub. Se houver atualizações significativas (2+ skills ou major version bump), o agente notifica:

```
---
Skills update available: X marketing skills have updates.
Say "update skills" to update automatically, or run `git pull` in your marketingskills folder.
```

### Atualizando Manualmente

```bash
# Se instalou via git clone
cd .agents/marketingskills && git pull

# Se instalou via CLI
npx skills add coreyhaines31/marketingskills

# Se instalou via submodule
git submodule update --remote .agents/marketingskills
```

### Histórico de Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| **v1.5.0** | Mar 2026 | `customer-research`, `lead-magnets`, Nitrosend, Resend CLI, Firehose, Introw, 197 evals |
| **v1.2.0** | Mar 2026 | Composio, headless CMS, 10 novos CLIs, 13 novos integration guides, reasoning-based guidance |
| **v1.1.0** | Fev 2026 | Migração para `.agents/`, `revops`, `sales-enablement`, `site-architecture` |
| **v1.0.0** | Jan 2026 | Versão inicial com 32 skills, tools registry, 29 integration guides |

---

## 14. Links e Recursos Úteis

### Do Corey Haines

| Recurso | Link | Descrição |
|---------|------|-----------|
| **Conversion Factory** | [conversionfactory.co](https://conversionfactory.co) | Agência de CRO, landing pages e growth strategy |
| **Swipe Files** | [swipefiles.com](https://swipefiles.com) | Newsletter e comunidade de marketing |
| **Magister** | [magistermarketing.com](https://magistermarketing.com) | Agente de IA autônomo que usa estas skills como CMO |
| **Coding for Marketers** | [codingformarketers.com](https://codingformarketers.com) | Guia companion para marketers novos no terminal |
| **Corey.co** | [corey.co](https://corey.co) | Site pessoal do Corey |

### Do Projeto

| Recurso | Link |
|---------|------|
| **Repositório GitHub** | [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) |
| **Site Oficial** | [marketing-skills.com](https://marketing-skills.com) |
| **Agent Skills Spec** | [agentskills.io](https://agentskills.io) |
| **Issues e Suporte** | [GitHub Issues](https://github.com/coreyhaines31/marketingskills/issues) |
| **CLI de Instalação** | [github.com/vercel-labs/skills](https://github.com/vercel-labs/skills) |
| **SkillKit (Multi-Agent)** | [github.com/rohitg00/skillkit](https://github.com/rohitg00/skillkit) |

### Ferramentas de Referência

| Recurso | Link |
|---------|------|
| **Sample Size Calculator (Evan Miller)** | [evanmiller.org/ab-testing](https://www.evanmiller.org/ab-testing/sample-size.html) |
| **Sample Size Calculator (Optimizely)** | [optimizely.com/sample-size-calculator](https://www.optimizely.com/sample-size-calculator) |

---

> **Dica final:** Comece configurando o `product-marketing-context` com `/product-marketing-context`. Esse é o passo que mais impacto tem — todas as 32 outras skills ficam 10x melhores quando têm contexto sobre seu produto, público e posicionamento.

---

*Documento gerado em Abril 2026. Consulte o [repositório oficial](https://github.com/coreyhaines31/marketingskills) para a versão mais atualizada.*
