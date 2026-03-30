# Plano: Modal de Formulário — Mapa de Funil v2

## Contexto

A página `/servicos/mapa-de-funil-v2` possui 3 cards de pacotes com botões de CTA sem ação. O objetivo é adicionar um modal de captura de leads que abre ao clicar em qualquer um dos 3 botões, identifica qual pacote foi escolhido, valida os dados e envia para o Supabase.

**Stack do projeto:** Astro 4.0.0 + Tailwind CSS + Vanilla JavaScript puro. Sem frameworks (sem Svelte, React, Alpine.js). O padrão de interatividade são scripts `<script>` inline com DOM manipulation — há um modal de newsletter em `src/pages/index.astro` que serve de referência direta.

## Arquivos a Modificar/Criar

| Arquivo | Ação |
|---------|------|
| `src/pages/servicos/mapa-de-funil-v2/index.astro` | Modificar — adicionar HTML do modal + `<script>` |
| `src/lib/supabase.ts` | Criar — cliente Supabase |
| `.env.example` | Criar — variáveis de ambiente |
| `package.json` | Instalar `@supabase/supabase-js` |

## Etapas

### 1. Instalar dependência
```bash
npm install @supabase/supabase-js
```

### 2. Criar `.env.example`
```
PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

### 3. Criar `src/lib/supabase.ts`
Cliente usando `import.meta.env.PUBLIC_SUPABASE_URL` e `PUBLIC_SUPABASE_ANON_KEY`.

### 4. Adicionar `data-pacote` nos botões existentes

Localizar os 3 botões dos cards de pacotes em `index.astro` e adicionar o atributo:
- Card 1: `data-pacote="PARA COMEÇAR"`
- Card 2: `data-pacote="RECOMENDADO"`
- Card 3: `data-pacote="MÁXIMO VALOR"`

### 5. Adicionar HTML do Modal em `index.astro`

Inserir antes do fechamento do layout:
- Overlay fixo com z-index alto (`fixed inset-0 bg-black/70 z-50 hidden`)
- Container centralizado, max-width 500px, `rounded-3xl`
- Header: título dinâmico com nome do pacote + botão X
- Alert banner de erro no topo (oculto por padrão)
- Campos: Nome completo, WhatsApp, E-mail — cada um com label, input e `<p>` para mensagem de erro
- Botão "Solicitar Acesso" com spinner de loading
- Toast de sucesso fixo no canto inferior direito (oculto por padrão)

### 6. Adicionar `<script>` no `index.astro`

**Abertura do modal:**
- `querySelectorAll('[data-pacote]')` nos botões
- Ao clicar: armazenar `pacoteAtual`, atualizar título do modal, exibir overlay, focar no campo nome

**Fechamento:** botão X, click no overlay, tecla ESC — com reset do formulário e estado de validação

**Máscara WhatsApp (implementação manual):**
```js
function mascaraWhatsApp(v) {
  v = v.replace(/\D/g, '').slice(0, 11);
  if (v.length <= 10) return v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  return v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}
```

**Validações (tempo real no evento `input`):**
- Nome: não vazio, mínimo 2 caracteres
- WhatsApp: DDD 11–99, 8–9 dígitos após DDD
- E-mail: regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Cada campo com borda vermelha + mensagem de erro abaixo quando inválido
- Botão submit `disabled` enquanto qualquer campo estiver inválido

**Submit:**
1. Se inválido: exibir alert banner no topo, destacar campos com erro
2. Se válido: spinner no botão + `disabled = true`
3. Import dinâmico do cliente Supabase e insert na tabela `leads_pacotes`
4. Sucesso: fechar modal, exibir toast verde por 4s, reset form
5. Erro Supabase: exibir alert banner com mensagem, remover loading

### 7. SQL para executar no Supabase Dashboard

```sql
CREATE TABLE IF NOT EXISTS leads_pacotes (
  id BIGSERIAL PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  pacote_selecionado TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE leads_pacotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_anon" ON leads_pacotes
  FOR INSERT TO anon, authenticated WITH CHECK (true);
```

## Estilização (Tailwind)

- Overlay: `fixed inset-0 bg-black/70 z-50`
- Modal: `bg-white rounded-3xl shadow-2xl max-w-lg w-[90%] mx-auto p-8`
- Input padrão: `border border-gray-200 rounded-xl px-4 py-3 w-full`
- Input erro: `border-red-400 bg-red-50`
- Alert banner: `bg-red-50 border border-red-400 text-red-700 rounded-xl p-3 mb-4`
- Botão disabled: `opacity-50 cursor-not-allowed`
- Toast sucesso: `fixed bottom-6 right-6 bg-green-600 text-white rounded-xl px-5 py-3 z-50`

## Critérios de Aceite

- [ ] Modal abre ao clicar em qualquer um dos 3 botões com título do pacote correto
- [ ] Fecha via X, overlay e ESC
- [ ] Envio com campo vazio exibe alert banner e destaca campos
- [ ] Máscara funciona no WhatsApp (formato `(XX) XXXXX-XXXX`)
- [ ] Validação em tempo real com erros por campo
- [ ] Botão disabled enquanto houver erros
- [ ] Insert no Supabase com `pacote_selecionado` correto
- [ ] Toast de sucesso exibido, modal fecha e form é resetado
- [ ] Responsivo em mobile
