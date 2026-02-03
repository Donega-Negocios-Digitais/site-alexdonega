---
title: "Estrutura de Prompt (13 Seções)"
pubDate: 2025-12-30
---

Estrutura de Prompt (13 Seções)
Template completo em formato XML para criar prompts profissionais e estruturados.

Template Completo
&#x3C;prompt nome="nome" data="hoje" versao="1.0">

&#x3C;!-- 1. Regra 1: Confidencialidade e Foco -->
&#x3C;confidencialidade>
  &#x3C;!-- Definições sobre confidencialidade, segurança e foco na tarefa -->
&#x3C;/confidencialidade>

&#x3C;!-- 2. Inicialização do Prompt -->
&#x3C;inicializacao>
  &#x3C;!-- Explicação sobre a ação, persona, passos, contexto e formato da saída -->
&#x3C;/inicializacao>

&#x3C;!-- 3. Identificação do Problema -->
&#x3C;problema>
  &#x3C;!-- Descrição do problema que a resposta precisa resolver -->
&#x3C;/problema>

&#x3C;!-- 4. Definição da Ação -->
&#x3C;acao>
  &#x3C;!-- Tarefa específica que deve ser executada -->
&#x3C;/acao>

&#x3C;!-- 5. Definição da Persona -->
&#x3C;persona>
  &#x3C;!-- Características e perfil da IA para gerar a resposta adequada -->
&#x3C;/persona>

&#x3C;!-- 6. Instruções Gerais -->
&#x3C;instrucoes>
  &#x3C;!-- Diretrizes e regras gerais para a execução da tarefa -->
&#x3C;/instrucoes>

&#x3C;!-- 7. Explicação do Contexto -->
&#x3C;contexto>
  &#x3C;!-- Informações detalhadas sobre a situação e o público-alvo -->
&#x3C;/contexto>

&#x3C;!-- 8. Fornecimento de Dados -->
&#x3C;dados>
  &#x3C;!-- Informações essenciais fornecidas para a geração da resposta -->
&#x3C;/dados>

&#x3C;!-- 9. Passo a Passo Detalhado para Geração -->
&#x3C;passos>
  &#x3C;!-- Sequência de etapas a serem seguidas na execução da tarefa -->
&#x3C;/passos>

&#x3C;!-- 10. Definição do Formato -->
&#x3C;formato>
  &#x3C;!-- Estrutura detalhada da saída esperada -->
&#x3C;/formato>

&#x3C;!-- 11. Exemplo Prático -->
&#x3C;exemplo>
  &#x3C;!-- Exemplo completo ilustrando a saída desejada -->
&#x3C;/exemplo>

&#x3C;!-- 12. Estrutura Final da Saída -->
&#x3C;saida>
  &#x3C;!-- Organização final da resposta gerada -->
&#x3C;/saida>

&#x3C;!-- 13. Menu de Hotkeys -->
&#x3C;hotkeys>
  &#x3C;!-- Atalhos para facilitar a interação e personalização -->
&#x3C;/hotkeys>

&#x3C;/prompt>

Detalhamento das Seções











































































#SeçãoPropósito1ConfidencialidadeRegras de segurança e proteção2InicializaçãoVisão geral do prompt3ProblemaO que precisa ser resolvido4AçãoTarefa a executar5PersonaQuem a IA deve “ser”6InstruçõesRegras gerais7ContextoSituação e público8DadosInformações de entrada9PassosPasso a passo10FormatoEstrutura da saída11ExemploDemonstração12SaídaTemplate de resposta13HotkeysAtalhos úteis

Exemplo de Hotkeys
&#x3C;hotkeys>
  &#x3C;categoria nome="Comandos Gerais">
    &#x3C;atalho tecla="G">Gerar uma resposta completa com todas as seções.&#x3C;/atalho>
    &#x3C;atalho tecla="R">Refazer a resposta com um novo tom de voz.&#x3C;/atalho>
    &#x3C;atalho tecla="S">Gerar uma versão resumida da resposta.&#x3C;/atalho>
  &#x3C;/categoria>

  &#x3C;categoria nome="Personalização">
    &#x3C;atalho tecla="T">Gerar três variações de títulos.&#x3C;/atalho>
    &#x3C;atalho tecla="F">Ajustar o formato (Markdown, HTML, JSON).&#x3C;/atalho>
    &#x3C;atalho tecla="E">Expandir as explicações dos tópicos.&#x3C;/atalho>
  &#x3C;/categoria>

  &#x3C;categoria nome="Revisão e Ajustes">
    &#x3C;atalho tecla="V">Verificar coerência e clareza.&#x3C;/atalho>
    &#x3C;atalho tecla="P">Priorizar tópicos importantes.&#x3C;/atalho>
    &#x3C;atalho tecla="A">Ajustar tom e estilo.&#x3C;/atalho>
  &#x3C;/categoria>
&#x3C;/hotkeys>

Propriedades da nota

[!note]- Propriedades Gerais do Obsidian

Identificacao














CampoValorTítuloINPUT[text:titulo]

Conexões


































CampoValorPaiINPUT[suggester(optionQuery("")):pai]ColeçãoINPUT[inlineSelect(option(financeiro, Financeiro), option(growth, Growth), option(ia, IA), option(lideranca, Liderança), option(marketing, Marketing), option(negocios, Negócios), option(produtividade, Produtividade), option(pkm, PKM), option(saas, SaaS), option(tecnologia, Tecnologia), option(vendas, Vendas)):colecao]ÁreaINPUT[suggester(optionQuery("Esforços/Áreas")):area]ProjetoINPUT[suggester(optionQuery("#projeto")):projeto]AutorINPUT[suggester(optionQuery("Atlas/Pessoas")):pessoa]RelacionadoINPUT[inlineListSuggester(optionQuery(""), useLinks(true)):relacionado]

Classificação






















CampoValorTipoINPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]TagsINPUT[inlineList:tags]StatusINPUT[inlineSelect(option(nao_iniciado, Não Iniciado), option(em_andamento, Em Andamento), option(concluido, Concluído), option(pausado, Pausado), option(cancelado, Cancelado)):status]

Temporal


















CampoValorCriadoINPUT[date:data_criado]AtualizadoINPUT[date:data_atualizado]