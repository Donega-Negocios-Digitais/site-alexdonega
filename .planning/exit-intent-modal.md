# Exit Intent Modal — Mapa de Funil

## Contexto

Criar um modal de intenção de saída para `/servicos/mapa-de-funil` que seja visualmente consistente com o modal de compra existente (HTML inline no `index.astro` linhas 897-1238). O objetivo é capturar leads que tentam sair antes de finalizar a compra, usando copy persuasiva sem emojis.

## Copy (sem emojis)

| Elemento | Texto |
|---|---|
| Título | Você sabia que pode estar perdendo dinheiro agora mesmo? |
| Subtítulo | Clientes descobriram vazamentos que nem imaginavam. Sem o mapa, você não vê onde o dinheiro some. |
| Offer box (título) | Checklist de 7 vazamentos comuns em funis |
| Offer box (sub) | + 1 página do seu funil analisada (grátis) |
| CTA | Quero minha análise gratuita |
| CTA loading | Enviando... |
| Dismiss link | Fechar página – não quero saber onde perco dinheiro |
| Hint | Preencha todos os campos para continuar |

## Decisões de Negócio

| Item | Decisão |
|---|---|
| Abordagem | Componente React separado (`ExitIntentModal.tsx`) |
| Visual | Tema escuro do site (`bg-[#1a1a1a]`), consistente com modal de compra |
| Copy | Persuasiva, sem emojis, com offer box em destaque |
| Pacote | Fixo: "Mapa Funil - Estratégia Completa" |
| Form fields | 3 campos: nome, whatsapp, email (mesmo schema Supabase `leads`) |
| Submit | Mesma tabela Supabase `leads`, mesmo schema |
| Animação | framer-motion (fade + scale) |
| Renderização | `createPortal` no `document.body` + `client:load` |
| Frequência | 1x a cada 15 dias (localStorage com timestamp) |
| Analytics | Sim — dataLayer.push para GTM |
| Scroll mínimo | 60% da página antes de ativar triggers (engajamento real B2B) |
| Delay mínimo | 20 segundos na página (desktop B2B) |
| Mobile inatividade | 40 segundos (25-50% mais que desktop) |
| Desktop inatividade | 30 segundos (trigger secundário) |
| Cooldown pós-fechar | 10 segundos antes de possível reexibição |
| Cleanup | Remove listeners após primeiro disparo |
| Pós-submit | Redirect YouTube (mesmo vídeo) com countdown 3s |

---

## Arquivos

### 1. Novo: `src/components/ui/ExitIntentModal.tsx` (~380 linhas)

#### Config centralizado

```typescript
const CONFIG = {
  storage: {
    key: 'exit_modal_dismissed',
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 dias em ms
  },
  conditions: {
    minTimeOnPage: 20000,        // 20s (desktop B2B)
    minScrollPercent: 60,         // 60% (engajamento real B2B)
    mobileInactivityMs: 40000,    // 40s (25-50% mais que desktop)
    desktopInactivityMs: 30000,   // 30s (trigger secundário desktop)
    cooldownAfterClose: 10000,    // 10s cooldown pós-fechar
  },
  desktop: {
    triggerZonePercent: 10,       // top 10% da viewport (não pixel fixo)
  },
  mobile: {
    scrollUpVelocityThreshold: 3, // pixels/frame mínimo para scroll-up rápido
  },
  analytics: {
    eventPrefix: 'exit_intent',
  },
  success: {
    redirectUrl: 'https://youtu.be/Mqfwbf3X8SA?si=_Jzi71GbFJ9mYXfL',
    countdownSec: 3,
  },
};
```

#### Lógica de Frequência (localStorage)

```
On mount:
  1. Ler localStorage[CONFIG.storage.key]
  2. Se existe e (Date.now() - timestamp) < 15 dias → não faz nada, return early
  3. Se existe e passou 15 dias → limpar a chave (pode mostrar de novo)
  4. Se não existe → pode mostrar

On dismiss/submit:
  1. localStorage[CONFIG.storage.key] = Date.now()

Cooldown (mesma sessão):
  Após fechar, bloquear reexibição por 10s
```

#### Condições de Ativação (gates)

Todos os gates devem ser `true` para o modal abrir:

| Gate | Implementação |
|---|---|
| Frequência OK | Check 15 dias acima |
| Tempo na página >= 20s | `Date.now() - pageLoadTime >= 20000` |
| Scroll >= 60% | `window.scrollY / (document.body.scrollHeight - window.innerHeight) >= 0.6` |
| Cooldown OK | `Date.now() - lastCloseTime >= 10000` |
| Dispositivo trigger | mouseleave + inatividade (desktop) ou scroll-up + inatividade (mobile) |

