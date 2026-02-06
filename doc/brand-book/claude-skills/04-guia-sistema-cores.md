---
name: guia-sistema-cores
description: Cria documentação abrangente de sistema de cores incluindo design tokens, variáveis CSS, padrões de nomenclatura semântica, matriz de uso por contexto de UI e integração com frameworks CSS como Tailwind. Use ao estabelecer design systems, documentar padrões de cores existentes, implementar temas claro/escuro ou criar diretrizes visuais de marca.
---

# Guia de Documentação de Sistema de Cores

## Objetivo

Criar documentação completa de sistema de cores que sirva como fonte única de verdade para design tokens, padrões de variáveis CSS e integração com frameworks CSS, garantindo consistência visual em todo o projeto.

## Quando Usar Esta Skill

- Ao estabelecer novo sistema de cores para um projeto
- Ao documentar tokens de cores existentes e padronizar uso
- Ao criar diretrizes de design system para time de design/dev
- Ao planejar implementação de tema (claro/escuro/sistema)
- Ao migrar entre versões de framework CSS (Tailwind 3→4)
- Ao resolver inconsistências visuais de cores na UI

## Workflow de Documentação

Copie este checklist e acompanhe o progresso:

```
Progresso da Documentação:
- [ ] 1. Identificar fonte da verdade (arquivos de config)
- [ ] 2. Mapear todas as cores em uso (tokens existentes)
- [ ] 3. Definir convenção de nomenclatura semântica
- [ ] 4. Criar tabela de uso de tokens por contexto
- [ ] 5. Documentar integração com framework CSS
- [ ] 6. Estabelecer estratégia de temas (claro/escuro)
- [ ] 7. Definir workflow de criação de novos tokens
- [ ] 8. Criar seção de anti-padrões
- [ ] 9. Validar contraste WCAG
- [ ] 10. Revisar com time de design/dev
```

## Passo 1: Identificação de Fonte da Verdade

Documente onde as cores realmente vivem no código:

| Local | Propósito | O que Documentar |
|-------|-----------|------------------|
| `src/styles/globals.css` | Tokens CSS base (`:root`) | Todas variáveis `--color-*` declaradas |
| `tailwind.config.mjs` | Mapeamento para classes Tailwind | Referências a `var(--*)` em `colors` |
| Componentes `.astro` | Uso específico de cores | Classes de cor em cada componente |
| Layouts `Layout.astro` | Herança de cores globais | Tokens aplicados no nível de layout |

**Ação:** Execute `grep -r "var(--" src/` para encontrar todos os usos de variáveis CSS.

## Passo 2: Inventário de Cores Existentes

### 2.1. Liste Todos os Tokens Atuais

```css
/* Exemplo de :root em globals.css */
:root {
  /* Tokens primários */
  --background: #ffffff;
  --foreground: #0a0a0a;

  /* Tokens de componente */
  --card: #ffffff;
  --card-hover: #f5f5f5;

  /* Tokens interativos */
  --accent: #2563eb;
  --accent-hover: #1d4ed8;

  /* Tokens de borda */
  --border: #e5e5e5;

  /* Hierarquia de texto */
  --muted: #737373;
  --muted-foreground: #a3a3a3;

  /* Espaçamento/raio */
  --radius: 0.5rem;
}
```

### 2.2. Crie Mapa Visual de Cores

| Token | Valor Hex | Papel Visual | Aparece em |
|-------|-----------|--------------|------------|
| `--background` | `#ffffff` | Fundo principal | `body`, seções |
| `--foreground` | `#0a0a0a` | Texto principal | Parágrafos, títulos |
| `--accent` | `#2563eb` | CTA/destaque | Botões, links |
| `--card` | `#ffffff` | Fundo de card | Componentes card |
| `--border` | `#e5e5e5` | Divisores | Bordas, separadores |
| `--ring` | `#2563eb` | Focus ring | Estado de foco em inputs |

### 2.3. Grupos de Tokens Expandidos

