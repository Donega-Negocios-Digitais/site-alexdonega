---
title: "Criando Templates Personalizados no Figma - BrandsDecoded"
pubDate: 2026-01-01
---

Criando Templates Personalizados no Figma - BrandsDecoded

[!info]- Detalhes da Aula
🎯 Objetivo: Dominar o processo completo de criação de templates personalizados no Figma para carrosséis do Instagram, incluindo configuração de variáveis, adaptação de prompts GPT e princípios fundamentais de design aplicados
🔗 Link de Acesso: Acessar projeto Figma
📖 Aula: Criando Templates Personalizados no Figma - BrandsDecoded
🎓 Curso: Curso - BrandsDecoded
👨‍🏫 Mentor: Leonardo Varricchio
🔖 Tags: #Figma #TemplateDesign #DesignSystem #CarrosselPersonalizado #ContentMachine #InteligênciaArtificial #PromptEngineering
📅 Criado em: 2025-11-11
📅 Última edição: ="[" + dateformat(date(today), "yyyy-MM-dd") + "](/blog/-dateformatdatetoday-yyyy-mm-dd-)" - $= dv.current().file.mtime


[!abstract]- Materiais Complementares

Agente Content Machine 3.0 - Acessar Agente
Agente Template Master 3.0 - Acessar Agente
Projeto Figma - Content Machine 3.0 - Acessar Projeto
Referências de Design no Behance:

Social Media Tecnologia
Social Media Agro
Carrossel Igreja Metodista
Criativos Carine Cechin
Design e Copy Mentora





[!example]- Referências de Design de Carrosséis
📱 Instagram - Exemplos Reais

Carrossel 1
Carrossel 2
Carrossel 3
Carrossel 4
Carrossel 5

🎨 Behance - Portfolios Profissionais

Social Media Tecnologia - Franquia
Social Media Agro
Carrossel Instagram - A Origem da Igreja Metodista
Criativos Carine Cechin
Carrosséis (Design e Copy) para Mentora de Mulheres
Projeto Carrossel - FalandoDeMercado
Carrosséis para Instagram - Agência Austral

🖼️ Canva - Templates de Referência

Template Canva



[!tip]- Prompt: Adaptador de Conteúdo para Template Personalizado
# Adaptador de Conteúdo para Template Personalizado

Você receberá um conteúdo original e deverá adaptá-lo exatamente para a estrutura de blocos especificada abaixo, respeitando rigorosamente o número de palavras definido para cada bloco.

## Estrutura do Template
- **Bloco 1**: [X] palavras
- **Bloco 2**: [Y] palavras  
- **Bloco 3**: [Z] palavras
[Continue listando todos os blocos...]

## Regras de Adaptação

1. **Quando o texto original tem MENOS palavras que o necessário:**
   - Expanda as ideias mantendo 100% da essência original
   - Adicione contexto, exemplos ou detalhamentos naturais
   - Preserve o tom e estilo do texto original
   - NUNCA invente informações que não estejam implícitas no original

2. **Quando o texto original tem MAIS palavras que o necessário:**
   - Reduza mantendo os pontos principais intactos
   - Priorize as informações mais impactantes
   - Mantenha a progressão lógica da narrativa
   - NUNCA perca a ideia central do conteúdo

3. **Nomenclatura dos blocos:**
   - Use sempre "texto" seguido do número (texto 1, texto 2, texto 3...)
   - Esta nomenclatura é OBRIGATÓRIA para funcionamento do plugin Figma

## Formato de Entrega

Entregue o conteúdo adaptado no seguinte formato:

texto 1 [Conteúdo adaptado com exatamente X palavras]
texto 2
[Conteúdo adaptado com exatamente Y palavras]
texto 3 [Conteúdo adaptado com exatamente Z palavras]

## Exemplo de Uso

**Input:**
"A inteligência artificial está transformando a forma como criamos conteúdo..."

**Estrutura solicitada:**
- texto 1: 15 palavras
- texto 2: 25 palavras
- texto 3: 30 palavras

**Output:**
texto 1 A inteligência artificial revoluciona a criação de conteúdo digital com velocidade e personalização sem precedentes.
texto 2 Criadores de conteúdo agora podem produzir materiais altamente personalizados em escala, mantendo qualidade editorial e adaptando mensagens para diferentes públicos automaticamente.
texto 3 Essa transformação permite que profissionais criativos foquem em estratégia e curadoria enquanto ferramentas de IA lidam com produção repetitiva. O resultado é conteúdo mais relevante, produzido com maior eficiência e alinhado precisamente com as necessidades de cada audiência específica.


[!quote]- Transcrição Completa da Aula
[Transcrição completa disponível no documento original]


📌 Resumo da Aula
Leonardo Varricchio apresenta um workshop completo sobre criação de templates personalizados no Figma para carrosséis do Instagram, abordando desde conceitos fundamentais da ferramenta até a criação do zero de um sistema de design completo. A aula foca especialmente em como adaptar o ChatGPT para trabalhar com diferentes estruturas de layout através de prompts customizados que respeitam número específico de blocos de texto e quantidade de palavras. Leonardo demonstra o processo completo criando dois carrosséis diferentes: um usando o template tradicional (adaptando conteúdo sobre WWE no YouTube) e outro criando um template completamente novo sobre IA e criatividade. A aula cobre nomenclatura correta de variáveis (texto 1, texto 2, etc.), uso de componentes, auto-layout, grids, princípios de design (hierarquia, espaçamento, contraste), e como resolver problemas comuns quando o plugin não reconhece os blocos de texto. Leonardo enfatiza que o Figma, embora originalmente criado para desenvolvimento de aplicativos, oferece vantagens significativas sobre o Canva para esse tipo de trabalho, especialmente pela facilidade de criar plugins personalizados.

🎨 INTRODUÇÃO AO FIGMA PARA CARROSSÉIS
Por Que Figma em Vez de Canva?
Vantagem decisiva do Figma:

Permite criar plugins de forma muito simplificada
Sistema de automação mais robusto para produção em escala
Maior controle sobre estrutura e nomenclatura de elementos

Sobre o Canva:

Permite criação de “aplicativos” (similar a plugins)
Possível adaptar a solução no futuro
Leonardo ainda não desenvolveu essa versão


🔧 CONCEITOS FUNDAMENTAIS DO FIGMA
1. Área de Trabalho (Canvas)
Diferenças entre ferramentas:

Figma/Illustrator: Sistema de área de trabalho aberta
Canva: Modelo mais fechado
Photoshop: Modelo intermediário

Característica principal: Você pode criar múltiplos elementos na mesma tela, mas para o plugin funcionar corretamente, deve trabalhar com estrutura específica.

