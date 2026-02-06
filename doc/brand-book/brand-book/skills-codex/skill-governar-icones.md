---
name: governar-ícones
description: Padroniza sistema de iconografia com regras claras de uso (SVG inline vs arquivo estático), acessibilidade, consistencia visual, nomenclatura e governanca de biblioteca. Use ao criar/refatorar UI, definir design system de ícones ou corrigir inconsistencias.
---

# Guia Completo de Sistema de Ícones

## Objetivo
Criar e manter um sistema de ícones consistente, acessivel e performatico, com convencoes claras para evitar divergencia visual e bugs de implementacao.

## Quando Usar Esta Skill
- Definindo padrão de iconografia para projeto novo
- Revisando inconsistencias entre paginas/componentes
- Integrando nova biblioteca de ícones
- Migrando de ícones raster para vetoriais
- Corrigindo problemas de acessibilidade em controles de UI

## Principios do Sistema de Ícones
1. Consistencia visual primeiro.
2. Acessibilidade obrigatoria.
3. Decisao de formato baseada em uso.
4. Menor custo de manutencao no longo prazo.
5. Evitar dependências pesadas sem necessidade.

## Workflow Padrao (copiar e acompanhar)
```text
Progresso do Sistema de Ícones:
- [ ] 1. Inventariar ícones existentes
- [ ] 2. Classificar por tipo de uso (UI x ilustrativo)
- [ ] 3. Definir familia principal e estilo
- [ ] 4. Definir regras de tamanho, stroke e alinhamento
- [ ] 5. Definir acessibilidade por contexto
- [ ] 6. Aplicar convencao de naming e organização
- [ ] 7. Validar contraste e consistencia em telas reais
- [ ] 8. Documentar excecoes e boas praticas
```

## Passo 1: Inventario Tecnico
Mapear:
- onde cada icone e usado
- se e interativo ou decorativo
- formato atual (svg/webp/png)
- problemas visuais observados

## Passo 2: Decidir Formato Correto
### Usar SVG inline quando
- icone participa de estado de botao/link
- precisa herdar cor (`currentColor`)
- precisa animacao/transicao

### Usar arquivo estático quando
- e logo de terceiro
- e asset ilustrativo sem estado
- e usado como imagem fixa repetida

## Passo 3: Definir Estilo Canonico
Definir e documentar:
- grid base (ex.: 24x24 para UI)
- stroke-width padrão por contexto
- regras de preenchimento (outline/solid)
- tamanhos permitidos (16, 20, 24, 32)

## Passo 4: Acessibilidade Obrigatoria
### SVG decorativo
- aplicar `aria-hidden="true"`

### SVG em ação (botao/link)
- rotular elemento pai (`aria-label` ou texto visivel)
- garantir foco visivel por teclado

### Imagens de icone/logo
- `alt` objetivo
- evitar `alt` generico como "icone"

## Passo 5: Nomeacao e Organizacao
Padrao sugerido:
- prefixo: `icone-`
- formato: kebab-case
- exemplos: `icone-menu.svg`, `icone-whatsapp.svg`

Organizacao sugerida:
- UI icon inline: dentro do componente
- icon file: `public/img/icons/`

## Passo 6: Performance e Bundle
- Evitar importar pacote inteiro de ícones.
- Preferir import seletivo/tree-shaking.
- Reaproveitar ícones comuns em componentes compartilhados.
- Evitar duplicatas do mesmo icone em varios formatos sem motivo.

## Tabela de Decisao Rapida
| Cenario | Formato recomendado | Motivo |
|---|---|---|
| Botao de menu/hamburger | SVG inline | estado/hover/foco |
| Icone de redes sociais em CTA | SVG inline | cor e interacao |
| Logo de ferramenta parceira | arquivo estático | branding fixo |
| Badge ilustrativo sem interacao | arquivo estático | simplicidade |

## Template de Documentacao
```markdown
## Sistema de Ícones
- Familia principal:
- Estilo (outline/solid):
- Grid base:
- Stroke padrão:

## Regras de Uso
- Inline:
- Arquivo estático:

## Acessibilidade
- Decorativo:
- Interativo:

## Organizacao
- Pasta oficial:
- Convencao de nomes:
```

## Anti-padrões
- Misturar familias visuais sem criterio.
- Usar SVG sem `viewBox`.
- Publicar icone sem teste de contraste.
- Inserir icone informativo sem rotulo acessivel.
- Quebrar naming convention por conveniencia.

## Exemplo Pratico
```text
Pedido: "Padronizar ícones do header e footer"

Acao:
1) Inventariar ícones existentes nessas areas
2) Definir familia principal e stroke unico
3) Migrar controles interativos para SVG inline
4) Corrigir aria-label/aria-hidden
5) Validar visual em desktop e mobile
6) Documentar padrão no guia
```

## Checklist Final
- [ ] Inventario finalizado
- [ ] Formato correto aplicado por cenario
- [ ] Estilo visual padronizado
- [ ] Acessibilidade validada
- [ ] Naming e organização padronizados
- [ ] Performance revisada
- [ ] Documentacao atualizada
