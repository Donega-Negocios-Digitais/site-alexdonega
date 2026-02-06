---
name: seletor-arquitetura-site
description: Auxilia escolha entre arquiteturas SSG, SSR, Híbrida, SPA e MPA com matrizes de decisão detalhadas, árvores de decisão visuais e critérios de avaliação de trade-offs. Use ao iniciar novos projetos, avaliar mudanças arquiteturais, documentar decisões de estratégia de renderização ou planejar migrações entre paradigmas.
---

# Guia de Seleção de Arquitetura de Site

## Objetivo

Fornecer framework claro para escolher entre Geração Estática de Site (SSG), Server-Side Rendering (SSR), Híbrida, Single Page Application (SPA) e Multi-Page Application (MPA).

## Quando Usar Esta Skill

- Ao iniciar novos projetos web e decidir arquitetura
- Ao avaliar se deve mudar arquitetura existente
- Ao documentar decisões arquiteturais (ADRs)
- Ao planejar estratégias de migração
- Ao revisar escolhas arquiteturais com stakeholders
- Ao justificar decisões técnicas para time de negócio

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

## Passo 1: Entenda os Modelos Arquiteturais

### 1. SSG (Static Site Generation)

**O que é:** HTML gerado no momento do build, servido como arquivo estático

**Quando escolher SSG:**
- ✅ Conteúdo institucional / marketing
- ✅ Blog / sites de conteúdo
- ✅ Landing pages
- ✅ Conteúdo que muda em janelas controladas
- ✅ Alta prioridade de SEO
- ✅ Orçamento limitado de infraestrutura

**Pontos fortes:**
- Performance inicial excelente (HTML pronto)
- SEO otimizado (crawlers recebem HTML completo)
- Deploy simples (qualquer host estático funciona)
- Custo operacional mínimo (CDN apenas)
- Escalabilidade via CDN automática

**Pontos de atenção:**
- Dados dinâmicos por usuário exigem estratégias extras (APIs client-side, ISR, etc.)
- Rebuild pode ser necessário para atualizações de conteúdo
- Não funciona para conteúdo altamente dinâmico

**Stacks típicas:** Astro, Next.js SSG, Gatsby, Hugo, Jekyll

### 2. SSR (Server-Side Rendering)

**O que é:** HTML gerado no servidor a cada requisição

**Quando escolher SSR:**
- ✅ Dashboards autenticados
- ✅ Páginas com dados de sessão/requisição
- ✅ Fortes requisitos de personalização
- ✅ Dados atualizados em tempo real
- ✅ Conteúdo que muda frequentemente por usuário

**Pontos fortes:**
- Resposta dinâmica por usuário/requisição
- Dados sempre atualizados
- Boa experiência SEO (HTML pronto no response)
- Personalização forte baseada em contexto

**Pontos de atenção:**
- Maior custo e complexidade operacional (servidor necessário)
- Latência de resposta pode aumentar
- Requer infraestrutura de servidor
- Escalabilidade mais complexa (load balancers, etc.)

**Stacks típicas:** Next.js SSR, Remix, SvelteKit, Nuxt.js

### 3. Híbrida (SSG + SSR)

**O que é:** Mistura páginas estáticas e dinâmicas no mesmo projeto

**Quando escolher Híbrida:**
- ✅ Produto com área pública de conteúdo + área autenticada
- ✅ Algumas páginas exigem SSR, outras podem ser estáticas
- ✅ Equilíbrio entre performance e dinamismo necessário
- ✅ Diferentes requisitos por seção do site

**Pontos fortes:**
- Melhor dos dois mundos quando devidamente governada
- Área pública rápida (SSG), área logada dinâmica (SSR)
- Flexibilidade para evoluir gradualmente

**Pontos de atenção:**
- Requer governança clara para não virar arquitetura confusa
- Deploy mais complexo (precisa servir ambos os modelos)
- Curva de aprendizado maior

**Stacks típicas:** Next.js (incremental static regeneration), Astro (híbrido), Remix

### 4. SPA (Single Page Application)

**O que é:** App principal roda no cliente com roteamento client-side

**Quando escolher SPA:**
- ✅ Produto altamente interativo e com estado complexo
- ✅ Fluxo de aplicação com muitas transições internas
- ✅ UX similar a aplicativo desktop desejado
- ⚠️ SEO não é crítico ou pode ser tratado separadamente

**Pontos fortes:**
- Interações ricas sem reloads completos
- UX fluida com transições entre "telas"
- Estado gerenciado no cliente
- Experiência similar a app nativo

**Pontos de atenção:**
- Carga inicial maior (framework JS inteiro)
- SEO requer cuidados especiais (SSR para crawlers, hydration, etc.)
- Gerenciamento de estado mais complexo
- JavaScript necessário para interação

**Stacks típicas:** React Router, Vue Router, Angular, Svelte SPA

### 5. MPA (Multi-Page Application)

**O que é:** Cada rota entrega documento de página completa

**Quando escolher MPA:**
- ✅ Sites institucionais, conteúdo, blogs
- ✅ Padrões de navegação tradicionais aceitáveis
- ✅ Manutenção simplificada desejada
- ✅ SEO prioritário

**Pontos fortes:**
- Simples de manter e entender
- SEO naturalmente forte
- Isolamento por página (bug em uma página não afeta outras)
- Sem JavaScript necessário para funcionar

**Pontos de atenção:**
- Transições entre páginas não são tipo SPA por padrão
- Requer JavaScript customizado para UX mais rica
- Pode sentir-se menos "moderno" que SPA

**Stacks típicas:** Qualquer framework com roteamento baseado em páginas

## Passo 2: Matriz de Decisão

