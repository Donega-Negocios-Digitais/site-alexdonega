---
title: "Introducing Agent Skills"
pubDate: 2025-10-16
---

Introducing Agent Skills

[!compass] IA » Claude » Agent Skills



[!info]+ Detalhes do Artigo
Ler: Introducing Agent Skills
Fonte: Anthropic (Blog Claude - Anúncio de Produto)
Publicado: 16 de outubro de 2025 (atualizado em 18 de dezembro de 2025)
Tempo de Leitura: 5 minutos


[!abstract]+ Materiais Complementares
Artigos Relacionados

Equipping Agents for the Real World with Agent Skills - Deep dive técnico
Agent Skills - Overview - Documentação completa

Documentação

Skills Quickstart
Anthropic Academy



[!tip]- Léxico

Skills: Pastas com instruções, scripts e recursos que Claude carrega conforme necessário
skill-creator: Skill built-in que fornece orientação interativa para criar novas skills
Code Execution Tool: Ferramenta beta necessária para skills na API



[!question]- Pontos para Aprofundar

Como empresas estão usando skills?

Box: transformar arquivos seguindo padrões organizacionais
Canva: expandir capacidades criativas de agentes





Resumo
Este é o anúncio oficial do lançamento de Agent Skills pela Anthropic. Skills são pastas que incluem instruções, scripts e recursos que Claude carrega conforme necessário - apenas quando relevante para a tarefa. O artigo destaca os quatro atributos fundamentais (Composable, Portable, Efficient, Powerful) e apresenta casos de uso de parceiros como Box e Canva.
Definição central:

Skills = Capacidades modulares que Claude acessa automaticamente quando relevantes
Proposta de valor = Criar uma vez, usar automaticamente em múltiplas conversas


Principais Conceitos
Conceito 1: Quatro Atributos Fundamentais
Skills possuem características que as tornam poderosas e práticas:

























AtributoDescriçãoComposableMúltiplas skills funcionam em conjunto automaticamentePortableFuncionam em Claude.ai, Claude Code e APIEfficientCarrega apenas informações mínimas quando necessárioPowerfulPode incluir código executável para tarefas especializadas
Conceito 2: Disponibilidade por Plataforma
Claude Apps (claude.ai):

Disponível para Pro, Max, Team e Enterprise
Invocação automática baseada na tarefa
Criação via skill-creator interativo

Plataforma de Desenvolvedores:

Integração via Messages API
Endpoint /v1/skills para gerenciamento programático
Requer Code Execution Tool beta

Conceito 3: Skills Pre-built pela Anthropic
A Anthropic fornece skills prontas para documentos:

Excel - Criar planilhas, analisar dados, gerar relatórios
PowerPoint - Criar e editar apresentações
Word - Criar e formatar documentos
PDF - Gerar documentos PDF formatados


Detalhamento
Seção 1: Casos de Uso - Parceiros

[!example] Box
Transforma arquivos em apresentações e planilhas seguindo padrões organizacionais específicos da empresa.


[!example] Canva
Planeja usar Skills para customizar agentes e expandir capacidades criativas.

Seção 2: Como Criar Skills
No Claude.ai:

Acesse Settings > Features
Use a skill skill-creator para orientação interativa
Upload como arquivo zip

Na API:

Use endpoint /v1/skills para upload
Inclua skill_id no parâmetro container
Habilite Code Execution Tool beta


Técnicas e Métodos
Técnica 1: Usar skill-creator
Conceito: Skill built-in que guia a criação de novas skills interativamente.
Implementação:

Inicie conversa no Claude.ai
Descreva o que você quer automatizar
O skill-creator gera a estrutura inicial
Refine e faça upload


[!tip] Quick Win
Comece descrevendo um workflow repetitivo que você faz frequentemente.

Técnica 2: Integração via API
Conceito: Gerenciamento programático de skills para automação.
Headers necessários:
code-execution-2025-08-25
skills-2025-10-02
files-api-2025-04-14

Mapa de Conceitos
O diagrama mostra os quatro atributos fundamentais de Skills e como se manifestam nas diferentes plataformas.
flowchart TD
    A[Agent Skills] --> B[Atributos]
    A --> C[Plataformas]

    B --> B1[Composable]
    B --> B2[Portable]
    B --> B3[Efficient]
    B --> B4[Powerful]

    C --> C1[Claude.ai]
    C --> C2[Claude Code]
    C --> C3[Claude API]

    C1 --> D[Pro/Max/Team/Enterprise]
    C3 --> E[Messages API + /v1/skills]

    style A fill:#e1f5fe
    style B fill:#c8e6c9
    style C fill:#fff3e0

Insights &#x26; Aprendizados
O que funcionou bem (casos documentados):

Box: Padronização de outputs organizacionais
Canva: Expansão de capacidades criativas

O que posso adaptar:

skill-creator: Usar para prototipagem rápida de novas skills
Skills de documento: Aproveitar Excel/PowerPoint/Word/PDF built-in


Recursos Adicionais
Documentação:

Agent Skills Overview
Skills Cookbook

Aprendizado:

Anthropic Academy - Cursos de desenvolvimento