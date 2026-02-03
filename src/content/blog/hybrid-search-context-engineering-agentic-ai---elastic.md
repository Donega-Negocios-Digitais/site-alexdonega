---
title: "Busca Híbrida - Engenharia de Contexto e IA Agêntica - Elastic"
pubDate: 2025-11-12
---

Hybrid Search Context Engineering Agentic AI - Elastic

[!compass] MyMess » Estudos » Engenharia de Contexto



[!info]+ Detalhes do Artigo
Ler: A evolução da busca híbrida e da engenharia de contexto
Fonte: Elastic (Search Labs - Blog Técnico)
Autores: Woody Walton (Senior Principal Solutions Architect)
Publicado: 12 de Novembro de 2025


[!abstract]+ Materiais Complementares
Tipos de Busca

Busca Léxica (keywords)
Busca Semântica (vetores)
Busca Híbrida (combinação)

Tecnologias Elasticsearch

Reciprocal Rank Fusion (RRF)
ES|QL query language
Inference API
Multi-stage retrieval



[!tip]- Léxico
Tecnologia e IA

Semantic Loss: Perda de significado ao fragmentar documentos para embeddings
Context Engineering: Evolução além de prompt engineering para fornecer informação relevante aos LLMs

Outros Conceitos

Hybrid Search: Combinação de busca léxica tradicional com busca semântica baseada em vetores

Técnicas e Estratégias


RRF (Reciprocal Rank Fusion): Técnica para mesclar resultados de diferentes tipos de busca
[!question]- Pontos para Aprofundar (Sugestão da IA)


Como balancear busca léxica vs semântica?

Testar diferentes pesos no RRF



Qual o impacto de semantic loss em RAG?

Experimentar diferentes estratégias de chunking



Como implementar multi-stage retrieval?

Explorar pipeline do Elasticsearch





[!robot]- Sugestões Complementares

Leituras Recomendadas:

Documentação Elasticsearch
Papers sobre RRF


Ferramentas Úteis:

Elasticsearch - Busca híbrida
Cohere - Modelos de embedding
Google Vertex AI - Inference API


Exercícios Práticos:

Configurar busca híbrida no Elasticsearch
Comparar resultados léxicos vs semânticos vs híbridos





Resumo
Artigo técnico de Woody Walton (Elastic) sobre a evolução da busca híbrida para Context Engineering em sistemas de IA Agentic. Define hybrid search como a combinação de “busca léxica tradicional com compreensão semântica de LLMs e busca por similaridade de vetores”. Critica RAG puro baseado em vetores pelo problema de semantic loss ao fragmentar documentos. Apresenta tecnologias Elasticsearch como RRF, ES|QL e multi-stage retrieval para potencializar agentes de IA.
Definição central: “Context engineering representa a evolução além de prompt engineering - agentes de IA requerem informação adicional relevante e eficiente que o LLM precisa considerar ao gerar respostas.”

Principais Conceitos
Hybrid Search vs Abordagens Isoladas
A tabela abaixo resume as informações principais.

























Tipo de BuscaForçaFraquezaLéxicaDécadas de refinamento, precisão com termos exatosRequer terminologia exataSemânticaCaptura significado, independe de keywordsPerde intenção subjetiva, pode generalizar demaisHíbridaCombina forças de ambasComplexidade de implementação
Context Engineering vs Prompt Engineering
A tabela a seguir detalha os campos e seus valores.

























AspectoPrompt EngineeringContext EngineeringFocoCraftar a perguntaFornecer contexto relevanteEscopoInstrução únicaSistema completo de retrievalAplicaçãoLLMs simplesAgentic AI workflows

Detalhamento
O Problema do RAG Puro

[!warning] Semantic Loss
A crítica principal ao RAG baseado apenas em vetores:

Fragmentar documentos para embeddings causa “perda semântica”
“Vector databases são databases, não são search engines”


Tecnologias Elasticsearch para Context Engineering
Os dados abaixo mostram a estrutura e configurações.

























TecnologiaFunçãoMulti-stage retrievalRecuperação em etapas com reranking semânticoRRF (Reciprocal Rank Fusion)Mescla resultados de diferentes tipos de buscaInference APIIntegração com Cohere e Google Vertex AIES|QLQuery language combinando busca tradicional e semântica
Fluxo de Busca Híbrida
Query do usuário → Busca Léxica (keywords)
                → Busca Semântica (vetores)
                → RRF merge → Reranking → Resultados
Aplicação em Agentic AI
Hybrid search potencializa “agentic AI workflows” ao habilitar agentes a:

Entender semanticamente requisições do usuário
Raciocinar sobre passos de ação
Selecionar ferramentas apropriadas
Fundamentar respostas em contexto recuperado (não alucinações)


Mapa de Conceitos
O diagrama abaixo ilustra o fluxo do processo, mostrando as etapas e suas conexões.
flowchart TD
    A[Hybrid Search] --> B[Busca Léxica]
    A --> C[Busca Semântica]
    A --> D[Context Engineering]

    B --> B1[Keywords]
    B --> B2[Precisão]

    C --> C1[Vetores/Embeddings]
    C --> C2[Significado]

    D --> D1[Evolução de PE]
    D --> D2[Agentic AI]

    E[Elasticsearch] --> E1[RRF]
    E --> E2[ES|QL]
    E --> E3[Inference API]
    E --> E4[Multi-stage]

    F[Problemas RAG] --> F1[Semantic Loss]
    F --> F2[Fragmentação]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e1f5fe
    style F fill:#ffcdd2

Insights &#x26; Aprendizados
O que funcionou bem:

Crítica fundamentada ao RAG puro (semantic loss)
Explicação clara de hybrid search
Conexão direta entre retrieval e context engineering
Tecnologias específicas do Elasticsearch

O que posso adaptar para o MyMess:

Hybrid search: Implementar para retrieval de briefings de clientes
RRF: Combinar busca por keywords com semântica em bases de conhecimento
Multi-stage retrieval: Usar para refinar contexto antes de passar ao LLM
Semantic loss awareness: Cuidado ao fragmentar documentos longos

Ideias para aplicar:

Implementar Elasticsearch para base de conhecimento de marketing
Criar pipeline híbrido: léxico para termos técnicos + semântico para intenção
Testar RRF com diferentes pesos para casos de uso específicos
Evitar fragmentação excessiva de briefings longos


Recursos Adicionais

Elastic Search Labs - Context Engineering
Elastic
Elasticsearch
Elastic Search Labs


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