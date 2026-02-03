---
name: readme-brainbook
description: Indice principal dos documentos de contexto tecnico do projeto e guia de leitura por tarefa.
---

# 00 - README BrainBook

## Objetivo
Este arquivo e o ponto de entrada para qualquer agente ou pessoa que precise entender como o projeto funciona antes de alterar codigo.

## Escopo deste indice
- Indicar a ordem oficial de leitura.
- Direcionar rapido para o arquivo correto por tipo de tarefa.
- Definir regras de uso da pasta `doc/brand-book/`.

## Ordem oficial de leitura
1. `doc/brand-book/00-readme.md`
2. `doc/brand-book/01-stack-tecnologico.md`
3. `doc/brand-book/02-arquitetura-projeto.md`
4. `doc/brand-book/03-arquiteturas-de-site.md`
5. `doc/brand-book/04-cores-globais.md`
6. `doc/brand-book/05-tipografia.md`
7. `doc/brand-book/06-icones.md`
8. `doc/brand-book/07-cloudflare-dns.md`

## Mapa de decisao rapido

| Pergunta pratica | Ler primeiro | Ler depois |
|---|---|---|
| Vou criar pagina nova | `02-arquitetura-projeto.md` | `01-stack-tecnologico.md` |
| Vou alterar layout/estrutura | `02-arquitetura-projeto.md` | `03-arquiteturas-de-site.md` |
| Vou ajustar tema/cores | `04-cores-globais.md` | `05-tipografia.md` |
| Vou ajustar fonte/escala tipografica | `05-tipografia.md` | `04-cores-globais.md` |
| Vou incluir icones | `06-icones.md` | `04-cores-globais.md` |
| Vou mexer em dominio e DNS | `07-cloudflare-dns.md` | `01-stack-tecnologico.md` |
| Vou propor tecnologia nova | `01-stack-tecnologico.md` | `03-arquiteturas-de-site.md` |

## Fluxo recomendado de trabalho

```text
[Ler README]
    |
    v
[Ler contexto da tarefa]
    |
    v
[Planejar mudanca]
    |
    v
[Executar no codigo]
    |
    v
[Validar localmente]
    |
    v
[Atualizar docs afetados]
```

## Source of truth do projeto (arquivos tecnicos)
- `package.json`
- `astro.config.mjs`
- `tailwind.config.mjs`
- `src/styles/globals.css`
- `src/layouts/Layout.astro`
- `src/layouts/BlogLayout.astro`
- `src/content/config.ts`
- `_routes.json`

## Regras obrigatorias para esta pasta de docs
1. Nao remover arquivos antigos; somente versionar novos ajustes.
2. Manter frontmatter com `name` e `description` em todo `.md`.
3. Sempre apontar `source of truth` real do codigo.
4. Sempre incluir secao de "Nao fazer" em docs de padrao.
5. Atualizar este README se a ordem de leitura mudar.

## Checklist rapido
- [ ] A tarefa foi mapeada para o arquivo correto?
- [ ] O codigo alterado bate com o source of truth?
- [ ] A documentacao afetada foi atualizada?
- [ ] A ordem de leitura continua coerente?
