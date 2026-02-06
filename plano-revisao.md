# Plano de revisao (leitura rapida)

## 1) O que foi feito ate agora

- Corrigi paths de assets/favicons para o padrao de `public/`.
- Converti 3 paginas de rota de `index.html` para `index.astro` sem remover conteudo:
  - `src/pages/claude-code-em-1-dia/index.astro`
  - `src/pages/engenharia-de-contexto-aplicado-ao-marketing-digital/index.astro`
  - `src/pages/segundo-cerebro-com-obsidian/index.astro`
- Removi conflito de rota da home movendo um arquivo vazio:
  - de `src/pages/index.html` para `src/legacy-pages/index-empty.html`
- Ajustei referencias de videos/imagens para evitar 404.

## 2) Quebrou o app?

- Nao.
- Build validado com sucesso em `npm run build`.

## 3) Apagou alguma coisa importante?

- Nao apaguei conteudo funcional.
- So saiu da pasta de rota um arquivo vazio (`index.html` de 0 bytes), que foi movido para `src/legacy-pages/`.

## 4) O que voce pediu agora (sem executar ainda)

- Organizar `src/pages` em pastas por rota (manter URL final igual).
- Organizar arquivos soltos em `public/img` em subpastas.
- Atualizar referencias de caminho depois da organizacao.

## 5) Regra de seguranca para a proxima fase

- Nao apagar nada sem sua aprovacao explicita.
- Primeiro: te mostro o plano detalhado de movimentos.
- Depois: so executo quando voce aprovar.
