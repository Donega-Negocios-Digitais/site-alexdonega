---
name: planejar-arquitetura-repo
description: Define e documenta arquitetura de repositorio com contratos por pasta, convencoes de nomenclatura, fluxos de implementacao e guardrails de manutencao. Use ao estruturar projeto novo, reorganizar codebase ou melhorar onboarding técnico.
---

# Guia de Documentação de Arquitetura de Projeto

## Objetivo

Criar documentação detalhada de arquitetura que defina estrutura de pastas, responsabilidades, fluxos e contratos para um repositório de projeto web.

## Quando Usar Esta Skill

- Documentando arquitetura de projeto existente
- Estabelecendo padrões arquiteturais para novos projetos
- Fazendo onboarding de desenvolvedores na estrutura do codebase
- Planejando refatoração ou reorganização
- Criando registros de decisões arquiteturais (ADRs)
- Preparando documentação para handoff entre equipes

## Workflow de Documentação

Copie este checklist e acompanhe o progresso:

```
Progresso da Documentação:
- [ ] 1. Analisar estrutura de pastas do projeto
- [ ] 2. Definir responsabilidade de cada diretório
- [ ] 3. Documentar contratos (deve/pode/não-deve)
- [ ] 4. Mapear fluxos principais (renderização, conteúdo, features)
- [ ] 5. Estabelecer convenções de nomenclatura
- [ ] 6. Identificar pontos de decisão arquitetural
- [ ] 7. Criar diagramas de estrutura e fluxos
- [ ] 8. Revisar com equipe e validar
```

## Passo 1: Análise de Estrutura

### 1.1. Execute Análise de Pastas

```bash
# Liste estrutura completa
find . -type d -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/dist/*" | head -50

# Ou use tree se disponível
tree -I "node_modules|dist|.git" -L 3
```

### 1.2. Crie Visão Geral da Arquitetura

**Defina a abordagem arquitetural:**

| Aspecto | Decisão | Justificativa |
|---------|---------|---------------|
| Padrão | Orientado a páginas / Component-based / Content-driven | [razão] |
| Orquestrador | Astro / Next.js / React Router | [razão] |
| Organização | Componentização para reuso | [razão] |
| Conteúdo | Collections / Markdown / Data files | [razão] |
| Assets | Static serving / CDN / Optimized | [razão] |

## Passo 2: Contrato Por Pasta

### 2.1. Documente Cada Diretório Principal

Para cada pasta, crie contrato completo:

#### Modelo de Contrato de Pasta

```
📁 src/pages/ (Rotas)
├─ Responsabilidade: Define endpoints da aplicação via file-based routing
├─ Deve conter: Arquivos .astro para rotas principais, subpastas para rotas agrupadas
├─ Pode conter: Rotas dinâmicas [param], rotas index
└─ NÃO deve conter: Componentes reutilizáveis globalmente, utilitários genéricos
```

### 2.2. Contratos Completos para Cada Pasta

**`src/pages/` (Rotas)**
- **Responsabilidade**: Define endpoints da aplicação via roteamento baseado em arquivos
- **Deve conter**: Arquivos de página para rotas principais, subpastas para rotas agrupadas
- **Pode conter**: Rotas dinâmicas com notação de colchetes `[param]`, páginas `index.astro`
- **NÃO deve conter**: Componentes globais reutilizáveis, utilitários genéricos
- **Exemplo**: `blog/index.astro`, `blog/[slug].astro`, `sobre.astro`

**`src/layouts/` (Casca Estrutural)**
- **Responsabilidade**: Padroniza `head`, fontes, SEO base, header/footer e slot de conteúdo
- **Deve conter**: Layout base (`Layout.astro`), layouts especializados se necessário
- **Pode conter**: Layouts com diferentes estruturas de header/footer
- **NÃO deve conter**: Lógica de negócio específica de página
- **Exemplo**: `Layout.astro` (base), `BlogLayout.astro` (específico para blog)

**`src/components/` (Blocos Reutilizáveis)**
- **Responsabilidade**: Componentes reutilizáveis entre páginas
- **Deve conter**: Componentes macro (Header/Footer/Hero), subpasta `ui/` para primitivas (Button/Card/Badge)
- **Pode conter**: Componentes compostos, context providers
- **NÃO deve conter**: Rotas completas, dados de conteúdo hardcoded sem necessidade
- **Estrutura sugerida**: `components/ui/` para primitivas, componentes nomeados na raiz para macros

**`src/content/` (Dados Editoriais)**
- **Responsabilidade**: Centralizar markdown/conteúdo com schema
- **Deve conter**: `config.ts` com schema Zod, coleção de arquivos markdown
- **Pode conter**: Subpastas por tipo de conteúdo (blog, projetos, etc.)
- **NÃO deve conter**: Componentes visuais
- **Exemplo**: `blog/` com posts, `config.ts` com schema de frontmatter

**`src/styles/` (Base Global)**
- **Responsabilidade**: Tokens CSS globais e utilitários estruturantes
- **Deve conter**: `globals.css` com `:root`, `@layer base/components/utilities`
- **Pode conter**: Variáveis CSS, resets globais, utilitários específicos
- **NÃO deve conter**: Estilos longos específicos de página (preferir `<style>` local quando isolado)

**`src/lib/` (Utilitários)**
- **Responsabilidade**: Funções utilitárias sem acoplamento de rota
- **Deve conter**: Helpers para classes (cn), strings, datas, formatação
- **Pode conter**: Clients de API, funções de validação, constants
- **NÃO deve conter**: Componentes de UI, lógica de rota

