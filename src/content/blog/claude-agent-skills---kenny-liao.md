---
title: "Habilidades de Agentes Claude - Kenny Liao"
pubDate: 2025-12-28
---

Claude Agent Skills - Kenny Liao

[!compass] IA » Claude » Agent Skills



[!info]+ Detalhes do Artigo
Ler: Claude Agent Skills
Fonte: Note.sx (Nota pessoal compartilhada)
Autor: Kenny Liao
Tipo: Análise comparativa e tutorial prático


[!abstract]+ Materiais Complementares
Artigos Relacionados

Equipping Agents for the Real World with Agent Skills - Blog de engenharia Anthropic
Introducing Agent Skills - Anúncio oficial
Agent Skills - Overview - Documentação técnica

Repositórios

Anthropic Skills Repo - Skills oficiais
Awesome Claude Skills - Skills da comunidade
Skills Cookbook - Exemplos de código



[!tip]- Léxico

Progressive Disclosure: Padrão de design onde apenas metadados são carregados inicialmente, contexto adicional é lido conforme necessário
SKILL.md: Arquivo obrigatório com instruções da skill e frontmatter YAML
skill-creator: Skill built-in do Claude para criar novas skills interativamente
Subagents: Agentes secundários invocados via Task tool para tarefas específicas



[!question]- Pontos para Aprofundar

Quando usar Skills vs MCPs?

Skills: contexto local, simples de implementar, progressive disclosure
MCPs: acesso externo, APIs, infraestrutura compartilhada


Como skills podem alavancar outras skills?

Compounding abilities - ex: financial-modeling usa excel skill





[!robot]- Sugestões Complementares

Exercícios Práticos:

Criar thumbnail skill: Seguir exemplo do Kenny para Nanobanana
Migrar slash command: Converter um slash command existente em skill


Ferramentas Úteis:

skill-creator - Skill built-in para gerar novas skills
Nanobanana - Modelo de geração de imagens para thumbnails





Resumo
Kenny Liao apresenta uma análise profunda e comparativa de Agent Skills, explicando como se diferenciam de Projects, Slash Commands, MCPs e Subagents. O insight central é o padrão de progressive disclosure - apenas metadados são carregados no system prompt, o resto é lido dinamicamente. Inclui exemplo prático real de uma skill de geração de thumbnails para YouTube usando Nanobanana.
Definição central:

Agent Skills = Pastas com instruções e contexto que agentes descobrem e carregam dinamicamente
Diferencial = Progressive disclosure + simplicidade de implementação + compounding abilities


Principais Conceitos
Conceito 1: Anatomia de uma Skill

Skills são apenas uma pasta com um arquivo de instrução SKILL.md e contexto adicional opcional.

Estrutura mínima e expandida:
my-skill/
├── SKILL.md              # Obrigatório
├── scripts/
│   └── validate.py       # Scripts executáveis
├── additional_context.md # Contexto adicional
└── data.csv              # Dados de referência
O SKILL.md requer frontmatter YAML mínimo:
---
name: Your Skill Name
description: Brief description of what this Skill does and when to use it
---

# Your Skill Name

## Instructions
Provide clear, step-by-step guidance for Claude.

If you want to do X, then you *MUST* also read:
`/path/to/additional_context.md`

## Examples
Show concrete examples of using this Skill.
Conceito 2: Progressive Disclosure
O padrão de design core do valor de Agent Skills:

























FaseO que carregaQuandoInicialApenas name + descriptionSystem prompt startupAtivaçãoSKILL.md completoQuando Claude decide usarExpansãoArquivos referenciadosConforme apontados no SKILL.md
Benefícios:

Token efficient - mínimo contexto inicial
Quality context - apenas tokens necessários carregados
Potencialmente infinito - Claude pode continuar lendo arquivos encadeados

Conceito 3: Skills vs Alternativas
Kenny compara Skills com outras abordagens:















































AspectoSkillsSlash CommandsMCPsSubagentsQuem decide usarAgenteUsuárioAgenteAgente (via Task)ContextoProgressiveFixoSchema completoSeparadoExecuçãoLocal, mesmo processoLocalExterna, servidorProcesso separadoComplexidadeBaixa (apenas .md)BaixaAlta (infraestrutura)MédiaHuman-in-the-loopSimSimSimNão direto

Detalhamento
Seção 1: Skills vs Slash Commands
Similaridade: Ambos são prompts pré-definidos otimizados para um objetivo.
Diferença chave:

Slash commands: usuário decide quando usar e fornece input args
Skills: agente decide quando usar E quais input args


[!example] Caso Prático - Thumbnail
Kenny tinha um slash command para criar thumbnails com Nanobanana. Precisava manualmente reunir contexto (título, descrição, imagens de referência).
Com skill, o agente pessoal entende o projeto YouTube, vê qual é o próximo vídeo, usa MCPs para analisar analytics, e forma seu próprio contexto. Remove Kenny do processo.

Seção 2: Skills vs MCPs
Similaridades:

Tools, prompts e contexto empacotados juntos
MCPs podem fazer tudo que skills fazem

Diferenças críticas:

























SkillsMCPsSelf-contained, rodam localmenteRodam externamente em servidorApenas markdown + scriptsRequer infraestrutura MCPProgressive disclosureSchema completo no system promptSimples de implementar/manter/debugarMais complexo

[!warning] Quando usar MCPs ainda

Você não pode colocar o Github MCP inteiro numa skill
Remote MCP servers têm benefício de um único maintainer
Integrações complexas com APIs externas


Seção 3: Skills vs Subagents
Subagents são como tools - Claude invoca via Task tool com prompt de input.
Limitações de subagents:

Não são o agente principal - você não interage diretamente
Sem steering direto - não há human-in-the-loop
Contexto separado - precisa passar contexto relevante explicitamente


[!quote] Regra de Ouro do Kenny
“Se posso resolver com um agente, prefiro isso. Só uso subagents ou multi-agents onde absolutamente faz sentido, como em deep research.”


Técnicas e Métodos
Técnica 1: Estrutura de Skill para YouTube Thumbnails
Conceito: Exemplo real de skill de produção do Kenny.
Estrutura:
youtube-thumbnail/
├── SKILL.md
├── Design Requirements.md
├── Prompting Guidelines.md
├── Thumbnail Templates.md
└── (referências a diretórios locais)
SKILL.md highlights:
---
name: youtube-thumbnail
description: "Skill for creating and editing Youtube thumbnails optimized for conversion."
---
Seções obrigatórias no SKILL.md:

File Structure - lista todos os arquivos e paths relevantes
REQUIRED READING - documentos mandatórios antes de agir
Design Requirements - regras para high CTR thumbnails
Prompting Guidelines - best practices para Nanobanana


[!tip] Quick Win
Use linguagem forte como ”🚨 REQUIRED READING 🚨” e “ABSOLUTELY CRITICAL” para garantir que Claude leia contexto importante.

Técnica 2: Otimizar Skills com Feedback
Conceito: Iterar skills como qualquer código “vibe-coded”.
Implementação:

Skill falha em uso real
Diga ao agente: “uso da skill falhou porque X”
Mostre o failure mode se possível
Peça para revisar a skill completa e identificar ponto de falha
Solicite sugestões de melhoria

Técnica 3: Compounding Abilities
Conceito: Skills podem alavancar outras skills.
Exemplo:

financial-modeling skill usa a skill excel de nível mais baixo
Contexto mínimo porque ambas usam progressive disclosure
Capacidades compostas sem sobrecarga de contexto


Mapa de Conceitos
O diagrama ilustra a comparação entre Skills e alternativas, mostrando o diferencial de progressive disclosure e os benefícios resultantes.
flowchart TD
    A[Agent Skills] --> B[Progressive Disclosure]
    A --> C[Comparações]
    A --> D[Benefícios]

    B --> B1[L1: Metadata only]
    B --> B2[L2: SKILL.md on trigger]
    B --> B3[L3: Referenced files]

    C --> C1[vs Slash Commands]
    C --> C2[vs MCPs]
    C --> C3[vs Subagents]
    C --> C4[vs Projects]

    C1 --> E[Agente decide vs Usuário decide]
    C2 --> F[Local vs Servidor externo]
    C3 --> G[Human-in-loop vs Sem controle direto]

    D --> D1[Reduced Context Load]
    D --> D2[Compounding Abilities]
    D --> D3[Simplicity]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0
    style D fill:#f3e5f5

Insights &#x26; Aprendizados
O que funcionou bem (casos documentados):

Thumbnail skill do Kenny: Removeu ele do processo de criação de thumbnails
Progressive disclosure: Permite muitas mais skills sem penalidade de tokens
Compounding: financial-modeling + excel skill funcionam juntas

O que posso adaptar:

Migrar slash commands para skills: Converter workflows fixos em skills autônomas
Linguagem enfática: Usar “REQUIRED READING” e “ABSOLUTELY CRITICAL”
Estrutura File Structure: Listar todos os arquivos relevantes no início do SKILL.md

Ideias para aplicar:

Skill de notas Obsidian: Criar skill que gera notas seguindo meus templates
Skill de code review: Empacotar meus critérios de qualidade
Iterar com feedback: Usar falhas para melhorar skills progressivamente


Recursos Adicionais
Documentação Oficial:

Skills News Announcement - Anúncio geral
Skills Engineering Blog Post - Deep dive técnico
Developer Docs - Agent Skills - Documentação geral
Claude Code - Agent Skills - Uso com Claude Code

Repositórios:

Anthropic Skills Repo - Skills default do Claude
Github Skills Cookbook - Exemplos de código
Awesome Claude Skills - Skills da comunidade

FAQ e Análises:

Anthropic Support - What are skills?
Anthropic Support - Using Skills in Claude
Simon Willison - Claude Skills - Análise e opinião


Propriedades da nota

[!note]- Propriedades Gerais do Obsidian

Identificação














CampoValorTítuloINPUT[text:titulo]

Conexões


































CampoValorPaiINPUT[suggester(optionQuery("")):pai]ColeçãoINPUT[inlineSelect(option(financeiro, Financeiro), option(growth, Growth), option(ia, IA), option(lideranca, Liderança), option(marketing, Marketing), option(negocios, Negócios), option(produtividade, Produtividade), option(pkm, PKM), option(saas, SaaS), option(tecnologia, Tecnologia), option(vendas, Vendas)):colecao]ÁreaINPUT[suggester(optionQuery("Esforços/Áreas")):area]ProjetoINPUT[suggester(optionQuery("#projeto")):projeto]AutorINPUT[suggester(optionQuery("Atlas/Pessoas")):pessoa]RelacionadoINPUT[inlineListSuggester(optionQuery(""), useLinks(true)):relacionado]

Classificação






















CampoValorTipoINPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]TagsINPUT[inlineList:tags]StatusINPUT[inlineSelect(option(nao_iniciado, ⬜ Não Iniciado), option(em_andamento, 🔄 Em Andamento), option(concluido, ✅ Concluído), option(pausado, ⏸️ Pausado), option(cancelado, ❌ Cancelado)):status]


[!note]- Propriedades do Artigo

























CampoValorURLINPUT[text(placeholder(https://...)):url_artigo]FonteINPUT[text:fonte]AutorINPUT[text:autor]Data PublicaçãoINPUT[date:data_publicacao]