**Sidebar Tokens:**
- Para componentes de navegação lateral
- Inclui primary, accent, foreground, border, ring
- Exemplo: `--sidebar`, `--sidebar-primary`, `--sidebar-accent`

**Chart Tokens:**
- Para gráficos e visualizações de dados
- 5 cores distintas para diferentes séries
- Exemplo: `--chart-1`, `--chart-2`, `--chart-3`, etc.

**Shadow Tokens:**
- **Partes separadas**: `--shadow-x`, `--shadow-y`, `--shadow-blur`, `--shadow-spread`, `--shadow-opacity`, `--shadow-color`
- **Predefinições**: `--shadow-2xs`, `--shadow-xs`, `--shadow-sm`, `--shadow`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-2xl`
- Usados para elevação visual e profundidade

**Font Family Tokens:**
- `--font-sans`: Para UI e interface
- `--font-serif`: Para conteúdo editorial
- `--font-mono`: Para código e technical

**Border Radius:**
- `--radius`: Valor base para bordas arredondadas
- Usado em cálculos: xl, lg, md, sm

**Typography Tokens:**
- `--tracking-normal`: Letter-spacing base
- `--spacing`: Espaçamento base

## Passo 3: Convenção de Nomenclatura Semântica

### 3.1. Princípios de Nomenclatura

**Use kebab-case para variáveis CSS:**
```css
--accent-hover  /* ✅ Semântico */
--accentHover   /* ❌ camelCase - não use */
```

**Prefira semântico sobre literal:**
```css
--accent           /* ✅ Descreve função */
--azul-primario    /* ❌ Descreve cor literal */
```

**Agrupe por papel:**
- `background/foreground` - Base de página
- `card/card-hover` - Componentes de card
- `accent/accent-hover` - Elementos interativos
- `border/input` - Bordas e inputs
- `muted/muted-foreground` - Texto secundário

### 3.2. Padrões de Sufixo

| Sufixo | Uso | Exemplo |
|--------|-----|---------|
| `-hover` | Estado hover | `--card-hover` |
| `-foreground` | Texto/frente | `--card-foreground` |
| `-muted` | Desativado/secundário | `--muted` |

## Passo 4: Tabela de Uso de Tokens

Crie referência rápida para handoff design/dev:

| Token | Papel Visual | Classe Tailwind | Contexto de Uso |
|-------|-------------|-----------------|-----------------|
| `--background` | Fundo principal | `bg-background` | Corpo da página, seções principais |
| `--foreground` | Texto principal | `text-foreground` | Texto de corpo, títulos |
| `--card` | Fundo de card | `bg-card` | Componentes de card, painéis |
| `--card-hover` | Card em hover | `hover:bg-card-hover` | Estados interativos de card |
| `--accent` | CTA/destaque | `bg-accent`, `text-accent` | Botões primários, links importantes |
| `--accent-hover` | CTA em hover | `hover:bg-accent-hover` | Estados hover de CTA |
| `--border` | Divisores | `border-border` | Bordas de componentes, separadores |
| `--muted` | Texto secundário | `text-muted` | Meta info, timestamps, descrições |
| `--muted-foreground` | Texto terciário | `text-muted-foreground` | Legenda, informação de suporte |
| `--ring` | Focus ring | `focus:ring-ring` | Estado de foco em inputs/botões |
| **Sidebar Tokens** | | | |
| `--sidebar` | Fundo sidebar | `bg-sidebar` | Componente de navegação lateral |
| `--sidebar-primary` | Destaque sidebar | `text-sidebar-primary` | Links ativos na sidebar |
| `--sidebar-accent` | Acento sidebar | `bg-sidebar-accent` | Hover na sidebar |
| **Chart Tokens** | | | |
| `--chart-1` | Cor gráfico 1 | `bg-chart-1` | Primeira série em gráficos |
| `--chart-2` | Cor gráfico 2 | `bg-chart-2` | Segunda série em gráficos |
| `--chart-3/4/5` | Cores gráficos | `bg-chart-3/4/5` | Demais séries em gráficos |
| **Shadow Tokens** | | | |
| `--shadow-sm` | Sombra leve | `shadow-sm` | Cards leves, tooltips |
| `--shadow` | Sombra base | `shadow` | Componentes elevados padrão |
| `--shadow-lg` | Sombra grande | `shadow-lg` | Modais, dropdowns |
| **Font Tokens** | | | |
| `--font-sans` | Fonte UI | `font-sans` | Interface, botões, navegação |
| `--font-serif` | Fonte editorial | `font-serif` | Artigos, conteúdo longo |
| `--font-mono` | Fonte código | `font-mono` | Bloco de código, inline code |
| **Spacing Tokens** | | | |
| `--radius` | Border radius | `rounded-lg` | Cantos arredondados |
| `--tracking-normal` | Letter-spacing | `tracking-normal` | Espaçamento entre letras |

## Passo 5: Integração com Framework CSS

### 5.1. Mapeamento Tailwind 3 (Completo)

```js
// tailwind.config.mjs
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "2xs": "var(--shadow-2xs)",
      },
    },
  },
};
```

### 5.2. Padrão de Migração Tailwind 4 (Futuro)

```css
/* globals.css - Tailwind 4 usa @theme inline */
@theme inline {
  /* Cores Base */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* Componentes */
  --color-card: var(--card);
  --color-popover: var(--popover);

  /* Interativas */
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-accent: var(--accent);
  --color-destructive: var(--destructive);

  /* Estados */
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  /* Gráficos */
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  /* Sidebar */
  --color-sidebar: var(--sidebar);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-accent: var(--sidebar-accent);

  /* Border Radius */
  --radius: var(--radius);
}
```

## Passo 6: Estratégia de Temas

### 6.1. Suporte Claro/Escuro

**Documente a estratégia:**
- Tema único com preferência do sistema?
- Temas claro + escuro com toggle manual?
- Tema-por-seção (ex: dashboard escuro, blog claro)?

### 6.2. Implementação de Dark Mode

**Estratégia:**
- Defina tokens base em `:root` (light mode)
- Sobrescreva tokens afetados em `.dark`
- Mantenha tokens neutros (radius, fontes, tracking) sem duplicação

**Exemplo de implementação:**
```css
/* globals.css */
:root {
  --background: #fcfcfc;
  --foreground: #171717;
  /* ... todos tokens light (veja Passo 8) ... */
}

