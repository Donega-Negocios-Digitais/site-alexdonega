---
name: decidir-renderizacao-web
description: Define estrategia de renderizacao (SSG, SSR, hibrida) usando Astro, baseado nos requisitos de SEO e dinamismo. Use apos escolher a stack tecnologica (arquivo 01) para definir como cada rota sera renderizada.
---

# Estratégia de Renderização com Astro

## Objetivo

Fornecer framework claro para escolher entre Geração Estática de Site (SSG), Server-Side Rendering (SSR) e Híbrida usando Astro, considerando os requisitos do projeto e a stack ja definida.

## O que é Renderização?

Renderização é o processo de transformar seu código em páginas web que os usuários podem ver. Existem tres formas principais de fazer isso.

Pense em um restaurante:

- **SSG** = Restaurante que ja prepara os pratos populares antes de abrir. Quando voce chega, seu prato ja esta pronto, so falta servir.
- **SSR** = Restaurante que so começa a cozinhar quando voce faz o pedido. Cada prato e fresco, mas leva mais tempo.
- **Híbrida** = Restaurante que tem pratos prontos (SSG) e tambem cozinha na hora (SSR), dependendo do pedido.

## Quando Usar Este Guia

- Ao iniciar novos projetos com Astro e decidir arquitetura
- Ao avaliar se deve mudar estrategia de renderizacao em rotas existentes
- Ao documentar decisoes arquiteturais (ADRs)
- Ao planejar estratégias de migração
- Ao revisar escolhas arquiteturais com stakeholders

## Estratégias de Renderização no Astro

Astro suporta múltiplas estratégias de renderização. A escolha depende do tipo de conteúdo e requisitos da página.

### SSG (Static Site Generation) - Padrão do Astro

**O que é:**

SSG significa "Static Site Generation" - Geracao Estatica de Site. O HTML e gerado no momento do build (quando voce executa `npm run build`) e servido como um arquivo pronto. Cada pagina que o usuario acessa ja esta pronta, esperando por ele.

**Quando usar com Astro:**

- ✅ Paginas institucionais (Home, Sobre, Servicos)
- ✅ Blog e artigos
- ✅ Landing pages
- ✅ Documentacao
- ✅ Portfolio
- ✅ Alta prioridade de SEO
- ✅ Conteudo que muda em janelas controladas

**Por que e bom:**

- **Performance inicial excelente** - O HTML ja esta pronto, so falta carregar
- **SEO otimizado** - O Google recebe o HTML completo da pagina
- **Deploy simples** - Funciona em qualquer host estatico (Vercel, Netlify, Cloudflare)
- **Custo minimo** - So precisa de CDN, nao de servidor
- **Escalabilidade automatica** - CDN distribui seu site mundialmente

**O que prestar atenção:**

- Dados dinâmicos por usuario exigem estratégias extras
- Precisa fazer rebuild quando quiser atualizar o conteudo
- Nao funciona para conteudo que muda o tempo todo

**Como implementar no Astro:**

```astro
---
// src/pages/index.astro
// Nada de especial - Astro gera HTML estático por padrão
const pageTitle = "Home";
---

<html>
  <head>
    <title>{pageTitle}</title>
  </head>
  <body>
    <h1>Bem-vindo!</h1>
  </body>
</html>
```

**Rota dinâmica com SSG:**

```astro
---
// src/pages/blog/[slug].astro
// Gera HTML estático para cada post durante o build
import { getCollection } from 'astro:content';

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

<h1>{post.data.title}</h1>
<Content />
```

### SSR (Server-Side Rendering) com Astro

**O que é:**

SSR significa "Server-Side Rendering" - Renderizacao do Lado do Servidor. O HTML e criado na hora em que o usuario acessa a pagina, nao antes. Cada requisicao gera uma nova versao da pagina.

**Quando usar com Astro:**

- ✅ Paginas com dados de sessao (login, usuario logado)
- ✅ Dashboard autenticado
- ✅ Conteudo personalizado por usuario
- ✅ Dados atualizados em tempo real
- ✅ Paginas com informacoes privadas

**Por que e bom:**

- **Conteudo personalizado** - Cada usuario ve informacoes diferentes
- **Dados sempre atualizados** - Mostra o que esta acontecendo agora
- **Boa experiencia SEO** - O Google recebe HTML completo mesmo assim
- **Personalizacao forte** - Sabe quem e o usuario e adapta o conteudo

**O que prestar atenção:**

