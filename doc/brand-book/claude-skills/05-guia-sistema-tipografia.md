---
name: guia-sistema-tipografia
description: Cria documentação abrangente de sistema tipográfico incluindo inventário de fontes, hierarquia de tamanhos, pesos e line-heights, regras de composição, padrões de responsividade, estratégia de carregamento de fontes e diretrizes de acessibilidade WCAG. Use ao estabelecer design systems, documentar padrões tipográficos existentes, padronizar tipografia entre design e desenvolvimento ou criar diretrizes de marca.
---

# Guia de Documentação de Sistema Tipográfico

## Objetivo

Criar documentação completa de sistema tipográfico que padronize uso de fontes, escalas de tamanho, pesos, line-heights e combinações em todo o projeto, servindo como fonte única de verdade para handoff design/dev.

## Quando Usar Esta Skill

- Ao estabelecer novo sistema tipográfico para projeto
- Ao documentar uso de fontes existentes e hierarquia
- Ao criar diretrizes tipográficas de marca para times
- Ao planejar seleção de fontes para novos projetos
- Ao padronizar tipografia através de design systems
- Ao resolver inconsistências de tipografia na UI

## Workflow de Documentação

Copie este checklist e acompanhe o progresso:

```
Progresso da Documentação:
- [ ] 1. Identificar fonte da verdade (arquivos de config)
- [ ] 2. Mapear todas as fontes em uso
- [ ] 3. Documentar cadeias de fallback
- [ ] 4. Definir hierarquia de tamanhos (escala)
- [ ] 5. Estabelecer regras de composição
- [ ] 6. Criar tabela de uso por contexto
- [ ] 7. Documentar padrões responsivos
- [ ] 8. Definir estratégia de carregamento de fontes
- [ ] 9. Validar acessibilidade WCAG
- [ ] 10. Criar seção de anti-padrões
- [ ] 11. Revisar com time de design/dev
```

## Passo 1: Identificação de Fonte da Verdade

Documente onde tipografia é realmente definida:

| Local | Propósito | O que Documentar |
|-------|-----------|------------------|
| `tailwind.config.mjs` | Font families e tamanhos base | `fontFamily`, `fontSize` config |
| `src/layouts/Layout.astro` | Imports de fontes | Google Fonts, @font-face |
| `src/styles/globals.css` | Tamanho base, line-height | `html { font-size: ... }` |
| Componentes `.astro` | Uso específico de classes de fonte | Classes Tailwind aplicadas |

**Ação:** Execute `grep -r "font-" src/` para encontrar todos os usos de classes de fonte.

## Passo 2: Inventário de Fontes

### 2.1. Fonte 1: Fonte Principal (UI)

**Exemplo: Inter (Google Fonts)**
- **Origem**: Google Fonts
- **Onde definida**: `<link>` em `src/layouts/Layout.astro`
- **Cadeia de fallback**: `Inter, system-ui, -apple-system, sans-serif`
- **Pesos carregados**: 400, 500, 600, 700
- **Papel**: UI base, botões, navegação, labels de formulário

### 2.2. Fonte 2: Fonte Editorial

**Exemplo: Source Serif 4**
- **Origem**: Google Fonts
- **Onde definida**: `<link>` em `src/layouts/Layout.astro`
- **Cadeia de fallback**: `'Source Serif 4', Georgia, serif`
- **Pesos carregados**: 400, 600, 700
- **Papel**: Títulos de artigo, texto de blog, leitura de longa forma

### 2.3. Fonte 3: Fonte Monoespaçada (Opcional)

**Exemplo: JetBrains Mono**
- **Origem**: Google Fonts
- **Onde definida**: `<link>` em `src/layouts/Layout.astro`
- **Cadeia de fallback**: `'JetBrains Mono', 'Courier New', monospace`
- **Pesos carregados**: 400
- **Papel**: Blocos de código, snippets técnicos

## Passo 3: Hierarquia de Tamanhos

Crie escala completa de tipografia:

| Papel | Família | Peso | Tamanho | Line-height | Classe Tailwind | Uso |
|------|--------|--------|---------|-------------|-----------------|------|
| **H1 Hero** | Inter | 700 | 48-56px | 1.1 | `text-5xl md:text-6xl font-bold` | Títulos de seção principal, hero |
| **H1 Editorial** | Source Serif | 600 | 40-48px | 1.2 | `text-4xl md:text-5xl font-semibold` (serif) | Títulos de artigo, blog |
| **H2** | Inter | 600 | 32-36px | 1.25 | `text-3xl md:text-4xl font-semibold` | Seções principais |
| **H3** | Inter | 600 | 24-28px | 1.3 | `text-2xl md:text-3xl font-semibold` | Subseções |
| **H4** | Inter | 500 | 18-20px | 1.4 | `text-lg md:text-xl font-medium` | Sub-subseções |
| **Corpo Principal** | Inter | 400 | 16-18px | 1.6-1.7 | `text-base md:text-lg` | Parágrafos, conteúdo |
| **Corpo Secundário** | Inter | 400 | 14-15px | 1.5-1.6 | `text-sm md:text-base` | Texto de suporte, descrições |
| **Caption/Meta** | Inter | 500 | 12-13px | 1.4 | `text-xs md:text-sm font-medium` | Datas, tags, metadata |
| **Botão** | Inter | 500-600 | 14-16px | 1.2-1.4 | `text-sm md:text-base font-medium` | CTAs, botões |
| **Código Inline** | JetBrains Mono | 400 | 13-15px | 1.5 | `font-mono text-sm` | `code snippets`, comandos |
| **Código Bloco** | JetBrains Mono | 400 | 14-15px | 1.5-1.6 | `font-mono text-sm` | Blocos de código completos |

