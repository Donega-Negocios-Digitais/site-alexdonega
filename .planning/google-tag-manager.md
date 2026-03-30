# Plano: Implementar Google Tag Manager (GTM) com Partytown

## Contexto
O projeto não possui nenhum tipo de analytics/tracking. O GTM (ID: GTM-PND46BK9) precisa ser adicionado a **todas** as páginas. O projeto tem **3 layouts independentes** que NÃO compartilham base comum:
- `src/layouts/Layout.astro` — layout principal (páginas públicas)
- `src/layouts/BlogLayout.astro` — layout do blog (autossuficiente)
- `src/layouts/PropostaLayout.astro` — layout de propostas (autossuficiente)

**View Transitions NÃO são usadas** — etapa 5 será pulada.

---

## Etapa 1 — Instalar Partytown

**Comando:** `npm install @astrojs/partytown`

**Arquivo:** `astro.config.mjs`
- Adicionar import do partytown
- Adicionar `partytown({ config: { forward: ['dataLayer.push'] } })` ao array de integrations

---

## Etapa 2 — Variável de ambiente

**Arquivo:** `.env`
- Adicionar linha: `PUBLIC_GTM_ID=GTM-PND46BK9`

---

## Etapa 3 — Componente GoogleTagManager.astro

**Criar:** `src/components/GoogleTagManager.astro`

Contém:
- **Snippet 1 (head):** script com `type="text/partytown"` usando `set:html` e template literal, lendo `import.meta.env.PUBLIC_GTM_ID`
- **Snippet 2 (noscript):** iframe noscript com ID via template literal

---

## Etapa 4 — Adicionar GTM aos 3 layouts

Como os 3 layouts são independentes, o componente será importado em cada um:

### 4a. `src/layouts/Layout.astro`
- Importar `GoogleTagManager`
- Adicionar `<GoogleTagManager />` no topo do `<head>` (após `<meta charset>`)
- Adicionar noscript snippet logo após `<body>`

### 4b. `src/layouts/BlogLayout.astro`
- Mesma abordagem

### 4c. `src/layouts/PropostaLayout.astro`
- Mesma abordagem

**Abordagem:** Criar um único componente que renderiza apenas o snippet do `<head>`. O snippet `<noscript>` do `<body>` será adicionado inline em cada layout usando a variável de ambiente diretamente — mantém a semântica correta (head vs body).

---

## Etapa 5 — View Transitions
**PULADA** — o projeto não usa View Transitions.

---

## Etapa 6 — Tipagem TypeScript

**Arquivo:** `src/env.d.ts`
- Adicionar interface `ImportMetaEnv` com `PUBLIC_GTM_ID: string`
- Adicionar interface `Window` com `dataLayer: Record<string, unknown>[]`

---

## Arquivos modificados
1. `astro.config.mjs` — adicionar integração partytown
2. `.env` — adicionar PUBLIC_GTM_ID
3. `src/env.d.ts` — adicionar tipos
4. `src/layouts/Layout.astro` — importar componente + noscript
5. `src/layouts/BlogLayout.astro` — importar componente + noscript
6. `src/layouts/PropostaLayout.astro` — importar componente + noscript

## Arquivo criado
1. `src/components/GoogleTagManager.astro`

## Pacote instalado
1. `@astrojs/partytown`

---

## Verificação
1. Rodar `npm run dev`
2. Abrir DevTools > Network > filtrar por "gtm"
3. Confirmar que `gtm.js` carrega com sucesso
4. Verificar no HTML fonte que o `<noscript>` iframe está presente após `<body>`
5. No Console, digitar `window.dataLayer` — deve retornar um array
