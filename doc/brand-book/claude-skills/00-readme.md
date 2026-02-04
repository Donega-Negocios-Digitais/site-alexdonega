---
name: indice-skills-brand-book
description: Índice mestre para skills de documentação de projeto e brand book. Use ao criar documentação técnica, estabelecer padrões de projeto ou fazer onboarding em novos codebases.
---

# Coleção de Skills - Brand Book

## Visão Geral

Esta coleção contém **8 skills genéricas e agnósticas de projeto** para criar documentação técnica abrangente e estabelecer padrões de projeto. Cada skill segue a especificação Agent Skills da Anthropic e pode ser usada de forma independente ou em conjunto.

**Estas skills NÃO estão atreladas a nenhum projeto específico** - são guias reutilizáveis que ajudam a criar documentação como o brand book no diretório pai, ou auxiliam na seleção de tecnologias ao iniciar novos projetos.

## Skills Disponíveis

### 01. seletor-arquitetura-site.md
**Propósito:** Auxilia escolha entre arquiteturas SSG, SSR, Híbrida, SPA e MPA com matrizes de decisão detalhadas, árvores de decisão visuais e critérios de avaliação de trade-offs.

**Quando usar:**
- Iniciando novos projetos e decidindo arquitetura
- Avaliando mudanças arquiteturais
- Documentando decisões de estratégia de renderização
- Planejando migrações entre paradigmas
- Revisando escolhas com stakeholders

**Cobre:**
- Workflow com checklist de 8 passos
- 5 modelos arquiteturais detalhados (SSG, SSR, Híbrida, SPA, MPA)
- Matriz de decisão com 5 tipos de página
- Árvore de decisão visual
- Framework de classificação de rotas
- Template de documentação de decisão (ADR)
- Stacks típicas por modelo
- Exemplos práticos de uso

### 02. guia-stack-tecnologico.md
**Propósito:** Cria documentação técnica de stack tecnológico incluindo inventário completo de dependências com versões, scripts npm, arquivos de configuração centrais e arquitetura em camadas.

**Quando usar:**
- Iniciando novos projetos web
- Documentando stacks existentes
- Avaliando adoção de tecnologias
- Dar onboarding em equipes
- Planejando migrações de framework

**Cobre:**
- Workflow com checklist de 8 passos
- Tabelas de dependências com "Por que está no projeto"
- Scripts npm com saídas esperadas
- Arquitetura em 4 camadas (UI, Conteúdo, Assets, Build/Deploy)
- Matriz de decisão (pode vs. requer alinhamento)
- Template de documentação final
- Exemplos práticos de uso

### 03. guia-arquitetura-projeto.md
**Propósito:** Cria documentação abrangente de arquitetura de projeto incluindo estrutura completa de pastas com responsabilidades, contratos por diretório, convenções de nomenclatura, fluxos de implementação e workflows visuais.

**Quando usar:**
- Iniciando novos projetos e decidindo arquitetura
- Avaliando mudanças arquiteturais
- Documentando decisões de estratégia de renderização
- Planejando migrações entre paradigmas
- Revisando escolhas com stakeholders

**Cobre:**
- Workflow com checklist de 8 passos
- 5 modelos arquiteturais detalhados (SSG, SSR, Híbrida, SPA, MPA)
- Matriz de decisão com 5 tipos de página
- Árvore de decisão visual
- Framework de classificação de rotas
- Template de documentação de decisão (ADR)
- Stacks típicas por modelo
- Exemplos práticos de uso

### 04. guia-sistema-cores.md
**Propósito:** Cria documentação abrangente de sistema de cores incluindo design tokens, variáveis CSS, padrões de nomenclatura semântica, integração com frameworks CSS e estratégias de temas.

**Quando usar:**
- Estabelecendo design systems
- Documentando padrões de cores
- Criando diretrizes de marca
- Planejando implementação de tema (claro/escuro)
- Migrando entre versões de framework CSS