.dark {
  --background: #121212;
  --foreground: #e2e8f0;
  --card: #171717;
  --card-foreground: #e2e8f0;
  --popover: #242424;
  --popover-foreground: #a9a9a9;
  --primary: #006239;
  --primary-foreground: #dde8e3;
  --secondary: #242424;
  --secondary-foreground: #fafafa;
  --muted: #1f1f1f;
  --muted-foreground: #a2a2a2;
  --accent: #313131;
  --accent-foreground: #fafafa;
  --destructive: #541c15;
  --destructive-foreground: #ede9e8;
  --border: #292929;
  --input: #242424;
  --ring: #4ade80;
  --chart-1: #4ade80;
  --chart-2: #60a5fa;
  --chart-3: #a78bfa;
  --chart-4: #fbbf24;
  --chart-5: #2dd4bf;
  --sidebar: #121212;
  --sidebar-foreground: #898989;
  --sidebar-primary: #006239;
  --sidebar-primary-foreground: #dde8e3;
  --sidebar-accent: #313131;
  --sidebar-accent-foreground: #fafafa;
  --sidebar-border: #292929;
  --sidebar-ring: #4ade80;

  /* Nota: radius, fontes, shadows e tracking geralmente se mantêm */
}

body {
  letter-spacing: var(--tracking-normal);
}
```

**Configuração Tailwind:**
```js
// tailwind.config.mjs
module.exports = {
  darkMode: ["class"],  // ou 'media' para preferência do sistema
  // ...
};
```

### 6.3. Exemplos Práticos de Uso dos Tokens

**Sidebar com tokens completos:**
```astro
<aside class="w-64 bg-sidebar border-r border-sidebar-border">
  <nav class="space-y-1">
    <a href="#" class="block px-4 py-2 text-sidebar-foreground bg-sidebar-accent rounded-md">
      Link com acento
    </a>
    <a href="#" class="block px-4 py-2 text-sidebar-primary bg-sidebar-primary/10 rounded-md">
      Link ativo/primário
    </a>
  </nav>