| Tipo de Página | SEO Crítico | Personalização por Usuário | Atualização de Dados | Performance Crítica | Base Recomendada |
|----------------|-------------|----------------------------|----------------------|---------------------|------------------|
| Conteúdo institucional | Alta | Baixa | Baixa/Média | Alta | SSG |
| Blog/artigo | Alta | Baixa | Média | Alta | SSG |
| Landing de campanha | Alta | Baixa | Média | Alta | SSG |
| Dashboard logado | Média | Alta | Alta | Média | SSR ou Híbrida |
| App com interação intensa | Baixa/Média | Alta | Alta | Média | SPA (se necessário) |
| E-commerce | Alta | Média | Alta | Alta | Híbrida |

## Passo 3: Árvore de Decisão Visual

```
Site precisa de SEO forte?
    |
   SIM ──────► Conteúdo muda por usuário?
    |             |
    |           NÃO ──► SSG/MPA (padrão recomendado)
    |             |
    |           SIM ──► Híbrida ou SSR
    |
   NÃO ──────► UI muito interativa e com estado?
                  |
                 SIM ──► SPA (avalie custo cuidadosamente)
                 |
                 NÃO ──► MPA simples
```

**Use a árvore para:** Decisões rápidas, validação com time técnico, documentação de justificativa

## Passo 4: Framework de Classificação

Ao documentar arquitetura, classifique cada rota:

| Grupo de Rota | Exemplos de Arquivos | Estratégia | Por que |
|---------------|----------------------|------------|---------|
| Home/Institucional | `index.astro`, `sobre.astro` | SSG/MPA | Conteúdo estático, SEO importante |
| Blog listagem | `blog/index.astro` | SSG/MPA | Lista atualizada em build |
| Blog detalhe | `blog/[slug].astro` + `src/content/blog/*.md` | SSG/MPA | Conteúdo markdown renderizado estaticamente |
| Área logada | `app/dashboard.astro` | SSR/Híbrida | Dados por usuário, autenticação |
| APIs | `api/*.ts` | SSR | Respostas dinâmicas |
| Páginas legadas | `legacy/index.html` | Manter estável | Migração gradual futura |

## Passo 5: Documentação de Decisão

Use este template para documentar a escolha:

```markdown
# Decisão de Arquitetura: [Nome do Projeto]

## Data: [DD/MM/YYYY]

## Arquitetura Escolhida
[SSG / SSR / Híbrida / SPA / MPA]

## Racional

### Requisitos do Projeto
- SEO: [Alto / Médio / Baixo]
- Personalização: [Alta / Média / Baixa]
- Atualização de dados: [Tempo real / Frequente / Ocasional]
- Performance: [Crítica / Importante / Nice-to-have]

### Por que esta abordagem?
[Explique a decisão em 2-4 parágrafos]

## Trade-offs Considerados

### Benefícios
- [Benefício 1]
- [Benefício 2]

### Custos e Riscos
- [Custo 1]
- [Custo 2]
- [Como mitigamos]

## Classificação de Rotas

| Rota | Estratégia | Justificativa |
|------|-----------|---------------|
| [exemplos] | [SSG/SSR/etc] | [por que] |

## Alternativas Avaliadas

1. [Alternativa 1] - Rejeitada porque [razão]
2. [Alternativa 2] - Rejeitada porque [razão]

## Caminho de Migração (se aplicável)
[Como chegar do estado atual ao alvo]

## Aprovação
- [ ] Tech Lead
- [ ] Product Manager
- [ ] Stakeholders relevantes
```

## Melhores Práticas

1. **Comece Simples**: SSG/MPA funcionam para 80% dos casos
2. **Evolua quando Necessário**: Não antecipe complexidade
3. **Documente Decisões**: Mantenha registro do por que das escolhas
4. **Revisite Periodicamente**: Requisitos mudam, arquitetura pode precisar evoluir
5. **Comunique Trade-offs**: Stakeholders precisam entender custos e benefícios

## Anti-Padrões a Evitar

- ❌ Não migre para SSR/SPA por preferência pessoal sem requisito técnico
- ❌ Não misture paradigmas de renderização sem documentar impacto
- ❌ Não crie nova rota dinâmica sem analisar SEO e custo de manutenção
- ❌ Não otimize prematuramente (SSG funciona para a maioria dos casos de conteúdo)
- ❌ Não ignore custos operacionais de servidores (SSR) vs. CDN (SSG)
- ❌ Não escolha SPA só porque é "moderno" - avalie se o caso de uso justifica

## Exemplo de Uso

```
Usuário: "Estou criando um blog de notícias. Qual arquitetura devo usar?"

IA: [Usa seletor-arquitetura-site]
- Identifica: SEO crítico (blog), conteúdo muda frequentemente (notícias), personalização baixa
- Consulta matriz: Conteúdo institucional/blog → SSG
- Mas conteúdo muda frequentemente → Considera ISR ou rebuild frequente
- Decisão: SSG com rebuild automatizado quando novas notícias são publicadas
- Justifica: SEO ótimo, performance ótima, rebuild necessário gerenciável
```

## Checklist de Revisão

- [ ] Requisitos de SEO avaliados corretamente?
- [ ] Necessidades de personalização avaliadas?
- [ ] Frequência de atualização de dados considerada?
- [ ] Implicações de performance entendidas?
- [ ] Custo de infraestrutura avaliado?
- [ ] Complexidade de manutenção aceita pelo time?
- [ ] Exceção ao padrão documentada (se aplicável)?
- [ ] Caminho de migração definido (se mudando)?
- [ ] Trade-offs comunicados a stakeholders?
- [ ] Documentação de decisão criada e arquivada?
