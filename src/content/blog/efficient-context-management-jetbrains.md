---
title: "Efficient Context Management for LLM-Powered Agents"
pubDate: 2025-12-01
---

Efficient Context Management for LLM-Powered Agents

[!compass] IA » Context Engineering » Pesquisa



[!info]+ Detalhes do Artigo
Ler: Cutting Through the Noise: Smarter Context Management
Fonte: JetBrains Research (Blog Oficial)
Autores: Katie Fraser (baseado em pesquisa de Tobias Lindenbauer - TUM)
Publicado: Dezembro 2025 (NeurIPS 2025)


[!abstract]+ Materiais Complementares
Artigos Relacionados

Context Engineering - LangChain - Visão complementar sobre estratégias

Ferramentas Mencionadas

OpenHands - Agente de coding
Cursor - IDE com IA
Warp - Terminal com IA



[!tip]- Léxico
Estratégias de Context Management

Observation Masking: Substituir observações antigas por placeholders mantendo histórico de raciocínio
LLM Summarization: Usar modelo separado para comprimir interações em resumos
Trajectory Elongation: Fenômeno onde agentes executam mais steps que necessário

Métricas e Conceitos

Solve Rate: Taxa de resolução de tarefas pelo agente
Context Window: Janela de contexto limitada do LLM
Token Cost: Custo baseado em quantidade de tokens processados

Ferramentas e Tecnologias

Qwen3-Coder: Modelo de 480B parâmetros usado nos benchmarks
OpenHands: Framework de agentes usado na pesquisa
SWE-bench: Benchmark para avaliação de agentes de código



[!question]- Pontos para Aprofundar

Por que observation masking supera summarization?

Investigar impacto de “sinais de parada” perdidos na sumarização


Como implementar estratégia híbrida em produção?

Definir thresholds para switch entre estratégias


Quais observações são seguras para mascarar?

Análise de impacto por tipo de observação





[!robot]- Sugestões Complementares

Leituras Recomendadas:

Paper original do NeurIPS 2025 (Lindenbauer et al.)
Documentação do OpenHands sobre context management


Ferramentas Úteis:

OpenHands - testar estratégias de contexto
LangSmith - monitorar custos de tokens





Resumo
Pesquisa da JetBrains/TUM apresentada no NeurIPS 2025 compara estratégias de gerenciamento de contexto para agentes de software engineering. Descoberta principal: observation masking (técnica simples de substituir observações por placeholders) supera LLM summarization em 4 de 5 cenários, com custos 52% menores. A sumarização causa “trajectory elongation” - agentes rodam 13-15% mais steps por perder sinais de quando parar.
Definição central:

Observation Masking = substituir observações antigas por placeholders mantendo histórico de ações
Problema abordado = contextos crescem descontroladamente, aumentando custos sem melhorar performance


Principais Conceitos
Conceito 1: O Paradoxo do Contexto





















ExpectativaRealidadeMais contexto = melhor performanceContexto excessivo vira ruídoModelos usam toda informação”Contextos efetivos são pequenos”Custo proporcional ao valorCustos exponenciais, valor estagnado
Conceito 2: Observation Masking vs LLM Summarization

“Most agent failures are not model failures anymore, they are context failures.”

Observation Masking:

Simples: substitui observações por [MASKED]
Mantém histórico de raciocínio/ações intacto
52% mais barato com Qwen3-Coder 480B

LLM Summarization:

Sofisticado: modelo comprime interações
Causa trajectory elongation (13-15% mais steps)
Chamadas de API custam até 7% adicional

Conceito 3: Por Que Summarization Falha
A sumarização oculta “sinais de parada” - indicadores de que a tarefa foi concluída. Sem esses sinais, agentes continuam executando steps desnecessários.

Perda de sinais: Resumos omitem detalhes críticos
Custo extra: API calls para summarization
Elongation: 13-15% mais steps executados


Detalhamento
Seção 1: O Problema do Crescimento de Contexto
Contextos de agentes crescem rapidamente durante execução, gerando três problemas principais.
Problemas documentados:

Custos exponenciais (modelos cobram por token)
Superação da janela de contexto
Transformação de informação útil em ruído