- **Custo mais alto** - Precisa de servidor rodando 24 horas
- **Mais lento** - Precisa gerar a pagina a cada acesso
- **Infraestrutura** - Requer servidor ou adapter (Node.js, Vercel, Cloudflare)
- **Escalabilidade** - Mais dificil escalar que sites estaticos

**Como implementar no Astro:**

```astro
---
// src/pages/app/dashboard.astro

// Desabilita SSG para esta rota
export const prerender = false;

// Acesso a dados da requisição
const session = Astro.cookies.get('session');
const user = await getUserFromSession(session.value);

if (!user) {
  return Astro.redirect('/login');
}
---

<html>
  <head><title>Dashboard</title></head>
  <body>
    <h1>Olá, {user.name}!</h1>
  </body>
</html>
```

**Configuração de adapter para SSR (astro.config.mjs):**

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',  // Habilita SSR
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind()],
});
```

**Adapters disponíveis:**
- `@astrojs/node` - Node.js (Express, standalone)
- `@astrojs/vercel` - Vercel Edge Functions
- `@astrojs/netlify` - Netlify Functions
- `@astrojs/cloudflare` - Cloudflare Pages Functions

### Híbrida (SSG + SSR)

**O que e:**

Híbrida significa misturar os dois metodos no mesmo site. Algumas partes sao estaticas (SSG) e outras sao dinamicas (SSR). Voce escolhe o que faz sentido para cada pagina.

**Quando usar com Astro:**

- ✅ Produto com area publica (blog, landing page) + area autenticada (dashboard)
- ✅ Algumas paginas exigem SSR, outras podem ser estaticas
- ✅ Equilibrio entre performance e dinamismo necessario
- ✅ Diferentes requisitos por secao do site

**Por que e bom:**

- **Melhor dos dois mundos** - Area publica rapida, area logada dinamica
- **Flexibilidade** - Evolui gradualmente conforme necessario
- **Deploy unico** - Todo site junto na mesma plataforma

**O que prestar atenção:**

- **Governanca** - Precisa ficar claro qual pagina usa o que
- **Complexidade** - Mais dificil entender o que acontece em cada lugar
- **Adapter** - Ainda precisa configurar adapter para SSR funcionar

**Como implementar no Astro:**

```
src/pages/
├── index.astro              # SSG (padrão, sem prerender)
├── sobre.astro              # SSG (padrão)
├── blog/
│   ├── index.astro          # SSG (padrão)
│   └── [slug].astro         # SSG (padrão)
└── app/
    └── dashboard.astro      # SSR (prerender = false)
```

```astro
---
// src/pages/app/dashboard.astro
// Apenas esta página é SSR
export const prerender = false;
const user = await getUser(Astro.request);
---

<!-- Resto do site continua SSG -->
```

### Hybrid Rendering com `partial`

Astro também suporta rendering parcial:

```astro
---
// src/pages/products/[id].astro

// Hybrid: cache com revalidação
export const prerender = true;
export const revalidate = 3600; // Revalida a cada 1 hora

const product = await getProduct(params.id);
---

<html>
  <body>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
  </body>
</html>
```

## Passo 2: Matriz de Decisão para Astro

| Tipo de Página | SEO Crítico | Personalização por Usuário | Atualização de Dados | Performance Crítica | Estratégia Astro |
|----------------|-------------|----------------------------|----------------------|---------------------|------------------|
| Home/Institucional | Alta | Baixa | Baixa/Média | Alta | SSG (padrão) |
| Blog/artigo | Alta | Baixa | Média (rebuild) | Alta | SSG com getStaticPaths |
| Landing de campanha | Alta | Baixa | Média | Alta | SSG |
| Dashboard logado | Média | Alta | Alta | Média | SSR (prerender = false) |
| Perfil de usuário | Média | Alta | Tempo real | Média | SSR |
| E-commerce catálogo | Alta | Média | Média | Alta | SSG + ISR |
| E-commerce checkout | Média | Alta | Tempo real | Média | SSR |
| Área admin | Baixa | Alta | Tempo real | Média | SSR |

## Passo 3: Árvore de Decisão Visual

```
A página precisa de SEO forte?
    |
   SIM ──────► Conteúdo muda por usuário?
    |             |
    |           NÃO ──► SSG (padrão do Astro)
    |             |
    |           SIM ──► SSR (export const prerender = false)
    |
   NÃO ──────► UI muito interativa e com estado?
                  |
                 SIM ──► SSR + Islands (client:*)
                  |
                 NÃO ──► SSG (simples e rápido)