**Cobre:**
- Workflow com checklist de 10 passos
- Identificação de fonte de verdade (tabela)
- Padrão de definição de tokens CSS
- Integração com Tailwind 3 + migração Tailwind 4
- Tabela de uso de tokens com classes Tailwind
- Convenções de nomenclatura semântica
- Sistema expandido com todos tokens necessários
- Estratégia de temas (light/dark)
- Exemplos práticos de uso

### 05. guia-sistema-tipografia.md
**Propósito:** Cria documentação abrangente de sistema tipográfico incluindo inventário de fontes com origens e pesos, hierarquia completa de tamanhos, regras de composição, padrões responsivos e diretrizes de acessibilidade.

**Quando usar:**
- Estabelecendo sistemas tipográficos
- Documentando uso de fontes existentes
- Criando diretrizes tipográficas de marca
- Planejando seleção de fontes para novos projetos
- Padronizando tipografia através de design systems

**Cobre:**
- Workflow com checklist de 11 passos
- Inventário de fontes (origem, cadeia de fallback, papel)
- Tabela de hierarquia de tamanhos (8 níveis)
- 5 regras de composição bem definidas
- 4 exemplos de implementação com código Astro
- Configuração de framework (Tailwind)
- Estratégia de carregamento de fontes (Google Fonts)
- Tipografia responsiva mobile-first
- Diretrizes de acessibilidade WCAG
- Exemplos práticos de uso

### 06. guia-estrategia-indices.md
**Propósito:** Cria documentação técnica de SEO incluindo identificação de fonte de verdade, estrutura de URLs, meta tags essenciais, sitemap.xml, robots.txt, schema markup e monitoramento de performance.

**Quando usar:**
- Estabelecendo estratégia de SEO para projetos
- Documentando configurações de SEO existentes
- Otimizando sites para motores de busca
- Planejando migrations com impacto em SEO
- Configurando monitoramento de performance

**Cobre:**
- Workflow com checklist de 11 passos
- Identificação de fonte de verdade para SEO
- Estrutura de URLs e convenções de naming
- Meta tags essenciais (base, Open Graph, Twitter Cards)
- Sitemap.xml com estrutura e integração
- Robots.txt com configurações e bloqueios
- Schema markup (JSON-LD) para 4 tipos
- Componente de SEO completo
- Estratégia de canonical tags
- Monitoramento (Search Console, Core Web Vitals)
- Checklist de go-live SEO (12 itens)

### 07. guia-dns-deployment.md
**Propósito:** Guia configuração DNS, configuração SSL/TLS, estratégias de cache e validação de deployment para projetos web com checklists completos de go-live e procedimentos de rollback.

**Quando usar:**
- Configurando novos domínios
- Configurando Cloudflare para projetos
- Documentando infraestrutura de deployment
- Solucionando problemas de DNS/SSL
- Planejando migrations de site
- Criando runbooks de deployment

**Cobre:**
- Workflow com checklist de 12 passos
- Identificação de fonte de verdade para infraestrutura
- Informações de domínio com premissas críticas
- Fluxo de publicação com diagrama
- Configuração DNS com tabela de registros (tipos A, CNAME, MX)
- Configuração SSL/TLS com 3 modos
- Regras de domínio canônico (apex vs www)
- Estratégia de cache/CDN por tipo de asset
- Checklist de go-live (5 categorias)
- Comandos de validação (DNS, HTTP, SSL)
- Guia de solução de problemas com tabela
- Procedimento de rollback com fluxo
- Configuração de framework (Astro, Next.js)
- Exemplos práticos de uso

### 00. 00-readme.md (este arquivo)
**Propósito:** Índice mestre da coleção com instruções de uso, combinações recomendadas e referências à documentação oficial da Anthropic.

## Como Usar Estas Skills

### Para Criar Documentação

Ao precisar criar documentação similar ao brand book no diretório pai:

1. **Escolha a(s) skill(s) relevante(s)** baseado no que você está documentando
2. **Siga o workflow** com checklist copiável no início de cada skill
3. **Preencha detalhes específicos do projeto** usando os templates
4. **Revise checklists** finais para garantir completude

Exemplo de prompt:
```
"Use a skill 02-guia-stack-tecnologico para criar documentação abrangente de stack
para meu projeto Next.js com Tailwind CSS."
```

