---
title: "Newsletter 197 - Engenharia de Contexto - DeveloPassion"
pubDate: 2025-07-04
---

Newsletter 197 Context Engineering - DeveloPassion

[!compass] MyMess » Estudos » Engenharia de Contexto



[!info]+ Detalhes do Artigo
Ler: DeveloPassion’s Newsletter 197 - Context Engineering
Fonte: DeveloPassion Newsletter (Edição 197)
Autores: Sébastien Dubois
Publicado: 04 de Julho de 2025


[!abstract]+ Materiais Complementares
4 Cenários de Contexto

Sem contexto → respostas genéricas
Contexto insuficiente → respostas vagas
Contexto ideal → respostas específicas
Excesso de contexto → alucinações

Padrões e Técnicas

Receptionist AI Design Pattern
Prompt Lazy Loading (PLL)
Abordagem modular com múltiplos agentes



[!tip]- Léxico
Conteúdo e Criação

Context as Filter: “Quanto mais específico o contexto, mais específica a resposta”
Gestão contextual contínua: Contexto mantido durante toda interação, não só no prompt inicial

Tecnologia e IA


Receptionist Pattern: Estrutura para gerenciar múltiplos agentes especializados


Prompt Lazy Loading (PLL): Carregamento contextual sob demanda
[!question]- Pontos para Aprofundar (Sugestão da IA)


Como implementar Receptionist Pattern?

Estudar arquitetura de múltiplos agentes



Qual o ponto de “excesso de contexto”?

Testar thresholds para diferentes tarefas



Como aplicar PLL em produção?

Explorar carregamento dinâmico





[!robot]- Sugestões Complementares

Leituras Recomendadas:

Simon Willison - Context Engineering
Phil Schmid - Context Engineering
Drew Breunig - Context failures


Ferramentas Úteis:

Claude Code - Implementação prática
MCP - Integração de contexto
LM Studio - Suporte a MCP


Exercícios Práticos:

Implementar agente com Receptionist Pattern
Testar diferentes níveis de contexto





Resumo
Newsletter 197 de Sébastien Dubois (DeveloPassion) sobre Context Engineering. Define CE como “projetar e gerenciar não apenas prompts e sua estrutura, mas todo o contexto que incluem”. Apresenta 4 cenários de contexto e a analogia de contexto como filtro/funil. Destaca padrões como Receptionist AI Pattern e Prompt Lazy Loading (PLL). Compara gestão de contexto com instruir um colega junior - excesso causa confusão.
Definição central: “Context engineering is about carefully designing and managing not just your prompts and their structure, but the entire context that they include.”

Principais Conceitos
4 Cenários de Contexto
A tabela abaixo resume as informações principais.






























CenárioContextoResultado1NenhumRespostas genéricas2InsuficienteRespostas vagas3IdealRespostas específicas e relevantes4ExcessivoAlucinações de IA
Contexto como Filtro

[!quote] Analogia
“Context can be considered as a filter or funnel. The more specific the context, the more specific the answer.”

Distinção Importante
A tabela a seguir detalha os campos e seus valores.





















PromptingContext EngineeringO que perguntarO que o modelo sabe quando você perguntaFoco na instruçãoFoco no ambiente completoArtefato únicoCiclo de vida completo

Detalhamento
Padrões e Técnicas
1. Receptionist AI Design Pattern
Estrutura para gerenciar múltiplos agentes:

Um “recepcionista” coordena
Agentes especializados executam tarefas
Evita “sobrecarga mental” da IA

2. Prompt Lazy Loading (PLL)
Carregamento contextual sob demanda:

Não carregar todo contexto de uma vez
Adicionar informação conforme necessário
Similar a lazy loading em programação

3. Gestão Contextual Contínua

[!info] Princípio
Contexto deve ser mantido durante toda a interação, não apenas no prompt inicial.

Analogia Humana

[!tip] Insight
Similar a instruir um colega junior - contexto excessivo causa confusão, contexto insuficiente gera trabalho genérico.

Referências Citadas
Os dados abaixo mostram a estrutura e configurações.

























AutorTópicoSimon WillisonContext Engineering conceitualPhil SchmidContext Engineering técnicoDrew BreunigFalhas e correções de contextoAndrej KarpathyFuturo do desenvolvimento com IA
Ferramentas e Plataformas Mencionadas
A tabela abaixo resume as informações principais.





























FerramentaFunçãoClaude CodeImplementação prática de CEMCPProtocolo de contextoLM StudioSuporte a MCPObsidianKnowledge managementElevenLabsVoice AI

Mapa de Conceitos
O diagrama abaixo ilustra o fluxo do processo, mostrando as etapas e suas conexões.
flowchart TD
    A[Context Engineering] --> B[4 Cenários]
    A --> C[Padrões]
    A --> D[Ferramentas]

    B --> B1[Sem contexto]
    B --> B2[Insuficiente]
    B --> B3[Ideal]
    B --> B4[Excessivo]

    C --> C1[Receptionist Pattern]
    C --> C2[Prompt Lazy Loading]
    C --> C3[Gestão Contínua]

    D --> D1[Claude Code]
    D --> D2[MCP]
    D --> D3[Obsidian]

    E[Contexto = Filtro] --> E1[Mais específico]
    E --> E2[Resposta específica]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e1f5fe

Insights &#x26; Aprendizados
O que funcionou bem:

4 cenários claros e memoráveis
Analogia filtro/funil didática
Conexão com princípios de arquitetura de software
Referências a autores importantes

O que posso adaptar para o MyMess:

4 Cenários: Usar como checklist para avaliar briefings
Receptionist Pattern: Implementar agente coordenador + especializados
PLL: Carregar contexto de cliente sob demanda
Analogia junior: Usar para explicar CE a clientes

Ideias para aplicar:

Criar checklist “nível de contexto” para cada projeto
Implementar agente receptionist para coordenar workflow
Desenvolver sistema de lazy loading para briefings longos
Documentar “ponto ideal” de contexto para cada tipo de tarefa


Recursos Adicionais

DeveloPassion Newsletter 197
Simon Willison - Context Engineering
Phil Schmid - Context Engineering
OpenAI Cookbook
Knowii Community


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


[!note]- Propriedades SaaS

















CampoValorMostrar BlocoINPUT[toggle(onValue(true), offValue(false)):mostrar_bloco_saas]Status SaaSINPUT[toggle(onValue(true), offValue(false)):status_saas]


[!note]- Propriedades do Artigo





























CampoValorURLINPUT[text(placeholder(https://...)):url_artigo]FonteINPUT[text:fonte]AutorINPUT[text:autor]Data PublicaçãoINPUT[date:data_publicacao]Tipo ConteúdoINPUT[inlineSelect(option(educacional, Educacional), option(curadoria, Curadoria), option(historia, História Pessoal), option(listicle, Lista), option(contrarian, Opinião Contrária), option(tutorial, Tutorial), option(entrevista, Entrevista), option(analise, Análise), option(estudo_de_caso, Estudo de Caso), option(lancamento, Lançamento), option(opiniao, Opinião), option(outro, Outro)):tipo_conteudo]