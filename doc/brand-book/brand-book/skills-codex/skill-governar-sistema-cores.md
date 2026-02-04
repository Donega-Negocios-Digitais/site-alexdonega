---
name: governar-sistema-cores
description: Cria e governa sistema de cores com tokens semanticos, variaveis CSS, mapeamento de framework e estratégia de temas. Use ao padronizar design system, ajustar paleta, revisar contraste ou migrar versoes de framework CSS.
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

## Passo 5: Integração com Framework CSS

### 5.1. Mapeamento Tailwind 3

```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          hover: 'var(--card-hover)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        border: 'var(--border)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
      },
    },
  },
};
```

### 5.2. Padrão de Migração Tailwind 4 (Futuro)

```css
/* globals.css - Tailwind 4 usa @theme inline */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-accent: var(--accent);
  /* ... mapeamento completo */
}
```

## Passo 6: Estratégia de Temas

### 6.1. Suporte Claro/Escuro

**Documente a estratégia:**
- Tema único com preferência do sistema?
- Temas claro + escuro com toggle manual?
- Tema-por-seção (ex: dashboard escuro, blog claro)?

### 6.2. Implementação de Dark Mode

```css
/* globals.css */
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  /* ... tokens claros ... */
}

.dark {
  --background: #0a0a0a;   /* Inverte */
  --foreground: #ffffff;   /* Inverte */
  --card: #171717;
  --card-hover: #262626;
  /* ... sobrescreva todos tokens afetados ... */
}
```

**Configuração Tailwind:**
```js
// tailwind.config.mjs
darkMode: 'class', // ou 'media' para preferência do sistema
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

## Passo 8: Sistema Expandido (Opcional)

Para design systems abrangentes, expanda com:

```css
:root {
  /* Principal */
  --background: #hex;
  --foreground: #hex;

  /* Componentes */
  --card: #hex;
  --card-foreground: #hex;
  --popover: #hex;
  --popover-foreground: #hex;

  /* Interativo */
  --primary: #hex;
  --primary-foreground: #hex;
  --secondary: #hex;
  --secondary-foreground: #hex;
  --accent: #hex;
  --accent-foreground: #hex;

  /* Estados */
  --destructive: #hex;
  --destructive-foreground: #hex;

  /* Bordas */
  --border: #hex;
  --input: #hex;
  --ring: #hex;

  /* Gráficos/visualização de dados */
  --chart-1: #hex;
  --chart-2: #hex;
  --chart-3: #hex;
  --chart-4: #hex;
  --chart-5: #hex;

  /* Sombras */
  --shadow-sm: ...;
  --shadow: ...;
  --shadow-lg: ...;
}
```

## Melhores Práticas

1. **Defina Uma Vez**: Tokens declarados em `:root`, referenciados em outro lugar
2. **Nomenclatura Semântica**: Nomes descrevem função, não aparência
3. **Mapeamento Framework**: Variáveis CSS → utilitários framework
4. **Aplicação Consistente**: Use classes utilitárias, não hex inline
5. **Validação de Contraste**: Verifique conformidade WCAG AA/AAA para tokens de texto
6. **Documente Mudanças**: Atualize docs quando adicionar/modificar tokens

## Exemplo de Uso

```
Usuário: "Preciso adicionar um botão de alerta no sistema. Qual cor devo usar?"

IA: [Usa guia-sistema-cores]
- Verifica tokens existentes em globals.css
- Identifica que não existe token `--destructive` ou `--alert`
- Sugere criar token semântico: `--destructive` (red)
- Define valor hex em :root
- Mapeia em tailwind.config.mjs
- Cria classe `bg-destructive` para o botão
- Valida contraste WCAG AA
- Documenta na tabela de uso
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

## Template de Documentação Final

```markdown
# Sistema de Cores

## Fonte da Verdade
- `src/styles/globals.css` - Tokens CSS base
- `tailwind.config.mjs` - Mapeamento para classes

## Estado Atual
[Tabela de todos os tokens com valores hex]

## Tabela de Uso de Tokens
[Referência rápida design/dev]

## Integração com Framework
[Config de Tailwind/outro framework]

## Estratégia de Temas
[Suporte claro/escuro/sistema]

## Workflow de Criação
[Como adicionar/modificar tokens]

## Validação de Contraste
[Resultados WCAG para tokens de texto]

## Anti-Padrões
[O que evitar]
```

## Checklist de Revisão Final

- [ ] Todos tokens declarados em fonte única (`:root`)?
- [ ] Framework recebe mapeamento completo?
- [ ] Nomes de tokens descrevem função, não cor?
- [ ] Contraste e legibilidade validados (WCAG AA)?
- [ ] Tabela de uso completa com classes Tailwind?
- [ ] Estratégia de tema documentada (se aplicável)?
- [ ] Workflow de criação estabelecido?
- [ ] Seção de anti-padrões incluída?
- [ ] Documentação pode ser usada para handoff design/dev?
