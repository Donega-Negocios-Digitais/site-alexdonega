---
name: planejar-arquitetura-repo
description: Define arquitetura de repositório Astro com estrutura de pastas, contratos por diretório, padrões de componentização e convenções de nomenclatura. Use após escolher a stack (arquivo 01) para organizar o projeto.
---

# Arquitetura de Projeto com Astro

## Objetivo

Estabelecer padrões claros para organização de repositório usando Astro, definindo estrutura de pastas, responsabilidades, contratos de componentização e convenções que garantem manutenibilidade e escalabilidade.

## Quando Usar Este Guia

- Ao iniciar novos projetos com Astro
- Ao reorganizar estrutura de projeto existente
- Ao fazer onboarding de desenvolvedores
- Ao documentar decisões arquiteturais
- Ao planejar refatoração de código

## Visão Geral da Arquitetura Astro

### Princípios Fundamentais

| Princípio | Descrição |
|-----------|-----------|
| **File-based Routing** | Cada arquivo em `src/pages/` vira uma rota |
| **Component-first** | Tudo é reaproveitável, de botões a layouts |
| **Content Collections** | Markdown com schema e type-safety |
| **Zero JS by Default** | HTML estático, JavaScript opcional |
| **Scoped Styles** | CSS por componente sem conflitos |

### Fluxo de Arquitetura

```
[Arquivo .astro] ────> [Frontmatter (server-side)]
      │                           │
      │                           ├──> Importações
      │                           ├──> Fetch de dados
      │                           └──> Lógica de build
      │
      ▼
[Template HTML] ────> [Scoped Styles] ────> [HTML/CSS estático]
```

---

## Estrutura de Pastas Astro

### Diagrama Completo

```
src/
├── pages/                          # ROTAS - File-based routing
│   ├── index.astro                 # → /
│   ├── sobre.astro                 # → /sobre
│   ├── portfolio.astro             # → /portfolio
│   └── blog/
│       ├── index.astro             # → /blog
│       └── [slug].astro            # → /blog/post-name (dinâmico)
│
├── layouts/                        # WRAPPERS - Estrutura HTML compartilhada
│   ├── Layout.astro                # Layout base (head, header, footer)
│   └── BlogLayout.astro            # Layout específico para blog
│
├── components/                     # COMPONENTES - Blocos reutilizáveis
│   ├── Header.astro                # Cabeçalho do site
│   ├── Footer.astro                # Rodapé do site
│   ├── PostCard.astro              # Card de postagem
│   ├── AnimatedHero.astro          # Hero com animação
│   └── ui/                         # Primitivas de UI (design system)
│       ├── Button.astro
│       ├── Card.astro
│       └── Badge.astro
│
├── content/                        # CONTEÚDO - Markdown com schema
│   ├── blog/                       # Posts do blog
│   │   ├── 2024-01-post-1.md
│   │   └── 2024-02-post-2.md
│   └── config.ts                   # Schema Zod de validação
│
├── styles/                         # ESTILOS GLOBAIS
│   └── globals.css                 # :root, @layer, Tailwind directives
│
└── lib/                            # UTILITÁRIOS - Funções puras
    └── utils.ts                    # Helpers (cn, formatadores, etc.)

public/                             # ESTÁTICOS - Servidos diretamente
├── img/                            # Imagens, logos, favicons
│   ├── icons/                      # Ícones SVG
│   └── logos/                      # Logos de parceiros
└── fonts/                          # Fontes customizadas

astro.config.mjs                    # Configuração do Astro
tailwind.config.mjs                 # Configuração do Tailwind
package.json                        # Dependências e scripts
tsconfig.json                       # Configuração TypeScript
```

## Onde Fica Cada Coisa? Explicado Simples

Imagine seu projeto como uma casa. Cada pasta tem um proposito especifico, assim como cada comodo em uma casa tem uma funcao.

