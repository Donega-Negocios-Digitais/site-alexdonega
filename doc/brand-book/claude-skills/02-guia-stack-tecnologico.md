---
name: guia-stack-tecnologico
description: Cria documentação técnica de stack tecnológico incluindo inventário completo de dependências com versões, scripts npm, arquivos de configuração centrais e arquitetura em camadas. Use ao iniciar projetos web, documentar stack existente, avaliar adoção de tecnologias, dar onboarding em equipes ou planejar migrações de framework.
---

# Guia de Documentação de Stack Tecnológico

## Objetivo

Criar documentação completa de stack tecnológico que sirva como fonte única de verdade para escolhas de tecnologias, versões, dependências e limites arquiteturais de um projeto.

## Quando Usar Esta Skill

- Ao iniciar novos projetos web e precisar definir/documentar a stack
- Ao dar onboarding em novos desenvolvedores em projetos existentes
- Ao avaliar se deve adotar novas tecnologias
- Ao criar documentação técnica para um codebase
- Ao planejar migrações entre frameworks ou versões principais
- Ao documentar dependências para time de DevOps/SRE

## Workflow de Documentação

Copie este checklist e acompanhe o progresso:

```
Progresso da Documentação:
- [ ] 1. Ler package.json e listar dependências
- [ ] 2. Identificar scripts npm e documentar uso
- [ ] 3. Mapear arquivos de configuração centrais
- [ ] 4. Definir camadas da arquitetura
- [ ] 5. Criar diagrama de fluxo tecnológico
- [ ] 6. Documentar o que pode ser adicionado vs. exige alinhamento
- [ ] 7. Criar seção de anti-padrões
- [ ] 8. Revisar e validar com equipe
```

## Passo 1: Inventário de Dependências

### 1.1. Leia package.json

Execute `cat package.json` ou abra o arquivo para identificar todas as dependências.

### 1.2. Crie Tabela de Dependências

| Camada | Pacote | Versão | Papel | Por que está no projeto |
|-------|---------|---------|------|-------------------------|
| Framework | `astro` | `^4.0.0` | Estrutura de páginas, build, roteamento | Escolhido por performance e SSG-first |
| CSS | `@astrojs/tailwind` | `^6.0.2` | Integração Tailwind + Astro | Padronização de estilos |
| CSS Utilitário | `tailwindcss` | `^3.4.19` | Utilitários e design tokens | Sistema de design consistente |
| Animação | `tailwindcss-animate` | `^1.0.7` | Keyframes/animations | Transições UI suaves |
| Imagens | `sharp` | `^0.34.5` | Processamento/otimização | Performance de imagens |
| Classes | `class-variance-authority` | `^0.7.1` | API de variantes | Componentes com variações |
| Merge | `clsx` + `tailwind-merge` | `^2.1.1`, `^3.4.0` | Composição de classes | Conflito de classes Tailwind |

**Camadas típicas a documentar:**
- Framework (Astro, React, Next.js, Vue, etc.)
- Estilização (Tailwind, CSS Modules, Styled Components, etc.)
- Estado (Zustand, Redux, Jotai, etc. - se aplicável)
- Utilitários (lodash, date-fns, etc.)
- Testes (Vitest, Jest, Playwright, etc.)
- Build (Vite, esbuild, etc.)

### 1.3. Scripts npm

| Comando | Ação | Quando usar | Saída esperada |
|---------|--------|-------------|----------------|
| `npm run dev` | Sobe servidor local | Desenvolvimento diário | Server em http://localhost:4000 |
| `npm run build` | Gera build de produção | Antes de deploy | Pasta `dist/` com assets otimizados |
| `npm run preview` | Preview da build | Validação pré-deploy | Servidor local simulando produção |

## Passo 2: Arquivos de Configuração Central

Identifique os arquivos "fonte da verdade" do projeto:

| Arquivo | Propósito | Configurações chave |
|---------|-----------|---------------------|
| `package.json` | Versões e scripts | `dependencies`, `devDependencies`, `scripts` |
| `astro.config.mjs` | Site, build, server, integrations | `site`, `base`, `build.format`, `server.port` |
| `tailwind.config.mjs` | Tokens de tema e plugins | `theme.extend.colors`, `darkMode`, `content` |
| `src/styles/globals.css` | Tokens globais CSS | `:root` com variáveis CSS |
| `src/lib/utils.ts` | Helper `cn()` | `clsx` + `tailwind-merge` |

**Para cada arquivo, documente:**
- Caminho completo desde a raiz do projeto
- Propósito específico no contexto do projeto
- Configurações críticas (não liste tudo, apenas o essencial)

## Passo 3: Arquitetura em Camadas

### 3.1. Defina Fronteiras Claras

**Camada de Apresentação (UI)**
- **Fonte de verdade**: `src/components/`, `src/layouts/`, `src/pages/`
- **Responsabilidade**: Layout, estrutura, apresentação visual
- **Regras**: Usar Astro + Tailwind, evitar CSS global novo sem necessidade
- **O que NÃO colocar**: Lógica de negócio complexa, validação de dados

**Camada de Conteúdo**
- **Fonte de verdade**: `src/content/blog/`, `src/content/config.ts`
- **Responsabilidade**: Dados editoriais, markdown, schema de validação
- **Regras**: Respeitar schema Zod, usar frontmatter padrão
- **O que NÃO colocar**: Componentes visuais, lógica de apresentação

**Camada de Assets Estáticos**
- **Fonte de verdade**: `public/`
- **Responsabilidade**: Imagens, vídeos, favicons, logos servidos via HTTP
- **Regras**: Caminhos estáveis e previsíveis, diferenciar marca vs. conteúdo
- **O que NÃO colocar**: Código executável, scripts de build