2. Frame vs Retângulo
O Que é Frame?
Frame = Container inteligente que:
- Funciona como agrupamento avançado
- Cria máscara de corte automática
- Permite exportação individual
- Organiza elementos hierarquicamente
Diferença prática:
❌ Com Retângulo:

Elementos ficam soltos
Difícil gerenciar múltiplos slides
Exportação complicada
Sem relação hierárquica

✅ Com Frame:

Elementos contidos dentro de estrutura
Fácil manipulação de conjuntos
Exportação direta de cada slide
Hierarquia visual clara

Como Criar Frame
Atalho: Pressione F
Dimensões para Instagram:
Largura: 1080px
Altura: 1350px
Como saber essas dimensões?

Google (pesquisar “tamanho carrossel Instagram”)
Experiência profissional
Documentação oficial das plataformas


3. Sistema de Camadas (Layers)
Regra fundamental:
Camadas funcionam por PRIORIDADE:
- Quem está EM CIMA → Aparece na frente
- Quem está EMBAIXO → Aparece atrás
Organização típica de um slide:
Frame Principal (Slide 01)
├── Imagem de fundo (sempre embaixo)
├── Degradê ou overlay
├── Elementos gráficos
├── Textos
└── Logos/marcas (sempre em cima)

4. Componentes (Components)
O Que São Componentes?
Componente = Arquivo "mestre" que:
- Quando alterado, atualiza TODAS as instâncias
- Mantém consistência visual
- Facilita ajustes em massa
- Identificado por ícone de losango (◆)
Exemplo prático na aula:
Leonardo criou um componente para o rodapé com:

Nome da marca
Copyright
Informações de layout

Quando editou a cor no componente mestre, todos os slides atualizaram automaticamente.
Como Criar Componente
Método 1: Selecionar elementos + Ctrl + G (agrupar) + Botão direito → “Create Component”
Método 2: Selecionar elementos + clicar no ícone de componente na toolbar
Benefício principal: “Powered by @test” → Ao trocar a imagem no componente mestre, troca em todos os slides que usam aquele componente.

5. Auto Layout
O Que é Auto Layout?
Configuração avançada (originalmente para design de produto/apps) que Leonardo adaptou para carrosséis.
Função principal:
Conteúdo aumenta → Layout se adapta automaticamente
Conteúdo diminui → Layout se ajusta sozinho
Demonstração da aula:
COM Auto Layout:
Texto cresce → Frame expande
Texto diminui → Frame encolhe
Elementos mantêm relacionamento espacial

SEM Auto Layout:
Texto cresce → Frame permanece fixo
Texto vaza ou fica cortado
Necessário ajuste manual
Como Ativar Auto Layout
Atalho: Selecionar elemento + Apertar botão de Auto Layout na toolbar
Configurações importantes:
1. Direção do layout:

Vertical (elementos empilhados)
Horizontal (elementos lado a lado)

2. Comportamento de tamanho:

Fixed (Fixo): Tamanho não muda
Hug Contents (Abraçar conteúdo): Ajusta ao tamanho do conteúdo
Fill Container (Preencher container): Ocupa todo espaço disponível

Exemplo de uso na aula:
Leonardo mostrou dois grupos de texto dentro de um frame:

Grupo 1 com Auto Layout horizontal
Grupo 2 com Auto Layout horizontal
Frame principal com Auto Layout vertical

Resultado: Quando o texto aumenta, todo o layout se reorganiza perfeitamente.

6. Manipulação de Imagens
Como Adicionar Imagem a um Frame
Processo correto:

Criar retângulo (R) ou usar frame existente
Copiar imagem da web
Selecionar o retângulo/frame
Ctrl + V para colar

⚠️ ATENÇÃO: Se você apenas apertar Ctrl + V sem selecionar nada, a imagem substitui TUDO.
Modos de Preenchimento de Imagem
Fill (Preencher) ⭐ Mais usado
Preenche o espaço completamente
Mantém proporção cortando o excesso
Ideal para: Fundos, capas, imagens principais
Fit (Ajustar)
Mostra a imagem completa
Pode deixar espaços vazios
Ideal para: Logos, elementos que não podem ser cortados
Crop (Recortar)
Permite reposicionar a imagem dentro do frame
Você pode mover e redimensionar livremente
Ideal para: Ajustes finos de posição
Tile (Ladrilho)
Cria padrão repetido
Usado para criar texturas
Raramente usado em carrosséis
Recomendação de Leonardo: “A gente vai sempre usar o Fill ou o Crop. O Fill para o trabalho básico.”
Manipulação Avançada de Imagens
Aumentar/diminuir mantendo proporção:
Segurar SHIFT + Arrastar canto
Aumentar/diminuir de forma centralizada:
Segurar SHIFT + ALT + Arrastar canto
Travar proporção permanentemente:

Clicar no ícone de cadeado ao lado das dimensões
Leonardo prefere NÃO usar (acha que trava muito)

Ajustar imagem dentro do frame (sem mexer no frame):

Selecionar a imagem
Mudar para modo “Crop”
Reposicionar como preferir
Voltar para “Fill” se necessário


7. Grid System (Sistema de Grade)
Por Que Usar Grid?
Leonardo explica que para quem nunca fez design, o grid é fundamental porque:
Design é sobre:
├── Hierarquia (o que é mais importante)
├── Espaçamento (respiração entre elementos)
└── Contraste (diferença visual entre elementos)
O grid ajuda a estabelecer todos esses aspectos de forma consistente.
Como Ativar Grid no Figma
Configuração padrão usada na aula:
Layout Grid: 90px
O que isso faz: Divide a imagem em quadrados de 90x90px, criando uma malha visual que serve como guia.
Como usar na prática:
Headline: Alinhada com linha do grid
Subtítulo: Alinhada com outra linha
Imagens: Respeitam divisões do grid
Margens: Baseadas em múltiplos do grid
Exemplo de Leonardo: “Eu já sei onde eu vou colocar as minhas informações. Eu já tenho tudo aqui pronto na tela.”

🎨 PRINCÍPIOS DE DESIGN APLICADOS
1. Hierarquia Visual
Regra de Divisão por 2
Leonardo ensina uma regra fundamental para criar contraste de tamanho:
Tamanho principal: 96px
Dividido por 2: 48px (subtítulo)
Dividido novamente: 24px (textos menores)
Exemplo prático da aula:
Headline: 96px, Bold, Cor principal
Subtítulo: 48px, Regular, Cor secundária  
Texto corrido: 24px, Light, Cor terciária
Por que funciona? “Isso cria mais contraste ainda. A gente sempre diminui o tamanho das coisas em metade ou na mesma divisão.”