### Para Iniciar Novos Projetos

Ao iniciar novo projeto e fazer decisões tecnológicas:

1. **Use 01-seletor-arquitetura-site** → Escolha abordagem de renderização
2. **Use 02-guia-stack-tecnologico** → Documente escolhas de stack
3. **Use 03-guia-arquitetura-projeto** → Estabeleça estrutura de pastas
4. **Use skills de design system** (cor, tipografia, ícones, SEO) conforme necessário

Exemplo de prompt:
```
"Estou iniciando um novo projeto de blog. Use 01-seletor-arquitetura-site para me
ajudar a decidir entre SSG e SSR, depois use 02-guia-stack-tecnologico para documentar
minhas escolhas."
```

### Para Onboarding de Equipes

Compartilhe estas skills como material de referência para:

- Entender estrutura de documentação
- Aprender padrões de projeto
- Fazer decisões tecnológicas consistentes
- Seguir convenções estabelecidas
- Criar documentação padronizada

## Formato da Skill

Cada skill segue a especificação Agent Skills da Anthropic:

```yaml
---
name: nome-da-skill
description: Descrição clara em terceira pessoa do que a skill faz e quando usá-la
---

# Conteúdo da Skill

[Instruções detalhadas seguindo o propósito da skill]
```

**Características chave de todas as skills:**

- ✅ **Frontmatter YAML** com nome e descrição (obrigatório)
- ✅ **Descrição em terceira pessoa** para descoberta apropriada de skill
- ✅ **Workflow com checklist copiável** (8-12 passos)
- ✅ **Conteúdo estruturado** em passos numerados
- ✅ **Tabelas e exemplos concretos** (não abstratos)
- ✅ **Seção "Exemplo de Uso"** com cenários práticos
- ✅ **Anti-padrões com emojis** (❌ para evitar)
- ✅ **Checklist de revisão final** (7-12 itens)
- ✅ **Templates de documentação** incluídos

## Combinações de Skills

Estas skills funcionam bem juntas:

**Configuração de Novo Projeto:**
1. 01-seletor-arquitetura-site → Escolha abordagem de renderização
2. 02-guia-stack-tecnologico → Documente escolhas tecnológicas
3. 03-guia-arquitetura-projeto → Estabeleça estrutura
4. 04-guia-sistema-cores → Defina design tokens
5. 05-guia-sistema-tipografia → Estabeleça escala de tipo
6. 06-guia-estrategia-indices → Configure SEO
7. 07-guia-dns-deployment → Planeje deployment

**Projeto de Documentação:**
1. 02-guia-stack-tecnologico → Documente stack atual
2. 03-guia-arquitetura-projeto → Documente arquitetura
3. 04-guia-sistema-cores → Documente design system
4. 05-guia-sistema-tipografia → Documente tipografia
5. 06-guia-estrategia-indices → Documente SEO

## Fontes e Referências

Estas skills foram criadas seguindo a documentação oficial da Anthropic:

- [Skill Authoring Best Practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [How to Create Custom Skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)
- [Repositório Oficial de Skills Anthropic](https://github.com/anthropics/skills)

## Melhorias Implementadas

Todas as skills foram melhoradas com:

1. **Nomes de arquivos em português** - todos renomeados de inglês para português com prefixo numérico (00-07)
2. **Descrições mais específicas** - em terceira pessoa com termos de descoberta
3. **Workflows com checklists** - 8-12 passos copiáveis para acompanhamento
4. **Exemplos concretos** - tabelas preenchidas, código real, cenários práticos
5. **Seção "Exemplo de Uso"** - mostra a skill em ação com cenário realista
6. **Anti-padrões com emojis** - ❌ para práticas a evitar
7. **Templates incluídos** - estrutura para documentação final
8. **Checklists de revisão** - validadores de qualidade ao final (7-12 itens cada)

## Licença

Estas skills são fornecidas como templates de documentação para criar documentação técnica de projeto. Adapte e modifique conforme necessário para seus casos de uso específicos.