[!warning] Insight Crítico
“Conforme o contexto cresce, modelos de linguagem frequentemente lutam para usar bem toda informação.”

Seção 2: Benchmark de Estratégias
Pesquisa testou estratégias em múltiplos cenários com resultados consistentes:

























EstratégiaRedução de CustoSolve RateObservation Masking>50%Equivalente ou superiorLLM Summarization>50%Equivalente (com mais steps)Baseline-Referência
Seção 3: Solução Híbrida

[!quote] Recomendação
“Simplicidade frequentemente vence em eficiência total e confiabilidade.”

Estratégia híbrida proposta:

Primeira linha: observation masking como defesa padrão
Último recurso: LLM summarization quando contexto atinge limite crítico


Técnicas e Métodos
Técnica 1: Observation Masking
Conceito: Substituir observações antigas mantendo ações e raciocínio
Implementação:

Definir janela de observações recentes a manter (ex: últimas 5)
Substituir observações antigas por placeholder [MASKED]
Manter histórico completo de ações e raciocínio


[!tip] Quick Win
Comece mascarando outputs de ferramentas (file reads, search results) - são os maiores consumidores de tokens.

Técnica 2: Estratégia Híbrida
Conceito: Escalar estratégia conforme pressão de contexto
Implementação:
if contexto &#x3C; 70%:
    nenhuma ação
elif contexto &#x3C; 90%:
    observation_masking()
else:
    llm_summarization()

[!example] Caso Prático
Sistemas como Cursor e Warp poderiam reduzir custos significativamente adotando observation masking como padrão.

Quando Usar Cada Técnica





















TécnicaMelhor paraObservation MaskingDefault para qualquer agenteLLM SummarizationEmergência quando contexto críticoHíbridoProdução com otimização de custo

Mapa de Conceitos
Este diagrama ilustra a relação entre estratégias de context management e seus impactos em custo e performance.
flowchart TD
    CM[Context Management] --> OM[Observation Masking]
    CM --> LS[LLM Summarization]
    CM --> HY[Híbrido]

    OM --> |"Simples"| RC[Redução 52% Custo]
    OM --> |"Mantém"| SR[Solve Rate OK]

    LS --> |"Causa"| TE[Trajectory Elongation]
    LS --> |"+13-15%"| MS[Mais Steps]
    LS --> |"+7%"| AC[API Cost]

    HY --> |"Primeira linha"| OM
    HY --> |"Último recurso"| LS

    style CM fill:#e1f5fe
    style OM fill:#c8e6c9
    style LS fill:#ffcdd2
    style HY fill:#fff3e0

Como Aplicar

TL;DR: Use observation masking como default - é mais simples, mais barato e funciona melhor.

🎯 Implementação Imediata
Contexto: Qualquer agente que executa ferramentas com outputs longos (file reads, searches)
Faça agora: Implemente masking de observações antigas mantendo apenas as 5 mais recentes
Sucesso = Redução de 50%+ em custo de tokens sem perda de solve rate
🔄 Outras Aplicações

Coding Agents: Mascarar outputs de file reads antigos → economia massiva
Search Agents: Mascarar resultados de buscas anteriores → contexto mais limpo

🗑️ Ignorei

Detalhes do benchmark: específicos demais
Comparações entre modelos: não aplicável diretamente


Insights Pessoais
O que aprendi:

Simplicidade vence sofisticação em context management
LLM summarization pode piorar performance por perder sinais de parada

Como aplico no meu contexto:

Implementar observation masking nos meus agentes
Monitorar trajectory length como métrica de saúde

Perguntas que surgiram:

Quais tipos de observação são mais seguros para mascarar?
Como detectar trajectory elongation em produção?


Ações / Próximos Passos

 Implementar observation masking em agente de teste
 Comparar métricas antes/depois (custo, steps, solve rate)
 Definir thresholds para estratégia híbrida


Recursos Adicionais
Plataformas e Ferramentas:

OpenHands - Framework usado na pesquisa
SWE-bench - Benchmark de agentes

Artigos Complementares:

Context Engineering - LangChain


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