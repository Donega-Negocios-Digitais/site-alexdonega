---
name: escolher-stack-web
description: Documentação completa da stack tecnologica do projeto: Astro como framework principal, Tailwind para estilização, e ecossistema de utilitarios. Use como PRIMEIRO passo ao iniciar projeto, antes de definir estratégia de renderização.
---

# Stack Tecnológica - Astro + Tailwind

## Objetivo

Documentar a stack tecnologica utilizada no projeto (Astro + Tailwind), fornecendo referencia completa sobre configuracoes, padroes e melhores praticas para desenvolvimento web moderno.

## O que é Stack Tecnológica

Stack tecnologica é o conjunto de ferramentas, frameworks e bibliotecas usados para construir um site. Pense como a fundacao e a estrutura de uma casa: define o que voce pode ou nao construir, como sera construido, e quais materiais usar.

Neste projeto, a stack ja esta definida: **Astro** como framework principal e **Tailwind CSS** para estilizacao.

## Quando Usar Este Guia

- Ao iniciar um novo projeto e precisar configurar a stack
- Ao adicionar novas dependencias ou integracoes
- Ao solucionar problemas de build ou configuracao
- Ao explicar para novos desenvolvedores como o projeto funciona
- Ao tomar decisoes sobre arquitetura ou performance

## Visão Geral