```
src/ (A CASA TODA)
│
├── pages/ (OS QUARTOS - onde as pessoas entram)
│   │
│   │   O que e: Cada arquivo aqui e uma pagina do site
│   │   Onde fica: src/pages/
│   │   Exemplos: index.astro (home), blog/index.astro, sobre.astro
│   │
│   │   Como funciona: O nome do arquivo vira a URL
│   │   - index.astro → /
│   │   - sobre.astro → /sobre
│   │   - blog/index.astro → /blog
│   │
│
├── layouts/ (A ESTRUTURA DA CASA - paredes, teto, janelas)
│   │
│   │   O que e: Define a estrutura base que as paginas compartilham
│   │   Onde fica: src/layouts/
│   │   Exemplos: Layout.astro, BlogLayout.astro
│   │
│   │   Como funciona: Toda pagina importa um layout
│   │   - Layout.astro tem: <head>, <header>, <footer>
│   │   - O conteudo da pagina entra no meio, entre header e footer
│   │
│
├── components/ (OS MOVEIS - sofá, mesa, cadeira)
│   │
│   │   O que e: Blocos de interface reutilizaveis
│   │   Onde fica: src/components/
│   │   Exemplos: Header.astro, Footer.astro, Button.astro
│   │
│   │   Subpasta ui/ (as pecas menores)
│   │   - Button.astro - botao que pode ser primario, secundario
│   │   - Card.astro - container para conteudo
│   │   - Badge.astro - etiqueta pequena
│   │
│   │   Como funciona: Voce pode usar em qualquer lugar
│   │   - Importa <Header /> em varias paginas
│   │   - Se mudar o Header, muda em todos os lugares
│   │
│
├── content/ (A BIBLIOTECA - livros e documentos organizados)
│   │
│   │   O que e: Arquivos markdown (blog, documentacao)
│   │   Onde fica: src/content/
│   │   Exemplos: blog/meu-post.md, docs/tutorial.md
│   │
│   │   config.ts - Define o que cada arquivo markdown pode ter
│   │   - Titulo obrigatorio
│   │   - Data de publicacao
│   │   - Tags
│   │
│   │   Como funciona: Astro valida os dados antes de usar
│   │   - Se faltar titulo, da erro no build
│   │   - Type-safe: TypeScript sabe o que existe
│   │
│
├── styles/ (AS TINTAS E ACABAMENTOS - aparencia da casa)
│   │
│   │   O que e: CSS global, configuracao de cores e fontes
│   │   Onde fica: src/styles/
│   │   Exemplos: globals.css
│   │
│   │   Como funciona:
│   │   - :root define as cores principais
│   │   - @layer base carrega o Tailwind
│   │   - Classes globais usadas em todo o site
│   │
│
└── lib/ (A CAIXA DE FERRAMENTAS - coisas que ajudam a casa a funcionar)
    │
    │   O que e: Funcoes uteis que voce pode usar em qualquer lugar
    │   Onde fica: src/lib/
    │   Exemplos: utils.ts
    │
    │   Como funciona:
    │   - cn() - junta classes de CSS sem conflito
    │   - formatDate() - formata datas para portugues
    │   - Funcoes puras, sem depender de nada externo
    │

public/ (A AREA EXTERNA - jardim, garagem, coisas que ficam a vista)
│
├── img/ (FOTOS E QUADROS NA PAREDE)
│   │
│   │   O que e: Imagens estaticas que o site usa
│   │   Onde fica: public/img/
│   │   Exemplos: logos, icones, fotos de pessoas
│   │
│   │   Como usar: Caminho começa com /
│   │   - <img src="/img/logo.png" />
│   │
│
└── fonts/ (OBRAS DE ARTE - fontes customizadas)
    │
    │   O que e: Arquivos de fonte customizados
    │   Onde fica: public/fonts/
    │
    │   Como usar: Importa no CSS global
    │   - @font-face { font-family: 'MinhaFont'; src: url('/fonts/fonte.woff2'); }
    │
```

### Comparacao Rapida

