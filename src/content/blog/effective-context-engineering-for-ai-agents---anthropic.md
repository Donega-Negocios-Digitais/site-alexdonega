---
title: "Engenharia de Contexto Eficaz para Agentes IA - Anthropic"
pubDate: 2025-09-29
---

Effective Context Engineering for AI Agents - Anthropic

[!compass] MyMess » Estudos » Engenharia de Contexto



[!info]+ Detalhes do Artigo
🔗 Ler: Effective Context Engineering for AI Agents
📰 Fonte: Anthropic (Oficial - Engineering Blog)
👤 Autores: Prithvi Rajasekaran, Ethan Dixon, Carly Ryan, Jeremy Hadfield
📆 Publicado: 29 de Setembro de 2025


[!abstract]+ Materiais Complementares
Artigos Relacionados (Anthropic)

Building Effective Agents - Guia fundacional sobre arquitetura de agentes
Writing Tools for AI Agents – with AI Agents - Design de ferramentas para agentes
Multi-Agent Research System - Arquiteturas multi-agente
Context Management Announcement - Memory tool e gerenciamento de contexto

Documentação Oficial

Anthropic Prompt Engineering Docs - Documentação oficial de engenharia de prompts
Model Context Protocol (MCP) - Protocolo de contexto de modelo

Pesquisa Acadêmica

Attention Is All You Need - Paper original da arquitetura Transformer
Position Encoding Interpolation - Extensão de janelas de contexto
Context Rot Research - Pesquisa sobre degradação de contexto

Ferramentas Mencionadas

Claude Code - Solução de codificação com estratégia híbrida de contexto
Memory and Context Cookbook - Exemplos práticos de gerenciamento de memória
Claude Developer Console - Plataforma de desenvolvimento com Memory Tool (beta)

Demonstração

Claude Plays Pokémon - Demonstração ao vivo de memória estruturada em agentes



[!tip]- Léxico
Técnicas e Estratégias

Context Engineering: Estratégias para curar e manter o conjunto ótimo de tokens durante inferência em LLM - inclui system prompts, ferramentas, MCP, dados externos e histórico
Progressive Disclosure: Técnica onde agentes descobrem incrementalmente contexto relevante através de sinais como tamanhos de arquivo, timestamps e hierarquias
Structured Note-Taking: Técnica de agentes escreverem notas persistidas em memória fora da janela de contexto

Tecnologia e IA

Attention Budget (Orçamento de Atenção): Limite cognitivo dos LLMs - similar à memória operacional humana, se esgota conforme tokens são adicionados
Golden Zone (Zona Dourada): Equilíbrio ideal entre especificidade e flexibilidade em prompts - nem rígido demais, nem vago demais
Sub-Agent Architecture: Estrutura onde agente principal coordena e sub-agentes especializados realizam trabalho técnico profundo, retornando resumos condensados

Conteúdo e Criação

Context Rot (Degradação de Contexto): Fenômeno onde a capacidade do modelo de recuperar informações diminui conforme o número de tokens aumenta
Compaction (Compressão): Prática de resumir conversações quando se aproximam do limite de contexto e reiniciar com o resumo

Outros Conceitos


Just-In-Time Retrieval: Recuperação de dados dinamicamente em runtime usando identificadores leves (paths, URLs, queries) em vez de dados pré-computados
[!question]- Pontos para Aprofundar (Sugestão da IA)


Como implementar compactação sem perder detalhes críticos de decisões arquiteturais?

Explorar técnicas de sumarização que priorizem recall primeiro, depois iterar para precisão. Pesquisar sobre preservação de bugs não resolvidos e decisões-chave



Qual é o balanço ideal entre dados pré-processados (embeddings) e exploração just-in-time para o MyMess?

Considerar modelo híbrido do Claude Code: arquivos de contexto carregados upfront + primitivos de busca para navegação dinâmica



Como medir e detectar Context Rot em tempo real nos agentes?

Desenvolver métricas que indiquem degradação de performance conforme contexto cresce. Monitorar qualidade de recall em tarefas longas



Como adaptar Progressive Disclosure para domínio de marketing/copywriting?

Mapear quais sinais (tipo de campanha, estágio do funil, histórico de performance) funcionam como “timestamps” e “hierarquias de pasta” no contexto de marketing



Quando usar sub-agentes vs. compactação vs. note-taking no MyMess?

Definir critérios claros baseados no tipo de tarefa: research → multi-agent, desenvolvimento iterativo → note-taking, conversas longas → compaction





[!robot]- Sugestões Complementares

Leituras Recomendadas:

