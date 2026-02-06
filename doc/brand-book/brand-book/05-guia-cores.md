---
name: governar-sistema-cores
description: Define e governa sistema de cores do projeto com tokens CSS semânticos, paleta dark theme, cor accent laranja e estratégia de temas. Use ao padronizar design system, ajustar paleta ou revisar contraste.
---

# Sistema de Cores - Design System

## Objetivo

Estabelecer padrões claros para uso de cores no projeto, garantindo consistência visual, contraste adequado e manutenibilidade através de tokens CSS semânticos integrados com Tailwind.

## Quando Usar Este Guia

- Ao criar novos componentes que precisam de cores
- Ao ajustar ou adicionar novos tokens de cor
- Ao revisar contraste e acessibilidade
- Ao implementar variações de tema (dark/light)
- Ao resolver inconsistências visuais

## Paleta do Projeto

### Visão Geral

O projeto utiliza **dark theme como base** com uma cor accent laranja que remete à energia e criatividade.

| Aspecto | Valor |
|---------|-------|
| **Tema base** | Dark (#0a0a0a) |
| **Cor principal** | Laranja (#d87757) |
| **Estilo** | Minimalista, high contrast |
| **Referência** | `src/styles/globals.css` |

### Tokens CSS (Fonte da Verdade)

```css
:root {
  /* Fundo */
  --background: #0a0a0a;      /* Fundo principal */
  --foreground: #e5e5e5;      /* Texto principal */

  /* Componentes */
  --card: #1a1a1a;             /* Fundo de card */
  --card-hover: #222222;       /* Card em hover */

  /* Accent (Laranja) */
  --accent: #d87757;           /* CTA, destaque */
  --accent-hover: #e8866a;     /* Hover de accent */
  --accent-light: rgba(216, 119, 87, 0.1);  /* Background suave */

  /* Bordas */
  --border: #2a2a2a;           /* Divisores */

  /* Texto secundário */
  --muted: #9ca3af;            /* Texto desativado */
  --muted-foreground: #d1d5db; /* Texto terciário */

  /* Espaçamento */
  --radius: 16px;              /* Border radius padrão */
}
```

---

## Tabela de Referência Rápida

| Token | Hex | Papel Visual | Classe Tailwind | Contexto |
|-------|-----|--------------|-----------------|----------|
| `--background` | #0a0a0a | Fundo principal | `bg-background` | Body, seções |
| `--foreground` | #e5e5e5 | Texto principal | `text-foreground` | Títulos, parágrafos |
| `--card` | #1a1a1a | Fundo de card | `bg-card` | Cards, painéis |
| `--card-hover` | #222222 | Card hover | `hover:bg-card-hover` | Estados hover |
| `--accent` | #d87757 | CTA/Destaque | `bg-accent`, `text-accent` | Botões, links |
| `--accent-hover` | #e8866a | Accent hover | `hover:bg-accent-hover` | Estados hover |
| `--accent-light` | rgba(...) | Background suave | `bg-accent/10` | Badges, highlights |
| `--border` | #2a2a2a | Divisores | `border-border` | Bordas |
| `--muted` | #9ca3af | Texto secundário | `text-muted` | Meta info |
| `--muted-foreground` | #d1d5db | Texto terciário | `text-muted-foreground` | Descrições |

---

## Cores Adicionais (shadcn/ui)

O projeto também inclui tokens compatíveis com shadcn/ui:

```javascript
colors: {
  primary: {
    DEFAULT: '#d87757',      // Mesmo que accent
    foreground: '#0a0a0a',
  },
  secondary: {
    DEFAULT: '#111111',
    foreground: '#e5e5e5',
  },
  destructive: {
    DEFAULT: '#ef4444',      // Vermelho para alertas
    foreground: '#ffffff',
  },
  ring: '#d87757',            // Focus ring (accent)
}
```

---

## Como Criar Paleta de Cores?

Se voce precisa de novas cores para o projeto, siga este processo simples.

### Ferramentas Online para Criar Paletas

Existem varias ferramentas gratuitas que ajudam a criar paletas harmoniosas:

**Coolors** - https://coolors.co
- Clique em "Generate" para criar paletas aleatorias
- Pressione a barra de espaco para gerar novas combinacoes
- Clique em qualquer cor para fixa-la
- Exporta em CSS, Tailwind ou formato de texto

**Adobe Color** - https://color.adobe.com
- Ferramenta profissional da Adobe
- Permite criar harmonias de cores automaticamente
- Visualizacao em tempo real das combinacoes
- Exportacao para diferentes formatos

**Tailwind Color** - https://tailwindcolor.com
- Focado em combinacoes com Tailwind CSS
- Mostra variacoes de tons automaticamente
- Codigo pronto para copiar

### Passo a Passo para Criar Paleta

1. **Defina a cor principal**
   - Pense na emocao que quer transmitir (energia, calma, confianca, criatividade)
   - Escolha uma cor base (este projeto usa laranja para energia/criatividade)
   - Use ferramentas para gerar variacoes automaticamente

2. **Crie as cores secundarias**
   - 2-3 cores que complementam a principal
   - Usadas para textos, fundos, destaques
   - Garanta contraste adequado para acessibilidade

3. **Valide acessibilidade**
   - Use o WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
   - Texto sobre fundo precisa ter contraste minimo de 4.5:1
   - Titulos precisam de contraste minimo de 3:1
   - Ferramentas ajudam a verificar isso automaticamente

4. **Adicione ao projeto**
   - Atualize o `:root` em `src/styles/globals.css`
   - Configure Tailwind em `tailwind.config.mjs`
   - Atualize este documento com as novas cores

### Dicas para Escolher Cores Harmoniosas

- **Complementares**: Cores opostas no circulo cromatico (criam contraste)
- **Analogas**: Cores vizinhas no circulo cromatico (criam harmonia)
- **Triade**: Tres cores igualmente espacadas (equilibrado)
- **Monocromaticas**: Variacoes de luz e sombra de uma cor (sofisticado)

### Exemplo de Cores que Funcionam Juntas

```
Laranja (principal)  +  Cinza escuro (fundo)  =  High contrast, energetico
Azul (secundaria)   +  Branco (texto)      =  Confianca, profissional
Verde (destaque)     +  Cinza claro (fundo) =  Calma, natureza
```

---

## Paleta de Cores Extendida

### Cores Principais

```
┌─────────────────────────────────────────────────────────────┐
│  BACKGROUND      │  CARD           │  BORDER           │
│  #0a0a0a         │  #1a1a1a        │  #2a2a2a          │
│  Fundo base      │  Componentes    │  Divisores        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ACCENT          │  ACCENT HOVER    │  ACCENT LIGHT     │
│  #d87757         │  #e8866a         │  rgba(216,119,87,0.1) │
│  CTA principal   │  Hover states    │  Background suave  │
└─────────────────────────────────────────────────────────────┘
```

### Cores de Texto

```
┌─────────────────────────────────────────────────────────────┐
│  FOREGROUND      │  MUTED           │  MUTED FOREGROUND │
│  #e5e5e5         │  #9ca3af         │  #d1d5db          │
│  Texto principal │  Secundário      │  Terciário         │
└─────────────────────────────────────────────────────────────┘
```

---

## Configuração Tailwind

### Mapeamento Completo

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        // Cores do projeto
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        card: {
          DEFAULT: 'var(--card)',
          hover: 'var(--card-hover)',
        },

        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          light: 'var(--accent-light)',
        },

        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },

        border: 'var(--border)',

        // shadcn/ui compatibilidade
        primary: {
          DEFAULT: '#d87757',
          foreground: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#111111',
          foreground: '#e5e5e5',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        ring: '#d87757',
      },

      borderRadius: {
        lg: 'var(--radius)',  // 16px
        md: '12px',
        sm: '8px',
      },
    },
  },
};
```

---

## Uso por Contexto

### Botões e CTAs

```astro
<!-- Botão principal -->
<button class="bg-accent hover:bg-accent-hover text-white rounded-full px-6 py-3 transition-colors">
  Chamada para Ação