**Fluxo**: gates são checados no momento do trigger. Se o mouseleave acontece aos 10s, nada acontece. Se acontece aos 25s e scroll é 65%, abre. Após fechar, cooldown de 10s bloqueia reexibição imediata.

#### Triggers

**Desktop** (`!isTouchDevice`):
```
// 1. Mouse leave — primário (top 10% da viewport com upward velocity)
document.documentElement.addEventListener('mouseleave', handler)
  → handler:
    - Calcular: triggerZone = window.innerHeight * (CONFIG.desktop.triggerZonePercent / 100)
    - Verificar: e.clientY < triggerZone && upwardVelocity > 0
    - if (allGatesPass()) openModal('mouseleave')

// 2. Inatividade — secundário (30s)
let lastMouseMoveTime = Date.now()
document.addEventListener('mousemove', () => { lastMouseMoveTime = Date.now() })
setInterval(() => {
  if (Date.now() - lastMouseMoveTime >= 30000 && allGatesPass()) openModal('inactivity')
}, 1000)

// 3. Cleanup: após openModal, remover TODOS os listeners + limpar intervalos
```

**Mobile** (`isTouchDevice`):
```
// 1. Scroll-up rápido — primário
let lastScrollY = window.scrollY
let scrollUpVelocity = 0
window.addEventListener('scroll', handler, { passive: true })
  → handler:
    - scrollUpVelocity = lastScrollY - window.scrollY (positivo = subindo)
    - lastScrollY = window.scrollY
    - if (scrollUpVelocity > CONFIG.mobile.scrollUpVelocityThreshold && allGatesPass())
        openModal('scroll_up')

// 2. Timer de inatividade (40s)
let inactivityTimer = setTimeout(showIfGatesPass, 40000)
reset events: touchstart, touchmove, scroll, click
  → cada evento: clearTimeout + setTimeout(showIfGatesPass, 40000)

// 3. Cleanup: após openModal, remover TODOS os listeners + limpar timeout
```

**Gerais** (ambos dispositivos):
- `Escape` fecha
- Click no overlay fecha
- Botão X fecha
- Link dismiss fecha

#### Analytics (dataLayer.push)

| Evento | Quando | Payload |
|---|---|---|
| `exit_intent_triggered` | Trigger disparou | `{ trigger: 'mouseleave' \| 'inactivity' \| 'scroll_up' }` |
| `exit_intent_viewed` | Modal abriu (gates OK) | `{ trigger, device: 'desktop' \| 'mobile' }` |
| `exit_intent_submitted` | Formulário submetido com sucesso | `{ trigger, device }` |
| `exit_intent_closed` | Modal fechado sem submeter | `{ trigger, device, method: 'x' \| 'overlay' \| 'escape' \| 'dismiss_link' }` |

Todos os eventos usam `(window as any).dataLayer?.push({ event: '...', ... })` — compatível com Partytown/GTM já configurado no projeto.

#### Componente React — Estrutura

```
ExitIntentModal
├── State
│   ├── isOpen: boolean
│   ├── isClosing: boolean
│   ├── formData: { nome, whatsapp, email }
│   ├── fieldErrors: { nome?, whatsapp?, email? }
│   ├── alertMsg: string
│   ├── isSubmitting: boolean
│   └── isSuccess: boolean
│
├── Refs
│   ├── formRef
│   ├── nomeRef, whatsappRef, emailRef
│   ├── pageLoadTimeRef (Date.now() na montagem)
│   └── lastCloseTimeRef (Date.now() quando modal é fechado)
│
├── useEffect #1 — Setup + Cleanup
│   ├── Check frequência 15 dias → return early se bloq
│   ├── Detectar dispositivo (touch vs mouse)
│   ├── Registrar mouseleave + inatividade (desktop)
│   ├── Registrar scroll-up + inatividade (mobile)
│   ├── Registrar ESC
│   └── Cleanup: remove TODOS os listeners, clear timeouts/intervals
│
├── useEffect #2 — Scroll lock
│   ├── isOpen → body.style.overflow = 'hidden'
│   └── !isOpen → body.style.overflow = ''
│
├── Funções
│   ├── allGatesPass(): boolean
│   ├── openModal(trigger: string)  → remove listeners após disparar
│   ├── closeModal(method: string)  → grava lastCloseTimeRef
│   ├── cleanupListeners()          → remove todos os event listeners + timers
│   ├── handleSubmit(e: FormEvent)
│   ├── validarNome/WhatsApp/Email
│   ├── mascaraWhatsApp(value)
│   ├── setErro/clearErro
│   ├── getFriendlyError(msg)
│   ├── showSuccess()
│   └── trackEvent(name, data)
│
└── Render (createPortal → document.body)
    └── <AnimatePresence>
        ├── motion.div — overlay (backdrop-blur-sm, bg-black/70)
        └── motion.div — container (bg-[#1a1a1a])
            ├── Botão X
            ├── Título (nova copy)
            ├── Subtítulo (nova copy)
            ├── Offer Box (bg-white/5, border-dashed, checklist + análise grátis)
            ├── Alert erro
            ├── Form
            │   ├── Campo Nome
            │   ├── Campo WhatsApp (com máscara)
            │   ├── Campo Email
            │   ├── Botão "Quero minha análise gratuita" (com spinner)
            │   └── Hint "Preencha todos os campos..."
            ├── Link dismiss (text-white/40, centralizado)
            └── Success state (check + countdown → YouTube)
```

