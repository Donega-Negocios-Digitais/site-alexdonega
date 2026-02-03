---
title: "MCP Model Context Protocol - Obsidian Publish"
pubDate: 2024-11-01
---

MCP Model Context Protocol - Obsidian Publish

[!compass] MyMess » Estudos » Engenharia de Contexto



[!info]+ Detalhes do Artigo
Ler: MCP - Model Context Protocol
Fonte: Obsidian Publish + Anthropic (Oficial)
Autores: David Soria Parra, Justin Spahr-Summers (Anthropic)
Publicado: Novembro 2024


[!abstract]+ Materiais Complementares
3 Primitives do MCP

Prompts - Instruções/templates preparados
Resources - Dados estruturados (documentos, snippets)
Tools - Funções executáveis pelo modelo

Adoção da Indústria

OpenAI (Março 2025)
Google DeepMind (Abril 2025)
Block, Apollo, Zed, Replit, Sourcegraph



[!tip]- Léxico
Ferramentas e Recursos

MCP: Model Context Protocol - padrão aberto para conectar IA a ferramentas externas
USB-C para IA: Analogia - interface universal para sistemas de IA

Tecnologia e IA


JSON-RPC: Protocolo leve de comunicação usado pelo MCP


Primitives: Tipos de mensagens (Prompts, Resources, Tools)
[!question]- Pontos para Aprofundar (Sugestão da IA)


Como criar um MCP Server personalizado?

Estudar SDKs disponíveis



Quais são as vulnerabilidades de segurança?

Explorar prompt injection, tool permissions



Como integrar MCP com Obsidian?

Testar obsidian-memory-mcp





[!robot]- Sugestões Complementares

Leituras Recomendadas:

Documentação oficial Anthropic
Curso Introduction to MCP (Anthropic)


Ferramentas Úteis:

Claude Desktop - Cliente MCP nativo
Desktop Extensions - Instalação simplificada
MCP SDKs - Múltiplas linguagens


Exercícios Práticos:

Instalar MCP Server com desktop extension
Criar servidor personalizado para vault Obsidian





Resumo
Artigo sobre Model Context Protocol (MCP), padrão aberto criado pela Anthropic em Novembro 2024 para conectar sistemas de IA a ferramentas e dados externos. Funciona como “USB-C para aplicações de IA” - interface universal padronizada. Usa arquitetura cliente-servidor com JSON-RPC e define 3 tipos de primitives (Prompts, Resources, Tools). Adotado por OpenAI (Março 2025) e Google DeepMind (Abril 2025) como padrão de-facto da indústria.
Definição central: “Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems.”

Principais Conceitos
O que é MCP?
A tabela abaixo resume as informações principais.





























AspectoDescriçãoTipoPadrão aberto (open-source)CriadoresDavid Soria Parra, Justin Spahr-Summers (Anthropic)LançamentoNovembro 2024FunçãoPadronizar integração de IA com ferramentas/dados externosComunicaçãoJSON-RPC (remote procedure call)
3 Primitives do MCP
A tabela a seguir detalha os campos e seus valores.

























PrimitiveFunçãoExemploPromptsInstruções/templates preparadosTemplates de análise, formataçãoResourcesDados estruturadosDocumentos, snippets, schemasToolsFunções executáveisLeitura de arquivos, chamadas API
Arquitetura Cliente-Servidor
User → AI Host → MCP Client → MCP Server → Data Source
                              ↓
                      JSON-RPC Communication

Detalhamento
Adoção da Indústria
Os dados abaixo mostram a estrutura e configurações.



































Empresa/PlataformaDataStatusAnthropicNov 2024CriadorBlock, Apollo2024Early adoptersZed, Replit, Sourcegraph2024-2025Integração em devtoolsOpenAIMarço 2025ChatGPT desktop, Agents SDKGoogle DeepMindAbril 2025Gemini models
Casos de Uso
A tabela abaixo resume as informações principais.

























CasoDescriçãoAssistente pessoalAcesso a Google Calendar + NotionDev toolsClaude Code gera app web a partir de design FigmaEnterpriseChatbots conectam múltiplos databases3D DesignIA cria designs no Blender e imprime em 3D
Instalação Simplificada
Com Desktop Extensions (introduzidas em 2025):

Single-click install
Não precisa configurar JSON manualmente
Não precisa gerenciar dependências

Considerações de Segurança

[!warning] Vulnerabilidades Identificadas (Abril 2025)

Prompt injection: Contexto malicioso pode manipular IA
Tool permissions: Combinação de tools pode exfiltrar arquivos
Lookalike tools: Ferramentas falsas podem substituir legítimas



Mapa de Conceitos
O diagrama abaixo ilustra o fluxo do processo, mostrando as etapas e suas conexões.
flowchart TD
    A[Model Context Protocol] --> B[Arquitetura]
    A --> C[Primitives]
    A --> D[Adoção]

    B --> B1[Cliente-Servidor]
    B --> B2[JSON-RPC]
    B --> B3[Host IA]

    C --> C1[Prompts]
    C --> C2[Resources]
    C --> C3[Tools]

    D --> D1[Anthropic]
    D --> D2[OpenAI]
    D --> D3[Google DeepMind]
    D --> D4[Devtools]

    E[Segurança] --> E1[Prompt Injection]
    E --> E2[Tool Permissions]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#ffcdd2

Insights &#x26; Aprendizados
O que funcionou bem:

Analogia USB-C clara e memorável
Primitives bem definidos (Prompts, Resources, Tools)
Adoção massiva da indústria
Desktop Extensions simplificam instalação

O que posso adaptar para o MyMess:

MCP Servers: Criar servidor para conectar agentes a bases de conhecimento
Resources: Expor briefings de clientes como resources estruturados
Tools: Criar ferramentas customizadas para workflows de marketing
Segurança: Implementar validação de contexto (anti-injection)

Ideias para aplicar:

Implementar obsidian-memory-mcp para base de conhecimento
Criar MCP Server para integrar CRM com agentes
Desenvolver tools personalizados para automação de campanhas
Testar desktop extensions para instalação simplificada


Recursos Adicionais

Anthropic - Introducing MCP
MCP Documentation
MCP GitHub
Anthropic Courses - Introduction to MCP
Getting Started Guide


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