</button>

<!-- Botão secundário -->
<button class="bg-card hover:bg-card-hover border border-border text-foreground rounded-lg px-4 py-2">
  Secundário
</button>

<!-- Botão outline -->
<button class="border border-accent text-accent hover:bg-accent/10 rounded-lg px-4 py-2">
  Outline
</button>
```

### Cards e Painéis

```astro
<!-- Card padrão -->
<div class="bg-card rounded-lg border border-border p-6">
  <h3 class="text-foreground">Título</h3>
  <p class="text-muted-foreground">Descrição</p>
</div>

<!-- Card hover -->
<div class="bg-card hover:bg-card-hover rounded-lg border border-border p-6 transition-colors cursor-pointer">
  <h3 class="text-foreground">Card interativo</h3>
</div>
```

### Texto e Tipografia

```astro
<h1 class="text-foreground">Título principal</h1>
<p class="text-muted-foreground">Texto de suporte</p>
<span class="text-muted">Metadata</span>

<!-- Accent em texto -->
<span class="text-accent">Destaque importante</span>
```

### Badges e Tags

```astro
<!-- Badge accent -->
<span class="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
  Nova
</span>

<!-- Badge muted -->
<span class="bg-muted/10 text-muted-foreground px-3 py-1 rounded-full text-sm">
  Rascunho
