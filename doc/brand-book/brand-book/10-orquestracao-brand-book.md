---
name: orquestrar-brand-book
description: Orquestra e combina os guias do brand book para transformar pedidos em planos executaveis com validacao tecnica, controle de risco, rollback e atualizacao documental. Use quando o escopo envolver multiplas frentes (stack, arquitetura, UI, SEO e deploy).
---

# Guia Mestre de Orquestracao do Brand Book

## Objetivo
Padronizar como uma IA deve conduzir tarefas complexas de ponta a ponta, usando os guias especializados da pasta para reduzir ambiguidade, evitar regressao e garantir entrega com qualidade tecnica.

## Quando Usar Este Guia
- Pedido envolve mais de uma disciplina técnica ao mesmo tempo
- Mudanca tem impacto em varias camadas (rota, layout, estilos, deploy)
- Requisito chega incompleto e precisa virar plano claro
- Existe risco de quebra e precisa de plano de rollback
- Time precisa de saida padronizada para revisão e handoff

## Resultado Esperado
Ao final, a IA deve entregar:
- diagnostico objetivo do estado atual
- plano em etapas pequenas e reversiveis
- lista de arquivos afetados
- critérios de validação executaveis
- riscos, mitigacoes e rollback
- atualizacao de documentação associada

## Guias Especializados e Quando Acionar
| Contexto | Guia a acionar | Arquivo |
|---|---|---|
| Definir stack | escolher-stack-web | `01-escolher-stack-web.md` |
| Escolher modelo de renderizacao | decidir-renderizacao-web | `02-decidir-renderizacao-web.md` |
| Estruturar repositorio | planejar-arquitetura-repo | `03-planejar-arquitetura-repo.md` |
| Definir tokens e paleta | governar-sistema-cores | `04-governar-sistema-cores.md` |
| Definir hierarquia de fonte | governar-tipografia | `05-governar-tipografia.md` |
| Padronizar iconografia | governar-icones | `06-governar-icones.md` |
| SEO tecnico e indexacao | estrategia-seo-indices | `07-estrategia-seo-indices.md` |
| DNS/SSL/cache/deploy | operar-cloudflare-dns | `08-operar-cloudflare-dns.md` |

## Workflow Mestre (copiar e acompanhar)
```text
Progresso da Orquestracao:
- [ ] 1. Classificar objetivo, escopo e criticidade
- [ ] 2. Identificar dependências e restrições
- [ ] 3. Selecionar guias especializados necessarios
- [ ] 4. Produzir plano técnico em etapas pequenas
- [ ] 5. Executar com checkpoints de validação
- [ ] 6. Validar qualidade funcional e não-funcional
- [ ] 7. Atualizar documentação e registrar decisões
- [ ] 8. Entregar resumo final com riscos residuais
```

## Passo 1: Classificar o Pedido
Classificar o pedido em uma categoria primaria e secundaria:
- primaria: stack / arquitetura / UI / SEO / deploy
- secundaria: performance / acessibilidade / manutencao / seguranca

Definir nivel de risco:
- baixo: mudanca localizada e reversivel
- medio: afeta multiplos componentes/rotas
- alto: afeta produção, DNS, SEO ou arquitetura base

## Passo 2: Definir Contexto Minimo
Antes de implementar, confirmar:
- objetivo de negocio
- criterio de aceite
- ambiente alvo (local/staging/produção)
- limite de tempo
- restrições técnicas

Se faltar dado critico, declarar suposicoes explicitamente.

## Passo 3: Planejar em Incrementos
Quebrar em lotes pequenos:
1. lote 1: estrutura base
2. lote 2: comportamento principal
3. lote 3: ajustes de consistencia
4. lote 4: validação e documentação

Cada lote deve ter:
- objetivo
- arquivos
- comando de validação
- criterio de pronto

## Passo 4: Definir Validacao Obrigatoria
Checklist minimo por mudanca:
- build compila sem erro
- rotas criticas funcionam
- SEO base não foi quebrado (quando aplicavel)
- deploy/dominio mantem disponibilidade (quando aplicavel)
- documentação foi atualizada

## Passo 5: Definir Rollback
Toda mudanca de risco medio/alto deve incluir:
- ponto de retorno
- comandos/ações para reverter
- criterio de acionamento do rollback
- janela de observacao pos-release

## Formato de Saida Padrao
```markdown
## Contexto
- Objetivo:
- Escopo:
- Restricoes:
- Suposicoes:

## Plano Tecnico
1. Etapa
2. Etapa
3. Etapa

## Arquivos Impactados
- caminho/arquivo: ação

## Validacao
- comando:
- resultado esperado:

## Riscos e Mitigacoes
- risco:
- mitigacao:

## Rollback
- gatilho:
- procedimento:

## Documentacao Atualizada
- arquivo:
```

## Regras de Qualidade (Guardrails)
- Sempre priorizar mudanca menor e mais reversivel.
- Sempre separar problema principal de ajustes cosmeticos.
- Sempre explicitar trade-offs técnicos.
- Nunca trocar stack por preferencia pessoal.
- Nunca encerrar sem evidenciar validação.

## Anti-padrões
- Comecar codando sem diagnostico minimo.
- Misturar refactor amplo com fix pontual.
- Alterar area critica sem plano de rollback.
- Atualizar codigo e esquecer docs.
- Declarar "resolvido" sem criterio de aceite.

## Exemplo Pratico
```text
Pedido: "Quero melhorar performance do blog sem perder SEO"

Acao:
1) Acionar 02-decidir-renderizacao-web (confirmar SSG-first)
2) Acionar 07-estrategia-seo-indices (canonical/sitemap/metadata)
3) Ajustar assets/cache com 08-operar-cloudflare-dns (se produção)
4) Validar build + indexacao + rotas
5) Documentar trade-offs e prox passos
```

## Checklist Final
- [ ] Objetivo e risco classificados
- [ ] Guias corretos acionados
- [ ] Plano quebrado em etapas pequenas
- [ ] Validacoes executadas
- [ ] Rollback definido quando necessario
- [ ] Documentacao atualizada
- [ ] Entrega final clara e auditavel
