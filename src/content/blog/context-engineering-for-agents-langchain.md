---
title: "Context Engineering for Agents"
pubDate: 2025-07-02
---

Context Engineering for Agents

[!compass] IA » Context Engineering » Agentes



[!info]+ Detalhes do Artigo
Ler: Context Engineering
Fonte: LangChain (Blog Oficial)
Autores: LangChain
Publicado: 2 de julho de 2025


[!abstract]+ Materiais Complementares
Artigos Relacionados

Efficient Context Management - JetBrains - Pesquisa complementar sobre estratégias de contexto

Ferramentas Mencionadas

LangGraph - Framework para construção de agentes
LangSmith - Observabilidade e avaliação



[!tip]- Léxico
Context Engineering

Context Window: Janela de contexto do LLM, comparada à RAM de um sistema operacional
Scratchpad: Sistema de anotações que persiste informações durante uma tarefa
Memory: Informações que transcendem sessões individuais

Estratégias de Contexto

Write Context: Técnica de escrever/persistir informações relevantes
Select Context: Recuperação seletiva via embeddings ou grafos
Compress Context: Sumarização e trimming de contexto
Isolate Context: Divisão através de múltiplos agentes

Ferramentas e Tecnologias

LangGraph: Framework para construção de agentes com gestão de estado
LangSmith: Plataforma de observabilidade para LLMs
Claude Code: Implementa auto-compact após 95% da janela



[!question]- Pontos para Aprofundar

Como implementar scratchpads eficientes em agentes custom?

Explorar patterns de LangGraph para persistência


Qual o trade-off real entre multi-agent e custo de tokens?

Benchmarking com diferentes arquiteturas


Como detectar context poisoning em produção?

Estratégias de validação e observabilidade





[!robot]- Sugestões Complementares

Leituras Recomendadas:

“Building LLM Applications” - LangChain docs
Pesquisa JetBrains sobre context management


Ferramentas Úteis:

LangSmith - monitoramento de contexto em produção
Claude Code - exemplo de auto-compact implementation





Resumo
Context engineering é a prática de preencher a janela de contexto com apenas as informações certas em cada etapa. O artigo usa a metáfora do LLM como sistema operacional, onde contexto funciona como RAM limitada. Apresenta quatro estratégias principais (Write, Select, Compress, Isolate) e documenta que a maioria das falhas de agentes hoje são falhas de contexto, não de modelo.
Definição central:

Context Engineering = arte de gerenciar o que entra na janela de contexto do LLM
Problema abordado = agentes falham por contexto mal gerenciado, não por limitações do modelo


Principais Conceitos
Conceito 1: As Quatro Estratégias de Context Engineering






























EstratégiaDescriçãoExemploWritePersistir informações fora da janelaScratchpads, MemoriesSelectRecuperar apenas o relevanteEmbeddings, Knowledge GraphsCompressReduzir tamanho mantendo essênciaSumarização, TrimmingIsolateDividir entre múltiplos agentesMulti-agent systems
Conceito 2: Multi-Agent Superiority

“Many agents with isolated contexts outperformed single-agent, because each subagent context window can be allocated to a more narrow sub-task.”

Subagentes operam em paralelo com suas próprias janelas de contexto, explorando diferentes aspectos simultaneamente. Porém, o custo pode ser 15x maior em tokens.
Conceito 3: Context Failures (Drew Breunig)
Quatro modos de falha documentados:

Context Poisoning: Alucinações infiltradas no contexto
Context Distraction: Contexto excessivo sobrecarrega
Context Confusion: Contexto supérfluo influencia respostas
Context Clash: Partes conflitantes do contexto


Detalhamento
Seção 1: Write Context - Scratchpads e Memories
Scratchpads são sistemas de anotações que persistem informações fora da janela de contexto durante uma tarefa. Memories transcendem sessões, como implementado em ChatGPT e Cursor.
Recomendações:

Implementar scratchpad para tarefas longas
Usar memories para contexto persistente entre sessões
Separar memória de curto e longo prazo

Seção 2: Isolate Context - O Poder do Multi-Agent

[!warning] Trade-off Crítico
Multi-agent pode consumir até 15x mais tokens que single-agent. Avalie se a melhoria de performance justifica o custo.

Princípios:

Cada subagente foca em subtarefa específica
Contextos isolados evitam poluição cruzada
Coordenação é o maior desafio

Seção 3: A Nova Realidade

[!quote] Insight Central
“Most agent failures are not model failures anymore, they are context failures.”

Cognition AI resumiu: context engineering é efetivamente o trabalho nº 1 de engenheiros construindo agentes de IA.

Técnicas e Métodos
Técnica 1: Auto-Compact (Claude Code Style)
Conceito: Comprimir automaticamente quando contexto atinge limiar
Implementação:

Monitorar uso da janela de contexto
Trigger em 95% de ocupação
Sumarizar mensagens antigas mantendo ações recentes


[!tip] Quick Win
Implemente um contador de tokens e alerte antes de atingir o limite.

Técnica 2: Selective Retrieval
Conceito: Buscar apenas informações relevantes via embeddings
Exemplos:

RAG para documentação
Knowledge graph para relações complexas

Quando Usar Cada Técnica

























TécnicaMelhor paraScratchpadTarefas longas com muitos passosMulti-agentProblemas decomponíveis em paraleloCompressionConversas extensas que excedem janelaSelectiveBases de conhecimento grandes

Mapa de Conceitos
Este diagrama mostra as conexões entre as quatro estratégias de context engineering e seus componentes principais.
flowchart TD
    CE[Context Engineering] --> W[Write Context]
    CE --> S[Select Context]
    CE --> C[Compress Context]
    CE --> I[Isolate Context]

    W --> SP[Scratchpads]
    W --> ME[Memories]

    S --> EM[Embeddings]
    S --> KG[Knowledge Graphs]

    C --> SU[Sumarização]
    C --> TR[Trimming]

    I --> MA[Multi-Agent]
    I --> SB[Sandboxes]

    style CE fill:#e1f5fe
    style W fill:#c8e6c9
    style S fill:#fff3e0
    style C fill:#f3e5f5
    style I fill:#ffecb3

Como Aplicar

TL;DR: Trate contexto como RAM escassa - escreva, selecione, comprima e isole estrategicamente.

🎯 Implementação Imediata
Contexto: Qualquer agente que executa mais de 10 turnos de conversa
Faça agora: Adicione monitoramento de tokens e implemente trimming de mensagens antigas após 70% da janela
Sucesso = Agente completa tarefas longas sem erro de contexto excedido
🔄 Outras Aplicações

RAG Systems: Implemente selective retrieval → redução de tokens irrelevantes
Coding Agents: Use multi-agent para análise/implementação/teste → melhor qualidade

🗑️ Ignorei

Histórico do termo: irrelevante para aplicação
Comparações de produtos: marketing


Insights Pessoais
O que aprendi:

Context failures são a nova fronteira de debugging de agentes
Multi-agent não é sempre melhor - avaliar custo/benefício

Como aplico no meu contexto:

Implementar métricas de contexto nos meus agentes
Considerar arquitetura multi-agent para tarefas complexas

Perguntas que surgiram:

Qual o threshold ideal para trigger de compression?
Como medir “qualidade” do contexto além de tamanho?


Ações / Próximos Passos

 Implementar contador de tokens em agentes existentes
 Testar arquitetura multi-agent vs single-agent em caso real
 Estudar implementação do auto-compact do Claude Code


Recursos Adicionais
Plataformas e Ferramentas:

LangGraph - Framework para agentes
LangSmith - Observabilidade

Artigos Complementares:

JetBrains Research - Efficient Context Management


Propriedades da nota

[!note]- Propriedades Gerais do Obsidian

Identificação














CampoValorTítuloINPUT[text:titulo]

Conexões


































CampoValorPaiINPUT[suggester(optionQuery("")):pai]ColeçãoINPUT[inlineSelect(option(financeiro, Financeiro), option(growth, Growth), option(ia, IA), option(lideranca, Liderança), option(marketing, Marketing), option(negocios, Negócios), option(produtividade, Produtividade), option(pkm, PKM), option(saas, SaaS), option(tecnologia, Tecnologia), option(vendas, Vendas)):colecao]ÁreaINPUT[suggester(optionQuery("Esforços/Áreas")):area]ProjetoINPUT[suggester(optionQuery("#projeto")):projeto]AutorINPUT[suggester(optionQuery("Atlas/Pessoas")):pessoa]RelacionadoINPUT[inlineListSuggester(optionQuery(""), useLinks(true)):relacionado]

Classificação






















CampoValorTipoINPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]TagsINPUT[inlineList:tags]StatusINPUT[inlineSelect(option(nao_iniciado, ⬜ Não Iniciado), option(em_andamento, 🔄 Em Andamento), option(concluido, ✅ Concluído), option(pausado, ⏸️ Pausado), option(cancelado, ❌ Cancelado)):status]

Temporal


















CampoValorCriadoINPUT[date:data_criado]AtualizadoINPUT[date:data_atualizado]


[!note]- Propriedades do Artigo

























CampoValorURLINPUT[text(placeholder(https://...)):url_artigo]FonteINPUT[text:fonte]AutorINPUT[text:autor]Data PublicaçãoINPUT[date:data_publicacao]