| Pasta | Metafora | O que faz |
|-------|----------|-----------|
| **pages/** | Quartos | Cada arquivo e uma pagina do site |
| **layouts/** | Estrutura | Parede, teto, janelas que todas as paginas compartilham |
| **components/** | Moveis | Coisas que pode usar em qualquer lugar |
| **content/** | Biblioteca | Documentos e artigos em markdown |
| **styles/** | Tintas | Cores, fontes e aparencia |
| **lib/** | Ferramentas | Funcoes uteis |
| **public/** | Area externa | Imagens, fontes e arquivos estaticos |

## Contratos por Pasta

### src/pages/ (Rotas)

**Responsabilidade**: Define endpoints da aplicação via roteamento baseado em arquivos

**Regras:**
- ✅ Uma rota por arquivo
- ✅ Pode ter subpastas para rotas agrupadas
- ✅ Usa notação `[slug]` para rotas dinâmicas
- ✅ `index.astro` para rota base da pasta

**O que colocar:**
- Componentes de página (page components)
- Fetch de dados específicos da rota
- SEO metadata (title, description, OG tags)
- Import de layout

**O que NÃO colocar:**
- Componentes globais reutilizáveis (use `/components`)
- Lógica de negócio complexa (use `/lib`)
- Estilos globais (use `/styles`)

**Exemplo:**
```astro
---
// src/pages/sobre.astro
import Layout from '@/layouts/Layout.astro';

const pageTitle = "Sobre - Alex Donega";
---

<Layout title={pageTitle}>
  <main>
    <h1>Sobre</h1>
  </main>
</Layout>
```

---

### src/layouts/ (Wrappers HTML)

**Responsabilidade**: Padroniza estrutura HTML com `<head>`, fontes, SEO base, header/footer

**Regras:**
- ✅ Todo layout deve receber props configuráveis
- ✅ Usar `<slot />` para conteúdo dinâmico
- ✅ Layouts podem herdar de outros

**O que colocar:**
- Tags `<head>` completas
- Header e Footer compartilhados
- Metatags SEO base
- Scripts globais (analytics, etc.)

**O que NÃO colocar:**
- Conteúdo específico de página
- Lógica de rota

**Exemplo:**
```astro
---
// src/layouts/Layout.astro
interface Props {
  title: string;
  description?: string;
}

const {
  title = "Site Padrão",
  description = "Descrição padrão"
} = Astro.props;
---

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <Header />
    <slot />  <!-- Conteúdo da página entra aqui -->
    <Footer />
  </body>
</html>
```

---

### src/components/ (Componentes Reutilizáveis)

**Responsabilidade**: Blocos de UI reutilizáveis entre páginas

**Estrutura sugerida:**
```
components/
├── [MacroComponents].astro    # Header, Footer, Hero, Forms
└── ui/                         # Primitivas do Design System
    ├── Button.astro
    ├── Card.astro
    ├── Badge.astro
    └── Input.astro
```

**Regras:**
- ✅ PascalCase para nomes de arquivos
- ✅ Componentes devem ser pequenos e focados
- ✅ Props tipadas com interface
- ✅ Usar `<slot />` para composição

**O que colocar:**
- Componentes visuais
- Componentes compostos
- Widgets interativos

**O que NÃO colocar:**
- Rotas completas
- Dados hardcoded sem necessidade

**Exemplo de componente:**
```astro
---
// src/components/ui/Button.astro
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href
} = Astro.props;

const classes = `btn btn-${variant} btn-${size}`;
---

{href ? (
  <a href={href} class={classes}>
    <slot />
  </a>
) : (
  <button class={classes}>
    <slot />
  </button>
)}

<style>
  /* CSS scoped - só afeta este componente */
  .btn { /* ... */ }
