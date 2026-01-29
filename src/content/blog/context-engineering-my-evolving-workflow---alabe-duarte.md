---
title: "Context Engineering My Evolving Workflow - Alabe Duarte"
pubDate: 2025-09-13
---

Context Engineering My Evolving Workflow - Alabe Duarte

[!compass] MyMess » Estudos » Engenharia de Contexto



[!info]+ Detalhes do Artigo
Ler: Context Engineering with Claude Code: My Evolving Workflow
Fonte: Alabe Duarte (Blog Pessoal)
Autores: Alabe Duarte (Software Engineer @ SafetyCulture, ex-ThoughtWorks)
Publicado: 13 de Setembro de 2025
Licença: Creative Commons Attribution-NonCommercial-ShareAlike 4.0


[!abstract]+ Materiais Complementares
Background do Autor

Software Engineer @ SafetyCulture
Ex-ThoughtWorks

Ferramentas Usadas

Neovim com claudecode.nvim plugin
Claude Code CLI

Técnicas Centrais

/clear para separação de fases
Test-first validation
Documentação incremental



[!tip]- Léxico
Tecnologia e IA

Context Building Through Dialogue: Explicar código entendido para validação
Strategic Context Clearing: Usar /clear entre fases para foco
Incremental Documentation: Criar arquivos focados por feature

Outros Conceitos


Test-First Validation: Testes como checkpoints de especificação
[!question]- Pontos para Aprofundar (Sugestão da IA)


Por que /clear entre fases funciona?

Investigar impacto na qualidade de resposta



Como balancear documentação incremental vs completa?

Testar diferentes abordagens



Qual o ponto ideal de delegação para Claude Code?

Definir limites de autonomia





[!robot]- Sugestões Complementares

Leituras Recomendadas:

Documentação claudecode.nvim
Claude Code best practices


Ferramentas Úteis:

Neovim - Editor com plugin Claude Code
claudecode.nvim - Plugin para integração


Exercícios Práticos:

Implementar workflow de 3 fases em projeto pessoal
Testar /clear entre diferentes tipos de tarefa





Resumo
Relato pessoal de Alabe Duarte (ex-ThoughtWorks) sobre seu workflow evolutivo com Claude Code. Descreve uma abordagem de 3 fases com separação estratégica de contexto usando /clear. O autor compartilha uma mudança filosófica sobre “code ownership”, tornando-se “mais pragmático” sobre quem escreve o código.
Insight central: “The craft still matters, but I’m less precious about being the one who types it all out.” - A qualidade importa, mas o autor é menos precioso sobre ser quem digita tudo.

Principais Conceitos
Workflow de 3 Fases
A tabela abaixo resume as informações principais.

























FaseFocoOutput1. Context BuildingExplicar código entendido para validaçãoArquivos markdown documentando features2. PlanningExplorar alternativas e desafiar sugestõesPlano documentado com reasoning3. ImplementationCódigo preciso com referênciasCódigo + commits
Técnica: Context Building Through Dialogue
Em vez de pedir ao Claude Code para explicar, o autor explica o que entendeu para validação:
❌ "Explain this code to me"
✅ "I understand this code does X, Y, Z. Is that correct?"
Benefício: Calibra entendimento compartilhado e gera documentação natural.

Detalhamento
Fase 1: Context Building Through Dialogue
Processo:

Explicar código que você entendeu (não pedir explicação)
Claude valida ou corrige entendimento
Resultado: arquivos markdown documentando features específicas


[!tip] Por que funciona
Calibra shared understanding entre você e Claude, resultando em documentação como subproduto natural.

Fase 2: Planning with Separation
Processo:

Executar /clear para limpar contexto anterior
Carregar apenas informação relevante para planning
Desafiar sugestões do Claude
Explorar alternativas
Documentar reasoning antes de implementar


[!warning] Anti-pattern
Pular direto para implementação sem documentar o “porquê” das decisões.

Fase 3: Precise Implementation
Processo:

Mais um /clear para focar em implementação
Usar Neovim com claudecode.nvim plugin
Seleção precisa de código como referência
Testes primeiro como checkpoints de especificação

Delegação de Commit Messages
O autor delega escrita de commit messages para Claude Code:





















Autor fazClaude Code fazGit workflow manualEscreve commit messages comprehensiveRevisa mensagemDescreve mudanças detalhadamenteConfirma commitMantém histórico rico
Mudança Filosófica

[!quote] Insight Pessoal
“I’ve become more pragmatic about code ownership. The craft still matters, but I’m less precious about being the one who types it all out.”

O autor reconhece que qualidade continua importante, mas a autoria do código se torna secundária quando assistido por IA.

Mapa de Conceitos
O diagrama abaixo ilustra o fluxo do processo, mostrando as etapas e suas conexões.
flowchart TD
    A[Evolving Workflow] --> B[3 Fases]
    A --> C[Técnicas]
    A --> D[Filosofia]

    B --> B1[Context Building]
    B --> B2[Planning]
    B --> B3[Implementation]

    C --> C1[/clear entre fases]
    C --> C2[Test-first validation]
    C --> C3[Documentação incremental]

    D --> D1[Pragmatismo]
    D --> D2[Craft matters]
    D --> D3[Less precious about authorship]

    B1 --> E[Explica para validar]
    B2 --> F[Desafia sugestões]
    B3 --> G[Neovim + claudecode.nvim]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0
    style D fill:#f3e5f5

Insights &#x26; Aprendizados
O que funcionou bem:

Separação clara de fases com /clear
Inversão: explicar para validar em vez de pedir explicação
Abordagem test-first como checkpoint
Honestidade sobre mudança filosófica

O que posso adaptar para o MyMess:

Workflow de 3 fases: Aplicar em projetos com clientes
Context clearing estratégico: Implementar em agentes
Test-first validation: Usar como padrão de qualidade

Ideias para aplicar:

Criar template de workflow de 3 fases
Desenvolver guia de “quando usar /clear”
Documentar limites de delegação para IA


Recursos Adicionais

Alabe Duarte - Context Engineering Workflow
claudecode.nvim
SafetyCulture


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