2. Alinhamento
Como Alinhar Elementos no Figma
Método 1: Alinhamento automático
1. Selecionar múltiplos elementos
2. Clicar nos botões de alinhamento na toolbar:
   - Alinhar à esquerda
   - Alinhar ao centro
   - Alinhar à direita
   - Alinhar ao topo
   - Alinhar ao meio vertical
   - Alinhar embaixo
Método 2: Alinhamento manual com grid
Usar as linhas do grid como referência visual
Arrastar elementos até "encaixar" nas linhas
Dica de Leonardo: “Ambos vão na mesma reta. Vai em cima da linha, o outro vai aqui em cima da outra linha, ambos na mesma coisa.”

3. Espaçamento e Respiração
Ajuste de Espaçamento Entre Linhas
Propriedade: Line Height (Altura de Linha)
Linha muito apertada: 100% ou menos
Linha confortável: 120-140%
Linha muito espaçada: 150%+
Como ajustar:

Selecionar texto
Painel direito → Line height
Usar seta para cima/baixo ou digitar valor

Exemplo da aula: Leonardo ajustou para 120% em textos longos para melhorar legibilidade.
Ajuste de Espaçamento Entre Elementos
Método 1: Com Auto Layout
Selecionar frame com Auto Layout
Ajustar "spacing" entre elementos
Todos os elementos se reorganizam automaticamente
Método 2: Manual
Selecionar elemento
Usar setas do teclado: movimento pequeno
SHIFT + Setas: movimento maior (10px por vez)

4. Tipografia Avançada
Evitando “Viúvas” no Texto
O que é viúva? Palavra solta na última linha de um parágrafo.
Exemplo ruim:
Este é um texto de exemplo que demonstra
o problema da viúva tipográfica no
design.
Exemplo bom:
Este é um texto de exemplo que demonstra o
problema da viúva tipográfica no design
profissional.
Como corrigir:
Método 1: Aumentar caixa de texto
Puxar lateral da caixa → Texto redistribui
Método 2: Diminuir caixa de texto
Apertar lateral da caixa → Força redistribuição
Método 3: Quebra manual
Adicionar Enter em ponto estratégico
Método 4: Ajustar tamanho da fonte
Reduzir 2-4px quando há muito texto
Exemplo: 44px → 40px
Leonardo sempre faz esse ajuste: “Eu sempre procuro fazer isso, inclusive também evitar aqui a chamada viúva, que é essa palavra que fica solta aqui.”
Equilíbrio de Linhas
Problema:
Linha 1: ████████████████████ (muito longa)
Linha 2: ████ (muito curta)
Solução:
Linha 1: ███████████████ (equilibrada)
Linha 2: ███████████ (equilibrada)
Como fazer: “Ou puxando para mais ou puxando para menos. Acho que funciona bem para cá.”
Uso de Pesos de Fonte (Font Weights)
Estratégia de Leonardo para textos longos:
Primeiro parágrafo: Light ou Regular
Segundo parágrafo: Black ou Bold (destaque)
Exemplo:
Este é o primeiro parágrafo explicando o conceito
de forma introdutória e estabelecendo contexto.

Esta é a frase-chave que merece destaque
e precisa ser memorizada pelo leitor.
Como aplicar:

Selecionar o trecho desejado
Painel direito → Font weight
Escolher: Light / Regular / Bold / Black


5. Uso de Degradê para Legibilidade
Por Que Usar Degradê?
Quando você coloca texto sobre imagem, muitas vezes o texto fica ilegível. O degradê resolve isso.
Estrutura em camadas:
Frame
├── Imagem de fundo
├── Degradê (overlay)
└── Texto (legível)
Como Aplicar Degradê no Figma
Processo detalhado:

Criar retângulo sobre a imagem (R)
Selecionar o retângulo
Painel direito → Fill
Mudar de “Solid” para “Linear Gradient”
Ajustar pontos do degradê:

Degradê típico para capa:
Ponto 1 (topo): Preto 0% → Transparente
Ponto 2 (meio): Preto 30% → Semi-transparente
Ponto 3 (baixo): Preto 100% → Opaco
Ajuste de opacidade:

Clicar em cada ponto do degradê
Ajustar slider de opacidade (0-100%)

Dica importante de Leonardo: “É muito importante a gente manter isso aqui. Eu não quero selecionar a imagem e apertar Ctrl+V porque senão ele substitui tudo. O que eu quero é selecionar essa parte e Ctrl+V, porque aí eu substituo apenas ali e eu mantenho preso o meu degradê.”

🔤 NOMENCLATURA DE VARIÁVEIS (CRÍTICO)
Por Que a Nomenclatura é Importante?
O plugin que aplica o texto automaticamente no Figma precisa identificar corretamente cada bloco de texto. Se a nomenclatura estiver errada, o plugin não funciona.
Padrão Obrigatório
Nomenclatura correta:
- texto 1
- texto 2
- texto 3
- texto 4
...
- texto 11
❌ NÃO USE:

Bloco 1, Bloco 2 (plugin não reconhece)
Texto1, Texto2 (sem espaço)
TEXTO 1 (maiúsculas)
Text 1 (em inglês)

✅ USE SEMPRE:

texto 1 (minúsculo, com espaço, em português)

Como Renomear Camadas no Figma
Atalho rápido:
Ctrl + R = Renomear camada selecionada
Processo em massa:

Selecionar múltiplas camadas (Shift + Click)
Arrastar para selecionar
Ctrl + R para renomear
Digitar nome base (ex: “texto”)
Figma adiciona automaticamente números sequenciais

Erro comum na aula:
Leonardo descobriu que nomeou alguns blocos como “Bloco 1, Bloco 2” em vez de “texto 1, texto 2”. O plugin não funcionou.
Solução: Renomeou todos para “texto X” e funcionou perfeitamente.
Verificação de Nomenclatura
Antes de usar o plugin:

Abrir painel de Layers (lado esquerdo)
Verificar se TODOS os blocos de texto estão nomeados:

texto 1
texto 2
texto 3
texto 4
texto 5
texto 6

Verificar se não há:

Números faltando (texto 1, texto 3… ❌)
Duplicados (texto 2, texto 2… ❌)
Nomenclatura errada (Bloco 1… ❌)




🤖 CRIAÇÃO DE PROMPT PERSONALIZADO
O Problema a Resolver
Quando você cria um template novo com estrutura diferente, precisa adaptar o ChatGPT para:

Gerar conteúdo com número EXATO de blocos
Respeitar quantidade ESPECÍFICA de palavras em cada bloco
Expandir ideias se houver poucas palavras
Condensar conteúdo se houver muitas palavras
Manter 100% da ideia original

Processo de Criação do Prompt
Passo 1: Identificar Estrutura do Template
Leonardo demonstra o processo:
1. Selecionar todos os blocos de texto
2. Usar ferramenta de pincel (P) para marcar visualmente
3. Contar blocos: "4, 5, 6, 7, 8, 9, 10, 11... são 11 blocos"
4. Copiar texto já formatado em cada bloco
Passo 2: Criar Mapa de Estrutura
Leonardo envia para o ChatGPT:
Primeiramente, você consegue reconhecer os 11 blocos de texto?

Eu coloquei o conteúdo que você escreveu aqui já perfeito.

Então está pronto aqui o meu conteúdo. Isso, quantas palavras tem em cada bloco de texto?
O que o ChatGPT faz: Analisa o conteúdo e retorna algo como:
Bloco 1: 15 palavras
Bloco 2: 25 palavras
Bloco 3: 30 palavras
Bloco 4: 20 palavras
Bloco 5: 28 palavras
Bloco 6: 18 palavras
Bloco 7: 35 palavras
Bloco 8: 22 palavras
Bloco 9: 27 palavras
Bloco 10: 24 palavras
Bloco 11: 19 palavras
Passo 3: Solicitar Geração do Prompt
Comando de Leonardo:
Agora eu quero que você gere um prompt (parecido com o seu original) 
para você mesma ser capaz de pegar um conteúdo e adaptar exatamente 
para essa quantidade de blocos de texto e seguindo o número de palavras.

Se tiver menos palavras, você deve ser capaz de expandir a ideia.
Se tiver mais, você terá que reduzir o conteúdo — mas sempre tentando 
se manter o mais fiel possível ao texto original e 100% da ideia.
Passo 4: Ajustar Nomenclatura
Erro que aconteceu na aula:
O ChatGPT gerou o prompt usando “bloco 1, bloco 2…” mas o Figma precisa de “texto 1, texto 2…”
Correção de Leonardo:
Quero que você troque "bloco" por "texto" no prompt.
Faz sentido!
Resultado: Prompt corrigido com nomenclatura certa.
Passo 5: Refinar Quantidade de Palavras
Problema identificado:
Alguns blocos ficaram com texto insuficiente:

texto 4: Muito curto
texto 6: Muito curto
texto 11: Muito curto

Comando de ajuste:
No texto 4, 6 e 11 ficou com pouco texto.
Nos textos 4, 6 e 11 quero mais texto.
Em seguida, atualize o prompt por favor.
O que isso faz:

Regenera os blocos específicos com mais conteúdo
Atualiza o prompt master para refletir novas contagens
Mantém outros blocos intactos


Prompt Final Estruturado
Com base no processo de Leonardo, aqui está a estrutura do prompt adaptado:
# Adaptador de Conteúdo para Template [Nome do Template]

Você receberá um conteúdo original e deverá adaptá-lo exatamente para 
a estrutura abaixo, respeitando rigorosamente o número de palavras.

## Estrutura do Template
- texto 1: [X] palavras
- texto 2: [Y] palavras  
- texto 3: [Z] palavras
[... continuar até o último bloco]

## Regras de Adaptação

1. **Quando o texto original tem MENOS palavras:**
   - Expanda as ideias mantendo 100% da essência
   - Adicione contexto ou detalhamentos naturais
   - Preserve tom e estilo originais
   - NUNCA invente informações não implícitas

2. **Quando o texto original tem MAIS palavras:**
   - Reduza mantendo pontos principais intactos
   - Priorize informações mais impactantes
   - Mantenha progressão lógica
   - NUNCA perca a ideia central

3. **Nomenclatura obrigatória:**
   - Use "texto" seguido do número (texto 1, texto 2...)
   - Esta nomenclatura é OBRIGATÓRIA para o plugin Figma

## Formato de Entrega

texto 1
[Conteúdo adaptado com exatamente X palavras]

texto 2
[Conteúdo adaptado com exatamente Y palavras]

texto 3
[Conteúdo adaptado com exatamente Z palavras]

Como Usar o Prompt Criado
Opção 1: Criar Custom GPT Dedicado

Ir ao ChatGPT
Criar novo Custom GPT
Colar o prompt na seção de instruções
Salvar e usar sempre que precisar daquele template

Opção 2: Usar em Chat Normal
Leonardo demonstra salvando o prompt em comentário no Figma:

Selecionar frame do template
Tecla C para criar comentário
Colar prompt completo
Sempre que precisar, copiar e usar

Vantagem desse método: “Sempre que eu quiser mexer nesse layout, eu só venho aqui e pego, e aí eu ativo isso no chat normal ou no LLM estagiário mesmo, não tem problema nenhum, e aí já está funcionando.”
Opção 3: Salvar em Documento Externo

Criar documento no Notion/Google Docs
Manter biblioteca de prompts por template
Copiar e usar quando necessário


🔌 USO DO PLUGIN NO FIGMA
Ativando o Plugin
Atalho:
Ctrl + Alt + P = Abre o plugin
Ou:
Menu superior → Plugins → [Nome do Plugin]
Processo Completo de Uso
1. Preparar o conteúdo
Ter texto adaptado pelo ChatGPT com nomenclatura correta:
texto 1
[conteúdo]

texto 2
[conteúdo]
...
2. Copiar conteúdo completo
Selecionar TUDO desde "texto 1" até o último bloco
Ctrl + C para copiar
3. Selecionar frame no Figma
Clicar no frame do template (ex: "Slide 01")
4. Abrir e aplicar plugin
Ctrl + Alt + P
Plugin abre com interface
Clicar em "Aplicar texto" ou similar
5. Aguardar processamento
Plugin busca cada "texto X" no conteúdo
Localiza camada correspondente no Figma
Aplica automaticamente
Problemas Comuns e Soluções
Problema 1: Plugin não funciona
Sintomas:

Nada acontece ao aplicar
Apenas alguns blocos são preenchidos
Erro no plugin

Causas possíveis:

Nomenclatura errada:

❌ Bloco 1, Bloco 2...
❌ Texto1, Texto2...
❌ TEXTO 1, TEXTO 2...
✅ texto 1, texto 2...

Números faltando ou duplicados:

❌ texto 1, texto 3, texto 4 (pulou o 2)
❌ texto 1, texto 2, texto 2 (duplicado)
✅ texto 1, texto 2, texto 3 (sequência correta)

Camadas bloqueadas:

