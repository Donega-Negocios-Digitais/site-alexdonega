---
title: "template-artigo-alex"
pubDate: 2026-01-01
---

[!info]+ Detalhes do Artigo
Objetivo: [O que este artigo promete entregar?]
Fonte: [Nome do site/blog]
Autor: VIEW[{pessoa}]
Link: VIEW[{url}][link]
Publicado: VIEW[{data_criado}]
Tipo: VIEW[{tipo_conteudo}]


[!abstract]+ Materiais Complementares
Videos Relacionados

Título do vídeo

Artigos Relacionados

Título do artigo

Ferramentas Mencionadas

Ferramenta - Descrição breve



[!tip]- Léxico

Conceito 1: Definição breve
Conceito 2: Definição breve



[!robot]- Sugestões da IA

Leituras Recomendadas:

Recurso 1


Ferramentas Úteis:

Ferramenta 1





Resumo Executivo
[Síntese do artigo em 3-5 linhas - o que foi abordado e o valor entregue]

Números-Chave

















MétricaValorMétrica 1ValorMétrica 2Valor

Conteúdo Principal
Seção 1: [Título]
[Conteúdo]
Seção 2: [Título]
[Conteúdo]
Seção 3: [Título]
[Conteúdo]

Advertências Importantes

[!warning] Avisos Críticos
1. [Título do Aviso]
[Descrição do caveat/limitação]
2. [Título do Aviso]
[Descrição do caveat/limitação]


Insights &#x26; Aprendizados
O que funcionou bem:

[Insight 1]
[Insight 2]

O que posso adaptar:

[Adaptação 1]
[Adaptação 2]

Ideias para aplicar:

[Ideia 1]
[Ideia 2]


Próximos Passos

 [Ação 1]
 [Ação 2]
 [Ação 3]


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