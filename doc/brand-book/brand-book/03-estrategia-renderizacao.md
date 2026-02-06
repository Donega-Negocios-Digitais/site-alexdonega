---
name: decidir-renderizacao-web
description: Define estrategia de renderizacao (SSG, SSR, hibrida) usando Astro, baseado nos requisitos de SEO e dinamismo. Use apos escolher a stack tecnologica (arquivo 01) para definir como cada rota sera renderizada.
---

# Guia de Decisão de Renderização com Astro

## Objetivo

Fornecer framework claro para escolher entre Geração Estática de Site (SSG), Server-Side Rendering (SSR) e Híbrida usando Astro, considerando os requisitos do projeto e a stack ja definida.

## Quando Usar Este Guia

- Ao iniciar novos projetos com Astro e decidir arquitetura
- Ao avaliar se deve mudar estrategia de renderizacao em rotas existentes
- Ao documentar decisoes arquiteturais (ADRs)
- Ao planejar estratégias de migração
- Ao revisar escolhas arquiteturais com stakeholders

## Workflow de Decisão

Copie este checklist e acompanhe o processo:

```
Progresso da Decisão:
- [ ] 1. Identificar requisitos do projeto (SEO, personalização, etc.)
- [ ] 2. Avaliar necessidades de atualização de dados
- [ ] 3. Analisar requisitos de performance
- [ ] 4. Considerar restrições orçamentárias
- [ ] 5. Consultar matriz de decisão
- [ ] 6. Seguir árvore de decisão
- [ ] 7. Documentar racional e trade-offs
- [ ] 8. Validar com stakeholders
```

## Passo 1: Estratégias de Renderização no Astro

Astro suporta múltiplas estratégias de renderização. A escolha depende do tipo de conteúdo e requisitos da página.

### SSG (Static Site Generation) - Padrão do Astro

**O que é:** HTML gerado no momento do build, servido como arquivo estático

**Quando usar com Astro:**
- ✅ Paginas institucionais (Home, Sobre, Serviços)
- ✅ Blog e artigos
- ✅ Landing pages
- ✅ Documentação
- ✅ Portfolio
- ✅ Alta prioridade de SEO
- ✅ Conteúdo que muda em janelas controladas

**Pontos fortes:**
- Performance inicial excelente (HTML pronto)
- SEO otimizado (crawlers recebem HTML completo)
- Deploy simples (qualquer host estático funciona)
- Custo operacional mínimo (CDN apenas)
- Escalabilidade via CDN automática

**Pontos de atenção:**
- Dados dinâmicos por usuário exigem estratégias extras
- Rebuild necessário para atualizações de conteúdo
- Não funciona para conteúdo altamente dinâmico

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

**O que é:** HTML gerado no servidor a cada requisição

**Quando usar com Astro:**
- ✅ Paginas com dados de sessão
- ✅ Dashboard autenticado
- ✅ Conteúdo personalizado por usuário
- ✅ Dados atualizados em tempo real
- ✅ Páginas com informações privadas

**Pontos fortes:**
- Resposta dinâmica por usuário/requisição
- Dados sempre atualizados
- Boa experiência SEO (HTML pronto no response)
- Personalização forte baseada em contexto

**Pontos de atenção:**
- Maior custo e complexidade operacional (servidor necessário)
- Latência de resposta pode aumentar
- Requer infraestrutura de servidor
- Escalabilidade mais complexa
- Precisa de adapter (Node.js, Vercel, Cloudflare, etc.)

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

**O que é:** Mistura páginas estáticas e dinâmicas no mesmo projeto

**Quando usar com Astro:**
- ✅ Produto com área pública de conteúdo + área autenticada
- ✅ Algumas páginas exigem SSR, outras podem ser estáticas
- ✅ Equilíbrio entre performance e dinamismo necessário
- ✅ Diferentes requisitos por seção do site

**Pontos fortes:**
- Melhor dos dois mundos quando devidamente governada
- Área pública rápida (SSG), área logada dinâmica (SSR)
- Flexibilidade para evoluir gradualmente
- Deploy em plataforma server-friendly

**Pontos de atenção:**
- Requer governança clara para não virar arquitetura confusa
- Curva de aprendizado maior
- Precisa de adapter mesmo para páginas estáticas

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

## Passo 6: Documentação de Decisão

Use este template para documentar a escolha:

```markdown
# Decisão de Renderização: [Nome do Projeto/Rota]

## Data: [DD/MM/YYYY]

## Estratégia Escolhida
[SSG / SSR / Híbrida]

## Racional

### Requisitos da Rota
- SEO: [Alto / Médio / Baixo]
- Personalização: [Alta / Média / Baixa]
- Atualização de dados: [Tempo real / Frequente / Ocasional]
- Performance: [Crítica / Importante / Nice-to-have]

### Por que esta abordagem com Astro?
[Explique a decisão em 2-4 parágrafos]

## Implementação

### Configuração necessária
```astro
export const prerender = [true/false];
export const revalidate = [number]; // opcional
```

### Arquivo
`src/pages/[caminho].astro`

## Trade-offs Considerados

### Benefícios
- [Benefício 1]
- [Benefício 2]

### Custos e Riscos
- [Custo 1]
- [Custo 2]
- [Como mitigamos]

## Rotas Classificadas

| Rota | Estratégia | Justificativa |
|------|-----------|---------------|
| [/] | SSG | Home estática |
| [/app/dashboard] | SSR | Dados por usuário |

## Alternativas Avaliadas

1. [Alternativa 1] - Rejeitada porque [razão]
2. [Alternativa 2] - Rejeitada porque [razão]

## Caminho de Migração (se aplicável)
[Como chegar do estado atual ao alvo]

## Aprovação
- [ ] Tech Lead
- [ ] Product Manager
```

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

## Checklist de Revisão

- [ ] Requisitos de SEO avaliados corretamente?
- [ ] Necessidades de personalização avaliadas?
- [ ] Frequência de atualização de dados considerada?
- [ ] Implicações de performance entendidas?
- [ ] Custo de infraestrutura avaliado?
- [ ] Adapter configurado (se SSR)?
- [ ] `prerender` definido corretamente?
- [ ] Exceção ao padrão documentada (se aplicável)?
- [ ] Caminho de migração definido (se mudando)?
- [ ] Trade-offs comunicados a stakeholders?
- [ ] Documentação de decisão criada e arquivada?

## Referências

- [Documentação oficial de Routing do Astro](https://docs.astro.build/en/guides/routing/)
- [Guia de SSR no Astro](https://docs.astro.build/en/guides/server-side-rendering/)
- [Adapters disponíveis](https://docs.astro.build/en/guides/deploy/)
- [Diretivas de Cliente](https://docs.astro.build/en/guides/client-side-scripts/)

---

**Nota:** Este guia deve ser usado apos o [`01-escolher-stack-web.md`](./01-escolher-stack-web.md), pois a stack escolhida (Astro) influencia diretamente as opções de renderizacao disponíveis.