Verificar se camadas não estão com cadeado
Desbloquear antes de aplicar plugin

Frame não selecionado:

Selecionar o frame pai que contém todos os textos
Não selecionar texto individual
Solução de Leonardo na aula:
“Às vezes pessoal, não sei por quê, tem que apertar várias vezes para funcionar… Dá uma travadinha também, mas como você pode ver, não demora muito tempo.”
Problema 2: Alguns blocos não preenchem
Como diagnosticar:

Abrir painel Layers
Verificar nome de cada camada de texto
Comparar com conteúdo que você copiou
Corrigir discrepâncias

Exemplo da aula:
Conteúdo tinha: texto 4, texto 6, texto 11
Figma tinha: Bloco 4, Bloco 6, Bloco 11

Resultado: Plugin não encontrou e não preencheu

Solução: Renomear no Figma para texto 4, texto 6, texto 11
Problema 3: Texto transborda do frame
Causas:

Quantidade de palavras maior que esperado
Tamanho da fonte inadequado
Frame muito pequeno

Soluções:
Opção 1: Ajustar no ChatGPT
"O texto 7 ficou muito longo. Reduza para [X] palavras."
Reaplique o plugin
Opção 2: Diminuir fonte
Selecionar texto
Reduzir tamanho (ex: 44px → 40px)
Usar em todos os slides para manter consistência
Opção 3: Aumentar frame (se possível)
Ajustar altura do frame
Reposicionar elementos abaixo
Dica de Leonardo: “Bastante texto… vou mudar o tamanho da fonte para 40.”

🎨 CRIANDO TEMPLATE DO ZERO
Preparação Inicial
1. Criar Novo Arquivo
Página inicial do Figma → Casinha
Clicar em "Design File" (ou equivalente)
Tela em branco é criada
2. Definir Dimensões
Atalho: F (criar frame)
Dimensões: 1080 x 1350 px
Como saber as dimensões?

Google: “tamanho carrossel Instagram”
Experiência profissional
Sempre padronizar para plataforma específica

3. Ativar Grid System
Selecionar frame
Painel direito → Layout Grid
Configuração sugerida: 90px
Para que serve: “Na prática, design é sobre a gente ter hierarquia, espaçamento, contraste. Então eu já sei onde eu vou colocar as minhas informações.”