“Designing Data-Intensive Applications” de Martin Kleppmann - fundamentos de sistemas que gerenciam grandes volumes de dados/contexto
“The Art of Prompt Engineering” de Kumar &#x26; Chen - técnicas avançadas que complementam context engineering
Paper “Attention Is All You Need” (Vaswani et al.) - entender a arquitetura base para compreender limitações de atenção


Ferramentas Úteis:

LangChain/LangGraph - framework para construir pipelines de contexto com memory management
ChromaDB/Pinecone - vector databases para recuperação de contexto baseada em embeddings
Anthropic Workbench - testar prompts e medir comportamento antes de implementar
Prompt Flow (Azure) - orquestração e visualização de fluxos de contexto


Exercícios Práticos:

Exercício 1 - Teste de Altitude: Criar 3 versões do mesmo prompt (rígido, zona dourada, vago) e comparar resultados em 10 tarefas diferentes
Exercício 2 - Medição de Context Rot: Executar mesma tarefa com contextos de 1k, 5k, 10k, 50k tokens e documentar degradação
Exercício 3 - Implementar Note-Taking: Criar agente que mantém arquivo NOTES.md atualizado durante tarefas longas e avaliar impacto
Exercício 4 - Design de Ferramentas: Redesenhar conjunto de ferramentas eliminando sobreposições e ambiguidades





Resumo
Context Engineering representa uma evolução natural da engenharia de prompts. Enquanto prompt engineering focava em encontrar as palavras certas, context engineering responde a questão mais ampla: qual configuração de contexto provavelmente gerará o comportamento desejado do modelo?
Definição central:

Contexto = conjunto de tokens incluídos ao amostrar de um LLM
Problema = otimizar a utilidade desses tokens contra as limitações inerentes dos LLMs


Principais Conceitos
Context Engineering vs Prompt Engineering
A tabela abaixo resume as informações principais.

























Prompt EngineeringContext EngineeringFoca em escrever e organizar instruçõesGerencia o conjunto completo de tokensPara tarefas discretas (classificação, geração)Para operações contínuas de agentesÊnfase em system promptsInclui ferramentas, MCP, dados externos, históricoTarefa discretaIterativo e contínuo
Context Rot (Degradação de Contexto)

Conforme aumenta o número de tokens no contexto, a capacidade do modelo de recuperar informações com precisão diminui.

Isso não é falha de um modelo específico - é característica que emerge em todos os modelos.
Escassez de Atenção
Os LLMs operam sob restrições arquiteturais fundamentais:

Transformers: cada token “participa da atenção” com cada outro token = n² relações
Degradação: menos experiência com dependências em contextos longos
Treinamento: sequências mais curtas são mais comuns nos dados


Anatomia do Contexto Efetivo
1. System Prompts - A Zona Dourada
❌ RÍGIDO DEMAIS          ✅ ZONA DOURADA           ❌ VAGO DEMAIS
   Lógica complexa           Específico + Flexível      Alto nível sem
   codificada em prompts     Heurísticas fortes         sinais concretos
   → Fragilidade             → Adaptabilidade           → Comportamento
                                                          imprevisível
Recomendações:

Organizar em seções: &#x3C;background_information>, &#x3C;instructions>, ## Tool guidance
Começar com prompt mínimo no melhor modelo
Adicionar instruções iterativamente baseado em falhas

2. Ferramentas
Princípios de design:

Bem compreendidas pelos LLMs
Minimizar sobreposição funcional
Auto-contidas e robustas a erros
Parâmetros descritivos e inequívocos


[!warning] Problema Comum
“Conjuntos de ferramentas inchados que cobrem muita funcionalidade ou levam a pontos de decisão ambíguos. Se um engenheiro não consegue dizer definitivamente qual ferramenta usar, o agente também não consegue.”

3. Exemplos (Few-Shot)

Para LLMs, exemplos são as ‘imagens’ que valem mil palavras.

Não: lista extensa de casos extremos tentando articular cada regra
Sim: conjunto de exemplos diversos e canônicos que retratam o comportamento esperado
Princípio Orientador

[!quote] Regra de Ouro
“Encontre o menor conjunto possível de tokens de alto sinal que maximizem a probabilidade de resultado desejado.”


Recuperação de Contexto e Busca Agêntica
Duas Abordagens
A tabela a seguir detalha os campos e seus valores.





















Pré-Computada (tradicional)Just-In-Time (emergente)Recuperação baseada em embeddingIdentificadores leves (paths, URLs, queries)Mais rápidaCarrega dados dinamicamente em runtimePode ficar obsoletaEspelha cognição humana
Progressive Disclosure
Agentes descobrem incrementalmente contexto relevante:

Tamanhos de arquivo → sugerem complexidade
Convenções de nomenclatura → indicam propósito
Timestamps → proxy de relevância
Hierarquias de pasta → sinais de contexto


Isso mantém o agente focado em subconjuntos relevantes em vez de afogar em informação exaustiva mas irrelevante.

Estratégia Híbrida (Claude Code)

Arquivos CLAUDE.md caem em contexto upfront
Primitivos como glob/grep permitem navegação just-in-time


Técnicas para Tarefas Long-Horizon
Para tarefas que abrangem dezenas de minutos a múltiplas horas de trabalho contínuo:
1. Compaction (Compressão de Contexto)
Conceito: Resumir conversa aproximando-se do limite, reiniciar com o resumo.
Implementação:

Passar histórico para resumir e comprimir detalhes críticos
Preservar: decisões arquiteturais, bugs não resolvidos, detalhes de implementação
Descartar: outputs de ferramentas redundantes ou mensagens antigas


[!tip] Quick Win
Limpeza de resultado de tool - uma vez que ferramenta foi chamada profundamente no histórico, por que o agente precisa ver o resultado bruto novamente?

2. Structured Note-Taking (Memória Agêntica)
Conceito: Agente escreve notas persistidas em memória fora da janela de contexto.
Exemplos:

Claude Code criando to-do lists
Agentes customizados mantendo arquivo NOTES.md
Rastrear progresso em tarefas complexas


[!example] Caso: Claude jogando Pokémon
Sem prompting sobre estrutura de memória, desenvolve mapas de regiões exploradas, lembra conquistas-chave, mantém notas estratégicas de combate, rastreia “pelos últimos 1.234 passos estive treinando meu Pokémon na Rota 1”.

3. Sub-Agent Architectures
Estrutura:

Agente principal coordena com plano de alto nível
Sub-agentes realizam trabalho técnico profundo
Cada sub-agente explora extensivamente (dezenas de milhares de tokens)
Retorna apenas resumo condensado (1.000-2.000 tokens)


“Separação clara de preocupações - contexto de busca detalhado permanece isolado dentro de sub-agentes enquanto agente principal foca em sintetizar.”

Quando Usar Cada Técnica
Os dados abaixo mostram a estrutura e configurações.





















TécnicaMelhor paraCompactionTarefas com back-and-forth extensoNote-takingDesenvolvimento iterativo com milestones clarosMulti-agentPesquisa complexa, exploração paralela

Mapa de Conceitos
O diagrama abaixo ilustra o fluxo do processo, mostrando as etapas e suas conexões.
flowchart TD
    A[Context Engineering] --> B[Componentes do Contexto]
    A --> C[Recuperação de Contexto]
    A --> D[Técnicas Long-Horizon]

    B --> B1[System Prompts]
    B --> B2[Ferramentas]
    B --> B3[Exemplos Few-Shot]
    B --> B4[Dados Externos]
    B --> B5[Histórico de Mensagens]

    B1 --> Z[Zona Dourada]
    Z --> Z1[Específico + Flexível]

    C --> C1[Pré-Computada]
    C --> C2[Just-In-Time]
    C --> C3[Híbrida]
    C3 --> C4[Progressive Disclosure]

    D --> D1[Compaction]
    D --> D2[Structured Note-Taking]
    D --> D3[Sub-Agent Architectures]

    D1 --> E[Resumir + Reiniciar]
    D2 --> F[Memória Persistente]
    D3 --> G[Agente Principal + Sub-agentes]

    style A fill:#e1f5fe
    style Z fill:#c8e6c9
    style C3 fill:#fff3e0

Insights &#x26; Aprendizados
O que funcionou bem (casos documentados):

Modelo híbrido do Claude Code: Arquivos CLAUDE.md carregados upfront + primitivos glob/grep para navegação just-in-time - combina contexto estável com flexibilidade
Memória estruturada sem prompting: No experimento Claude Plays Pokémon, o agente desenvolveu espontaneamente mapas, notas estratégicas e tracking preciso ao longo de milhares de passos
Arquitetura multi-agente para pesquisa: Sub-agentes exploram extensivamente (dezenas de milhares de tokens) e retornam apenas resumos condensados (1-2k tokens) - mantém agente principal focado
Organização de prompts em seções: Background, instruções, orientação de ferramentas - usando tags XML ou headers Markdown para delineação clara
Princípio “recall primeiro”: Em compactação, priorizar lembrar de tudo importante, depois iterar para melhorar precisão

O que posso adaptar para o MyMess:

Arquivos de contexto upfront: Criar equivalentes do CLAUDE.md para cada agente (DNA Digital, briefings, guidelines) que caem em contexto automaticamente
Progressive Disclosure para marketing: Usar metadados de campanha (tipo, canal, estágio funil) como sinais para descoberta incremental de contexto relevante
Ferramentas sem sobreposição: Revisar toolset dos agentes para eliminar ambiguidade - “se um engenheiro não consegue dizer qual ferramenta usar, o agente também não consegue”
Note-taking estruturado: Implementar sistema onde agentes mantêm notas sobre decisões, progresso e contexto descoberto durante tarefas longas

Ideias para aplicar:

Zona Dourada nos System Prompts: Revisar prompts dos 6 agentes buscando equilíbrio - nem lógica complexa codificada (frágil), nem instruções vagas (imprevisível)
Compaction para conversas longas: Implementar resumo automático quando contexto se aproxima do limite, preservando decisões-chave e problemas não resolvidos
Limpeza de outputs de ferramentas: Após ferramenta ser chamada no histórico, substituir resultado bruto por versão compactada
Arquitetura de sub-agentes: Orquestrador coordena em alto nível, agentes especializados (Copywriter, Designer, etc.) fazem trabalho profundo e retornam sínteses


Recursos Adicionais
Plataformas e Ferramentas Anthropic:

Claude Developer Console - Plataforma de desenvolvimento com Memory Tool (beta público)
Claude.ai - Interface principal do Claude
Claude Code - Ferramenta de codificação com estratégia híbrida de contexto

Repositórios e Cookbooks:

Memory and Context Management Cookbook - Exemplos práticos de implementação
Claude Cookbooks (Repositório) - Coleção completa de exemplos

Documentação:

Prompt Engineering Docs - Documentação oficial
Model Context Protocol (MCP) - Especificação do protocolo

Artigos Complementares da Anthropic:

Building Effective Agents
Writing Tools for AI Agents
Multi-Agent Research System

Pesquisa:

Context Rot Research - Chroma
Transformer Paper - arXiv


Propriedades da nota

[!note]- 📋 Propriedades Gerais do Obsidian

📝 Identificação














CampoValorTítuloINPUT[text:titulo]

🔗 Conexões


































CampoValorPaiINPUT[suggester(optionQuery("")):pai]ColeçãoINPUT[inlineSelect(option(financeiro, Financeiro), option(growth, Growth), option(ia, IA), option(lideranca, Liderança), option(marketing, Marketing), option(negocios, Negócios), option(produtividade, Produtividade), option(pkm, PKM), option(saas, SaaS), option(tecnologia, Tecnologia), option(vendas, Vendas)):colecao]ÁreaINPUT[suggester(optionQuery("Esforços/Áreas")):area]ProjetoINPUT[suggester(optionQuery("#projeto")):projeto]AutorINPUT[suggester(optionQuery("Atlas/Pessoas")):pessoa]RelacionadoINPUT[inlineListSuggester(optionQuery(""), useLinks(true)):relacionado]

📊 Classificação






















CampoValorTipoINPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]TagsINPUT[inlineList:tags]StatusINPUT[inlineSelect(option(nao_iniciado, ⬜ Não Iniciado), option(em_andamento, 🔄 Em Andamento), option(concluido, ✅ Concluído), option(pausado, ⏸️ Pausado), option(cancelado, ❌ Cancelado)):status]

📅 Temporal


















CampoValorCriadoINPUT[date:data_criado]AtualizadoINPUT[date:data_atualizado]

🎨 Visual






















CampoValorVisual da NotaINPUT[inlineSelect(option(normal, Normal), option(wide-page, Wide Page), option(dashboard, Dashboard)):cssclasses]Modo LeituraINPUT[toggle(onValue(preview), offValue(source)):obsidianUIMode]Imagem DestaqueINPUT[text:imagem_destaque]

🌐 Compartilhar  link


















CampoValorShare LinkINPUT[text(placeholder(https://...)):share_link]Share Upd.INPUT[text:share_updated]


[!note]- 🚀 Propriedades SaaS

















CampoValorMostrar BlocoINPUT[toggle(onValue(true), offValue(false)):mostrar_bloco_saas]Status SaaSINPUT[toggle(onValue(true), offValue(false)):status_saas]


[!note]- 📰 Propriedades do Artigo

















CampoValorURLINPUT[text(placeholder(https://...)):url]Tipo ConteúdoINPUT[inlineSelect(option(educacional, Educacional), option(curadoria, Curadoria), option(historia, História Pessoal), option(listicle, Lista), option(contrarian, Opinião Contrária), option(tutorial, Tutorial), option(entrevista, Entrevista), option(analise, Análise), option(estudo_de_caso, Estudo de Caso), option(lancamento, Lançamento), option(opiniao, Opinião), option(outro, Outro)):tipo_conteudo]