#### Estilo — Consistente com modal existente (tema escuro)

Todos os estilos via Tailwind + inline styles idênticos ao modal inline (linhas 897-997 do `index.astro`):

- Container: `bg-[#1a1a1a] border border-white/10 rounded-3xl max-w-lg w-[90%] p-8`
- Inputs: `bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white`
- Focus: `border-orange-500 ring-2 ring-orange-500/20` (via state Tailwind)
- Botão submit: `bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl`
- Título: `text-white text-2xl font-bold text-center`
- Subtítulo: `text-white/60 text-base text-center`
- z-index: `z-[9999]`

#### Estilo — Elementos novos

**Offer Box** (destaque da oferta):
- Container: `bg-white/5 border border-dashed border-white/20 rounded-xl p-4 mb-6`
- Título: `text-orange-500 font-semibold text-base`
- Subtítulo: `text-white/70 text-sm mt-1`

**Link dismiss** (fechar sem ação):
- `text-white/40 hover:text-white/60 text-sm text-center block mt-4 cursor-pointer`
- No underline por padrão

### 2. Modificar: `src/pages/servicos/mapa-de-funil/index.astro`

**Linha 4** — adicionar no frontmatter:
```astro
import ExitIntentModal from '../../../components/ui/ExitIntentModal';
```

**Linha 691** (após `<WhatsAppButton />`, antes de `</Layout>`):
```astro
<ExitIntentModal client:load />
```

---

## Mapeamento Visual

```
+---------------------------------------------------+
|  bg-[#1a1a1a]  border-white/10  rounded-3xl      |
|                                                    |
|                                          [X]      |
|                                                    |
|   Você sabia que pode estar perdendo               |
|   dinheiro agora mesmo?                            |
|   (text-white, text-2xl, font-bold, center)       |
|                                                    |
|   Clientes descobriram vazamentos que nem          |
|   imaginavam. Sem o mapa, você não vê onde         |
|   o dinheiro some.                                 |
|   (text-white/60, text-base, center)               |
|                                                    |
|   +---------------------------------------------+ |
|   | bg-white/5 border-dashed border-white/20    | |
|   |                                             | |
|   | Checklist de 7 vazamentos comuns em funis   | |
|   | (text-orange-500, font-semibold)            | |
|   | + 1 página do seu funil analisada (grátis)  | |
|   | (text-white/70, text-sm)                    | |
|   +---------------------------------------------+ |
|                                                    |
|   Nome completo                                     |
|   [ Seu nome completo              ]               |
|                                                    |
|   WhatsApp                                          |
|   [ (11) 99999-9999                ]               |
|                                                    |
|   E-mail                                            |
|   [ seu@email.com                  ]               |
|                                                    |
|   [ QUERO MINHA ANÁLISE GRATUITA ]                 |
|   (bg-gradient orange-500→600, white, bold)        |
|                                                    |
|   Fechar página – não quero saber onde             |
|   perco dinheiro                                   |
|   (text-white/40, text-sm, center)                 |
|                                                    |
+---------------------------------------------------+
|  Overlay: bg-black/70 backdrop-blur-sm             |
+---------------------------------------------------+
```

---

## Referências

- Modal de compra existente: `src/pages/servicos/mapa-de-funil/index.astro` linhas 897-1238
- Estilos compartilhados: `src/styles/funnel.css`
- Fontes: Geist (heading), DM Sans (body), Syne (accent)
- Cor accent: `rgb(249, 115, 22)` (laranja)
- Supabase client: `src/lib/supabase`
- GTM: `@astrojs/partytown` configurado no projeto
- Dependências existentes: react, react-dom, framer-motion, tailwindcss

## Riscos/Z-index

- Modal existente: `z-50` (z-index: 50)
- Exit intent: `z-[9999]` — garante que fica sempre por cima

## Não afeta

- Modal de compra existente permanece intacto
- Botões de pricing (`data-pacote`) continuam funcionando igual
- Toast de sucesso do modal de compra permanece separado

## Sem dependências novas
