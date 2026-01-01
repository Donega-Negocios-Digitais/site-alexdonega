---
title: "Estrutura de Prompt (13 Seções)"
pubDate: "2025-12-30T00:00:00.000Z"
tags:
  - "ia"
  - "prompting"
  - "aula"
  - "template"
draft: false
author: "Alex Donega"
tipo_nota: "aula"
---


# Estrutura de Prompt (13 Seções)

Template completo em [formato XML](/blog/formato-xml-em-prompts) para criar prompts profissionais e estruturados.

---

## Template Completo

```xml
<prompt nome="nome" data="hoje" versao="1.0">

<!-- 1. Regra 1: Confidencialidade e Foco -->
<confidencialidade>
  <!-- Definições sobre confidencialidade, segurança e foco na tarefa -->
</confidencialidade>

<!-- 2. Inicialização do Prompt -->
<inicializacao>
  <!-- Explicação sobre a ação, persona, passos, contexto e formato da saída -->
</inicializacao>

<!-- 3. Identificação do Problema -->
<problema>
  <!-- Descrição do problema que a resposta precisa resolver -->
</problema>

<!-- 4. Definição da Ação -->
<acao>
  <!-- Tarefa específica que deve ser executada -->
</acao>

<!-- 5. Definição da Persona -->
<persona>
  <!-- Características e perfil da IA para gerar a resposta adequada -->
</persona>

<!-- 6. Instruções Gerais -->
<instrucoes>
  <!-- Diretrizes e regras gerais para a execução da tarefa -->
</instrucoes>

<!-- 7. Explicação do Contexto -->
<contexto>
  <!-- Informações detalhadas sobre a situação e o público-alvo -->
</contexto>

<!-- 8. Fornecimento de Dados -->
<dados>
  <!-- Informações essenciais fornecidas para a geração da resposta -->
</dados>

<!-- 9. Passo a Passo Detalhado para Geração -->
<passos>
  <!-- Sequência de etapas a serem seguidas na execução da tarefa -->
</passos>

<!-- 10. Definição do Formato -->
<formato>
  <!-- Estrutura detalhada da saída esperada -->
</formato>

<!-- 11. Exemplo Prático -->
<exemplo>
  <!-- Exemplo completo ilustrando a saída desejada -->
</exemplo>

<!-- 12. Estrutura Final da Saída -->
<saida>
  <!-- Organização final da resposta gerada -->
</saida>

<!-- 13. Menu de Hotkeys -->
<hotkeys>
  <!-- Atalhos para facilitar a interação e personalização -->
</hotkeys>

</prompt>
```

---

## Detalhamento das Seções

| # | Seção | Propósito |
|---|-------|-----------|
| 1 | Confidencialidade | Regras de segurança e proteção |
| 2 | Inicialização | Visão geral do prompt |
| 3 | Problema | O que precisa ser resolvido |
| 4 | Ação | Tarefa a executar |
| 5 | Persona | Quem a IA deve "ser" |
| 6 | Instruções | Regras gerais |
| 7 | Contexto | Situação e público |
| 8 | Dados | Informações de entrada |
| 9 | Passos | Passo a passo |
| 10 | Formato | Estrutura da saída |
| 11 | Exemplo | Demonstração |
| 12 | Saída | Template de resposta |
| 13 | Hotkeys | Atalhos úteis |

---

## Exemplo de Hotkeys

```xml
<hotkeys>
  <categoria nome="Comandos Gerais">
    <atalho tecla="G">Gerar uma resposta completa com todas as seções.</atalho>
    <atalho tecla="R">Refazer a resposta com um novo tom de voz.</atalho>
    <atalho tecla="S">Gerar uma versão resumida da resposta.</atalho>
  </categoria>

  <categoria nome="Personalização">
    <atalho tecla="T">Gerar três variações de títulos.</atalho>
    <atalho tecla="F">Ajustar o formato (Markdown, HTML, JSON).</atalho>
    <atalho tecla="E">Expandir as explicações dos tópicos.</atalho>
  </categoria>

  <categoria nome="Revisão e Ajustes">
    <atalho tecla="V">Verificar coerência e clareza.</atalho>
    <atalho tecla="P">Priorizar tópicos importantes.</atalho>
    <atalho tecla="A">Ajustar tom e estilo.</atalho>
  </categoria>
</hotkeys>
```

---
## Propriedades da nota

> [!note]- Propriedades Gerais do Obsidian
>
>> **Identificacao**
>
> | Campo      | Valor                    |
> |:-----------|:-------------------------|
> | **Título** | `INPUT[text:titulo]`     |
>
>> **Conexões**
>
> | Campo           | Valor                                                                 |
> |:----------------|:----------------------------------------------------------------------|
> | **Pai**         | `INPUT[suggester(optionQuery("")):pai]`                               |
> | **Coleção**     | `INPUT[inlineSelect(option(financeiro, Financeiro), option(growth, Growth), option(ia, IA), option(lideranca, Liderança), option(marketing, Marketing), option(negocios, Negócios), option(produtividade, Produtividade), option(pkm, PKM), option(saas, SaaS), option(tecnologia, Tecnologia), option(vendas, Vendas)):colecao]` |
> | **Área**        | `INPUT[suggester(optionQuery("Esforços/Áreas")):area]`                         |
> | **Projeto**     | `INPUT[suggester(optionQuery("#projeto")):projeto]`                   |
> | **Autor**       | `INPUT[suggester(optionQuery("Atlas/Pessoas")):pessoa]`                      |
> | **Relacionado** | `INPUT[inlineListSuggester(optionQuery(""), useLinks(true)):relacionado]` |
>
>> **Classificação**
>
> | Campo      | Valor                                                                 |
> |:-----------|:----------------------------------------------------------------------|
> | **Tipo**   | `INPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]` |
> | **Tags**   | `INPUT[inlineList:tags]`                                              |
> | **Status** | `INPUT[inlineSelect(option(nao_iniciado, Não Iniciado), option(em_andamento, Em Andamento), option(concluido, Concluído), option(pausado, Pausado), option(cancelado, Cancelado)):status]` |
>
>> **Temporal**
>
> | Campo          | Valor                      |
> |:---------------|:---------------------------|
> | **Criado**     | `INPUT[date:data_criado]`       |
> | **Atualizado** | `INPUT[date:data_atualizado]`   |

