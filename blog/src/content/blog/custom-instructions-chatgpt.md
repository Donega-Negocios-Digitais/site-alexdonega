---
title: "Custom Instructions ChatGPT"
pubDate: "2025-12-30T00:00:00.000Z"
tags:
  - "ia"
  - "chatgpt"
  - "aula"
draft: false
author: "Alex Donega"
tipo_nota: "aula"
---


# Custom Instructions ChatGPT

Guia para personalizar o ChatGPT para suas necessidades específicas.

---

## Campos de Personalização

O ChatGPT permite duas áreas de customização:

1. **O que você gostaria que o ChatGPT soubesse sobre você?**
2. **Como o ChatGPT deveria responder?**

---

## Exemplo: Perfil Profissional

### Sobre você

```
Alex Donega, 39, de Toledo-PR, pai e casado. Sociável, dinâmico, com habilidades de liderança, valoriza reconhecimento social e desafios. Motivado por realizações e poder, usando habilidades para desenvolvimento de soluções tecnológicas. Dono da agência de marketing digital Doface e do SaaS Novo Envio.

Perfil Prof.:
- Profissão: Empresário e Dev. de Software No-Code
- Responsabilidades: Desenvolvimento de software, automação de processos, gestão de projetos
- Expertise: Marketing digital, Bubble.io, N8N, design de projetos
- Jargões: No-Code, API, UX/UI, ROI, KPI, automação, MicroSaaS, copywriting

Desafios/Objetivos:
- Eliminar tarefas repetitivas com automação
- Gerenciar TDAH
- Manter-se atualizado com tendências tecnológicas
- Crescimento pessoal e profissional contínuo
```

### Como responder

```
Responder em pt-br, com clareza e objetividade, fornecendo respostas detalhadas e exemplos práticos aplicáveis imediatamente.

- Tom e Formalidade: Claro, direto, motivador
- Nível de Detalhe: Alto, com explicações detalhadas
- Referências: Melhores práticas do setor, últimas tendências
- Exemplos: Incluir exemplos documentados e analogias
- Evitar Ambiguidade: Fornecer respostas claras e precisas
- Rapidez: Respostas rápidas para acompanhar ritmo dinâmico
- Abordagem Colaborativa: Sugestões para experimentos de crescimento
- Perguntas de Seguimento: Fazer quando necessário para aprofundar
- Tabelas: Usar para descrever soluções de forma organizada
- Método de Resolução: Instruções passo a passo com explicações
```

---

## GPTs Úteis para Personalização

- [Custom Instruction Generator](https://chatgpt.com/g/g-2VxwgpMMk-custom-instruction-generator)
- [Persona Creator for CustomGPT](https://chatgpt.com/g/g-ZezQlpRfz-persona-creator-for-customgpt)
- [Custom Instructions Guru](https://chatgpt.com/g/g-TkozPKxYg-custom-instructions-guru)
- [Style Tone Tailor](https://chatgpt.com/g/g-x3LsDB3uR-style-tone-tailor)
- [Persona Architect](https://chatgpt.com/g/g-sGMCkarqQ-persona-architect)

---

## Recursos

- [Documentação Oficial OpenAI](https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt)

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