</span>
```

---

## Estratégia de Temas

### Dark Mode como Padrão

O projeto utiliza **dark theme como padrão**, sem opção de light theme atualmente.

**Configuração:**
```javascript
// tailwind.config.mjs
darkMode: 'class',  // Habilita toggle via .dark class
```

**Estado atual:** A classe `.dark` é aplicada por padrão, pois o tema base é escuro.

### Implementação de Light Mode (Futuro)

Se adicionado light mode, sobrescreva os tokens:

```css
.light {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --card: #f5f5f5;
  --card-hover: #eeeeee;
  --border: #e5e5e5;
  /* ... sobrescreva todos os tokens afetados ... */
}
```

---

## Contraste e Acessibilidade

### Valores de Contraste

| Combinação | Ratio | WCAG | Uso |
|------------|-------|------|-----|
| Foreground on Background | 12.3:1 | AAA | Texto corpo |
| Accent on Background | 4.8:1 | AA | Botões, CTAs |
| Muted on Background | 3.1:1 | AA | Texto secundário |
| Muted-Foreground on Background | 1.9:1 | - | Texto terciário (grandes) |

**Nota:** Texto terciário (`muted-foreground`) deve ser usado apenas em tamanhos grandes (>18px) ou decorativo.

### Boas Práticas de Contraste

- ✅ Sempre use `text-foreground` para texto principal
- ✅ Use `text-muted-foreground` apenas em texto grande ou decorativo
- ✅ Botões com `bg-accent` + `text-white` passam em AA
- ✅ Badges com `bg-accent/10` + `text-accent` têm contraste adequado
- ❌ Evite `text-muted` sobre `background` (contraste insuficiente)

---

## Adicionando Novas Cores

### Workflow

```
[Necessidade de nova cor identificada]
      ↓
[Verifique se token existente atende]
      |
      +-- SIM → Use token existente
      |
      +-- NÃO → Crie novo token
      ↓
[Defina nome semântico em :root]
      ↓
[Mapeie em tailwind.config.mjs]
      ↓
[Valide contraste WCAG]
      ↓
[Documente na tabela]
```

### Exemplo: Adicionar cor de sucesso

```css
/* globals.css - :root */
--success: #22c55e;
--success-hover: #16a34a;
```

```javascript
// tailwind.config.mjs
colors: {
  success: {
    DEFAULT: 'var(--success)',
    hover: 'var(--success-hover)',
  },
}
```

```astro
<button class="bg-success hover:bg-success-hover text-white rounded-lg">
  Confirmar
</button>
```

---

## Gradientes

### Gradientes Definidos

```css
:root {
  --gradient-start: #1a1a1a;
  --gradient-end: #0a0a0a;
}
```

### Uso

```astro
<!-- Gradiente vertical -->
<div class="bg-gradient-to-b from-gradient-start to-background">
  <h1>Hero Section</h1>
</div>

<!-- Gradiente no texto -->
<h1 class="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
  Título com Gradiente
</h1>
```

---

## Border Radius

### Tokens de Arredondamento

| Token | Valor | Use em |
|-------|-------|--------|
| `--radius` / `rounded-lg` | 16px | Cards, botões principais |
| `rounded-md` | 12px | Cards secundários |
| `rounded-sm` | 8px | Inputs, pequenos elementos |
| `rounded-full` | 9999px | Badges, botões pill |

---

## Melhores Práticas

1. **Use tokens, nunca hardcode:** Sempre `bg-accent`, nunca `#d87757`
2. **Semântico acima de literal:** `--accent` em vez de `--laranja`
3. **Consistência de uso:** Accent sempre para CTAs e destaque
4. **Valide contraste:** Teste novas combinações com ferramentas WCAG
5. **Documente mudanças:** Atualize este guia ao adicionar tokens
6. **Dark first:** Design começa escuro, light é variação (se existir)

---

## Anti-Padrões

- ❌ NAO hardcode cores em componentes (`bg-[#d87757]`)
- ❌ NAO use cores fora da paleta sem justificativa
- ❌ NAO crie tokens duplicados com mesmo papel
- ❌ NAO ignore contraste WCAG para texto
- ❌ NAO use accent para props não relacionados a CTA
- ❌ NAO misture `bg-card` com `bg-background` sem critério
- ❌ NAO adicione cores sem atualizar a documentação

---

## Ferramentas Úteis

| Ferramenta | Uso |
|------------|-----|
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Validar contraste |
| [Coolors](https://coolors.co/) | Gerar paletas |
| [Tailwind Shades](https://tailwindcolor.com/) | Escalas de cor |

---

**Relacionado:** Para definir a tipografia do projeto, consulte [`06-guia-tipografia.md`](./06-guia-tipografia.md). Para padronizar ícones, consulte [`07-guia-icones.md`](./07-guia-icones.md).