Documentação completa da stack tecnologica utilizada no projeto: [Astro](https://astro.build) como framework principal, Tailwind para estilizacao, e ecossistema de utilitarios para desenvolvimento web moderno.

## Por que Astro?

### O que é

[Astro](https://astro.build) é um framework web moderno focado em content-heavy sites com arquitetura SSG-first (Static Site Generation). Ele permite usar React, Vue, Svelte e outros frameworks, mas remove o JavaScript desnecessario do HTML final.

### Valor e Benefícios

| Benefício | Descrição |
|-----------|-----------|
| **Performance** | HTML estatico sem JavaScript de hidratação desnecessário |
| **SEO** | Renderização no build garante HTML completo para crawlers |
| **Simplicidade** | Curva de aprendizado suave, sintaxe similar a HTML |
| **Versatilidade** | Suporta JSX, Vue, Svelte, Preact, etc. via Islands Architecture |
| **Developer Experience** | Hot reload rapido, TypeScript nativo, file-based routing |

### Por que escolhemos

- Sites focados em conteudo (blog, landing pages, documentação)
- Necessidade de SEO otimo sem complexidade de SSR
- Performance como prioridade (Core Web Vitals)
- Time com familiaridade em HTML/CSS
- Deploy simples em qualquer host estático ou CDN

## Astro Indie - Para Desenvolvedores Independentes

### O que é Indie Developer

Indie developers sao desenvolvedores independentes que trabalham em projetos proprios, criam produtos SaaS, ou prestam servicos freelancers. Para este publico, Astro oferece vantagens especificas:

### Beneficios do Astro para Indies

| Vantagem | Descrição |
|----------|-----------|
| **Hospedagem gratuita** | Vercel, Netlify e Cloudflare Pages hospedam sites Astro gratuitamente |
| **Comunidade ativa** | Discord, Reddit e forums com resposta rapida |
| **Tutoriais extensivos** | Documentacao e tutoriais em video abundantes |
| **Templates prontos** | Comece projetos em minutos ao inves de dias |
| **Baixo custo** | Sem servidor pago necessario, apenas CDN gratuita |
| **Escalabilidade** | Cresca de 0 a milhoes de visitas sem mudar stack |

### Recursos para Indies

- **Discord oficial:** [astro.build/chat](https://astro.build/chat)
- **Showcase:** Veja o que a comunidade criou em [astro.build/showcase](https://astro.build/showcase)
- **Aprenda:** [astro.build/tutorials](https://astro.build/tutorials) - tutoriais passo a passo

## Templates do Astro - Free vs Pago

### Templates Gratuitos (Free)

**Onde encontrar:** https://astro.build/themes/

**Caracteristicas:**
- Mantidos pela comunidade
- Codigo aberto e customizavel
- Boa opcao para projetos pessoais e aprendizado
- Suporte limitado (via GitHub issues)

**Exemplos populares:**
- Starlight (para documentacao)
- AstroNinja (para portfolios)
- AstroPaper (para blogs)

### Templates Pagos (Premium)

**All-Access Pass - $137/ano**

O All-Access Pass da Astro oferece:
- **38+ templates premium** incluindo todos os futuros
- **Uso vitalicio** - pague uma vez, use para sempre
- **Suporte prioritario** da equipe Themefisher
- **Atualizacoes regulares** com novas versoes

**Themefisher e outros:**

Templates profissionais de alta qualidade com:
- Design refinado e moderno
- Suporte tecnico dedicado
- Recursos exclusivos como componentes premium
- Preco variavel por template

**Quando vale a pena pagar?**

- **Projeto comercial** - Site para cliente com deadline apertado
- **Agencia** - Multiplos projetos com necessidade de consistencia
- **Suporte necessario** - Voce precisa de ajuda tecnica

Quando optar por free:

- **Projeto pessoal** - Seu proprio site ou blog
- **Aprendizado** - Quer entender como Astro funciona por baixo dos panos
- **Sem pressa** - Tempo para customizar e ajustar

### Diferencas Principais

| Caracteristica | Free | Pago |
|----------------|-------|-------|
| **Custo** | Grátis | $137 (All-Access) ou variavel |
| **Suporte** | Comunidade | Prioritario + dedicado |
| **Customizacao** | Total (codigo aberto) | Total (codigo aberto) |
| **Atualizacoes** | Esporadicas | Regulares |
| **Exclusividade** | Não (muita gente usa) | Relativa (menos gente) |

## Arquitetura do Astro

### Como funciona

```
[.astro files] --------> [Astro Build] --------> [HTML/CSS estatico]
     |                                           |
[content collections]                      [CDN-ready]
[markdown files]                           [zero JS by default]
[assets: imagens, css]                     [otimizado automaticamente]
```

**Fluxo do build:**
1. **Entrada**: Arquivos `.astro`, markdown, assets estáticos
2. **Processamento**: Astro compila componentes, otimiza imagens, gera rotas
3. **Saída**: HTML/CSS/JS estático pronto para deploy

### Ilhas de Interatividade (Islands Architecture)

```
┌─────────────────────────────────────────────────┐
│  Página Estática (HTML puro, zero JavaScript)   │
│  ┌──────────────┐  ┌──────────────┐             │
│  │  Componente  │  │  Componente  │             │
│  │    React     │  │   Svelte     │             │
│  │ <Counter />  │  │ <Search />   │             │
│  │  (JS isolado)│  │  (JS isolado)│             │
│  └──────────────┘  └──────────────┘             │
│                                                  │
│  O resto da página não carrega JavaScript       │
└─────────────────────────────────────────────────┘
```

**Conceito chave**: A página é 100% estatica por padrao. Componentes interativos sao "ilhas" de JavaScript carregados sob demanda apenas onde necessario.

### Content Collections

Astro possui um sistema integrado para gerenciar conteúdo:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = { blog };
```

**Benefícios:**
- Type-safe com TypeScript
- Validação de frontmatter via Zod
- API integrada para consultar conteúdo
- Suporte a Markdown e MDX

## Dependências do Projeto

### Framework

| Pacote | Versão | Site | O que faz | Por que usamos |
|--------|--------|------|------------|----------------|
| `astro` | ^4.0.0 | [astro.build](https://astro.build) | Core: pages, layouts, routing, build, content collections | Framework principal, SSG-first, performance otimizada, zero JS por padrao |

### CSS e Estilização

| Pacote | Versão | Site | O que faz | Por que usamos |
|--------|--------|------|------------|----------------|
| `@astrojs/tailwind` | ^6.0.2 | [tailwindcss.com](https://tailwindcss.com) | Integração oficial Tailwind + Astro | Unifica CSS no build, otimiza classes, remove CSS não usado |
| `tailwindcss` | ^3.4.19 | [tailwindcss.com](https://tailwindcss.com) | Utility-first CSS framework | Design system consistente, responsividade rapida, dark mode nativo |
| `tailwindcss-animate` | ^1.0.7 | - | Keyframes e animations predefinidos | Transições UI suaves sem escrever CSS customizado, animações consistentes |

### Imagens

| Pacote | Versão | Site | O que faz | Por que usamos |
|--------|--------|------|------------|----------------|
| `sharp` | ^0.34.5 | [github.com/lovell/sharp](https://github.com/lovell/sharp) | Processamento de imagens (lib do Node) | Otimização automatica (WebP, AVIF), resize, lazy loading, metadatos EXIF |

**Como Astro usa sharp:**
```astro
---
import { Image } from 'astro:assets';
import minhaImagem from '@/img/foto.jpg';
---

<!-- Astro otimiza automaticamente no build -->
<Image src={minhaImagem} alt="Descrição" width={800} height={600} />
```

### Utilitários de Componentes

| Pacote | Versão | Site | O que faz | Por que usamos |
|--------|--------|------|------------|----------------|
| `class-variance-authority` | ^0.7.1 | [cva.style](https://cva.style) | API de variantes tipo-safe | Componentes com variações (btn primary/secondary, sizes) sem conflitos |
| `clsx` | ^2.1.1 | [github.com/lukeed/clsx](https://github.com/lukeed/clsx) | Merge condicional de classes | Condicionais limpas: `clsx('base', isActive && 'active')` |
| `tailwind-merge` | ^3.4.0 | [github.com/dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge) | Merge inteligente Tailwind | Resolve conflitos: `cn('p-4 p-2')` -> `'p-2'` (mantem a última classe) |

**Exemplo de uso combinado (utils.ts):**
```typescript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

### Tipagem

| Pacote | Versão | Site | O que faz | Por que usamos |
|--------|--------|------|------------|----------------|
| `@types/node` | ^25.1.0 | [npmjs.com](https://www.npmjs.com/package/@types/node) | Tipos TypeScript para Node.js | IntelliSense em código que usa APIs do Node (path, fs, etc.) |

## Estrutura de Pastas e Arquitetura

Para a documentação completa sobre estrutura de pastas, contratos, componentização e organização de arquivos do projeto, consulte o [`04-arquitetura-projeto-astro.md`](./04-arquitetura-projeto-astro.md).

**Resumo rápido:**
- `src/pages/` - Rotas (file-based routing)
- `src/layouts/` - Layouts reutilizáveis
- `src/components/` - Componentes de UI
- `src/content/` - Content collections (markdown)
- `src/lib/` - Utilitários e helpers
- `public/` - Assets estáticos

## Scripts NPM

| Comando | Ação | Quando usar | Saída |
|---------|--------|-------------|-------|
| `npm run dev` | Sobe servidor de desenvolvimento | Dia a dia durante coding | http://localhost:4321 com hot reload |
| `npm run build` | Build de produção | Antes de deploy ou teste final | Pasta `dist/` com assets otimizados |
| `npm run preview` | Preview do build | Testar build localmente | http://localhost:4321 simulando produção |

**Nota:** Este projeto não usa `astro check` por padrão, mas pode ser adicionado ao scripts para verificação de tipos:
```json
"check": "astro check"
```

## Configurações Chave

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alexdonega.com.br',        // URL canônica do site
  base: '/',                                  // Base path (ex: /blog para subdiretório)
  build: {
    format: 'directory',                      // /about/index.html (SEO-friendly)
  },
  integrations: [tailwind()],                 // Plugins oficiais
  // Para SSR (não usado neste projeto):
  // output: 'server',
  // adapter: node({ mode: 'standalone' }),
});
```

**Opções de build.format:**
- `directory`: `/about/index.html` (recomendado, URLs limpas)
- `file`: `/about.html` (simples, mas URLs com .html)
- `preserve`: mantém estrutura original

### tailwind.config.mjs

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',              // Controle manual via .dark class no <html>
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens do design system
        accent: '#f97316',
        // ...
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),  // Animações predefinidas
  ],
};
```

### tsconfig.json (se TypeScript habilitado)

Astro vem com TypeScript configurado por padrão. Principais opções:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Fronteiras e Regras

### O que colocar em cada camada

**Camada de Apresentação (UI)**
- Fonte de verdade: `src/components/`, `src/layouts/`, `src/pages/`
- Responsabilidade: Layout, estrutura, apresentação visual
- Regras: Usar Astro + Tailwind, evitar CSS global novo sem necessidade
- O que NÃO colocar: Lógica de negócio complexa, validação de dados

**Camada de Conteúdo**
- Fonte de verdade: `src/content/blog/`, `src/content/config.ts`
- Responsabilidade: Dados editoriais, markdown, schema de validação
- Regras: Respeitar schema Zod, usar frontmatter padrão
- O que NÃO colocar: Componentes visuais, lógica de apresentação

**Camada de Assets Estáticos**
- Fonte de verdade: `public/`
- Responsabilidade: Imagens, vídeos, favicons, logos servidos via HTTP
- Regras: Caminhos estáveis e previsíveis, diferenciar marca vs. conteúdo
- O que NÃO colocar: Código executável, scripts de build

**Camada de Build/Deploy**
- Fonte de verdade: `astro.config.mjs`, CI/CD
- Responsabilidade: Como o site é construído e deployado
- Regras: Build precisa sair sem erro, domínio deve bater com config
- O que NÃO colocar: Lógica de aplicação runtime

### O que NÃO fazer

- ❌ NAO coloque lógica de negócio em layouts
- ❌ NAO importe markdown direto em componentes (use content collections)
- ❌ NAO use CSS inline (use Tailwind classes ou scoped <style>)
- ❌ NAO crie componentes gigantes (quebre em menores, single-responsibility)
- ❌ NAO use `client:*` directives sem necessidade (aumenta o bundle JS)
- ❌ NAO ignore erros de tipo TypeScript (quebra a segurança)

### Diretivas de Cliente (use com moderação)

```astro
<!-- NUNCA use por padrão - apenas quando necessário -->
<Componente client:load />    <!-- Hidrata imediatamente no load -->
<Componente client:idle />    <!-- Hidrata quando browser fica idle -->
<Componente client:visible /> <!-- Hidrata quando elemento entra na viewport -->
<Componente client:media="{matches}" /> <!-- Hidrata se media query bate -->
<Componente client:only="react" /> <!-- Renderiza apenas no cliente -->
```

**Regra de ouro:** Cada `client:*` é JavaScript extra no bundle. Use apenas quando necessário.

## Padrões de Componente

### Componente Astro (padrão)

```astro
---
// Código server-side (executa no build)
interface Props {
  title: string;
  featured?: boolean;
}

const { title, featured = false } = Astro.props;
---

<!-- Template (HTML puro no build) -->
<div class={featured ? 'featured' : ''}>
  <h2>{title}</h2>
  <slot /> <!-- Slot para children -->
</div>

<style>
  /* Scoped CSS - automático no Astro */
  div {
    background: var(--bg-main);
  }
</style>
```

### Componente com Islands

```astro
---
// Importar framework client-side
import Counter from '../components/Counter.jsx';
---

<h1>Contador Interativo</h1>

<!-- Esta ilha hidrata no cliente -->
<Counter client:visible initial={0} />

<!-- O resto da página continua estático -->
<p>Este texto não tem JavaScript.</p>
```

## Fluxo de Desenvolvimento

```
1. Criar rota:     src/pages/nova-pagina.astro
2. Criar layout:   src/layouts/NovoLayout.astro
3. Criar comps:    src/components/NovoComp.astro
4. Adicionar CSS:  Tailwind classes no elemento
5. Testar:         npm run dev
6. Build:          npm run build
7. Preview:        npm run preview
8. Deploy:         Enviar pasta dist/ para host
```

## Referências Externas

| Recurso | Link |
|---------|------|
| Documentação oficial | [astro.build/docs](https://astro.build/docs) |
| Tutoriais | [astro.build/tutorials](https://astro.build/tutorials) |
| Examples | [astro.build/examples](https://astro.build/examples) |
| Blog oficial | [astro.build/blog](https://astro.build/blog) |
| Discord | [astro.build/chat](https://astro.build/chat) |
| Tailwind CSS | [tailwindcss.com](https://tailwindcss.com) |

## Anti-Padrões a Evitar

- ❌ NAO adicione dependências para problemas simples de CSS/HTML
- ❌ NAO duplique lógica que já existe em utilitários (use `cn()`)
- ❌ NAO ignore configurações de arquivos (se está no config, afeta o projeto)
- ❌ NAO contorne schemas de validação (quebra type safety)
- ❌ NAO documente sem verificar implementação real
- ❌ NAO misture camadas (ex: lógica de negócio em componentes de apresentação)
- ❌ NAO use `client:*` por padrão - prefira HTML estático

---

**Próximo Passo:** Após definir a stack tecnologica, use [`03-estrategia-renderizacao.md`](./03-estrategia-renderizacao.md) para definir a estrategia de renderizacao (SSG, SSR, Hibrida) para cada rota do projeto.