</style>
```

---

### src/content/ (Conteúdo Editorial)

**Responsabilidade**: Centralizar markdown com validação type-safe

**Regras:**
- ✅ Sempre usar `config.ts` com schema Zod
- ✅ Frontmatter obrigatório
- ✅ Nome de arquivo em kebab-case

**O que colocar:**
- Posts de blog
- Documentação
- Qualquer conteúdo markdown

**O que NÃO colocar:**
- Componentes visuais
- Código executável

**Exemplo de schema:**
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

**Exemplo de post:**
```markdown
---
title: "Meu Primeiro Post"
description: "Descrição do post"
pubDate: 2024-01-15
tags: ["astro", "webdev"]
---

# Conteúdo aqui...

Parágrafo do post.
```

---

### src/lib/ (Utilitários)

**Responsabilidade**: Funções puras sem acoplamento de rota

**Regras:**
- ✅ Funções pequenas e focadas
- ✅ Exportações nomeadas
- ✅ TypeScript com tipagem

**O que colocar:**
- Helpers de classes (cn, clsx)
- Formatação (datas, moedas)
- Constantes globais
- Validators

**O que NÃO colocar:**
- Componentes de UI
- Lógica de rota
- Efeitos colaterais

**Exemplo:**
```typescript
// src/lib/utils.ts
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}
```

---

### public/ (Assets Estáticos)

**Responsabilidade**: Arquivos servidos diretamente sem processamento

**Regras:**
- ✅ Caminhos começam com `/`
- ✅ Organizar em subpastas por tipo
- ✅ Nomes em kebab-case

**O que colocar:**
- Imagens (logos, fotos, ícones)
- Fontes
- Favicons
- Robots.txt, sitemap.xml

**O que NÃO colocar:**
- Código executável
- Arquivos que precisam de processamento

**Mapeamento de caminho:**
```
Arquivo: public/img/logo.png
URL:    /img/logo.png
```

---

## Padrões de Componentização

### 1. Componente Atômico (UI Primitiva)

Componentes pequenos e focados que não possuem filhos complexos.

```astro
---
// src/components/ui/Badge.astro
interface Props {
  color?: 'blue' | 'green' | 'orange';
}

const { color = 'blue' } = Astro.props;
---

<span class={`badge badge-${color}`}>
  <slot />
</span>