Estrutura de Template Completo
Leonardo cria um template do zero durante a aula. Aqui está a estrutura completa:
Elementos da Capa (Slide 01)
Frame Principal (1080x1350)
│
├── Imagem de Fundo
│   ├── Imagem principal
│   └── Degradê (preto 0% → 100%)
│
├── Headline Principal
│   ├── Tamanho: 96px
│   ├── Peso: Bold
│   ├── Cor: Branco
│   └── Posição: Alinhada ao grid
│
├── Subtítulo
│   ├── Tamanho: 48px (metade do principal)
│   ├── Peso: Regular
│   ├── Cor: Branco 80%
│   └── Posição: Abaixo da headline
│
├── Elementos Gráficos
│   ├── 5 estrelas (indicador de qualidade)
│   │   ├── Cor: Amarelo (#FFFF00)
│   │   └── Posição: Canto superior ou inferior
│   │
│   ├── Seta "Continue" (CTA visual)
│   │   ├── Cor: Amarelo (mesma das estrelas)
│   │   └── Posição: Canto inferior
│   │
│   └── Marca d'água (opcional)
│       ├── Texto pequeno
│       └── Opacidade reduzida
│
└── Componente Rodapé
    ├── Nome da marca
    ├── Copyright 2025
    └── Powered by [Nome]
Elementos dos Slides Internos (Slides 02-11)
Frame Slide (1080x1350)
│
├── Componente Rodapé (reutilizado)
│
├── Headline do Slide
│   ├── Tamanho: 62px
│   ├── Peso: Black
│   ├── Cor: Variável (branco ou amarelo)
│   └── Frame com Auto Layout
│
├── Frame de Conteúdo (Auto Layout vertical)
│   │
│   ├── Bloco de Texto 1
│   │   ├── texto 1: 40px, Regular
│   │   └── texto 2: 40px, Black (destaque)
│   │
│   ├── Imagem ou Elemento Visual
│   │   ├── Bordas arredondadas (opcional)
│   │   ├── Tamanho: Respeitando grid
│   │   └── Posição: Alinhada ao conteúdo
│   │
│   └── Bloco de Texto 2
│       ├── texto 3: 40px, Regular
│       └── texto 4: 40px, Black (destaque)
│
├── Elementos Decorativos
│   ├── Círculo amarelo (grafismo)
│   ├── Número do slide
│   │   ├── Tamanho: Grande
│   │   ├── Cor: Amarelo
│   │   └── Posição: Consistente em todos os slides
│   │
│   └── Barrinha de progresso (opcional)
│       ├── Cor: Amarelo
│       └── Largura: Proporcional ao slide
│
└── Variações de Cor de Fundo
    ├── Versão Clara (fundo branco, texto preto)
    ├── Versão Escura (fundo preto, texto branco)
    └── Versão Colorida (fundo ciano/cor específica)

Processo de Construção Passo a Passo
Parte 1: Criando a Capa
1. Adicionar imagem de fundo
Criar retângulo (R) tamanho do frame
Copiar imagem da web
Selecionar retângulo → Ctrl+V
Ajustar posição com Crop se necessário
2. Aplicar degradê para legibilidade
Criar retângulo sobre a imagem
Fill → Linear Gradient
Configurar pontos:
- Topo: Preto 0% (transparente)
- Meio: Preto 40%
- Baixo: Preto 100% (opaco)
3. Criar headline principal
Tecla T (texto)
Digitar headline
Tamanho: 96px
Peso: Bold
Fonte: Sugestão de Leonardo = Helvetica
Cor: Branco (#FFFFFF)
4. Criar subtítulo
Tecla T novamente
Digitar subtítulo
Tamanho: 48px (metade do principal)
Peso: Regular
Cor: Branco 80% opacidade
5. Alinhar elementos
Selecionar headline + subtítulo
Ctrl+G (agrupar)
Alinhar à esquerda usando toolbar
Posicionar sobre linhas do grid
6. Adicionar elementos gráficos
Criar componente de estrelas:
- Usar ícone de estrela do Figma
- Duplicar 5 vezes
- Cor: Amarelo
- Agrupar e posicionar

Criar seta:
- Desenhar ou usar ícone
- Cor: Amarelo (mesma das estrelas)
- Posição: Canto inferior direito
- Adicionar texto "Arraste para o lado"
7. Criar componente de rodapé
Criar textos:
- Nome da marca
- Copyright 2025
- "Powered by [nome]"

Posicionar alinhado ao grid
Tamanho pequeno (12-14px)
Botão direito → Create Component

Parte 2: Criando Slides Internos
1. Duplicar frame base
Selecionar frame da capa
Alt + Arrastar (duplica)
Ou Ctrl+D
2. Remover elementos da capa
Deletar imagem de fundo grande
Deletar headline principal
Manter apenas componente de rodapé
3. Criar estrutura de conteúdo
Headline do slide:
- T para texto
- Tamanho: 62px
- Peso: Black
- Cor: Variável por slide

Frame de conteúdo:
- F para frame
- Ativar Auto Layout
- Direção: Vertical
- Spacing: 40px
4. Adicionar blocos de texto
Primeiro bloco:
- texto 1: 40px, Regular, Branco
- texto 2: 40px, Black, Branco (destaque)
- Agrupar em frame com Auto Layout

Segundo bloco:
- texto 3: 40px, Regular, Branco
- texto 4: 40px, Black, Branco (destaque)
- Agrupar em frame com Auto Layout
5. Adicionar elementos visuais
Imagem:
- Retângulo com imagem
- Bordas arredondadas (opcional): 20px
- Posição entre blocos de texto

Círculo decorativo:
- Ferramenta círculo (O)
- Cor: Amarelo
- Posição: Próximo ao texto principal

Número do slide:
- Texto grande (80-100px)
- Cor: Amarelo
- Posição: Consistente em todos os slides
6. Aplicar Auto Layout estrategicamente
Selecionar todos os elementos de conteúdo
Apertar botão Auto Layout
Configurar:
- Direção: Vertical
- Hug Contents (abraçar conteúdo)
- Spacing: 30-40px entre elementos
7. Criar variações de cor
Versão Clara (Slide 02):
- Fundo: Branco
- Textos: Preto
- Destaques: Amarelo

Versão Escura (Slide 03):
- Fundo: Preto
- Textos: Branco
- Destaques: Amarelo

Versão Colorida (Slide 04):
- Fundo: Ciano ou cor específica
- Textos: Branco ou Preto (contraste)
- Destaques: Amarelo

Parte 3: Sistemização do Template
1. Padronizar nomenclatura
Selecionar todas as camadas de texto
Ctrl+R para renomear
Nomenclatura: texto 1, texto 2, texto 3...
Verificar sequência completa sem pulos
2. Criar componentes reutilizáveis
Rodapé: Já é componente
Headline padrão: Create Component
Blocos de texto: Create Component
Elementos gráficos: Create Component

Benefício: Editar uma vez atualiza tudo
3. Organizar layers hierarquicamente
Estrutura recomendada:
Frame Principal
├── Componentes (pasta)
│   ├── Rodapé
│   ├── Header
│   └── Elementos gráficos
├── Slides (pasta)
│   ├── Capa
│   ├── Slide 02
│   ├── Slide 03
│   └── ...
└── Assets (pasta)
    ├── Imagens
    └── Logos
4. Documentar o template
Criar slide de instruções:
- Quantidade de slides
- Número de blocos por slide
- Contagem de palavras por bloco
- Paleta de cores usada
- Fontes utilizadas
- Tamanhos padrão
5. Testar o plugin
Criar conteúdo de teste no ChatGPT
Copiar e aplicar no Figma
Verificar se todos os blocos preenchem
Ajustar nomenclatura se necessário

Checklist de Finalização do Template
Antes de considerar o template pronto:
✅ Estrutura:

 Todos os frames têm dimensões corretas (1080x1350)
 Grid system ativado e utilizado
 Auto Layout aplicado onde faz sentido

✅ Nomenclatura:

 Todas as camadas de texto nomeadas como “texto X”
 Sequência numérica completa (sem pulos)
 Sem duplicatas

✅ Componentes:

 Rodapé transformado em componente
 Elementos repetidos componentizados
 Fácil atualização em massa

✅ Tipografia:

 Hierarquia clara (96px → 48px → 24px)
 Pesos variados (Bold, Regular, Light)
 Line height adequado (120-140%)
 Sem “viúvas” tipográficas

✅ Cores:

 Paleta definida e consistente
 Contraste adequado para legibilidade
 Variações de slides (claro/escuro)

✅ Alinhamento:

 Elementos alinhados ao grid
 Espaçamentos consistentes
 Margens padronizadas

✅ Prompt:

 Prompt personalizado criado
 Testado e funcional
 Salvo em local acessível (comentário Figma ou documento externo)

✅ Plugin:

 Testado com conteúdo real
 Todos os blocos preenchem corretamente
 Sem erros ou travamentos


💡 DICAS AVANÇADAS DE LEONARDO
1. Workflow Otimizado
Sequência recomendada de trabalho:
1. Pesquisar referências (Behance, Instagram, Pinterest)
2. Criar estrutura base no Figma
3. Aplicar grid e definir hierarquias
4. Criar conteúdo com ChatGPT (usando prompt adaptado)
5. Aplicar texto com plugin
6. Ajustar tipografia (viúvas, equilíbrio de linhas)
7. Trocar/ajustar imagens
8. Exportar
Ordem de ajustes finos:
Prioridade 1: Capa (mais importante)
↓
Prioridade 2: Slides com muito texto
↓
Prioridade 3: Slides com imagens
↓
Prioridade 4: Slides finais
Leonardo: “A capa pessoal, eu prefiro ficar aqui o mais tempo possível. Não tem problema nenhum na minha opinião porque a capa é o que vai fazer as pessoas abrirem ou não o nosso post.”

2. Gestão de Imagens
Fontes recomendadas por Leonardo:
Para busca genérica:

Google Images (filtro “tamanho grande”)
Pinterest
Unsplash (não mencionado, mas implícito)

Problema atual do Google: “Recentemente atualizou e por algum motivo essa função aqui de tamanho está bugada, o que é problema pra gente porque a gente sempre quer imagens grandes.”
Solução:

Filtrar manualmente por tamanho
Procurar imagens acima de 1000x1000px
Preferir qualidade a perfeição de enquadramento (pode ajustar no Figma)

Estratégia de seleção:
Capa: Foto impactante, alta qualidade, boa luz
↓
Slides internos: Podem ser mais genéricas
↓
Slides finais: Reforçar identidade visual
Como testar rapidamente:

Copiar imagem
Selecionar frame no Figma
Colar (Ctrl+V)
Se não funcionar, deletar e tentar próxima

Leonardo testa múltiplas imagens até achar a ideal: “Vou testar só o seguinte… Vou pegar outro lutador pra ver se tem uma foto melhor.”

3. Uso de Degradê Estratégico
Quando usar:

Texto sobre foto (sempre)
Criar profundidade visual
Direcionar olhar do leitor

Configurações testadas por Leonardo:
Degradê para legibilidade máxima:
Ponto 1 (topo): Preto 0%
Ponto 2 (1/3): Preto 30%
Ponto 3 (2/3): Preto 70%
Ponto 4 (baixo): Preto 100%
Degradê sutil (imagem já escura):
Ponto 1 (topo): Preto 0%
Ponto 2 (baixo): Preto 50%
Dica crítica: “Sempre copiar o degradê antes de trocar imagem, senão perde tudo.”

4. Princípios de Contraste
Leonardo aplica contraste em múltiplas dimensões:
Contraste de tamanho:
Headline: 96px (gigante)
vs
Subtítulo: 48px (metade)
vs
Texto corrido: 24px (1/4 do principal)
Contraste de peso:
Palavra-chave: Black (peso máximo)
vs
Contexto: Regular ou Light
Contraste de cor:
Elemento principal: Amarelo vibrante (#FFFF00)
vs
Fundo: Preto ou branco
vs
Detalhes: Cinza médio
Contraste de opacidade:
Informação primária: 100%
vs
Informação secundária: 50-80%
vs
Elemento decorativo: 30%

5. Sistemização de Cores
Paleta do template criado na aula:
Cor Principal: Amarelo (#FFFF00)
- Usado em: CTAs, destaques, números de slides

Cor de Fundo Variável:
- Slide 01 (capa): Imagem + degradê preto
- Slide 02: Branco (#FFFFFF)
- Slide 03: Preto (#000000)
- Slide 04: Ciano (#00FFFF)

Cor de Texto Variável:
- Sobre preto/imagem: Branco (#FFFFFF)
- Sobre branco: Preto (#000000)
- Sobre ciano: Preto (#000000)

Cor de Destaque em Texto:
- Sempre a cor primária (Amarelo)
- Usada para palavras-chave
Como aplicar em massa:
Selecionar todos os textos similares
Shift+Click em cada um
Mudar cor no painel direito
Todos atualizam simultaneamente

6. Componentes Estratégicos
Leonardo transforma em componente apenas elementos que:


Repetem em TODOS os slides:

Rodapé com marca
Copyright
Elementos de identidade



Têm alta probabilidade de mudança:

Informações de contato
Ano de copyright
Nome da marca



Economizam tempo significativo:

Elementos com múltiplas propriedades
Estruturas complexas



O que NÃO deve ser componente:

Conteúdo único de cada slide
Elementos que variam muito
Estruturas simples que não repetem


7. Gestão de Atalhos no Figma
Atalhos mais usados por Leonardo na aula:
F = Frame (criar estrutura base)
R = Retângulo (criar shapes e containers de imagem)
T = Texto (criar caixas de texto)
O = Círculo (criar elementos decorativos)
C = Comentário (salvar prompts e anotações)

Ctrl+G = Agrupar elementos
Ctrl+R = Renomear camada
Ctrl+D = Duplicar
Ctrl+Alt+P = Abrir plugin

Shift = Manter proporção ao redimensionar
Alt+Arrastar = Duplicar enquanto move
Ctrl+Z = Desfazer (usado MUITO)

Setas = Mover 1px por vez
Shift+Setas = Mover 10px por vez

8. Troubleshooting Avançado
Problema: Plugin travando
Sintomas observados na aula: “Às vezes pessoal, não sei por quê, tem que apertar várias vezes para funcionar. Dá uma travadinha também.”
Soluções:

Aguardar 5-10 segundos antes de reaplicar
Fechar e reabrir o plugin
Recarregar o arquivo Figma (Ctrl+R)
Verificar se há muitos elementos selecionados
Simplificar estrutura de layers temporariamente

Problema: Nomenclatura bagunçada
Se você perceber tarde demais:
Método rápido de correção:
1. Selecionar todas as camadas de texto (Ctrl+Click)
2. Ctrl+R para renomear
3. Digitar "texto"
4. Figma numera automaticamente
5. Verificar ordem está correta
6. Se não estiver, renomear individualmente os desorganizados
Problema: Texto ultrapassando frame
Leonardo faz isso:
Se apenas 1-2 slides:
→ Ajustar manualmente diminuindo fonte

Se 3+ slides:
→ Voltar ao ChatGPT
→ Pedir redução de palavras nos blocos específicos
→ Reaplicar plugin

9. Filosofia de Design de Leonardo
Citações importantes da aula:
Sobre perfeccionismo: “Não tem certo nem errado isso aqui, é só guia né pessoal.”
Sobre ajustes manuais: “Isso é uma coisa que enfim, gostando ou não, ajuda a melhorar a qualidade. No fundo, a gente quer isso, a gente quer ser muito rápido, mas a gente também quer fazer conteúdo maneiro, uma coisa bonita, senão não tem sentido né pessoal.”
Sobre processo iterativo: “Vamos testar pra gente ter o feeling aqui… Acho que não funciona… Segue ruim… Vamos procurar mais.”
Sobre o Figma: “É programa com esses menus pouco estranho, pouco complexo demais, e para quem não conhece a ferramenta, mesmo o design, eles podem ter dificuldade de usar.”
Sobre sistemização: “Na prática, design é sobre a gente ter hierarquia, a gente ter espaçamento, a gente ter contraste. É muito sobre isso, é muito sobre ser consistente, sobre ter o padrão.”

📚 RECURSOS COMPLEMENTARES
Referências de Design Mencionadas
Leonardo recomenda estudar carrosséis profissionais no Behance para entender estrutura, hierarquia e uso de cores:
Exemplos citados:

Social Media Tecnologia - Franquia
Social Media Agro
Carrossel Igreja Metodista
Criativos Carine Cechin
Design e Copy para Mentora de Mulheres

O que observar nesses exemplos:

Estrutura de slides
Uso de cores e contrastes
Hierarquia tipográfica
Elementos gráficos
Espaçamento e respiração


Ferramentas Auxiliares
Para extração de texto:

YouTube Transcript
Come.AI (mencionado, mas com bugs recentemente)
Tactic (alternativa funcional)

Para geração de conteúdo:

ChatGPT (GPTs customizados)
Content Machine 3.0 (agente específico)
Template Master 3.0 (agente de adaptação)
“Furacão” (agente para headlines, mencionado na aula)
“Murta” (outro agente, mencionado para copywriting)

Para busca de imagens:

Google Images (filtro tamanho grande)
Pinterest
Behance (para referências de design)


Próximos Passos Sugeridos
1. Praticar criação de template básico

Seguir processo demonstrado na aula
Criar 1 capa + 3 slides internos
Testar com plugin

2. Adaptar prompt para seu nicho

Definir quantidade de blocos ideal
Estabelecer contagem de palavras
Criar prompt personalizado

3. Construir biblioteca de componentes

Criar rodapés para diferentes marcas
Desenvolver elementos gráficos reutilizáveis
Sistematizar paletas de cores

4. Iterar e melhorar

Postar carrosséis
Analisar performance
Ajustar templates baseado em resultados


✅ CHECKLIST COMPLETO DE IMPLEMENTAÇÃO
Fase 1: Preparação (30 min)

 Instalar/acessar Figma
 Criar conta no ChatGPT (se ainda não tiver)
 Baixar templates base disponibilizados por Leonardo
 Estudar 2-3 carrosséis de referência no Behance
 Definir nicho e estilo visual desejado

Fase 2: Primeiro Template (2-3 horas)

 Abrir Figma e criar novo arquivo
 Criar frame 1080x1350px
 Ativar grid 90px
 Desenvolver capa:

 Adicionar imagem de fundo
 Aplicar degradê
 Criar headline (96px)
 Criar subtítulo (48px)
 Adicionar elementos gráficos
 Criar componente de rodapé


 Desenvolver slides internos (mínimo 3):

 Headline do slide (62px)
 Blocos de texto com Auto Layout
 Adicionar imagens/elementos visuais
 Aplicar variações de cor


 Nomear TODAS as camadas:

 texto 1, texto 2, texto 3…
 Verificar sequência completa
 Sem pulos ou duplicatas



Fase 3: Criação do Prompt (1 hora)

 Preencher template com conteúdo de teste
 Contar palavras em cada bloco
 Copiar estrutura completa
 Enviar para ChatGPT com instrução:

 “Primeiramente, você consegue reconhecer os [X] blocos de texto?”
 “Quantas palavras tem em cada bloco de texto?”
 “Gere um prompt para você mesma ser capaz de pegar conteúdo e adaptar exatamente para essa quantidade de blocos e número de palavras”
 “Troque ‘bloco’ por ‘texto’ no prompt”


 Testar prompt gerado:

 Enviar conteúdo de teste
 Verificar se saída usa nomenclatura correta
 Ajustar blocos com pouco/muito texto


 Salvar prompt:

 Criar comentário no Figma (tecla C)
 Ou salvar em documento externo



Fase 4: Teste do Plugin (30 min)

 Gerar conteúdo com prompt finalizado
 Copiar conteúdo completo (Ctrl+C)
 Selecionar frame no Figma
 Abrir plugin (Ctrl+Alt+P)
 Aplicar texto
 Verificar se todos os blocos preencheram
 Se não funcionou:

 Verificar nomenclatura das layers
 Corrigir discrepâncias
 Tentar novamente



Fase 5: Ajustes Finais (1-2 horas)

 Corrigir “viúvas” tipográficas
 Equilibrar linhas de texto
 Ajustar tamanhos de fonte se necessário
 Substituir imagens placeholder por finais
 Verificar hierarquia visual
 Testar variações de cor
 Garantir consistência entre slides

Fase 6: Exportação (15 min)

 Selecionar todos os slides (Shift+Click)
 Renomear em sequência (Ctrl+R → digitar “01”)
 Ir ao painel de exportação (canto inferior direito)
 Configurar exportação:

 Formato: PNG ou JPG
 Resolução: 2x para melhor qualidade
 Ou manter 1x se arquivo ficar muito pesado


 Clicar em “Export [X] layers”
 Salvar em pasta organizada

Fase 7: Documentação (30 min)

 Criar slide de instruções no Figma
 Documentar:

 Quantidade de slides no template
 Número de blocos por slide
 Contagem de palavras de cada bloco
 Paleta de cores (códigos hex)
 Fontes utilizadas e tamanhos
 Instruções especiais de uso


 Salvar prompt em local acessível
 Criar guia rápido de uso

Fase 8: Sistemização (contínuo)

 Usar template em 3-5 carrosséis
 Coletar feedback e métricas
 Iterar baseado em performance
 Criar variações do template
 Documentar melhorias e aprendizados


🎯 RESUMO DOS CONCEITOS-CHAVE
1. Hierarquia é Fundamental
Sempre trabalhar com múltiplos níveis de importância visual através de tamanho, peso, cor e posição.
2. Nomenclatura é Crítica
Plugin depende 100% de nomenclatura correta: “texto 1”, “texto 2”, etc. Sem exceções.
3. Componentes Economizam Tempo
Transformar em componente tudo que repete e pode mudar (rodapés, marcas, elementos de identidade).
4. Auto Layout é Poder
Usar Auto Layout para criar estruturas que se adaptam automaticamente ao conteúdo variável.
5. Grid Organiza Tudo
Sistema de grid garante alinhamento consistente e profissionalismo visual.
6. Prompt é Personalizável
Cada template novo exige prompt específico adaptado à sua estrutura e contagem de palavras.
7. Degradê é Essencial
Sempre usar degradê sobre imagens para garantir legibilidade de texto.
8. Design é Iterativo
Testar, ajustar, melhorar. Perfeição vem com prática e refinamento constante.
9. Consistência Vence Criatividade
Melhor ter template simples e consistente do que complexo e desorganizado.
10. Automação + Manual = Qualidade
Plugin automatiza estrutura, mas ajustes manuais elevam qualidade final.

Mensagem Final de Leonardo:
“A ideia também não é ser um processo lento ou chato… No fundo, a gente quer ser muito rápido, mas a gente também quer fazer conteúdo maneiro, uma coisa bonita, senão não tem sentido né pessoal… É só mostrar pra vocês como é que é fácil. Desde que a gente siga [o processo], ficam mais claros porque dá pra fazer no Figma e como é que ele funciona. É uma ferramenta muito boa, muito prática para a gente trabalhar.”

Aqui está sua nota completa, Diego! 🎨
Ela está estruturada exatamente como o template BrandsDecoded, focando especialmente na parte que você pediu: criação de templates personalizados, prompts adaptados e nomenclatura correta das variáveis.
A nota cobre: ✅ Conceitos fundamentais do Figma (Frame, Auto Layout, Componentes) ✅ Processo completo de criação do prompt personalizado ✅ Nomenclatura crítica das variáveis (texto 1, texto 2…) ✅ Passo a passo de criação de template do zero ✅ Troubleshooting detalhado ✅ Checklist completo de implementação
Está pronta para ser salva no seu Obsidian! 🚀

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