</aside>
```

**Gráfico com chart tokens:**
```astro
<div class="flex items-end gap-2">
  <div class="w-8 bg-chart-1 rounded-t" style="height: 60%"></div>
  <div class="w-8 bg-chart-2 rounded-t" style="height: 80%"></div>
  <div class="w-8 bg-chart-3 rounded-t" style="height: 40%"></div>
  <div class="w-8 bg-chart-4 rounded-t" style="height: 90%"></div>
  <div class="w-8 bg-chart-5 rounded-t" style="height: 70%"></div>
</div>
```

**Card com shadow tokens:**
```astro
<div class="bg-card border border-border rounded-lg shadow-md p-6">
  <h3 class="text-card-foreground font-semibold">Título</h3>
  <p class="text-muted-foreground mt-2">Descrição</p>
</div>
```

**Input com ring e border tokens:**
```astro
<input
  type="text"
  class="w-full px-4 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
  placeholder="Digite aqui..."
/>
```

**Botão com shadow e radius:**
```astro
<button class="px-6 py-2 bg-primary text-primary-foreground rounded-md shadow-sm hover:shadow-md transition-shadow">
  Clique Aqui
</button>
```

**Código com font-mono token:**
```astro
<pre class="bg-muted p-4 rounded-lg font-mono text-sm">
  <code>npm install astro</code>
</pre>
```

## Passo 7: Workflow de Criação de Token

```
[Necessidade visual identificada]
      ↓
[Verifique se token existente atende necessidade]
      |
      +-- SIM → Use token existente
      |
      +-- NÃO → Crie novo token
      ↓
[Defina nome semântico em :root]
      ↓
[Mapeie na config do framework]
      ↓
[Aplique classe semântica no componente]
      ↓
[Valide contraste WCAG (mínimo AA)]
      ↓
