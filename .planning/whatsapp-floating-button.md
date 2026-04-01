# Plano: Botão Flutuante do WhatsApp

## Contexto

Criar um componente `WhatsAppButton.astro` reutilizável, posicionado fixo no canto inferior direito da tela. Deve aparecer apenas após scroll > 100px com animação suave (fade-in + slide-up). Uso inicial na página `/servicos/mapa-de-funil`.

**Decisões tomadas:**
- Cor: Verde WhatsApp oficial (#25D366)
- Número via variável de ambiente (`PUBLIC_WHATSAPP_NUMBER`)
- CSS puro (scoped no componente), sem Tailwind
- SVG inline do ícone WhatsApp (sem requisições externas)
- Componente autocontido (HTML + CSS + JS no `.astro`)
- URL: `api.whatsapp.com/send` (URL oficial WhatsApp API)
- Pulse animation via `<span class="ping-ring">` separado

---

## Etapa 1 — Variável de ambiente

**Arquivo:** `.env`
- Adicionar: `PUBLIC_WHATSAPP_NUMBER=5545999506444`

**Arquivo:** `src/env.d.ts`
- Adicionar `PUBLIC_WHATSAPP_NUMBER: string` à interface `ImportMetaEnv`

---

## Etapa 2 — Criar componente `WhatsAppButton.astro`

**Arquivo:** `src/components/ui/WhatsAppButton.astro`

### Props (interface):
```ts
interface Props {
  number?: string;          // Sobrescreve o .env (opcional)
  message?: string;         // Mensagem padrão (default: "Olá! Gostaria de mais informações.")
  scrollThreshold?: number; // px de scroll para aparecer (default: 100)
}
```

### HTML gerado:
```html
<a
  class="whatsapp-button"
  href="https://api.whatsapp.com/send?phone={number}&text={encodedMessage}"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fale conosco pelo WhatsApp"
>
  <span class="ping-ring"></span>
  <svg viewBox="0 0 448 512" width="40" height="40" fill="#FFFFFF">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.1 13.9 10.1-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
</a>
```

### CSS (scoped `<style>`):

**Posicionamento e base:**
- `.whatsapp-button`: `position: fixed; bottom: 80px; right: 40px; width: 60px; height: 60px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; z-index: 9998; opacity: 0; transform: translateY(20px) scale(0.8); pointer-events: none; transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); cursor: pointer; text-decoration: none; border: none; outline: none;`

**Estado visível:**
- `.whatsapp-button.is-visible`: `opacity: 1; transform: translateY(0) scale(1); pointer-events: auto;`

**Hover:**
- `.whatsapp-button:hover`: `transform: scale(1.1); box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);`

**Active:**
- `.whatsapp-button:active`: `transform: scale(0.95);`

**Anel de pulsação (ping-ring):**
- `.ping-ring`: `position: absolute; width: 100%; height: 100%; border-radius: 50%; background: rgba(37, 211, 102, 0.5); opacity: 0; z-index: -1;`
- `.whatsapp-button.is-visible .ping-ring`: `animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;`
- `.whatsapp-button:hover .ping-ring`: `animation: none;`

```css
@keyframes ping {
  0% { transform: scale(1); opacity: 0.5; }
  75%, 100% { transform: scale(1.5); opacity: 0; }
}
```

**Responsividade (media queries):**
```css
@media (max-width: 640px) {
  .whatsapp-button {
    bottom: 30px;
    right: 20px;
  }
}
```

### JavaScript (scoped `<script>`):

Lógica principal:
1. Detectar scroll (`scrollY > threshold`)
2. Detectar se página tem scroll (`document.documentElement.scrollHeight > window.innerHeight`)
3. Se não tem scroll, mostrar imediatamente
4. Reavaliar no resize da janela
5. Cleanup do event listener

```js
const btn = document.querySelector('.whatsapp-button');
if (!btn) throw new Error('WhatsApp button not found');

const threshold = {scrollThreshold}; // injetado via Astro

function checkVisibility() {
  const hasScroll = document.documentElement.scrollHeight > window.innerHeight;
  const scrolledEnough = window.scrollY > threshold;
  const shouldShow = !hasScroll || scrolledEnough;
  btn.classList.toggle('is-visible', shouldShow);
}

function onScroll() {
  requestAnimationFrame(checkVisibility);
}

function onResize() {
  requestAnimationFrame(checkVisibility);
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onResize, { passive: true });

checkVisibility(); // estado inicial

// Cleanup (Astro view transitions / HMR)
document.addEventListener('astro:before-swap', () => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
});
```

> **Nota Astro:** Scripts scoped em `.astro` rodam automaticamente no client-side quando a página carrega. Não precisa de `client:load` nem `client:visible`. Funciona sem React/Svelte/TSX.

---

## Etapa 3 — Integrar na página `/servicos/mapa-de-funil`

**Arquivo:** `src/pages/servicos/mapa-de-funil/index.astro`

- Importar `WhatsAppButton` de `../../components/ui/WhatsAppButton.astro`
- Adicionar `<WhatsAppButton />` antes do `</Layout>` (dentro do slot)
- Não precisa de props extras — usa os defaults do componente

---

## Etapa 4 — Fallback sem JavaScript

Sem JS, o botão permanece com `opacity: 0; pointer-events: none`. Incluir `<noscript>` para fallback:

```html
<noscript>
  <style>
    .whatsapp-button {
      opacity: 1 !important;
      transform: none !important;
      pointer-events: auto !important;
    }
  </style>
</noscript>
```

---

## Etapa 5 — Responsividade

| | Desktop (>= 640px) | Mobile (< 640px) |
|---|---|---|
| `bottom` | 80px | 30px |
| `right` | 40px | 20px |
| Botão | 60x60px | 60x60px |
| Ícone | 40x40px | 40x40px |

---

## Arquivos modificados

| Arquivo | Ação |
|---------|------|
| `.env` | Adicionar `PUBLIC_WHATSAPP_NUMBER` |
| `src/env.d.ts` | Adicionar tipo da nova variável |
| `src/components/ui/WhatsAppButton.astro` | **Criar** |
| `src/pages/servicos/mapa-de-funil/index.astro` | Importar e usar o componente |

---

## Verificação

1. `npm run dev` — abrir `/servicos/mapa-de-funil`
2. Confirmar que o botão NÃO aparece no topo da página (tem scroll)
3. Rolar > 100px — botão aparece com animação fade-in + slide-up
4. Voltar ao topo — botão desaparece
5. Ping ring anima ciclicamente atrás do ícone
6. Hover — escala 1.1, ping para, sombra aumenta
7. Clicar no botão — abre WhatsApp com mensagem pré-preenchida
8. Abrir uma página sem scroll (se houver) — botão aparece imediatamente
9. Mobile (DevTools) — `bottom: 30px; right: 20px`
10. Verificar que não há conflito com o modal existente (z-index: 9998 > z-50)
11. Desabilitar JS no DevTools — botão aparece via `<noscript>` fallback