## Passo 4: Regras de Composição

### 4.1. Regra de Fonte Base

- **Fonte padrão UI**: Inter (ou source-sans equivalente)
- **Use para**: Interface, navegação, formulários, cards
- **Evite**: Para longa forma editorial (use fonte serif)

### 4.2. Regra de Fonte Editorial

- **Fonte para leitura**: Source Serif 4 (ou serif equivalente)
- **Use para**: Títulos de artigo, parágrafos de blog, citações
- **Não use para**: UI de interface, botões, menus

### 4.3. Regra de Consistência Por Página

- **Máximo de famílias**: 2 por página (sans + serif)
- **Monospace adicional**: Aceitável para código
- **Evite**: "Sopa de fontes" (3+ famílias sem critério claro)

### 4.4. Regra de Contraste de Peso

- **Limite pesos por contexto**: Máximo 3 pesos na mesma seção
- **Combos típicos**: 400 (corpo), 500-600 (subtítulos), 700 (títulos)
- **Evite**: Muitas variações de peso criando ruído visual

### 4.5. Regra de Adesão à Escala

- **Tamanhos devem seguir hierarquia**: Não invente tamanhos arbitrários
- **Use classes Tailwind**: `text-sm`, `text-base`, `text-lg`, etc.
- **Responsivo**: `text-base md:text-lg xl:text-xl`
- **Evite**: Hardcode de pixels sem consideração responsiva

## Passo 5: Exemplos de Implementação

### 5.1. Seção Institucional

```astro
<section class="space-y-4">
  <h2 class="text-3xl md:text-4xl font-bold text-foreground">
    Título da Seção
  </h2>
  <p class="text-base md:text-lg text-foreground leading-relaxed">
    Parágrafo de texto descrevendo o conteúdo. Line-height generoso
    para melhor legibilidade em telas grandes.
  </p>
</section>
```

### 5.2. Título Editorial (Blog)

```astro
<article>
  <h1 class="text-4xl md:text-5xl font-semibold text-foreground"
      style="font-family: 'Source Serif 4', Georgia, serif;">
    Título do Artigo Editorial
  </h1>
  <p class="text-sm md:text-base text-muted-foreground mt-2">
    Por autor • 15 Jan 2024
  </p>
</article>
```

### 5.3. Botão

```astro
<button class="h-10 px-6 text-sm md:text-base font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-colors">
  Chamada para Ação
</button>
```

### 5.4. Bloco de Código

```astro
<pre class="bg-muted p-4 rounded-lg overflow-x-auto">
  <code class="font-mono text-sm text-foreground">
    npm install @astrojs/tailwind
  </code>
</pre>
```

## Passo 6: Configuração de Framework

### 6.1. Configuração Tailwind

```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Ajustes finos se necessário
        '2xs': '0.625rem',  // 10px
      },
    },
  },
};
```

## Passo 7: Estratégia de Carregamento de Fonte

### 7.1. Google Fonts (Exemplo)

```astro
---
// src/layouts/Layout.astro
---

<!-- Preconnect para performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Inter: UI base -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Source Serif 4: Editorial -->
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700&display=swap" rel="stylesheet">

<!-- JetBrains Mono: Código (opcional) -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

### 7.2. Melhores Práticas de Performance

- **Preconnect**: Sempre para domains de Google Fonts
- **display=swap**: Tradeoff FOIT/FOUT (texto visível rápido)
- **Carregue apenas pesos necessários**: Não carregue 300 se nunca usa
- **Considere self-hosting**: Para fontes críticas de marca
- **font-display: optional**: Para fontes não críticas

## Passo 8: Tipografia Responsiva

### 8.1. Padrão Mobile-First

```astro
<!-- Mobile: 16px, Tablet: 18px, Desktop: 20px -->
<p class="text-base md:text-lg xl:text-xl">
  Parágrafo responsivo
</p>
```

### 8.2. Ajustes de Line-Height

- **Texto pequeno**: Line-height maior (1.5-1.6) para legibilidade
- **Texto grande**: Line-height menor (1.1-1.3) para títulos
- **Código**: Line-height 1.5 para legibilidade de linhas

### 8.3. Letter-Spacing

```astro
<!-- Ajuste fino para títulos de exibição -->
<h2 class="text-4xl font-bold tracking-tight">
  Título com tracking ajustado