<style>
  .badge {
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
  }
  .badge-blue { background: #3b82f6; color: white; }
  .badge-green { background: #22c55e; color: white; }
  .badge-orange { background: #f97316; color: white; }
</style>
```

**Características:**
- Uma única responsabilidade
- Props simples
- Sem lógica complexa
- Reutilizável em qualquer contexto

### 2. Componente Composto

Componentes que combinam outros componentes menores.

```astro
---
// src/components/PostCard.astro
import Badge from './ui/Badge.astro';

interface Props {
  title: string;
  description: string;
  date: Date;
  tags: string[];
  slug: string;
}

const { title, description, date, tags, slug } = Astro.props;
---

<article class="post-card">
  <a href={`/blog/${slug}`}>
    <h3>{title}</h3>
    <p>{description}</p>
    <time>{date.toLocaleDateString('pt-BR')}</time>
    <div class="tags">
      {tags.map(tag => <Badge>{tag}</Badge>)}
    </div>
  </a>
</article>
```

**Características:**
- Combina primitivas (Badge, Button, etc.)
- Props mais complexas
- Lógica de apresentação
- Específico para um domínio

### 3. Página como Composição

Páginas que orquestram layouts e componentes.

```astro
---
// src/pages/blog/[slug].astro
import Layout from '@/layouts/Layout.astro';
import { getCollection } from 'astro:content';
import PostCard from '@/components/PostCard.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<Layout title={post.data.title}>
  <article>
    <h1>{post.data.title}</h1>
    <Content />
  </article>
</Layout>
```

**Características:**
- Importa layout
- Fetch de dados (getStaticPaths)
- Combina componentes
- Lógica de rota mínima

---

## Convenções de Nomenclatura

| Tipo | Convenção | Exemplo | Motivo |
|------|-----------|---------|--------|
| Páginas | kebab-case | `sobre.astro` | URLs amigáveis |
| Componentes | PascalCase | `Header.astro` | Padrão mercado |
| UI Primitivas | PascalCase | `Button.astro` | Consistência |
| Arquivos conteúdo | kebab-case | `2024-01-post.md` | URLs limpas |
| Funções | camelCase | `formatDate()` | Padrão JS |
| Constantes | SCREAMING_SNAKE | `API_URL` | Diferenciação |
| Interfaces/Types | PascalCase | `PostData` | Padrão TS |

---

## Fluxos Principais

### Renderização de Página

```
[Usuário acessa /sobre]
    ↓
[Astro localiza src/pages/sobre.astro]
    ↓
[Executa frontmatter (server-side)]
    ↓
[Importa Layout + Componentes]
    ↓
[Compila template + scoped styles]
    ↓
[Gera HTML estático em dist/sobre/index.html]
```

### Content Collection

```
[Post criado em src/content/blog/]
    ↓
[Schema config.ts valida frontmatter]
    ↓
[TypeScript gera tipos automaticamente]
    ↓
[getCollection() retorna posts tipados]
    ↓
[Rotas blog/index.astro e [slug].astro usam dados]
```

### Criação de Nova Feature

```
[Requisito recebido: "Adicionar seção de testimonials"]
    ↓
[Decisão de rota/pasta]
    +-- Página nova? → src/pages/testimonials.astro
    +-- Bloco reutilizável? → src/components/Testimonials.astro
    +-- Estilo global? → src/styles/globals.css + tailwind.config.mjs
    ↓
[Implementação seguindo padrões do projeto]
    ↓
[Validação: npm run dev + npm run build]
    ↓
[Atualização de documentação (se necessário)]
```

---

## Melhores Práticas

1. **Componentes pequenos**: Máximo de 200 linhas por arquivo
2. **Props tipadas**: Sempre usar interface para props
3. **Scoped styles**: Preferir `<style>` local ao CSS global
4. **Composição**: Componentes devem ser compostivos, usar `<slot />`
5. **Type-safety**: Usar content collections, não imports manuais
6. **Separação**: Lógica de negócio em `/lib`, UI em `/components`

---

## Anti-Padrões

- ❌ Criar componentes monolíticos (>300 linhas)
- ❌ Duplicar Header/Footer em cada página
- ❌ Importar markdown sem usar content collections
- ❌ Styles globais para componentes isolados
- ❌ Quebrar convenções de nomenclatura
- ❌ Misturar responsabilidades nas pastas
- ❌ Colocar lógica de rota em componentes
- ❌ Criar pastas paralelas fora da estrutura padrão

---

## Workflow de Documentação

Ao estruturar um novo projeto ou reorganizar um existente, siga este passo a passo:

1. Analise a estrutura de pastas do projeto
2. Defina a responsabilidade de cada diretorio
3. Documente os contratos (o que deve, pode e nao deve)
4. Mapeie os fluxos principais (renderizacao, conteudo, features)
5. Estabeleca as convencoes de nomenclatura
6. Identifique os pontos de decisao arquitetural
7. Crie diagramas de estrutura e fluxos
8. Revise com a equipe e valide

---

## Exemplo Prático

```
Usuário: "Preciso adicionar uma página de portfólio. Onde devo criar?"

IA: [Usa guia-arquitetura-projeto]
- Verifica que src/pages/ é o local correto (contrato de rotas)
- Cria src/pages/portfolio.astro seguindo convenção kebab-case
- Importa Layout.astro do src/layouts/ (contrato de wrappers)
- Adiciona componentes reutilizáveis de src/components/ (contrato de blocos)
- Se necessário, cria utilitários em src/lib/ (contrato de funções puras)
```

---

**Relacionado:** Após estruturar o projeto, consulte [`03-estrategia-renderizacao.md`](./03-estrategia-renderizacao.md) para definir a estratégia de renderizacao (SSG, SSR, Hibrida) para cada rota.


