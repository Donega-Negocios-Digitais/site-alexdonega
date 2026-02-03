---
title: "Agente VisualPrompt Pro"
pubDate: 2026-01-01
---

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


[!note]- 📚 Propriedades da Aula





















CampoValorCursoINPUT[suggester(optionQuery("")):curso_pai]URL da AulaINPUT[text(placeholder(https://...)):url_aula]DuraçãoINPUT[text:duracao]