**Camada de Build/Deploy**
- **Fonte de verdade**: `astro.config.mjs`, `_routes.json`, CI/CD
- **Responsabilidade**: Como o site é construído e deployado
- **Regras**: Build precisa sair sem erro, dominio deve bater com config
- **O que NÃO colocar**: Lógica de aplicação runtime

### 3.2. Diagrama de Fluxo Tecnológico

```
[markdown/content em src/content/] ----\
                                       \
[páginas .astro em src/pages/] -----> [Astro Build Process] -----> [HTML/CSS/JS estático em dist/]
                                       /
[estilos em src/styles/ + tailwind] ---/
```

**Documente o fluxo específico do seu projeto:**
1. Entradas: O que entra no processo de build?
2. Processamento: O que o framework faz?
3. Saídas: O que é gerado e onde?

## Passo 4: Matriz de Decisão de Adoção

### 4.1. Pode Adicionar Sem Alinhamento Prévio

- ✅ Novo componente Astro em `src/components/`
- ✅ Nova página Astro em `src/pages/`
- ✅ Novo token de cor/fonte seguindo padrão atual
- ✅ Novo post markdown seguindo schema existente
- ✅ Hook/util pequeno em `src/lib/`

### 4.2. Requer Alinhamento Prévio com Equipe

- ⚠️ Troca de framework principal (ex: Astro → Next.js)
- ⚠️ Migração Tailwind 3 → Tailwind 4
- ⚠️ Introdução de biblioteca de estado (Zustand, Redux, etc.)
- ⚠️ Mudança de domínio principal
- ⚠️ Mudança de modelo de renderização (SSG → SSR)
- ⚠️ Adição de TypeScript se projeto é JavaScript puro

**Para mudanças que requerem alinhamento:**
1. Abra issue/discussão com justificativa técnica
2. Liste benefícios e custos da mudança
3. Considere migração incremental vs. Big Bang
4. Documente decisão tomada

## Passo 5: Template de Documentação Final

```markdown
# Stack Tecnológico

## Snapshot Técnico Atual

### Dependências Principais
| Camada | Pacote | Versão | Papel |
|-------|---------|---------|------|
| [preencher com tabela do Passo 1] |

### Scripts npm
| Comando | Ação | Quando usar |
|---------|--------|-------------|
| [preencher com tabela do Passo 1] |

## Arquivos Centrais
- `package.json` - [descrição]
- `astro.config.mjs` - [descrição]
- [outros arquivos relevantes]

## Configurações Atuais (Pontos Críticos)

### Framework
- `site`: [URL]
- `base`: [caminho]
- `build.format`: [formato]
- `server.port`: [porta]

### CSS Framework
- `darkMode`: [configuração]
- `content`: [paths escaneadas]
- `theme.extend.colors`: [tokens]

## Camadas e Fronteiras

### 1) Camada de Apresentação (UI)
- **Fonte**: `src/components/`, `src/layouts/`, `src/pages/`
- **Regras**: [lista]
- **Anti-padrões**: [lista]

### 2) Camada de Conteúdo
- **Fonte**: `src/content/`
- **Regras**: [lista]
- **Anti-padrões**: [lista]

### 3) Camada de Assets
- **Fonte**: `public/`
- **Regras**: [lista]
- **Anti-padrões**: [lista]

### 4) Camada de Build/Deploy
- **Fonte**: [arquivos]
- **Regras**: [lista]
- **Anti-padrões**: [lista]

## Fluxo Tecnológico

[Diagrama do Passo 3]

## O que Pode Ser Adicionado
- [lista de mudanças de baixo risco]

## O que Exige Alinhamento
- [lista de mudanças de alto risco]

## Não Fazer
- [lista de anti-padrões específicos do projeto]
```

## Melhores Práticas

1. **Seja Específico**: Documente versões exatas, não intervalos
2. **Fonte da Verdade**: Sempre referencie os arquivos de config reais
3. **Limites de Camada**: Defina claramente o que pertence aonde
4. **Anti-padrões**: Inclua sempre seção "Não fazer"
5. **Mantenha Atualizado**: Atualize docs quando a stack mudar
6. **Seja Pragmático**: Documente o que existe, não o que deveria existir

## Exemplo de Uso

```
Usuário: "Estou começando um projeto novo com Next.js e Tailwind. Cria documentação de stack para mim."

IA: [Usa guia-stack-tecnologico]
- Lê package.json do projeto
- Cria tabelas de dependências e scripts
- Identifica arquivos next.config.js e tailwind.config.ts
- Define camadas (pages/, components/, app/, public/)
- Cria fluxo tecnológico específico para Next.js App Router
```

## Anti-Padrões a Evitar

- ❌ Não adicione dependências para problemas simples de CSS/HTML
- ❌ Não duplique lógica que já existe em utilitários
- ❌ Não ignore configurações de arquivos (se está no config, afeta o projeto)
- ❌ Não contorne schemas de validação (quebra type safety)
- ❌ Não documente sem verificar implementação real
- ❌ Não misture camadas (ex: lógica de negócio em componentes de apresentação)

## Checklist de Revisão Final

- [ ] Todas dependências listadas com versões exatas?
- [ ] Scripts documentados com casos de uso claros?
- [ ] Arquivos de config referenciados corretamente?
- [ ] Limites de camada claramente definidos?
- [ ] Diagrama de fluxo tecnológico incluído?
- [ ] Seção "Não fazer" presente e específica?
- [ ] Arquivos fonte da verdade identificados?
- [ ] Matriz de decisão (pode vs. requer alinhamento) clara?
- [ ] Template final pode ser usado por time de DevOps?
