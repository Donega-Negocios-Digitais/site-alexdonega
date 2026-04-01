# Ralph Wiggum Marketer - Guia Completo

> **Plugin do Claude Code** que cria um copywriter autônomo de IA para marketing de conteúdo SaaS.
> Usa o padrão [Ralph Wiggum](https://ghuntley.com/ralph/) — um loop iterativo de IA que produz conteúdo enquanto você dorme.

- **Repositório:** https://github.com/muratcankoylan/ralph-wiggum-marketer
- **Estrelas:** 708+ | **Forks:** 77+
- **Licença:** MIT
- **Linguagem:** JavaScript (92%) + Shell (8%)

---

## Sumário

1. [Visão Geral](#1-visao-geral)
2. [Pré-requisitos](#2-pre-requisitos)
3. [Instalação](#3-instalacao)
4. [Estrutura do Projeto](#4-estrutura-do-projeto)
5. [Comandos Disponíveis](#5-comandos-disponiveis)
6. [Quick Start (Início Rápido)](#6-quick-start)
7. [Como Funciona - O Loop Ralph](#7-como-funciona---o-loop-ralph)
8. [Arquitetura Multi-Agente](#8-arquitetura-multi-agente)
9. [Banco de Dados SQLite](#9-banco-de-dados-sqlite)
10. [Tarefas Padrão (PRD)](#10-tarefas-padrao-prd)
11. [Personalização](#11-personalizacao)
12. [Fluxo Completo de Uso](#12-fluxo-completo-de-uso)
13. [Exemplos Práticos](#13-exemplos-praticos)
14. [Filosofia Ralph](#14-filosofia-ralph)
15. [Troubleshooting](#15-troubleshooting)
16. [Referências](#16-referencias)

---

## 1. Visão Geral

O **Ralph Wiggum Marketer** é um plugin que transforma o Claude Code em um **copywriter autônomo**. Ele não escreve apenas um texto — ele opera um **pipeline completo de marketing de conteúdo**:

| Capacidade | Descrição |
|---|---|
| **Pesquisa de tendências** | Identifica tópicos relevantes para seu mercado |
| **Planejamento de conteúdo** | Cria planos editoriais com palavras-chave e briefs |
| **Escrita de drafts** | Gera blogs, case studies, posts sociais, newsletters |
| **Revisão iterativa** | Revisa e melhora conteúdo automaticamente |
| **Publicação** | Publica o conteúdo final pronto para uso |
| **Métricas** | Loga métricas e aprendizados de cada ciclo |

### O que ele produz

- Blog posts otimizados para SEO
- Case studies com data points
- Posts para redes sociais
- Newsletters
- Conteúdo de thought leadership
- Comunicações de lançamento de produto

---

## 2. Pré-requisitos

Antes de instalar, você precisa de:

| Requisito | Versão/Detalhes |
|---|---|
| **Claude Code** | Instalado e funcionando (CLI da Anthropic) |
| **Node.js** | Para scripts de banco de dados |
| **Git** | Para controle de versão e memória do loop |
| **SQLite** | Banco de dados local (vem com Node) |
| **Claude Pro/Max** | Recomendado para uso intensivo de API |

### Verificação

```bash
# Verifique se Claude Code está instalado
claude --version

# Verifique Node.js
node --version

# Verifique Git
git --version
```

---

## 3. Instalação

### Opção 1: Marketplace (Recomendado)

A forma mais fácil — instala direto do repositório oficial.

```bash
# 1. Adicione o repositório como marketplace
/plugin marketplace add muratcankoylan/ralph-wiggum-marketer

# 2. Instale o plugin
/plugin install ralph-wiggum-marketer@muratcankoylan-ralph-wiggum-marketer
```

### Opção 2: Plugin Manager Interativo

```bash
# Abra o gerenciador de plugins
/plugin

# Navegue, pesquise e instale pela interface interativa
```

### Opção 3: Desenvolvimento Local

Ideal se você quer modificar ou estudar o código-fonte.

```bash
# 1. Clone o repositório
git clone https://github.com/muratcankoylan/ralph-wiggum-marketer.git

# 2. Navegue até o diretório
cd ralph-wiggum-marketer

# 3. Instale dependências
npm install

# 4. Execute Claude Code com o plugin
claude --plugin-dir ./ralph-wiggum-marketer
```

### Verificação da Instalação

Após instalar, você deve ter acesso aos comandos `/ralph-*`:

```bash
# Digite no Claude Code para verificar
/ralph-status
```

Se o comando for reconhecido, a instalação foi bem-sucedida.

---

## 4. Estrutura do Projeto

```
ralph-wiggum-marketer/
├── .claude-plugin/
│   └── plugin.json              # Manifesto do plugin (metadados)
│
├── commands/
│   ├── ralph-marketer.md        # Comando principal - inicia o loop
│   ├── ralph-init.md            # Comando de inicialização do projeto
│   ├── ralph-status.md          # Comando de verificação de status
│   └── ralph-cancel.md          # Comando para cancelar o loop
│
├── skills/
│   └── copywriter/
│       └── SKILL.md             # Skill do copywriter (instruções da IA)
│
├── hooks/
│   ├── hooks.json               # Configuração dos hooks
│   └── stop-hook.sh             # Hook de continuação/parada do loop
│
├── scripts/
│   └── src/
│       └── db/
│           └── seed.js          # Script de seed do banco de dados
│
├── templates/
│   ├── prd.json                 # Template de tarefas (PRD)
│   ├── progress.txt             # Template de log de progresso
│   ├── prompt.md                # Template de instruções do agente
│   └── package.json             # Template do package.json do projeto
│
├── .gitignore                   # Arquivos ignorados pelo git
├── AGENTS.md                    # Documentação dos agentes
├── README.md                    # Documentação principal
├── package.json                 # Dependências do projeto
└── package-lock.json            # Lock de dependências
```

### Explicação dos Diretórios

| Diretório | Função |
|---|---|
| `.claude-plugin/` | Metadados que o Claude Code lê para registrar o plugin |
| `commands/` | Definições dos 4 comandos slash (`/ralph-*`) |
| `skills/` | Skill de copywriter — define como a IA escreve |
| `hooks/` | Scripts que rodam entre iterações (controle do loop) |
| `scripts/src/` | Scripts utilitários (banco de dados, seed) |
| `templates/` | Modelos usados ao inicializar um projeto |

---

## 5. Comandos Disponíveis

O plugin registra **4 comandos slash** no Claude Code:

### `/ralph-init`

**Inicializa um novo projeto de conteúdo** no diretório atual.

- Cria a estrutura de arquivos necessária
- Copia templates (`prd.json`, `progress.txt`, `prompt.md`)
- Inicializa o banco de dados SQLite com tabelas
- Popula o banco com dados de seed

```bash
/ralph-init
```

**O que é criado após `/ralph-init`:**

```
seu-projeto/
├── scripts/
│   └── ralph/
│       ├── prd.json         # Lista de tarefas (stories)
│       ├── progress.txt     # Log de aprendizados
│       └── prompt.md        # Instruções do agente
├── content/
│   ├── blogs/               # Blog posts publicados
│   ├── case-studies/        # Case studies
│   ├── social/              # Posts para redes sociais
│   └── newsletters/         # Newsletters
└── content.db               # Banco SQLite local
```

---

### `/ralph-marketer`

**Inicia o loop autônomo de copywriting.**

- Lê o PRD para encontrar tarefas pendentes
- Executa cada tarefa sequencialmente
- Escreve, revisa e publica conteúdo
- Continua até todas as tarefas estarem completas

```bash
/ralph-marketer
```

**Comportamento:**
- O loop roda indefinidamente até todas as stories terem `passes: true`
- Cada iteração é um contexto novo do Claude (sem memória entre iterações)
- Memória persiste via: `progress.txt`, `prd.json` e commits no git
- O hook `stop-hook.sh` controla quando o loop deve parar

---

### `/ralph-status`

**Verifica o estado atual do pipeline de conteúdo.**

- Mostra quais tarefas foram concluídas
- Mostra o que está em progresso
- Mostra o que está pendente
- Exibe aprendizados acumulados

```bash
/ralph-status
```

**Exemplo de saída:**

```
╔══════════════════════════════════════════════╗
║           RALPH CONTENT PIPELINE            ║
╠══════════════════════════════════════════════╣
║  SETUP-001  Inicializar DB        [DONE]    ║
║  PLAN-001   Planejar blog          [DONE]    ║
║  WRITE-001  Escrever draft         [IN PROG] ║
║  WRITE-002  Escrever blog data     [TODO]    ║
║  REVIEW-001 Revisar draft          [TODO]    ║
║  ...                                        ║
╠══════════════════════════════════════════════╣
║  Progresso: 2/12 tasks completas            ║
║  Iterações: 5                               ║
╚══════════════════════════════════════════════╝
```

---

### `/ralph-cancel`

**Cancela o loop ativo.**

- Para a execução do loop autônomo
- Preserva todo o progresso já feito
- Tarefas concluídas permanecem marcadas

```bash
/ralph-cancel
```

---

## 6. Quick Start

### Passo a passo em 3 minutos

```bash
# 1. Instale o plugin (Opção Marketplace)
/plugin marketplace add muratcankoylan/ralph-wiggum-marketer
/plugin install ralph-wiggum-marketer@muratcankoylan-ralph-wiggum-marketer

# 2. Crie um diretório para seu projeto
mkdir meu-marketing-content
cd meu-marketing-content

# 3. Inicialize o projeto
/ralph-init

# 4. Verifique se tudo está pronto
/ralph-status

# 5. (Opcional) Personalize o PRD antes de iniciar
# Edite scripts/ralph/prd.json com suas tarefas

# 6. Inicie o loop autônomo
/ralph-marketer

# 7. Monitore o progresso quando quiser
/ralph-status

# 8. Cancele se necessário
/ralph-cancel
```

---

## 7. Como Funciona - O Loop Ralph

### O conceito

O "Ralph" é um **loop Bash** que executa o Claude Code repetidamente. A cada iteração:

```
┌─────────────────────────────────────────────────────────────┐
│                    ITERAÇÃO DO RALPH                         │
│                                                              │
│  1. LER PRD ──────→ scripts/ralph/prd.json                  │
│  2. LER PROGRESS ─→ scripts/ralph/progress.txt               │
│  3. ESCOLHER TASK → Maior prioridade com passes: false       │
│  4. EXECUTAR ─────→ Seguir acceptance criteria               │
│  5. VERIFICAR ────→ Testes de qualidade                      │
│  6. COMMIT ───────→ Salvar progresso no git                  │
│  7. ATUALIZAR ────→ Marcar task done + log aprendizados      │
│  8. REPETIR ──────→ Próxima tarefa                           │
│                                                              │
│  (cada iteração = contexto NOVO do Claude)                   │
│  (memória = apenas arquivos + git)                           │
└─────────────────────────────────────────────────────────────┘
```

### Detalhe por etapa

| Etapa | O que acontece | Arquivo envolvido |
|---|---|---|
| **1. Ler PRD** | Claude lê a lista de stories/tarefas | `scripts/ralph/prd.json` |
| **2. Ler Progress** | Claude lê aprendizados das iterações anteriores | `scripts/ralph/progress.txt` |
| **3. Escolher Task** | Encontra a story com maior prioridade e `passes: false` | `scripts/ralph/prd.json` |
| **4. Executar** | Claude executa a tarefa seguindo os critérios de aceitação | Vários (gera conteúdo) |
| **5. Verificar** | Claude verifica se os critérios foram atendidos | Testes internos |
| **6. Commit** | Salva tudo no git para persistência | `.git/` |
| **7. Atualizar** | Muda `passes` para `true`, escreve no progress | `prd.json` + `progress.txt` |
| **8. Repetir** | O hook reinicia o Claude com novo contexto | `hooks/stop-hook.sh` |

### Por que funciona

- **Sem dependência de contexto:** cada iteração é independente
- **Memória persistente:** arquivos + git substituem a memória da IA
- **Feedback loop:** `progress.txt` acumula aprendizados
- **Determinístico:** o PRD define exatamente o que precisa ser feito

---

## 8. Arquitetura Multi-Agente

O sistema usa **3 agentes de entrada** + **1 agente principal**:

```
┌──────────────────────────────────────────────────────────────────┐
│                     ECOSISTEMA MULTI-AGENTE                      │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐             │
│  │ TrendScout  │   │  Research   │   │  Product/   │             │
│  │   Agent     │   │   Agent     │   │  Marketing  │             │
│  │             │   │             │   │   Agent     │             │
│  │ • Tendências│   │ • Pesquisas │   │ • Comunic.  │             │
│  │ • Tópicos   │   │ • Data pts  │   │ • Features  │             │
│  └──────┬──────┘   └──────┬──────┘   └──────┬──────┘             │
│         │                 │                 │                    │
│         ▼                 ▼                 ▼                    │
│  ┌────────────────────────────────────────────────────┐          │
│  │              BANCO SQLITE                           │          │
│  │  • trends     • research     • communications      │          │
│  └────────────────────────┬───────────────────────────┘          │
│                           │                                      │
│                           ▼                                      │
│  ┌────────────────────────────────────────────────────┐          │
│  │           RALPH THE COPYWRITER                     │          │
│  │                                                     │         │
│  │   Lê inputs → Planeja conteúdo → Escreve drafts   │          │
│  │   → Revisa & itera → Publica                       │          │
│  │                                                     │         │
│  │   Memória: git commits + progress.txt + prd.json    │          │
│  └────────────────────────────────────────────────────┘          │
│                           │                                      │
│                           ▼                                      │
│              ┌─────────────────────────┐                         │
│              │   CONTEÚDO PUBLICADO     │                         │
│              │                         │                         │
│              │  • Blog posts           │                         │
│              │  • Case studies         │                         │
│              │  • Posts sociais        │                         │
│              │  • Newsletters          │                         │
│              └─────────────────────────┘                         │
└──────────────────────────────────────────────────────────────────┘
```

### Papel de cada agente

| Agente | Função | Tabela no SQLite |
|---|---|---|
| **TrendScout** | Identifica tendências de mercado e tópicos quentes | `trends` |
| **Research Agent** | Faz pesquisa aprofundada com dados e fontes | `research` |
| **Product/Marketing** | Fornece informações do produto e mensagens-chave | `communications` |
| **Ralph (Copywriter)** | Consome os dados acima e produz conteúdo | `content_plan`, `drafts`, `published` |

---

## 9. Banco de Dados SQLite

### Tabelas de Input (de outros agentes)

#### `trends` — Tendências de mercado

| Coluna | Tipo | Descrição |
|---|---|---|
| `topic` | TEXT | Tópico da tendência |
| `description` | TEXT | Descrição detalhada |
| `source` | TEXT | Fonte da informação |
| `relevance_score` | INTEGER | Score de relevância (0-100) |
| `status` | TEXT | Status (pending, processed, used) |

#### `research` — Pesquisas realizadas

| Coluna | Tipo | Descrição |
|---|---|---|
| `title` | TEXT | Título da pesquisa |
| `summary` | TEXT | Resumo |
| `key_findings` | TEXT | Principais descobertas |
| `data_points` | TEXT | Pontos de dados (JSON) |
| `category` | TEXT | Categoria |
| `status` | TEXT | Status |

#### `communications` — Comunicações do produto

| Coluna | Tipo | Descrição |
|---|---|---|
| `type` | TEXT | Tipo (product_update, feature, etc.) |
| `title` | TEXT | Título |
| `details` | TEXT | Detalhes |
| `key_messages` | TEXT | Mensagens-chave (JSON) |
| `target_audience` | TEXT | Público-alvo |
| `priority` | INTEGER | Prioridade |
| `status` | TEXT | Status |

### Tabelas de Workspace do Ralph

#### `content_plan` — Planejamento de conteúdo

| Coluna | Tipo | Descrição |
|---|---|---|
| `content_type` | TEXT | Tipo (blog, case_study, social, newsletter) |
| `title` | TEXT | Título planejado |
| `brief` | TEXT | Brief do conteúdo |
| `target_keywords` | TEXT | Palavras-chave alvo |
| `status` | TEXT | Status (planned, writing, review, published) |

#### `drafts` — Rascunhos em progresso

| Coluna | Tipo | Descrição |
|---|---|---|
| `plan_id` | INTEGER | ID do plano associado |
| `version` | INTEGER | Versão do draft |
| `content` | TEXT | Conteúdo do draft |
| `word_count` | INTEGER | Contagem de palavras |
| `feedback` | TEXT | Feedback para revisão |

#### `published` — Conteúdo final publicado

| Coluna | Tipo | Descrição |
|---|---|---|
| `plan_id` | INTEGER | ID do plano associado |
| `final_content` | TEXT | Conteúdo final |
| `meta_description` | TEXT | Meta description para SEO |

#### `agent_log` — Log de atividades

| Coluna | Tipo | Descrição |
|---|---|---|
| `action` | TEXT | Ação realizada |
| `details` | TEXT | Detalhes da ação |
| `created_at` | TIMESTAMP | Data/hora |

---

## 10. Tarefas Padrão (PRD)

O arquivo `scripts/ralph/prd.json` contém **12 stories padrão**:

| ID | Título | Tipo |
|---|---|---|
| `SETUP-001` | Initialize database | Setup |
| `PLAN-001` | Plan product launch blog | Planejamento |
| `WRITE-001` | Write launch blog draft | Escrita |
| `PLAN-002` | Plan thought leadership blog | Planejamento |
| `WRITE-002` | Write data-driven blog | Escrita |
| `REVIEW-001` | Review and improve draft | Revisão |
| `PUBLISH-001` | Publish launch blog | Publicação |
| `PLAN-003` | Plan case study | Planejamento |
| `WRITE-003` | Write case study | Escrita |
| `SOCIAL-001` | Create social posts | Social |
| `NEWSLETTER-001` | Draft newsletter | Newsletter |
| `METRICS-001` | Log final metrics | Métricas |

### Formato de uma Story no PRD

```json
{
  "id": "WRITE-001",
  "title": "Write launch blog draft",
  "acceptanceCriteria": [
    "At least 1500 words",
    "Includes 3 data points from research",
    "Has compelling headline and CTA",
    "SEO-optimized with target keywords"
  ],
  "priority": 5,
  "passes": false
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | String | Identificador único da tarefa |
| `title` | String | Título descritivo |
| `acceptanceCriteria` | Array | Lista de critérios que devem ser atendidos |
| `priority` | Number | Prioridade (maior = mais importante) |
| `passes` | Boolean | `false` = pendente, `true` = concluída |

---

## 11. Personalização

### 11.1 Adicionar suas próprias fontes de conteúdo

Edite o arquivo `src/db/seed.js` para incluir dados do seu negócio:

#### Adicionar uma tendência

```javascript
// No seed.js
insertTrend.run(
  'IA Generativa no Marketing B2B',    // topic
  'Tendência crescente de uso de IA para criação de conteúdo B2B, com aumento de 340% em adoção desde 2024', // description
  'Gartner Research 2025',             // source
  92                                    // relevance_score (0-100)
);
```

#### Adicionar uma pesquisa

```javascript
// No seed.js - formato dos data_points como JSON
insertResearch.run(
  'Impacto do Content Marketing no SaaS',     // title
  'Pesquisa sobre ROI de content marketing em empresas SaaS', // summary
  'Empresas com blog consistente geram 67% mais leads',      // key_findings
  JSON.stringify([                            // data_points
    '67% mais leads com blog ativo',
    '3x mais tráfego orgânico',
    'Custo 62% menor que paid ads'
  ]),
  'content-marketing',                        // category
  'pending'                                   // status
);
```

#### Adicionar uma comunicação do produto

```javascript
// No seed.js
insertComm.run(
  'product_update',                           // type
  'Lançamento do Feature X',                  // title
  'Nova funcionalidade que permite automação completa de workflows de aprovação', // details
  JSON.stringify([                            // key_messages
    'Reduza 80% do tempo de aprovação',
    'Integração nativa com Slack e Teams',
    'Setup em menos de 5 minutos'
  ]),
  'Gerentes de operações e CTOs de PMEs',    // target_audience
  1                                            // priority (1 = mais alta)
);
```

### 11.2 Adicionar suas próprias tarefas

Edite `scripts/ralph/prd.json`:

```json
{
  "stories": [
    {
      "id": "CUSTOM-001",
      "title": "Escrever ebook sobre transformação digital",
      "acceptanceCriteria": [
        "Mínimo de 5000 palavras",
        "5 capítulos com introdução e conclusão",
        "Inclui estudos de caso reais",
        "Templates práticos para download",
        "CTA para trial do produto"
      ],
      "priority": 8,
      "passes": false
    },
    {
      "id": "CUSTOM-002",
      "title": "Criar série de 10 emails de nurturing",
      "acceptanceCriteria": [
        "10 emails com sequência lógica",
        "Cada email com assunto A/B",
        "Personalização por segmento",
        "CTAs claros em cada email"
      ],
      "priority": 7,
      "passes": false
    },
    {
      "id": "CUSTOM-003",
      "title": "Escrever landing page para novo produto",
      "acceptanceCriteria": [
        "Headline com proposta de valor clara",
        "Mínimo 3 seções de benefícios",
        "Prova social com depoimentos",
        "FAQ com 8+ perguntas",
        "Formulário de captura otimizado"
      ],
      "priority": 9,
      "passes": false
    }
  ]
}
```

### 11.3 Personalizar o prompt do agente

Edite `scripts/ralph/prompt.md` para ajustar o tom, estilo e instruções:

```markdown
# Instruções do Copywriter Ralph

## Tom de Voz
- Profissional mas acessível
- Evite jargão técnico excessivo
- Use analogias do dia a dia

## Público-Alvo
- CTOs e líderes de tecnologia
- Empresas SaaS com 50-500 funcionários
- Mercado brasileiro e latino-americano

## Diretrizes de Conteúdo
- Sempre inclua dados estatísticos
- Cite fontes quando possível
- Use formatação scannable (listas, headings, negrito)
- Limite parágrafos a 3-4 frases
```

### 11.4 Ajustar o hook de parada

Edite `hooks/stop-hook.sh` para customizar quando o loop para:

```bash
#!/bin/bash
# Hook executado entre iterações
# Return 0 = continuar loop
# Return 1 = parar loop

# Verifica se todas as tasks estão completas
completed=$(jq '[.stories[] | select(.passes == true)] | length' scripts/ralph/prd.json)
total=$(jq '.stories | length' scripts/ralph/prd.json)

if [ "$completed" -eq "$total" ]; then
  echo "✅ Todas as tarefas completas! Parando loop."
  exit 1  # Para o loop
fi

# Limite máximo de iterações (safety)
iteration=$(cat scripts/ralph/iteration_count.txt 2>/dev/null || echo 0)
if [ "$iteration" -gt 50 ]; then
  echo "⚠️ Limite de 50 iterações atingido. Parando."
  exit 1
fi

echo "Continuando... ($completed/$total tarefas)"
exit 0  # Continua o loop
```

---

## 12. Fluxo Completo de Uso

### Cenário: Lançar conteúdo para um produto SaaS

#### Fase 1: Preparação

```bash
# 1. Crie o projeto
mkdir meu-saas-content && cd meu-saas-content
git init

# 2. Inicialize com Ralph
/ralph-init

# 3. Personalize o seed com dados do seu produto
# Edite scripts/src/db/seed.js com suas tendências, pesquisas e comunicações

# 4. Re-rode o seed para atualizar o banco
node scripts/src/db/seed.js

# 5. Personalize as tarefas no PRD
# Edite scripts/ralph/prd.json
```

#### Fase 2: Configuração do PRD

Defina exatamente o que você quer que Ralph produza:

```json
{
  "stories": [
    {
      "id": "PLAN-001",
      "title": "Planejar calendário editorial mensal",
      "acceptanceCriteria": [
        "12 topics para blog",
        "4 topics para newsletter",
        "20 topics para social media",
        "Cada topic com target keywords",
        "Cada topic com brief de 2-3 frases"
      ],
      "priority": 10,
      "passes": false
    },
    {
      "id": "WRITE-001",
      "title": "Escrever blog post: 'Como automatizar seu marketing com IA'",
      "acceptanceCriteria": [
        "2000+ palavras",
        "3+ estatísticas com fontes",
        "SEO otimizado para 'automação marketing IA'",
        "Inclui CTA para demo do produto",
        "Meta description de 155 caracteres"
      ],
      "priority": 9,
      "passes": false
    },
    {
      "id": "WRITE-002",
      "title": "Criar case study: 'Empresa X aumentou leads em 300%'",
      "acceptanceCriteria": [
        "1500+ palavras",
        "Estrutura: desafio → solução → resultados",
        "Dados quantitativos reais",
        "Quotes do cliente",
        "CTA para case study completo"
      ],
      "priority": 8,
      "passes": false
    },
    {
      "id": "SOCIAL-001",
      "title": "Criar 10 posts para LinkedIn",
      "acceptanceCriteria": [
        "10 posts com formato diferente (lista, story, pergunta, etc.)",
        "Cada post com 1300 caracteres ou menos",
        "3-5 hashtags relevantes por post",
        "CTA em cada post"
      ],
      "priority": 7,
      "passes": false
    },
    {
      "id": "NEWSLETTER-001",
      "title": "Escrever newsletter semanal",
      "acceptanceCriteria": [
        "800-1200 palavras",
        "1 dica principal + 3 recursos",
        "Tone conversacional",
        "CTA claro no final"
      ],
      "priority": 6,
      "passes": false
    }
  ]
}
```

#### Fase 3: Execução

```bash
# Inicie o loop e deixe rodando
/ralph-marketer

# O Ralph vai:
# 1. Planejar conteúdo baseado nas tendências e research
# 2. Escrever cada blog post seguindo os critérios
# 3. Revisar e iterar até atingir qualidade
# 4. Publicar nos diretórios correspondentes
# 5. Criar posts sociais e newsletters
# 6. Logar métricas
```

#### Fase 4: Monitoramento

```bash
# Verifique progresso quando quiser
/ralph-status

# Ou verifique manualmente
cat scripts/ralph/progress.txt

# Veja os commits (cada iteração = 1 commit)
git log --oneline

# Veja o conteúdo produzido
ls content/blogs/
ls content/social/
ls content/newsletters/
```

#### Fase 5: Cancelar (se necessário)

```bash
/ralph-cancel
```

---

## 13. Exemplos Práticos

### Exemplo 1: Produzir conteúdo para um blog SaaS

```bash
# Inicialize
/ralph-init

# Defina no PRD:
# - 5 blog posts sobre seu nicho
# - Cada um com 1500+ palavras
# - SEO otimizado
# - Com CTAs

# Execute
/ralph-marketer

# Resultado esperado:
# content/blogs/
#   ├── como-automatizar-workflows.md
#   ├── guia-completo-onboarding-saas.md
#   ├── metricas-que-importam-saas.md
#   ├── reducao-churn-estrategias.md
#   └── api-first-approach-beneficios.md
```

### Exemplo 2: Criar campanha de lançamento

```bash
# Inicialize
/ralph-init

# No seed.js, adicione dados do lançamento:
insertComm.run(
  'product_launch',
  'Nova Versão 3.0 com IA Integrada',
  'Nova versão com IA para automação completa',
  JSON.stringify(['IA nativa', '50% mais rápido', 'Zero config']),
  'CTOs e gerentes de produto',
  1
);

# No PRD, defina:
# - Blog post de anúncio
# - 5 posts para LinkedIn
# - 3 tweets thread
# - Email de anúncio para lista
# - FAQ page

# Execute
/ralph-marketer
```

### Exemplo 3: Série de conteúdo educativo

```bash
# Inicialize
/ralph-init

# No PRD, crie uma série:
# WRITE-001: Guia completo - Parte 1 (Introdução)
# WRITE-002: Guia completo - Parte 2 (Conceitos)
# WRITE-003: Guia completo - Parte 3 (Implementação)
# WRITE-004: Guia completo - Parte 4 (Cases)
# WRITE-005: Guia completo - Parte 5 (Ferramentas)
# SOCIAL-001: Posts de promoção para cada parte
# NEWSLETTER-001: Email resumo da série

# Cada parte com acceptance criteria específicos
# Execute
/ralph-marketer
```

### Exemplo 4: Reabastecimento contínuo de conteúdo

```bash
# Ralph funciona como uma máquina de conteúdo contínua
# Semanalmente:

# 1. Adicione novas tendências ao banco
# 2. Atualize o PRD com novas tarefas
# 3. Rode /ralph-marketer
# 4. Revise o conteúdo gerado
# 5. Publique manualmente o que aprovar

# Fluxo semanal automatizado:
# Segunda: /ralph-init (se novo mês)
# Segunda: Adicionar trends + atualizar PRD
# Terça: /ralph-marketer (deixar rodar)
# Quarta: Revisar conteúdo gerado
# Quinta: Ajustar e republicar
```

---

## 14. Filosofia Ralph

### Os 5 Princípios

> "Ralph é um loop Bash. Memória persiste apenas através de git history e text files. Cada iteração é um contexto novo."

#### 1. **Histórias Pequenas**
Cada tarefa DEVE completar em uma única iteração. Se uma tarefa é muito grande, quebre-a em subtarefas.

```
RUIM:
{
  "id": "BIG-001",
  "title": "Escrever todo o blog do zero",
  "acceptanceCriteria": ["50 posts de blog"]
}

BOM:
{
  "id": "WRITE-001",
  "title": "Escrever blog post sobre topic X",
  "acceptanceCriteria": ["1500 palavras", "3 data points", "CTA"]
}
```

#### 2. **Critérios Explícitos**
Sem ambiguidade. Cada critério deve ser verificável objetivamente.

```
RUIM: "O texto deve ser bom"
BOM: "Mínimo 1500 palavras com 3+ estatísticas citadas"
```

#### 3. **Feedback Rápido**
Teste a cada iteração. O Claude verifica se os critérios foram atendidos antes de marcar como concluída.

#### 4. **Aprendizado Composto**
Cada iteração escreve em `progress.txt` o que aprendeu. Iterações futuras leem esse arquivo e melhoram.

#### 5. **Persistência Vence**
O loop continua até terminar. Não desiste. Se uma tarefa falhar, tenta novamente na próxima iteração com o contexto atualizado.

---

## 15. Troubleshooting

### Problema: Plugin não instala

```bash
# Verifique se Claude Code está atualizado
claude --version

# Tente instalação manual
git clone https://github.com/muratcankoylan/ralph-wiggum-marketer.git
claude --plugin-dir ./ralph-wiggum-marketer
```

### Problema: Comandos /ralph-* não são reconhecidos

```bash
# Verifique se o plugin está instalado
/plugin list

# Reinicie o Claude Code
# Saia e entre novamente
```

### Problema: Loop não para

```bash
# Use o comando de cancelamento
/ralph-cancel

# Ou verifique o hook manualmente
cat hooks/stop-hook.sh
```

### Problema: Conteúdo de baixa qualidade

Soluções:

1. **Melhore o seed** — adicione dados mais ricos e específicos
2. **Detalhe os acceptance criteria** — seja mais específico no PRD
3. **Personalize o prompt** — ajuste `scripts/ralph/prompt.md`
4. **Adicione tasks de revisão** — crie stories específicas para revisão
5. **Use `progress.txt`** — adicione diretrizes de estilo manualmente

### Problema: Banco de dados vazio

```bash
# Re-rode o seed
node scripts/src/db/seed.js

# Verifique se o arquivo .db foi criado
ls *.db
```

### Problema: Loop fica preso na mesma tarefa

```bash
# Verifique o progress.txt para entender por que
cat scripts/ralph/progress.txt

# Verifique se os acceptance criteria são realistas
# Tarefas impossíveis fazem o loop ficar preso

# Solução: ajuste os critérios ou cancele a tarefa problemática
# Edite prd.json e mude passes: true para a tarefa travada
```

---

## 16. Referências

### Links Oficiais

| Recurso | URL |
|---|---|
| Repositório | https://github.com/muratcankoylan/ralph-wiggum-marketer |
| Conceito Ralph original | https://ghuntley.com/ralph/ |
| Plugin oficial Ralph | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop |
| Video walkthrough | https://x.com/koylanai/status/2008824728824451098 |

### Créditos

- **Conceito Ralph:** [@GeoffreyHuntley](https://ghuntley.com/ralph/)
- **Plugin oficial:** [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)
- **Video walkthrough:** [@mattpocockuk](https://twitter.com/mattpocockuk)
- **Autor do plugin:** [@koylanai](https://x.com/koylanai)

---

> **Dica final:** O Ralph Wiggum Marketer funciona melhor quando você investe tempo na **preparação** — dados de seed ricos, PRD bem definido e prompts personalizados. Quanto melhor a entrada, melhor o conteúdo gerado.