[Documente na tabela de uso]
```

## Passo 8: Sistema Expandido Completo

Para design systems abrangentes, use este sistema completo de tokens:

### 8.1. Exemplo Completo de :root (Light Mode)

```css
:root {
  /* --- Cores Base --- */
  --background: #fcfcfc;
  --foreground: #171717;

  /* --- Cores de Componente --- */
  --card: #fcfcfc;
  --card-foreground: #171717;
  --popover: #fcfcfc;
  --popover-foreground: #525252;

  /* --- Cores Interativas --- */
  --primary: #72e3ad;
  --primary-foreground: #1e2723;
  --secondary: #fdfdfd;
  --secondary-foreground: #171717;

  /* --- Estados e Acentos --- */
  --muted: #ededed;
  --muted-foreground: #202020;
  --accent: #ededed;
  --accent-foreground: #202020;

  /* --- Destrutivo/Alertas --- */
  --destructive: #ca3214;
  --destructive-foreground: #fffcfc;

  /* --- Bordas e Inputs --- */
  --border: #dfdfdf;
  --input: #f6f6f6;
  --ring: #72e3ad;

  /* --- Gráficos e Visualizações --- */
  --chart-1: #72e3ad;
  --chart-2: #3b82f6;
  --chart-3: #8b5cf6;
  --chart-4: #f59e0b;
  --chart-5: #10b981;

  /* --- Sidebar --- */
  --sidebar: #fcfcfc;
  --sidebar-foreground: #707070;
  --sidebar-primary: #72e3ad;
  --sidebar-primary-foreground: #1e2723;
  --sidebar-accent: #ededed;
  --sidebar-accent-foreground: #202020;
  --sidebar-border: #dfdfdf;
  --sidebar-ring: #72e3ad;

  /* --- Fontes --- */
  --font-sans: Outfit, sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: monospace;

  /* --- Border Radius --- */
  --radius: 0.5rem;

  /* --- Sombras (Partes Separadas) --- */
  --shadow-x: 0px;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.17;
  --shadow-color: #000000;

  /* --- Sombras (Predefinições Completas) --- */
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.09);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.09);
  --shadow-sm: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 1px 2px -1px hsl(0 0% 0% / 0.17);
  --shadow: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 1px 2px -1px hsl(0 0% 0% / 0.17);
  --shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 2px 4px -1px hsl(0 0% 0% / 0.17);
  --shadow-lg: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 4px 6px -1px hsl(0 0% 0% / 0.17);
  --shadow-xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 8px 10px -1px hsl(0 0% 0% / 0.17);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.43);

  /* --- Espaçamento e Tipografia --- */
  --tracking-normal: 0.025em;
  --spacing: 0.25rem;
}
```

### 8.2. Exemplo Completo de Dark Mode

```css
.dark {
  /* --- Cores Base (Invertidas) --- */
  --background: #121212;
  --foreground: #e2e8f0;

  /* --- Cores de Componente --- */
  --card: #171717;
  --card-foreground: #e2e8f0;
  --popover: #242424;
  --popover-foreground: #a9a9a9;

  /* --- Cores Interativas --- */
  --primary: #006239;
  --primary-foreground: #dde8e3;
  --secondary: #242424;
  --secondary-foreground: #fafafa;

  /* --- Estados e Acentos --- */
  --muted: #1f1f1f;
  --muted-foreground: #a2a2a2;
  --accent: #313131;
  --accent-foreground: #fafafa;

  /* --- Destrutivo/Alertas --- */
  --destructive: #541c15;
  --destructive-foreground: #ede9e8;

  /* --- Bordas e Inputs --- */
  --border: #292929;
  --input: #242424;
  --ring: #4ade80;

  /* --- Gráficos e Visualizações --- */
  --chart-1: #4ade80;
  --chart-2: #60a5fa;
  --chart-3: #a78bfa;
  --chart-4: #fbbf24;
  --chart-5: #2dd4bf;

  /* --- Sidebar --- */
  --sidebar: #121212;
  --sidebar-foreground: #898989;
  --sidebar-primary: #006239;
  --sidebar-primary-foreground: #dde8e3;
  --sidebar-accent: #313131;
  --sidebar-accent-foreground: #fafafa;
  --sidebar-border: #292929;
  --sidebar-ring: #4ade80;

  /* Nota: Fontes, radius, shadows e tracking geralmente se mantêm */
}
```

### 8.3. Aplicação Global de Tracking

```css
body {
  letter-spacing: var(--tracking-normal);
}
```

## Melhores Práticas

1. **Defina Uma Vez**: Tokens declarados em `:root`, referenciados em outro lugar
2. **Nomenclatura Semântica**: Nomes descrevem função, não aparência
3. **Mapeamento Framework**: Variáveis CSS → utilitários framework (colors, borderRadius, fontFamily, boxShadow)
4. **Aplicação Consistente**: Use classes utilitárias, não hex inline
5. **Sistema Expandido**: Use sidebar, chart, shadow, radius, font tokens em vez de valores customizados
6. **Validação de Contraste**: Verifique conformidade WCAG AA/AAA para tokens de texto
7. **Dark Mode Completo**: Todos tokens de cor devem ter versão em .dark
8. **Documente Mudanças**: Atualize docs quando adicionar/modificar tokens

## Exemplo de Uso

```
Usuário: "Preciso adicionar um gráfico de vendas com 3 séries de dados. Quais cores devo usar?"

IA: [Usa guia-sistema-cores]
- Verifica se existem tokens de chart em :root
- Identifica chart tokens disponíveis: --chart-1, --chart-2, --chart-3, --chart-4, --chart-5
- Configura gráfico usando bg-chart-1, bg-chart-2, bg-chart-3 para as séries
- Garante que dark mode também tem chart tokens definidos
- Documenta uso de chart tokens para gráficos futuros
```

```
Usuário: "Preciso adicionar um botão de alerta no sistema. Qual cor devo usar?"