**`public/` (Assets Estáticos)**
- **Responsabilidade**: Assets servidos diretamente via caminho HTTP
- **Deve conter**: Imagens, ícones, logos, vídeos, favicons
- **Pode conter**: Subpastas por tipo (img/, icons/, videos/)
- **NÃO deve conter**: Código executável de aplicação
- **Exemplo de caminho**: `/img/logo.png` → `public/img/logo.png`

## Passo 3: Fluxos Principais

### 3.1. Fluxo de Renderização de Página

```
[Usuário requisita URL /sobre]
      ↓
[Arquivo src/pages/sobre.astro determina rota]
      ↓
[Página importa Layout.astro + Componentes]
      ↓
[Astro compila para HTML/CSS/JS]
      ↓
[Build: Arquivo estático gerado em dist/sobre/index.html]
      ↓
[Resposta HTTP entregue ao navegador]
```

### 3.2. Fluxo de Conteúdo do Blog

```
[Novo post.md criado em src/content/blog/]
      ↓
[Schema em src/content/config.ts valida frontmatter]
      ↓
[Schema OK → Post incluído em build]
      ↓
[src/pages/blog/index.astro lista posts]
      ↓
[src/pages/blog/[slug].astro renderiza detalhe]
```

### 3.3. Fluxo de Criação de Feature

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
[Atualização de documentação em doc/brand-book/]
```

## Passo 4: Convenções de Nomenclatura

Estabeleça padrões claros e documente:

| Tipo de Arquivo | Convenção | Exemplo | Justificativa |
|----------------|------------|---------|---------------|
| Páginas | kebab-case | `minha-pagina.astro` | URLs amigáveis, SEO-friendly |
| Componentes Astro | PascalCase | `MeuComponente.astro` | Padrão de mercado para componentes |
| Arquivos de conteúdo | kebab-case slug | `2024-01-15-postagem.md` | URLs limpas, ordenação cronológica |
| Tokens CSS | kebab-case | `--accent-hover` | Padrão CSS custom properties |
| Funções utilitárias | camelCase | `formatarData()` | Padrão JavaScript |
| Constantes | SCREAMING_SNAKE | `API_BASE_URL` | Diferenciar de variáveis |
| Interfaces/Types | PascalCase | `UserData` | Padrão TypeScript |

## Passo 5: Pontos de Decisão Arquitetural

### 5.1. Documente Decisões Existentes

**Padrões atuais em uso:**
- Roteamento: File-based routing via Astro
- Estilização: Utility-first com Tailwind CSS
- Gerenciamento de conteúdo: Content collections com schema Zod
- Manuseio de assets: Public folder com subpastas por tipo

**Pontos requerendo atenção:**
- [ ] Listar áreas de débito técnico
- [ ] Identificar necessidades de migração
- [ ] Documentar inconsistências a resolver

## Passo 6: Template de Documentação Final

```markdown
# Arquitetura do Projeto

## Visão Geral
- **Padrão**: [orientado a páginas / baseado em componentes / etc]
- **Framework**: [Astro / Next.js / React]
- **Organização**: [componentização / etc]

## Estrutura de Pastas

[Diagrama em árvore do Passo 1.2]

## Contratos por Pasta

[Contratos completos do Passo 2.2]

## Fluxos Principais

### Renderização de Página
[Diagrama do Passo 3.1]

### Conteúdo
[Diagrama do Passo 3.2]

### Criação de Feature
[Diagrama do Passo 3.3]

## Convenções de Nomenclatura

[Tabela do Passo 4]

## Pontos de Decisão

[Pontos atuais e necessidades futuras]

## Não Fazer
[Lista de anti-padrões específicos]
```

## Melhores Práticas

1. **Seja Consistente**: Use as mesmas convenções em todo o projeto
2. **Documente Decisões**: Por que cada padrão foi escolhido?
3. **Mantenha Sincronizado**: A documentação deve bater com o código real
4. **Evolua com Projeto**: Atualize docs quando arquitetura mudar
5. **Seja Pragmático**: Documente o que existe, não idealização

## Anti-Padrões a Evitar

- ❌ Não crie pastas de página paralelas fora da estrutura padrão
- ❌ Não duplique Header/Footer manualmente em cada página
- ❌ Não publique conteúdo contornando validação de schema
- ❌ Não quebre convenções de caminho de assets sem documentar
- ❌ Não misture preocupações através das camadas (ex: UI com lógica de negócio)
- ❌ Não ignore contratos estabelecidos "só desta vez"

## Exemplo Prático

```
Usuário: "Preciso adicionar uma página de portfólio. Onde devo criar?"

IA: [Usa guia-arquitetura-projeto]
- Verifica que src/pages/ é o local correto
- Cria src/pages/portfolio.astro seguindo convenção kebab-case
- Importa Layout.astro do src/layouts/
- Adiciona componentes reutilizáveis de src/components/
- Atualiza documentação se necessário
```

## Checklist de Revisão

- [ ] Cada pasta tem responsabilidade clara definida?
- [ ] Seções deve/pode/não-deve completas?
- [ ] Fluxos principais documentados com diagramas?
- [ ] Convenções de nomenclatura estabelecidas?
- [ ] Anti-padrões identificados?
- [ ] Visão geral de arquitetura corresponde à implementação real?
- [ ] Validação de build incluída?
- [ ] Documentação pode ser usada para onboarding de novos devs?
