---
name: governar-icones
description: Padroniza sistema de ícones com regras de design (grid, stroke, alinhamento), uso (SVG inline vs estático), acessibilidade e consistência visual. Use ao criar/refatorar UI ou corrigir inconsistências.
---

# Sistema de Ícones - Design System

## Objetivo

Estabelecer padrões claros para criação e uso de ícones, garantindo consistência visual, acessibilidade obrigatória, performance adequada e manutenibilidade a longo prazo.

## Quando Usar Este Guia

- Ao criar novos ícones para o projeto
- Ao revisar inconsistências visuais entre componentes
- Ao integrar biblioteca de ícones externa
- Ao corrigir problemas de acessibilidade
- Ao padronizar sistema iconográfico

## Princípios do Sistema

1. **Consistência visual primeiro**: Todos os ícones seguem o mesmo estilo
2. **Acessibilidade obrigatória**: Todo ícone informativo tem rótulo
3. **Decisão baseada em uso**: Formato depende de contexto (inline vs estático)
4. **Grid e alinhamento**: Ícones em grid padronizado para precisão
5. **Manutenibilidade em longo prazo**: Evitar dependências pesadas

---

## Padrão Visual

### Grid e Alinhamento

**Grid base:** 24x24 pixels (viewBox="0 0 24 24")

**Alinhamento:**
- Ícones centralizados no grid com 1-2px de margem
- Traços mantêm espaçamento consistente das bordas
- Formas geométricas alinhadas ao pixel (pixel-perfect quando possível)

**Visualização do grid:**

```
┌────────────────────────────┐
│  1px de margem da borda    │
│  ┌──────────────────────┐  │
│  │                      │  │
│  │   Ícone no centro    │  │
│  │   (20x20 útil)       │  │
│  │                      │  │
│  └──────────────────────┘  │
│  1px de margem da borda    │
└────────────────────────────┘
       24x24 total
```

### Stroke e Preenchimento

| Propriedade | Valor | Uso |
|------------|-------|------|
| **Stroke width** | 1.5px - 2px | Ícones outline |
| **Line cap** | round | Terminações arredondadas |
| **Line join** | round | Junções arredondadas |
| **Fill** | none (outline) ou currentColor | Depende do estilo |

### Estilos Definidos

**Outline (padrão):**
- Traço com espessura definida
- Sem preenchimento
- Transições suaves entre elementos

**Solid:**
- Preenchimento completo
- Sem traços externos
- Usar para ícones simples e pequenos

**Proporção:**
- Manter relações visuais equilibradas
- Evitar elementos muito finos (<1px) que quebram em small screens
- Espaçamento interno consistente entre formas

---

## Decisão de Formato

### SVG Inline (Use quando)

- ✅ Ícone participa de estado de botão/link
- ✅ Precisa herdar cor via `currentColor`
- ✅ Requer animação ou transição
- ✅ Pequeno e reutilizável (menu, fechar, setas)

**Exemplo:**
```astro
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 6L6 18M6 6l12 12" />
</svg>
```

### Arquivo Estático (Use quando)

- ✅ Logo de terceiro (marca preservada)
- ✅ Ilustração complexa sem estado
- ✅ Imagem fixa repetida em várias páginas
- ✅ Asset editorial que não muda

**Exemplo:**
```astro
<img src="/img/logos/parceiro.svg" alt="Logo Parceiro" width="120" height="40" />
```

### Biblioteca Externa (Use quando)

- ✅ Precisa de muitos ícones rapidamente
- ✅ Ícones padrão (setas, chevron, menu)
- ⚠️ Verifique tamanho do bundle se usar
- ⚠️ Prefira tree-shaking (import seletivo)

**Opções comuns:**
- Lucide Astro (lightweight, tree-shakeable)
- Heroicons (Tailwind oficial)
- Phosphor Icons

---

## Onde Pegar Ícones

### Bibliotecas Recomendadas