```

**Use a árvore para:** Decisões rápidas, validação com time técnico, documentação de justificativa

## Passo 4: Framework de Classificação

Ao documentar arquitetura, classifique cada rota:

| Grupo de Rota | Exemplos de Arquivos | Estratégia Astro | Por que |
|---------------|----------------------|------------------|---------|
| Home/Institucional | `index.astro`, `sobre.astro` | SSG | Conteúdo estático, SEO importante |
| Blog listagem | `blog/index.astro` | SSG | Lista atualizada em build |
| Blog detalhe | `blog/[slug].astro` + `getStaticPaths()` | SSG | Conteúdo markdown renderizado estaticamente |
| Área logada | `app/dashboard.astro` | SSR (`prerender = false`) | Dados por usuário, autenticação |
| APIs | `api/*.ts` | SSR | Respostas dinâmicas |
| Páginas legadas | `legacy/index.html` | Mantiver estável | Migração gradual futura |

## Passo 5: Diretivas de Cliente no Astro

Para componentes que precisam de JavaScript no cliente (Islands):

```astro
---
import MeuComponente from '@/components/MeuComponente.jsx';
---

<!-- Hidrata imediatamente -->
<MeuComponente client:load />

<!-- Hidrata quando browser fica idle -->
<MeuComponente client:idle />

<!-- Hidrata quando elemento entra na viewport -->
<MeuComponente client:visible />

<!-- Hidrata se media query bater -->
<MeuComponente client:media="(max-width: 768px)" />

<!-- Renderiza apenas no cliente (sem SSR) -->
<MeuComponente client:only="react" />
```

**Regra de ouro:** Cada `client:*` é JavaScript extra. Use apenas quando necessário.

## Melhores Práticas

1. **Comece com SSG**: Funciona para 80% dos casos de conteúdo
2. **Evolua quando necessário**: Não antecipe complexidade
3. **Documente decisões**: Mantenha registro do por que das escolhas
4. **Revisite periodicamente**: Requisitos mudam, arquitetura pode precisar evoluir
5. **Comunique trade-offs**: Stakeholders precisam entender custos e benefícios
6. **Use `getStaticPaths()` para rotas dinâmicas**: Gera HTML estático para cada variação

## Anti-Padrões a Evitar

- ❌ NAO use SSR sem necessidade (aumenta custo operacional)
- ❌ NAO misture paradigmas de renderização sem documentar impacto
- ❌ NAO crie nova rota dinâmica sem analisar SEO e custo de manutenção
- ❌ NAO otimize prematuramente (SSG funciona para a maioria dos casos de conteúdo)
- ❌ NAO ignore custos operacionais de servidores (SSR) vs. CDN (SSG)
- ❌ NAO use `client:load` por padrão - prefira HTML estático
- ❌ NAO esqueça de configurar adapter ao habilitar SSR

## Exemplos Práticos

### Blog com SSG

```astro
---
// src/pages/blog/[slug].astro
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content, headings } = await post.render();
---

<html>
  <head>
    <title>{post.data.title}</title>
    <meta name="description" content={post.data.description} />
  </head>
  <body>
    <article>
      <h1>{post.data.title}</h1>
      <time>{post.data.pubDate.toLocaleDateString()}</time>
      <Content />
    </article>
  </body>
</html>
```

### Dashboard com SSR

```astro
---
// src/pages/app/dashboard.astro
export const prerender = false;

const token = Astro.cookies.get('auth_token');
if (!token) {
  return Astro.redirect('/login');
}

const user = await fetchUser(token.value);
const stats = await fetchUserStats(user.id);
---

<html>
  <head><title>Dashboard</title></head>
  <body>
    <header>
      <p>Bem-vindo, {user.name}!</p>
    </header>
    <main>
      <section>
        <h2>Estatísticas</h2>
        <p>Visitas: {stats.visits}</p>
      </section>
    </main>
  </body>
</html>
```

## Referências

- [Documentacao oficial de Routing do Astro](https://docs.astro.build/en/guides/routing/)
- [Guia de SSR no Astro](https://docs.astro.build/en/guides/server-side-rendering/)
- [Adapters disponíveis](https://docs.astro.build/en/guides/deploy/)
- [Diretivas de Cliente](https://docs.astro.build/en/guides/client-side-scripts/)

---

**Nota:** Este guia deve ser usado apos o [`02-stack-tecnologia.md`](./02-stack-tecnologia.md), pois a stack escolhida (Astro) influencia diretamente as opcoes de renderizacao disponíveis.


