---
title: "Context Engineering for Generative AI Systems - MentorCruise"
pubDate: 2025-07-10
---

Context Engineering for Generative AI Systems - MentorCruise

[!compass] MyMess » Estudos » Engenharia de Contexto



[!info]+ Detalhes do Artigo
Ler: Context Engineering for Generative AI Systems
Fonte: MentorCruise (Blog)
Autores: Sundeep Teki, PhD (ex-Amazon Alexa AI, Generative AI Coach)
Publicado: 10 de Julho de 2025


[!abstract]+ Materiais Complementares
Background do Autor

Ex-pesquisador Amazon Alexa AI
Generative AI Coach no MentorCruise
PhD em IA

Framework Mencionado

Sentinel Framework (2025) - Context Compression

Taxonomia

Drew Breunig - 4 Context Failures



[!tip]- Léxico
Conteúdo e Criação

Context-as-a-Compiler: LLMs como compiladores onde contexto são libraries e type definitions
Context is King: Qualidade do contexto importa mais que capacidade do modelo

Conceitos Fundamentais

Sentinel Framework: Proxy models com attention-probing para compressão até 5x

Tecnologia e IA


Context Failures: Poisoning, Distraction, Confusion, Clash
[!question]- Pontos para Aprofundar (Sugestão da IA)


Como o Sentinel Framework atinge 5x de compressão?

Investigar attention-probing e proxy models



Qual a diferença prática entre Agentic RAG e Graph RAG?

Comparar casos de uso e implementações



Como detectar cada tipo de context failure?

Desenvolver diagnósticos por categoria





[!robot]- Sugestões Complementares

Leituras Recomendadas:

Sentinel Framework paper (2025)
Drew Breunig sobre Context Failures


Ferramentas Úteis:

Vector databases - Para RAG básico
Graph databases - Para Graph RAG


Exercícios Práticos:

Implementar cada tipo de RAG e comparar resultados
Testar compressão de contexto com diferentes abordagens





Resumo
Artigo técnico de Sundeep Teki (ex-Amazon Alexa AI) sobre context engineering para sistemas de IA generativa. Apresenta a evolução de prompt engineering para arquitetura de sistemas completos, introduz a analogia “Context-as-a-Compiler”, detalha 3 tipos de RAG, técnicas de compressão de contexto com resultado de até 5x, e uma taxonomia de 4 falhas de contexto.
Princípio central: “Context is King” - a qualidade do contexto fornecido frequentemente importa mais que a capacidade do próprio modelo.

Principais Conceitos
Paradigm Shift: Do Modelo para o Contexto
O campo evoluiu de focar na escala do modelo para otimizar o ambiente de informação ao redor dos modelos.





















Foco AnteriorFoco AtualEscala do modeloQualidade do contextoMais parâmetrosMelhor informaçãoModelo maiorContexto mais rico
Context-as-a-Compiler
Uma analogia poderosa que posiciona:

LLMs como compiladores traduzindo intenção humana em outputs executáveis
Contexto como libraries, type definitions e variáveis de ambiente
Resultado: Outputs confiáveis e determinísticos

Os 4 Context Failures (Drew Breunig)
A tabela abaixo resume as informações principais.






























FailureDescriçãoImpactoPoisoningErros repetidamente referenciados no contextoPropagação de errosDistractionContexto excessivamente longoModelo over-foca no contextoConfusionInformação supérfluaDegrada qualidade da respostaClashInformação conflitanteRespostas contraditórias

Detalhamento
3 Tipos de RAG
1. Basic RAG
Processo de 3 estágios usando embeddings e vector databases:

Indexing: Processar e indexar documentos
Retrieval: Recuperar chunks relevantes
Augmentation/Generation: Gerar resposta com contexto

2. Agentic RAG
Sistemas autônomos com capacidades avançadas:

Planning: Planejamento de ações
Tool Use: Uso de ferramentas externas
Reflection: Auto-reflexão e correção
Multi-agent Collaboration: Colaboração entre agentes

3. Graph RAG
Travessia estruturada de conhecimento:

Multi-hop reasoning: Raciocínio em múltiplos saltos
Entity relationships: Conexões entre entidades
Structured knowledge: Conhecimento estruturado em grafo

Context Compression: Sentinel Framework

[!success] Resultado Mensurado
Até 5x de compressão de contexto mantendo performance equivalente a sistemas não-comprimidos

Como funciona:

Usa lightweight proxy models com attention-probing
Identifica contexto relevante automaticamente
Remove informação redundante preservando qualidade

Estratégias de Mitigação
Para combater os 4 context failures:

RAG: Grounding em conhecimento externo
Tool Loadout Curation: Curadoria de ferramentas disponíveis
Context Quarantine: Isolamento de contexto problemático
Pruning: Poda de informação irrelevante
Summarization: Sumarização de contexto longo
Offloading: Transferência para armazenamento externo


Mapa de Conceitos
O diagrama abaixo ilustra o fluxo do processo, mostrando as etapas e suas conexões.
flowchart TD
    A[Context Engineering] --> B[RAG Types]
    A --> C[Context Failures]
    A --> D[Compression]

    B --> B1[Basic RAG]
    B --> B2[Agentic RAG]
    B --> B3[Graph RAG]

    C --> C1[Poisoning]
    C --> C2[Distraction]
    C --> C3[Confusion]
    C --> C4[Clash]

    D --> D1[Sentinel Framework]
    D --> D2[5x Compression]

    E[Best Practices] --> E1[RAG antes de Fine-tuning]
    E --> E2[Hybrid approaches]
    E --> E3[Continuous iteration]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#ffcdd2
    style D fill:#fff3e0
    style E fill:#f3e5f5

Insights &#x26; Aprendizados
O que funcionou bem:

Analogia “Context-as-a-Compiler” muito útil para explicar o conceito
Taxonomia clara de 4 failures facilita diagnóstico
Métrica concreta: 5x de compressão com Sentinel Framework
Progressão clara: Basic RAG → Agentic RAG → Graph RAG

O que posso adaptar para o MyMess:

Taxonomia de failures: Implementar diagnóstico de cada tipo
Sentinel-like compression: Investigar attention-probing
RAG progression: Oferecer níveis de RAG conforme complexidade

Ideias para aplicar:

Criar checklist de diagnóstico para os 4 context failures
Implementar métricas de compressão de contexto
Desenvolver biblioteca de técnicas de mitigação por tipo de failure


Recursos Adicionais

MentorCruise - Context Engineering
Drew Breunig - Context Failures Taxonomy
Sentinel Framework (2025) - Context Compression


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