| Biblioteca | Site | Estilo | Quando usar | Licença |
|------------|-----|-------|-------------|--------|
| **Lucide Icons** | [lucide.dev](https://lucide.dev) | Leve, consistente | Dia a dia, **recomendada** | MIT |
| **Heroicons** | [heroicons.com](https://heroicons.com) | Tailwind oficial | Com Astro/Tailwind | MIT |
| **Tabler Icons** | [tabler-icons.io](https://tabler-icons.io) | Conjunto enorme | Ícones específicos | MIT |
| **Phosphor** | [phosphoricons.com](https://phosphoricons.com) | Multi-estilo | Flexibilidade | MIT |
| **Iconoir** | [iconoir.com](https://iconoir.com) | Libre, consistente | Sem attribution | MIT |

### Sites para Download Individual

| Site | Uso | Destaque |
|------|-----|----------|
| [Iconoir.com](https://iconoir.com) | Download SVG individual | Copy-paste direto |
| [Iconmonstr.com](https://iconmonstr.com) | Customizável online | Ajuste stroke antes de baixar |
| [Nounproject.com](https://nounproject.com) | Ilustrações | Com attribution se gratuito |

### Comando de Busca Rápida

```
Procure por: "nome do icone" + "svg" + "lucide/heroicons"
Ex: "chevron right svg lucide" → copiar SVG do resultado
```

---

## Como Manter Padronização

### Workflow de Adaptação

Ao pegar um ícone de qualquer fonte, siga este processo para padronizar:

```
[1. Encontrar ícone]
      ↓
[2. Download do SVG]
      ↓
[3. Abrir em editor (VS Code)]
      ↓
[4. Aplicar checklist de padronização]
      ↓
[5. Salvar em public/img/icons/]
```

### Checklist de Padronização

Sempre ajuste o SVG baixado para ter:

| Atributo | Valor Padrão | Por que |
|----------|--------------|---------|
| `viewBox` | `"0 0 24 24"` | Grid consistente |
| `stroke-width` | `"2"` | Traço visível em todas telas |
| `stroke-linecap` | `"round"` | Terminações suaves |
| `stroke-linejoin` | `"round"` | Junções suaves |
| `fill` | `"none"` | Outline padrão do projeto |

**Remover:**
- ❌ `width` e `height` do elemento `<svg>` (controlar via CSS)
- ❌ Tags `<title>` e `<desc>` desnecessárias
- � Comentários `<!-- -->` internos
- ❌ Metadados como `xmlns` (se não for root)

### Exemplo Prático: Antes e Depois

**Ícone baixado (antes):**
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <title>X Icon</title>
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>
```

**Ícone padronizado (depois):**
```xml
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 6L6 18M6 6l12 12" />
</svg>
```

**Mudanças aplicadas:**
1. Removido `xmlns`, `width`, `height`
2. Removido `<title>`
3. `stroke-width` mudado de `1.5` para `2`
4. `<line>` convertido para `<path>` (mais limpo)
5. Simplificado estrutura

### Teste de Visualização

Após padronizar, teste o ícone nos tamanhos reais de uso:

```astro
<!-- Teste em múltiplos tamanhos -->
<div class="space-x-4">
  <svg class="w-4 h-4" viewBox="0 0 24 24">...</svg>  <!-- 16px -->
  <svg class="w-5 h-5" viewBox="0 0 24 24">...</svg>  <!-- 20px -->
  <svg class="w-6 h-6" viewBox="0 0 24 24">...</svg>  <!-- 24px -->
  <svg class="w-8 h-8" viewBox="0 0 24 24">...</svg>  <!-- 32px -->
</div>
```

---

## Acessibilidade Obrigatória

### SVG Decorativo

Ícone que não transmite informação:

```astro
<!-- aria-hidden remove de leitor de tela -->
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
  <!-- apenas decorativo -->
</svg>
```

### SVG Informativo

Ícone que transmite informação ou é interativo:

```astro
<!-- Opção 1: Texto visível -->
<button>
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="..." />
  </svg>
  <span class="sr-only">Fechar</span>  <!-- oculto visualmente, acessível para leitor -->
</button>

<!-- Opção 2: aria-label -->
<button aria-label="Fechar modal">
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
</button>
```

### Imagens de Ícone/Logo

```astro
<!-- Sempre alt descritivo -->
<img src="/img/icons/icone-whatsapp.svg" alt="Contato via WhatsApp" />
```

**❌ Evitar:**
```html
<img src="icone.svg" alt="icone" />  <!-- genérico, não acessível -->
```

---

## Nomeação e Organização

### Convenção de Nomes

**Padrão:** `icone-{nome}.svg` (kebab-case)

**Exemplos:**
- `icone-menu.svg`
- `icone-fechar.svg`
- `icone-whatsapp.svg`
- `icone-github.svg`

### Organização de Arquivos

```
public/img/icons/
├── ui/                    # Ícones de interface (SVG inline recomendado)
│   ├── icone-menu.svg
│   ├── icone-fechar.svg
│   └── icone-seta.svg
│
└── logos/                 # Logos e marcas (arquivo estático)
    ├── logo-obsidian.svg
    └── parceiros/
        └── logo-novo-envio.svg
```

---

## Padrões de Design

### Consistência Visual

**Mantenha em todos os ícones:**
- Mesmo stroke width
- Mesmo estilo (outline ou solid)
- Mesmo nível de detalhe
- Mesmo peso visual

**Exemplo de inconsistência:**
```
❌ Evite misturar:
[Ícone A] stroke-width: 1.5px
[Ícone B] stroke-width: 2.5px  ← inconsistente!
```

### Pixel Perfection

- Alinhejar elementos ao grid de pixel quando possível
- Evitar meio-pixel (0.5px) em coordenadas
- Testar em tamanhos reais de uso (16px, 20px, 24px)

### Simplificação

- Remover detalhes desnecessários que não escalam
- Unificar formas similares (ex: todos os círculos com mesma curva)
- Evitar muitos traços muito próximos (confundem em small screens)

---

## Tabela de Decisão Rápida

| Cenário | Formato | Motivo |
|---------|--------|--------|
| Botão hamburger | SVG inline | Estado hover/foco |
| Ícone em CTA | SVG inline | Herda cor accent |
| Setas de carousel | SVG inline | `currentColor` |
| Logo de parceiro | Arquivo estático | Branding fixo |
| Badge ilustrativo | Arquivo estático | Simplicidade |
| Ícone de rede social | SVG inline | Interação, hover |

---

## Exemplos de Implementação

### Botão Menu com Ícone

```astro
<button
  class="mobile-menu-btn p-2"
  aria-label="Abrir menu"
  id="mobile-menu-btn"
>
  <span></span>
  <span></span>
  <span></span>
  <!-- Ícone implementado como CSS puro ou SVG inline -->
</button>

<style>
  /* Três linhas do menu hamburger */
  .mobile-menu-btn span {
    width: 24px;
    height: 2px;
    background: var(--text-light);
    transition: all 0.3s;
  }
</style>
```

### Link com Ícone SVG Inline

```astro
<a href="https://wa.me/5545999506444" class="flex items-center gap-2 text-accent hover:text-accent-hover">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 2C6.478 2 2 6.477 2 12.002c0 5.525 4.478 10.002 10.001 10.002z"/>
  </svg>
  <span>WhatsApp</span>
</a>
```

### Card com Ícone Estático

```astro
<div class="bg-card p-6 rounded-lg">
  <img
    src="/img/logos/logo-obsidian.svg"
    alt="Integração com Obsidian"
    class="w-8 h-8"
  />
  <h3 class="text-xl font-semibold mt-4">Obsidian</h3>
  <p class="text-muted-foreground mt-2">
    Segundo cérebro e gestão de conhecimento.
  </p>
</div>
```

---

## Performance e Bundle

### Boas Práticas

- ✅ **Evitar importar pacote inteiro**: Prefira ícones individuais
- ✅ **Tree-shaking**: Use import seletivo se usar biblioteca
- ✅ **Reaproveitar**: Ícones comuns em componentes compartilhados
- ✅ **Comprimir**: SVG otimizados sem metadados desnecessários
- ❌ **Evitar duplicatas**: Mesmo ícone em vários formatos sem motivo

### Exemplo de Import Seletivo

```typescript
// ✅ Correto - import seletivo
import IconMenu from '~icons/lucide/menu.svg?raw';
import IconX from '~icons/lucide/x.svg?raw';

// ❌ Evitar - import de pacote inteiro
import * as Icons from 'lucide-react';
```

---

## Princípios de Design de Ícones

### Grid e Alinhamento

1. **Pixel-perfection**: Alinhar ao grid sempre que possível
2. **Espaçamento interno**: Margem mínima de 1-2px das bordas
3. **Centralização**: Ícone visualmente centralizado no viewBox

### Stroke e Preenchimento

1. **Stroke consistente**: Mesmo espessura em todos os ícones
2. **Line cap/join**: Sempre `round` para suavidade
3. **Cantos vivos**: Evitar ângulos muito agudos (<30°)

### Proporção e Equilíbrio

1. **Peso visual equilibrado**: Não muito "pesado" ou "leve"
2. **Distribuição**: Elementos bem distribuídos no espaço
3. **Simetria**: Usar quando apropriado, mas evitar monotonia

### Detalhamento

1. **Nível de detalhe**: Adequado ao tamanho de uso
2. **Simplificação**: Menos é mais (remove ruído visual)
3. **Escalabilidade**: Testar em 16px e 48px

---

## Workflow de Criação

```
[Necessidade de ícone identificada]
      ↓
[Definir contexto: UI x Editorial x Logo]
      ↓
[Esboçar no grid 24x24]
      ↓
[Aplicar estilo: stroke, fill, proporção]
      |
      +-- SVG inline? → Implementar no componente
      |
      +-- Arquivo? → Salvar em public/img/icons/
      ↓
[Validar contraste e acessibilidade]
      ↓
[Testar em tamanhos reais: 16px, 20px, 24px, 32px]
      ↓
[Documentar nome e uso]
```

---

## Melhores Práticas

1. **Grid primeiro**: Sempre comece no 24x24 grid
2. **Stroke consistente**: Mantenha mesmo espessura
3. **Teste múltiplos tamanhos**: 16px a 32px mínimo
4. **Acessibilidade primeiro**: Sempre adicione aria-label ou texto
5. **Simplifique**: Remova detalhes que não escalam
6. **Organize**: Pasta clara com nomes padronizados

---

## Anti-Padrões

- ❌ NAO misture familias visuais sem critério
- ❌ NAO use SVG sem viewBox definido
- ❌ NAO publique ícone sem validar contraste
- ❌ NAO insira ícone informativo sem rótulo acessível
- ❌ NAO quebre convenção de naming por conveniência
- ❌ NAO use ícones com detalhes que quebram em small screens
- ❌ NAO ignore alinhamento ao grid (ficam "tremidos")

---

## Checklist de Revisão

- [ ] Ícone segue grid 24x24?
- [ ] Stroke width consistente com outros ícones?
- [ ] Alinhamento pixel-perfect?
- [ ] Acessibilidade implementada (aria-label ou texto)?
- [ ] Contraste adequado com cores do projeto?
- [ ] Testado em múltiplos tamanhos?
- [ ] Nome segue convenção kebab-case?
- [ ] Formato correto (inline vs arquivo)?

---

## Ferramentas Úteis

| Ferramenta | Uso |
|------------|-----|
| [Figma](https://www.figma.com) | Design de ícones em grid |
| [Illustrator](https://www.adobe.com/illustrator) | Vetorização |
| [SVGO](https://jakearchibald.github.io/svgomg/) | Otimização de SVG |
| [Iconoir](https://iconoir.com) | Ícones consistentes |

---

**Relacionado:** Para definir as cores do projeto, consulte [`04-governar-sistema-cores.md`](./04-governar-sistema-cores.md). Para definir a tipografia, consulte [`05-governar-tipografia.md`](./05-governar-tipografia.md).