IA: [Usa guia-sistema-cores]
- Verifica tokens existentes em globals.css
- Identifica que já existe token `--destructive`
- Usa bg-destructive para o botão de alerta
- Valida contraste com destructive-foreground
- Aplica classe: className="bg-destructive text-destructive-foreground"
- Se não existisse, criaria novo token seguindo padrão semântico
```

## Anti-Padrões a Evitar

- ❌ Não hardcode valores hex em múltiplos componentes quando token existe
- ❌ Não crie tokens semânticos duplicados com mesmo papel visual
- ❌ Não quebre consistência de cor accent sem revisar todos CTAs do projeto
- ❌ Não misture nomenclatura literal e semântica sem critério claro
- ❌ Não defina tokens sem mapear para utilitários do framework
- ❌ Não use cores de forma inconsistente (ex: accent em botões, mas não em links)
- ❌ Não ignore validação de contraste para texto
- ❌ Não crie tokens sem documentar na tabela de uso
- ❌ Não esqueça de definir tokens para dark mode (todos tokens de cor devem ter versão dark)
- ❌ Não use sombras customizadas em componentes quando shadow tokens existem
- ❌ Não use valores de radius hardcoded quando --radius está disponível
- ❌ Não ignore chart tokens em visualizações de dados (use --chart-1 a --chart-5)
- ❌ Não misture font families sem usar --font-sans, --font-serif, --font-mono

## Template de Documentação Final

```markdown
# Sistema de Cores

## Fonte da Verdade
- `src/styles/globals.css` - Tokens CSS base (:root, .dark)
- `tailwind.config.mjs` - Mapeamento para classes

## Estado Atual
[Tabela de todos os tokens com valores hex]

## Grupos de Tokens
- **Base**: background, foreground
- **Componentes**: card, popover
- **Interativas**: primary, secondary, accent, destructive
- **Estados**: muted, border, input, ring
- **Sidebar**: sidebar, sidebar-primary, sidebar-accent
- **Gráficos**: chart-1 a chart-5
- **Sombras**: shadow-2xs a shadow-2xl
- **Fontes**: font-sans, font-serif, font-mono
- **Espaçamento**: radius, spacing, tracking

## Tabela de Uso de Tokens
[Referência rápida design/dev com classes Tailwind]

## Integração com Framework
[Config completa de Tailwind: colors, borderRadius, fontFamily, boxShadow]

## Estratégia de Temas
[Suporte claro/escuro/sistema com exemplos]

## Workflow de Criação
[Como adicionar/modificar tokens]

## Validação de Contraste
[Resultados WCAG para tokens de texto]

## Anti-Padrões
[O que evitar]

## Exemplos de Implementação
[Código de uso real de sidebar, chart, shadows, etc.]
```

## Checklist de Revisão Final

- [ ] Todos tokens declarados em fonte única (`:root`)?
- [ ] Framework recebe mapeamento completo (colors, borderRadius, fontFamily, boxShadow)?
- [ ] Nomes de tokens descrevem função, não cor?
- [ ] Contraste e legibilidade validados (WCAG AA)?
- [ ] Tabela de uso completa com classes Tailwind?
- [ ] Sistema expandido implementado (sidebar, chart, shadow, radius, font, tracking)?
- [ ] Estratégia de tema documentada (light/dark)?
- [ ] Dark mode sobrescreve todos tokens afetados?
- [ ] Shadow tokens disponíveis e em uso?
- [ ] Chart tokens definidos para gráficos/visualizações?
- [ ] Sidebar tokens configurados para navegação lateral?
- [ ] Font family tokens (--font-sans, --font-serif, --font-mono) configurados?
- [ ] Radius token (--radius) em uso em vez de valores hardcoded?
- [ ] Workflow de criação estabelecido?
- [ ] Seção de anti-padrões incluída e atualizada?
- [ ] Documentação pode ser usada para handoff design/dev?
