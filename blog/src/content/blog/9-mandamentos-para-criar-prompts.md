---
title: "9 Mandamentos para Criar Prompts"
pubDate: "2025-12-30T00:00:00.000Z"
tags:
  - "ia"
  - "prompting"
  - "aula"
draft: false
author: "Alex Donega"
tipo_nota: "aula"
---


# 9 Mandamentos para Criar Prompts

Guia prático com os princípios fundamentais para criar prompts eficazes.

---

## 1. Seja claro e específico

- **Importância:** Clareza evita respostas ambíguas.
- **Técnicas:** Use linguagem simples, direta e detalhada.

| Ambíguo | Claro |
| --- | --- |
| Escreva sobre marketing. | Escreva um resumo curto (até 50 palavras) sobre 3 estratégias eficazes de marketing digital para pequenas empresas. |

---

## 2. Forneça contexto suficiente

- **Importância:** Contexto claro melhora a precisão das respostas.
- **Técnicas:** Inclua informações relevantes sobre público, objetivos e detalhes importantes.

| Sem contexto | Com contexto |
| --- | --- |
| Crie uma descrição para um smartphone. | Crie uma descrição breve (até 100 palavras) para um smartphone intermediário focado na qualidade da câmera, desempenho ágil e custo-benefício, destinado a jovens adultos. |

---

## 3. Especifique o formato e a extensão da saída

- **Importância:** Garante que a resposta esteja alinhada às expectativas.
- **Técnicas:** Defina claramente o tipo, tamanho e estrutura desejada.

```
Liste 4 benefícios do exercício físico regular:
1.
2.
3.
4.
```

---

## 4. Use formatação e estrutura

- **Importância:** Melhora a compreensão da IA e direciona respostas claras.
- **Técnicas:** Utilize listas numeradas, tópicos ou tabelas.

```
Principais vantagens do trabalho remoto:
1.
2.
3.
```

---

## 5. Dê exemplos e demonstrações

- **Importância:** Exemplos ajudam a IA a entender exatamente o que você espera.

```
Crie um slogan impactante seguindo o exemplo abaixo:
Exemplo: "Simplicidade e inovação em cada detalhe."
Produto: Fones de ouvido sem fio
Slogan:
```

---

## 6. Utilize técnicas eficazes de perguntas

- **Importância:** Perguntas direcionam e aprofundam o raciocínio da IA.
- **Técnicas:** Perguntas abertas ou sequenciais para explorar ideias.

```
Quais são 3 maneiras práticas de melhorar a gestão do tempo?
Como cada uma pode ser aplicada facilmente no dia a dia?
```

---

## 7. Utilize sempre o formato XML

- **Importância:** Promove comunicação estruturada e organizada com a IA.

Veja [Formato XML em Prompts](/blog/formato-xml-em-prompts) para detalhes.

```xml
<produto>
  <nome>Smartphone X</nome>
  <descrição>Smartphone intermediário com câmera de alta qualidade.</descrição>
  <público-alvo>Jovens adultos</público-alvo>
</produto>
```

---

## 8. Garanta a Confidencialidade e Proteção

- **Importância:** Evita vazamentos, protege informações sensíveis e previne exploração indevida do prompt.
- **Técnicas:** Adicione instruções explícitas de confidencialidade, limites claros de resposta e prevenção de engenharia reversa.

Veja [Proteção Prompt Injection](/blog/proteo-prompt-injection) para mais detalhes.

---

## 9. Defina claramente a estrutura esperada da resposta

- **Importância:** Evita respostas desorganizadas e assegura que o resultado siga exatamente o padrão desejado.
- **Técnicas:** Indique explicitamente as seções obrigatórias, ordem dos conteúdos e detalhes internos da estrutura.

```xml
<saida>
  <titulo>[Título do conteúdo]</titulo>
  <introducao>[Breve introdução do tema]</introducao>
  <conteudo>
    <secao1>[Detalhes da primeira seção]</secao1>
    <secao2>[Detalhes da segunda seção]</secao2>
  </conteudo>
  <conclusao>[Frase de fechamento]</conclusao>
</saida>
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