</h2>

<!-- Letter-spacing para uppercase -->
<span class="text-xs font-semibold tracking-widest uppercase">
  Categoria
</span>
```

## Passo 9: Diretrizes de Acessibilidade

### 9.1. Tamanho Mínimo

- **Desktop**: 16px mínimo para corpo de texto
- **Mobile**: 14px mínimo aceitável, 16px preferível
- **Botões**: Mínimo 14px, ideal 16px

### 9.2. Contraste de Cor

- **Texto normal**: Mínimo WCAG AA (4.5:1)
- **Texto grande (>18px)**: Mínimo WCAG AA (3:1)
- **Texto decorativo**: Sem requisito, mas considere legibilidade

### 9.3. Line-Height e Espaçamento

- **Corpo de texto**: 1.5+ para legibilidade
- **Parágrafos**: Separação clara (margin-bottom ou space-y)
- **Hierarquia de títulos**: Estrutura lógica H1→H2→H3

## Passo 10: Workflow de Ajuste Tipográfico

```
[Necessidade de legibilidade/identidade]
      ↓
[Defina papel tipográfico (H1, body, caption)]
      ↓
[Escolha família + tamanho + peso da escala]
      ↓
[Aplique classe Tailwind apropriada]
      ↓
[Teste responsivo (mobile, tablet, desktop)]
      ↓
[Valide contraste WCAG]
      ↓
[Documente se novo padrão]
```

## Melhores Práticas

1. **Seja Consistente**: Use as mesmas fontes para os mesmos propósitos
2. **Limite Variações**: 2-3 famílias, 3 pesos máx por contexto
3. **Respeite Hierarquia**: Tamanhos claramente diferenciados
4. **Pense em Mobile**: Sempre teste em telas pequenas
5. **Valide Acessibilidade**: Contraste e tamanho são críticos
6. **Documente Exceções**: Se quebrar regra, documente porquê

## Exemplo de Uso

```
Usuário: "Estou criando uma página de blog. Como devo configurar a tipografia?"

IA: [Usa guia-sistema-tipografia]
- Identifica que é conteúdo editorial → Usa Source Serif 4 para títulos
- Define H1 editorial: 40-48px, peso 600, line-height 1.2
- Define corpo: Inter 16-18px, peso 400, line-height 1.6-1.7
- Configura responsivo: text-base md:text-lg
- Adiciona meta/caption em text-xs md:text-sm font-medium
- Valida contraste WCAG AA
- Fornece código pronto com classes Tailwind
```

## Anti-Padrões a Evitar

- ❌ Não adicione novas fontes sem justificativa forte e alinhamento com time
- ❌ Não misture múltiplas famílias sem papel claro para cada
- ❌ Não defina tamanhos fora da hierarquia estabelecida sem necessidade
- ❌ Não quebre consistência entre seções sem documentar
- ❌ Não use muitos pesos no mesmo contexto (3 máximo recomendado)
- ❌ Não hardcode tamanhos de fonte em pixels sem consideração responsiva
- ❌ Não ignore contraste WCAG para texto
- ❌ Não carregue pesos de fonte que nunca usa (desperdício de bandwidth)
- ❌ Não use line-height pequeno (<1.5) para corpo de texto

## Template de Documentação Final

```markdown
# Sistema Tipográfico

## Fonte da Verdade
- `tailwind.config.mjs` - Font families config
- `src/layouts/Layout.astro` - Imports de fontes

## Inventário de Fontes
[Documente todas fontes com origem, pesos, papéis]

## Hierarquia de Tamanhos
[Tabela completa de escala com classes Tailwind]

## Regras de Composição
[Diretrizes para uso consistente]

## Exemplos de Implementação
[Padrões de código para casos comuns]

## Configuração de Framework
[Config de Tailwind/outro framework]

## Estratégia de Carregamento
[Como fontes são carregadas e otimizadas]

## Padrões Responsivos
[Comportamentos de breakpoint]

## Acessibilidade
[Notas de conformidade WCAG]

## Workflow de Ajuste
[Processo para modificar/adicionar tipografia]

## Anti-Padrões
[O que evitar]
```

## Checklist de Revisão Final

- [ ] Todas fontes documentadas com origem e cadeias de fallback?
- [ ] Escala de hierarquia completa (H1-H4, body, caption)?
- [ ] Regras de composição estabelecidas?
- [ ] Exemplos de código fornecidos para casos comuns?
- [ ] Comportamento responsivo definido?
- [ ] Acessibilidade validada (tamanho mínimo, contraste)?
- [ ] Estratégia de carregamento documentada?
- [ ] Seção de anti-padrões incluída?
- [ ] Documentação pode ser usada para handoff design/dev?
