---
title: "Integração Completa Facebook Lead Ads → n8n → Data Crazy"
pubDate: "2026-01-01T19:47:32.736Z"
tags: []
draft: false
author: "Alex Donega"
tipo_nota: "aula"
---

# Integração Completa: Facebook Lead Ads → n8n → Data Crazy

Vou te entregar o fluxo completo e otimizado, Diego. Baseado nos vídeos e seus dados específicos.

## 🎯 Visão Geral do Fluxo

```
Facebook Lead → n8n (Trigger Nativo) → Validação → Criar/Atualizar Lead → Criar Negócio → Log
```

## 📋 Pré-requisitos (Configuração no Facebook)

### 1. Criar Aplicativo na Meta

1. Acesse: `https://developers.facebook.com/apps`
2. **Criar App** → Selecione "Outro" → "Business"
3. **Nome do App**: `Facebook Lead Ads - Habilitar Sorriso (Sorriso-MT)`
4. **Email de contato**: Seu email
5. **Casos de uso**: Outro (para começar zerado)
6. **Tipo**: Business/Empresarial
7. **Portfólio Empresarial**: BM Empresa, Apps (selecione sua BM)

### 2. Configurar o App

#### Em "Login do Facebook para Empresas":

1. Clique em **Configurar**
2. Em "URLs de redirecionamento válidos", adicione:

```
https://work.novoenvio.com.br/rest/oauth2-credential/callback
```

**Se você tem webhook separado**, adicione também:

```
https://SEU_WEBHOOK.novoenvio.com.br/rest/oauth2-credential/callback
```

**Como descobrir seu webhook?**

- No n8n, abra qualquer webhook
- Copie a URL base (antes de `/webhook/...`)
- Use essa URL no formato acima

3. **Salvar alterações**

---

#### Em "Configurações do App > Básico":

Preencha exatamente esses dados:

**URL da Política de Privacidade:**

```
https://www.facebook.com/privacy/policy/?locale=pt_BR
```

**URL dos Termos de Serviço:**

```
https://www.facebook.com/terms/?locale=pt_BR
```

**URL de instruções de exclusão de dados:**

```
https://www.facebook.com/privacy/policy/?locale=pt_BR
```

_(Use a mesma URL da política de privacidade)_

**Categoria do Aplicativo:**

```
Negócio e Páginas
```

**Domínio do aplicativo** (opcional):

```
work.novoenvio.com.br
```

**Salvar alterações**

---

### 3. Verificação da Empresa (CRÍTICO)

⚠️ **Status de verificação**: `public_advanced` é necessário

**Se sua BM não estiver verificada:**

1. Você verá um botão "Verificar sua empresa"
2. Clique e preencha:
    - CNPJ da empresa
    - Documentos solicitados
    - Dados da empresa
3. **Tempo de aprovação**: 1-3 dias úteis
4. Você receberá email da Meta confirmando

**Enquanto isso, anote:**

- BM: `BM Empresa, Apps`
- Status: Aguardando verificação

---

### 4. Solicitar Acesso Avançado

**⚠️ SÓ FAÇA ISSO DEPOIS DA BM VERIFICADA**

1. Vá em **Análise do App > Permissões e Recursos**
2. Localize `leads_retrieval` (ou `public_advanced`)
3. Clique em **Solicitar Acesso Avançado**
4. **Selecione**: BM Empresa, Apps
5. Clique em **Concordar**

#### Preencha o formulário:

**Como você usa os dados dos usuários?**

- [ ] Personalização de anúncios
- [ ] Análise de anúncios
- [ ] Compartilhamento com terceiros
- [ ] Venda para terceiros

**Marque:** TODAS como **NÃO** ❌

**Seu nome:** Diego Carmona **País:** Brasil **Você compartilha dados?** NÃO **Nenhuma das opções acima**

**Enviar para análise**

**Tempo de aprovação**: ~1 hora (pode chegar a 24h)

---

### 5. Ativar o App em Produção

⚠️ **AGUARDE a aprovação do passo 4 antes de ativar**

1. Você receberá email: "Renovação de acesso concluída"
2. No canto superior direito do app, clique no botão
3. Mude de **Desenvolvimento** para **Ao Vivo**
4. Se pedir nova avaliação, preencha o mesmo formulário (não, não, não, não)
5. Aguarde mais ~1 hora se necessário

**Status final esperado:**

- 🟢 App: **Ao Vivo**
- 🟢 Verificação: **public_advanced** (ou completed)

---

### 6. Copiar Credenciais do App

1. Vá em **Configurações do App > Básico**
2. Copie e salve (não compartilhe):

```
ID do Aplicativo (Client ID): [ANOTAR AQUI]
Chave Secreta do App (Client Secret): [Clicar em "Mostrar" e anotar]
```

---

## 🔧 Configuração no n8n

### Passo 1: Criar Credencial do Facebook

1. No n8n (`work.novoenvio.com.br`), vá em **Credenciais**
2. Clique em **Adicionar Credencial**
3. Busque: **Facebook Lead Ads OAuth2 API**
4. Preencha:

```
Nome: Facebook Lead Ads - Habilitar Sorriso (Sorriso-MT)
Client ID: [Cole o ID do App]
Client Secret: [Cole a Chave Secreta]
```

5. **Importante**: A URL de callback já aparece automaticamente:

```
https://work.novoenvio.com.br/rest/oauth2-credential/callback
```

_(Essa mesma URL você já colocou no Facebook)_

6. Clique em **Conectar minha conta**
    
7. Faça login no Facebook
    
8. **CRÍTICO**: Na tela de permissões, selecione:
    
    - ✅ **Todas as páginas e futuras páginas**
    - ✅ **Todas as contas de anúncio e futuras contas**
    - ✅ **Todos os Business Managers**
9. Clique em **Concluir**
    
10. Aguarde a **tela verde de sucesso** no n8n
    

⚠️ **Se não aparecer tela verde:**

- Clique em "Reconnect"
- Ou exclua e crie a credencial novamente

---

## 🚀 Workflow Completo no n8n

### Node 1: Facebook Lead Ads Trigger

**Node:** `Facebook Lead Ads`

**Configuração:**

- **Credential**: `Facebook Lead Ads - Habilitar Sorriso (Sorriso-MT)`
- **Trigger On**: `New Lead`
- **Página**: Selecione a página "Habilitar Sorriso" (ou sua página)
- **Formulário**: Selecione o formulário específico
- **⚠️ IMPORTANTE**: Ative o workflow (botão de produção)

**Por que produção?** O Facebook só envia leads para webhooks em produção, não funciona em teste.

**O que este node retorna:**

```json
{
  "id": "123456789",
  "created_time": "2025-11-13T10:00:00+0000",
  "field_data": [
    {"name": "full_name", "values": ["Diego Carmona"]},
    {"name": "email", "values": ["diego@exemplo.com"]},
    {"name": "phone_number", "values": ["41999999999"]}
  ],
  "ad_name": "Anúncio Campanha Sorriso",
  "adset_name": "Público Sorriso-MT",
  "campaign_name": "Habilitar Sorriso 2025",
  "form_id": "987654321",
  "page_id": "456789123"
}
```

---

### Node 2: Code - Extrair e Formatar Dados

**Node:** `Code` (JavaScript)

**Nome sugerido:** "Extrair e Formatar Lead"

```javascript
// Extrai dados do Facebook Lead
const lead = $input.item.json;

// Função helper para buscar valor no field_data
function getFieldValue(fieldName) {
  const field = lead.field_data.find(f => f.name === fieldName);
  return field && field.values && field.values[0] ? field.values[0] : '';
}

// Função para limpar e formatar telefone brasileiro
function formatPhone(phone) {
  if (!phone) return '';
  
  // Remove tudo que não é número
  let cleaned = phone.replace(/\D/g, '');
  
  // Remove zeros à esquerda se tiver
  cleaned = cleaned.replace(/^0+/, '');
  
  // Se começar com 55, remove (vamos adicionar depois)
  if (cleaned.startsWith('55')) {
    cleaned = cleaned.substring(2);
  }
  
  // Valida se tem 10 ou 11 dígitos (formato brasileiro)
  if (cleaned.length === 10 || cleaned.length === 11) {
    return '+55' + cleaned;
  }
  
  // Se não tem 10-11 dígitos, retorna como está com +55
  return '+55' + cleaned;
}

// Extrai informações da campanha
const adName = lead.ad_name || 'não informado';
const adsetName = lead.adset_name || 'não informado';
const campaignName = lead.campaign_name || 'Habilitar Sorriso';

// Extrai campos customizados (adapte conforme seu formulário)
const nomeCompleto = getFieldValue('full_name') || getFieldValue('name');
const email = getFieldValue('email');
const telefone = getFieldValue('phone_number') || getFieldValue('phone');

// Campos extras que podem existir no seu formulário
const cidade = getFieldValue('city') || 'Sorriso';
const estado = getFieldValue('state') || 'MT';
const mensagem = getFieldValue('message') || '';

// Monta objeto estruturado
const leadData = {
  // Dados principais do lead
  nome: nomeCompleto,
  email: email,
  telefone: formatPhone(telefone),
  cidade: cidade,
  estado: estado,
  mensagem: mensagem,
  
  // Metadados do Facebook
  lead_id_facebook: lead.id,
  form_id: lead.form_id,
  page_id: lead.page_id,
  created_time: lead.created_time,
  
  // UTMs para rastreamento (padrão Carmona Ventures)
  utm_source: 'facebook',
  utm_medium: 'lead_ads',
  utm_campaign: campaignName,
  utm_content: adsetName,
  utm_term: adName,
  
  // Informações adicionais
  origem_completa: `Facebook Lead Ads - ${campaignName}`,
  localizacao: `${cidade}/${estado}`,
  
  // Tags para segmentação
  tags: [
    'facebook_lead',
    'habilitar_sorriso',
    'sorriso_mt',
    campaignName.toLowerCase().replace(/\s+/g, '_')
  ],
  
  // Timestamps
  data_cadastro_facebook: lead.created_time,
  data_processamento: new Date().toISOString()
};

// Log para debug (visível nas execuções)
console.log('✅ Lead extraído:', {
  nome: leadData.nome,
  telefone: leadData.telefone,
  campanha: leadData.utm_campaign
});

return { json: leadData };
```

**Por que esse code é importante:**

- Formata telefone no padrão brasileiro +5565...
- Normaliza campos que podem ter nomes diferentes
- Cria estrutura de UTMs padronizada
- Adiciona tags automáticas para segmentação
- Prepara dados limpos para o CRM

---

### Node 3: HTTP Request - Buscar Lead Existente

**Node:** `HTTP Request`

**Nome sugerido:** "Buscar Lead por Telefone"

**Configuração:**

- **Method**: `GET`
- **URL**: `https://api.datacrazy.com.br/v1/leads/search`
- **Authentication**: `Predefined Credential Type` → `Header Auth`
    - **Name**: `Authorization`
    - **Value**: `Bearer SEU_TOKEN_DATA_CRAZY`

**Query Parameters:**

|Nome|Valor|
|---|---|
|`phone`|`{{$json.telefone}}`|

**Headers:**

```json
{
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

**Configurações avançadas:**

- **Ignore SSL Issues**: OFF
- **Timeout**: 10000ms
- **Retry on Fail**: ON (3 tentativas)

**Resposta esperada se encontrar:**

```json
{
  "data": [
    {
      "id": "lead_123",
      "name": "Diego Carmona",
      "phone": "+5565999999999",
      "email": "diego@exemplo.com",
      "tags": ["cliente_antigo"],
      "custom_fields": {
        "utm_campaign": "campanha_antiga"
      }
    }
  ]
}
```

**Resposta esperada se NÃO encontrar:**

```json
{
  "data": []
}
```

---

### Node 4: IF - Lead Existe?

**Node:** `IF`

**Nome sugerido:** "Lead já existe no CRM?"

**Configuração:**

- **Condition Type**: `Boolean`
- **Value 1**: `{{$json.data.length}}`
- **Operation**: `Larger Than`
- **Value 2**: `0`

**Outputs:**

- **True** → Lead existe (vai para atualização)
- **False** → Lead novo (vai para criação)

---

### Branch FALSE: Criar Novo Lead

#### Node 5A: HTTP Request - Criar Lead

**Node:** `HTTP Request`

**Nome sugerido:** "Criar Novo Lead no CRM"

**Configuração:**

- **Method**: `POST`
- **URL**: `https://api.datacrazy.com.br/v1/leads`
- **Authentication**: Header Auth (Bearer Token)

**Body** (JSON):

```json
{
  "name": "{{$('Extrair e Formatar Lead').item.json.nome}}",
  "email": "{{$('Extrair e Formatar Lead').item.json.email}}",
  "phone": "{{$('Extrair e Formatar Lead').item.json.telefone}}",
  "source": "Facebook Lead Ads - Habilitar Sorriso",
  "city": "{{$('Extrair e Formatar Lead').item.json.cidade}}",
  "state": "{{$('Extrair e Formatar Lead').item.json.estado}}",
  "custom_fields": {
    "lead_id_facebook": "{{$('Extrair e Formatar Lead').item.json.lead_id_facebook}}",
    "form_id": "{{$('Extrair e Formatar Lead').item.json.form_id}}",
    "page_id": "{{$('Extrair e Formatar Lead').item.json.page_id}}",
    "origem": "{{$('Extrair e Formatar Lead').item.json.origem_completa}}",
    "localizacao": "{{$('Extrair e Formatar Lead').item.json.localizacao}}",
    "mensagem": "{{$('Extrair e Formatar Lead').item.json.mensagem}}",
    "utm_source": "{{$('Extrair e Formatar Lead').item.json.utm_source}}",
    "utm_medium": "{{$('Extrair e Formatar Lead').item.json.utm_medium}}",
    "utm_campaign": "{{$('Extrair e Formatar Lead').item.json.utm_campaign}}",
    "utm_content": "{{$('Extrair e Formatar Lead').item.json.utm_content}}",
    "utm_term": "{{$('Extrair e Formatar Lead').item.json.utm_term}}",
    "data_cadastro_facebook": "{{$('Extrair e Formatar Lead').item.json.created_time}}",
    "primeira_interacao": "{{$('Extrair e Formatar Lead').item.json.data_processamento}}"
  },
  "tags": {{$('Extrair e Formatar Lead').item.json.tags}}
}
```

**Headers:**

```json
{
  "Content-Type": "application/json"
}
```

**Resposta esperada:**

```json
{
  "id": "lead_456",
  "name": "Diego Carmona",
  "phone": "+5565999999999",
  "created_at": "2025-11-13T14:30:00Z",
  "status": "created"
}
```

---

### Branch TRUE: Atualizar Lead Existente

#### Node 5B: Code - Preparar Atualização

**Node:** `Code` (JavaScript)

**Nome sugerido:** "Preparar Dados para Atualização"

```javascript
// Pega dados do lead que já existe no CRM
const leadExistente = $('Buscar Lead por Telefone').item.json.data[0];

// Pega os novos dados que vieram do Facebook
const novosDados = $('Extrair e Formatar Lead').item.json;

// Monta objeto de atualização
// REGRA: Só atualiza campos que vieram preenchidos E são diferentes
const updates = {
  custom_fields: {}
};

// ========== CAMPOS PRINCIPAIS ==========

// Nome: só atualiza se vier preenchido e for diferente
if (novosDados.nome && 
    novosDados.nome.trim() !== '' && 
    novosDados.nome !== leadExistente.name) {
  updates.name = novosDados.nome;
  console.log('📝 Nome será atualizado:', leadExistente.name, '→', novosDados.nome);
}

// Email: só atualiza se vier preenchido e for diferente
if (novosDados.email && 
    novosDados.email.trim() !== '' && 
    novosDados.email !== leadExistente.email) {
  updates.email = novosDados.email;
  console.log('📧 Email será atualizado:', leadExistente.email, '→', novosDados.email);
}

// Cidade/Estado: atualiza se vier preenchido
if (novosDados.cidade && novosDados.cidade !== 'não informado') {
  updates.city = novosDados.cidade;
}

if (novosDados.estado && novosDados.estado !== 'não informado') {
  updates.state = novosDados.estado;
}

// ========== CUSTOM FIELDS (sempre atualiza) ==========

// UTMs: sempre atualiza para rastrear última interação
updates.custom_fields.utm_source = novosDados.utm_source;
updates.custom_fields.utm_medium = novosDados.utm_medium;
updates.custom_fields.utm_campaign = novosDados.utm_campaign;
updates.custom_fields.utm_content = novosDados.utm_content;
updates.custom_fields.utm_term = novosDados.utm_term;

// Última interação
updates.custom_fields.ultima_interacao = novosDados.data_processamento;
updates.custom_fields.ultima_origem = novosDados.origem_completa;
updates.custom_fields.lead_id_facebook_ultimo = novosDados.lead_id_facebook;

// Contador de interações (incrementa)
const interacoesAtuais = leadExistente.custom_fields?.total_interacoes || 0;
updates.custom_fields.total_interacoes = interacoesAtuais + 1;

// Mensagem: adiciona se vier nova
if (novosDados.mensagem && novosDados.mensagem.trim() !== '') {
  const mensagemAnterior = leadExistente.custom_fields?.mensagem || '';
  if (mensagemAnterior) {
    updates.custom_fields.mensagem = `${mensagemAnterior}\n\n--- Nova mensagem (${new Date().toLocaleString('pt-BR')}) ---\n${novosDados.mensagem}`;
  } else {
    updates.custom_fields.mensagem = novosDados.mensagem;
  }
}

// ========== TAGS ==========

// Mescla tags antigas com novas (sem duplicar)
const tagsAtuais = leadExistente.tags || [];
const novasTags = novosDados.tags || [];

// Cria array único de tags
const tagsMescladas = [...new Set([...tagsAtuais, ...novasTags])];

// Só atualiza se houver tags novas
if (tagsMescladas.length > tagsAtuais.length) {
  updates.tags = tagsMescladas;
  console.log('🏷️ Tags atualizadas:', tagsAtuais, '→', tagsMescladas);
}

// ========== LOG E RETORNO ==========

console.log('🔄 Atualização preparada para lead:', leadExistente.id);
console.log('Campos que serão atualizados:', Object.keys(updates));

return {
  json: {
    lead_id: leadExistente.id,
    lead_name: leadExistente.name,
    updates: updates,
    action: 'update',
    campos_atualizados: Object.keys(updates).length,
    reinteracao: true
  }
};
```

**Por que esse code é importante:**

- Protege dados antigos (não sobrescreve sem necessidade)
- Sempre atualiza UTMs (rastreamento de última origem)
- Incrementa contador de interações
- Concatena mensagens novas com antigas
- Mescla tags sem duplicar

---

#### Node 5C: HTTP Request - Atualizar Lead

**Node:** `HTTP Request`

**Nome sugerido:** "Atualizar Lead Existente"

**Configuração:**

- **Method**: `PATCH` (ou `PUT`, dependendo da API do Data Crazy)
- **URL**: `https://api.datacrazy.com.br/v1/leads/{{$json.lead_id}}`
- **Authentication**: Header Auth (Bearer Token)

**Body**:

```json
{{$json.updates}}
```

**Headers:**

```json
{
  "Content-Type": "application/json"
}
```

**Resposta esperada:**

```json
{
  "id": "lead_123",
  "name": "Diego Carmona",
  "phone": "+5565999999999",
  "updated_at": "2025-11-13T14:35:00Z",
  "status": "updated"
}
```

---

### Node 6: Merge - Unir os Branches

**Node:** `Merge`

**Nome sugerido:** "Mesclar Resultados"

**Configuração:**

- **Mode**: `Append`
- **Input 1**: Saída do "Criar Novo Lead"
- **Input 2**: Saída do "Atualizar Lead Existente"

**O que faz:** Une os dois fluxos (criação e atualização) em um só caminho para continuar o workflow.

---

### Node 7: HTTP Request - Criar Negócio no Funil

**Node:** `HTTP Request`

**Nome sugerido:** "Criar Negócio/Oportunidade"

**Configuração:**

- **Method**: `POST`
- **URL**: `https://api.datacrazy.com.br/v1/deals`
- **Authentication**: Header Auth (Bearer Token)

**Body**:

```json
{
  "lead_id": "{{$json.id || $json.lead_id}}",
  "pipeline_id": "SEU_PIPELINE_ID_AQUI",
  "stage_id": "SEU_STAGE_INICIAL_ID_AQUI",
  "title": "Lead Facebook: {{$('Extrair e Formatar Lead').item.json.nome}} - {{$('Extrair e Formatar Lead').item.json.cidade}}/{{$('Extrair e Formatar Lead').item.json.estado}}",
  "value": 0,
  "expected_close_date": "{{new Date(Date.now() + 30*24*60*60*1000).toISOString()}}",
  "custom_fields": {
    "origem": "Facebook Lead Ads - Habilitar Sorriso",
    "campanha": "{{$('Extrair e Formatar Lead').item.json.utm_campaign}}",
    "conjunto_anuncios": "{{$('Extrair e Formatar Lead').item.json.utm_content}}",
    "anuncio": "{{$('Extrair e Formatar Lead').item.json.utm_term}}",
    "localizacao": "{{$('Extrair e Formatar Lead').item.json.localizacao}}",
    "data_entrada_funil": "{{$('Extrair e Formatar Lead').item.json.data_processamento}}",
    "form_id": "{{$('Extrair e Formatar Lead').item.json.form_id}}",
    "lead_id_facebook": "{{$('Extrair e Formatar Lead').item.json.lead_id_facebook}}"
  },
  "description": "🎯 Lead capturado via formulário instantâneo do Facebook\n\n📍 Localização: {{$('Extrair e Formatar Lead').item.json.localizacao}}\n📱 Campanha: {{$('Extrair e Formatar Lead').item.json.utm_campaign}}\n🎨 Conjunto de Anúncios: {{$('Extrair e Formatar Lead').item.json.utm_content}}\n📢 Anúncio: {{$('Extrair e Formatar Lead').item.json.utm_term}}\n📅 Data do Lead: {{$('Extrair e Formatar Lead').item.json.created_time}}\n\n{{$('Extrair e Formatar Lead').item.json.mensagem ? '💬 Mensagem:\n' + $('Extrair e Formatar Lead').item.json.mensagem : ''}}"
}
```

**⚠️ IMPORTANTE:** Você precisa descobrir:

- **Pipeline ID**: ID do funil de vendas onde o lead vai entrar
- **Stage ID**: ID do estágio inicial (ex: "Novo Lead", "Prospecção")

**Como descobrir?**

1. Acesse a API do Data Crazy: `GET /v1/pipelines`
2. Ou veja na URL do CRM quando estiver no funil

**Resposta esperada:**

```json
{
  "id": "deal_789",
  "lead_id": "lead_456",
  "pipeline_id": "pipeline_123",
  "stage_id": "stage_001",
  "title": "Lead Facebook: Diego Carmona - Sorriso/MT",
  "created_at": "2025-11-13T14:40:00Z"
}
```

---

### Node 8: Code - Log Final e Estatísticas

**Node:** `Code` (JavaScript)

**Nome sugerido:** "Log Final e Dashboard"

```javascript
// Pega todos os dados do fluxo
const leadData = $('Extrair e Formatar Lead').first().json;
const result = $input.item.json;

// Determina se foi criação ou atualização
const wasUpdate = $('Preparar Dados para Atualização').all().length > 0;
const action = wasUpdate ? 'updated' : 'created';

// Calcula tempo de processamento
const tempoProcessamento = Date.now() - new Date(leadData.data_processamento).getTime();

// Monta log estruturado completo
const log = {
  // Status
  status: 'success',
  action: action,
  acao_portugues: action === 'created' ? 'Criado' : 'Atualizado',
  
  // Dados do Lead
  lead_id: result.id || result.lead_id,
  lead_name: leadData.nome,
  lead_phone: leadData.telefone,
  lead_email: leadData.email,
  lead_cidade: leadData.cidade,
  lead_estado: leadData.estado,
  
  // Origem
  source: 'Facebook Lead Ads',
  source_detail: leadData.origem_completa,
  campaign: leadData.utm_campaign,
  adset: leadData.utm_content,
  ad: leadData.utm_term,
  
  // IDs de rastreamento
  form_id: leadData.form_id,
  page_id: leadData.page_id,
  facebook_lead_id: leadData.lead_id_facebook,
  
  // Negócio/Deal
  deal_created: result.deal_id ? true : false,
  deal_id: result.deal_id || null,
  
  // Métricas
  tempo_processamento_ms: tempoProcessamento,
  tempo_processamento_seg: (tempoProcessamento / 1000).toFixed(2),
  
  // Timestamps
  data_lead_facebook: leadData.created_time,
  data_processamento_n8n: leadData.data_processamento,
  processed_at: new Date().toISOString(),
  
  // Metadados técnicos
  workflow_execution_id: $execution.id,
  workflow_name: $workflow.name,
  n8n_instance: 'work.novoenvio.com.br'
};

// ========== CONSOLE LOGS (visível nas execuções) ==========

console.log('\n' + '='.repeat(60));
console.log('✅ LEAD PROCESSADO COM SUCESSO');
console.log('='.repeat(60));
console.log(`📊 Ação: ${log.acao_portugues}`);
console.log(`👤 Nome: ${log.lead_name}`);
console.log(`📱 Telefone: ${log.lead_phone}`);
console.log(`📧 Email: ${log.lead_email}`);
console.log(`📍 Localização: ${log.lead_cidade}/${log.lead_estado}`);
console.log(`🎯 Campanha: ${log.campaign}`);
console.log(`⏱️ Tempo de processamento: ${log.tempo_processamento_seg}s`);
console.log(`🆔 Lead ID: ${log.lead_id}`);
if (log.deal_created) {
  console.log(`💼 Deal ID: ${log.deal_id}`);
}
console.log('='.repeat(60) + '\n');

// ========== RETORNA DADOS PARA PRÓXIMOS NODES ==========

return { json: log };
```

**Para que serve:**

- Centraliza todos os dados do fluxo
- Cria log estruturado para análise
- Calcula métricas de performance
- Facilita debug e monitoramento
- Prepara dados para dashboards

---

### Node 9 (Opcional): Google Sheets - Dashboard

**Node:** `Google Sheets`

**Nome sugerido:** "Adicionar ao Dashboard"

**Configuração:**

- **Operation**: `Append or Update Row`
- **Document**: Seu Google Sheets de tracking
- **Sheet**: `Facebook Leads`

**Dados para inserir:**

|Coluna|Valor|
|---|---|
|Data/Hora|`{{$json.processed_at}}`|
|Ação|`{{$json.acao_portugues}}`|
|Nome|`{{$json.lead_name}}`|
|Telefone|`{{$json.lead_phone}}`|
|Email|`{{$json.lead_email}}`|
|Cidade|`{{$json.lead_cidade}}`|
|Estado|`{{$json.lead_estado}}`|
|Campanha|`{{$json.campaign}}`|
|Conjunto Anúncios|`{{$json.adset}}`|
|Anúncio|`{{$json.ad}}`|
|Lead ID|`{{$json.lead_id}}`|
|Deal ID|`{{$json.deal_id}}`|
|Tempo (seg)|`{{$json.tempo_processamento_seg}}`|
|Facebook Lead ID|`{{$json.facebook_lead_id}}`|
|Execution ID|`{{$json.workflow_execution_id}}`|

---

### Node 10 (Opcional): Notificação Telegram/Slack

**Node:** `Telegram` ou `Slack`

**Nome sugerido:** "Notificar Novo Lead"

**Mensagem sugerida:**

```
🎉 *NOVO LEAD - Habilitar Sorriso*

{{$json.acao_portugues === 'Criado' ? '✨ Lead novo!' : '🔄 Lead recontato!'}}

👤 *Nome:* {{$json.lead_name}}
📱 *Telefone:* {{$json.lead_phone}}
📍 *Localização:* {{$json.lead_cidade}}/{{$json.lead_estado}}

🎯 *Campanha:* {{$json.campaign}}
📢 *Anúncio:* {{$json.ad}}

🆔 *Lead ID:* {{$json.lead_id}}
💼 *Deal ID:* {{$json.deal_id}}

⏱️ Processado em {{$json.tempo_processamento_seg}}s

🔗 [Ver no CRM](https://datacrazy.com.br/leads/{{$json.lead_id}})
```

---

## 🧪 Como Testar o Workflow

### 1. Preparação

✅ App do Facebook criado e aprovado ✅ Credencial n8n conectada ✅ Workflow criado com todos os nodes ✅ **Workflow ATIVADO** (modo produção)

### 2. Ferramenta de Teste do Facebook

1. Acesse: `https://developers.facebook.com/tools/lead-ads-testing/`
    
2. Selecione:
    
    - **Business Manager**: BM Empresa, Apps
    - **Página**: Habilitar Sorriso (Sorriso-MT)
    - **Formulário**: Seu formulário específico
3. **⚠️ NÃO clique em "Criar Lead"** (dados aleatórios)
    
4. Clique em **"Ver Prévia do Formulário"**
    
5. Preencha manualmente:
    
    ```
    Nome: Diego Carmona Teste
    Email: teste@exemplo.com
    Telefone: 65999999999
    Cidade: Sorriso
    Estado: MT
    ```
    
6. Clique em **"Enviar"**
    
7. **Aguarde 5-30 segundos**
    
8. Vá para o n8n → **Execuções** → Veja a execução aparecer
    

### 3. Validações no n8n

Abra a execução e verifique cada node:

✅ **Node 1 (Facebook Trigger)**: Dados recebidos do Facebook? ✅ **Node 2 (Code)**: Telefone formatado com +5565...? ✅ **Node 3 (Buscar Lead)**: Retornou vazio (lead novo) ou encontrou (lead existe)? ✅ **Node 4 (IF)**: Foi para o branch correto? ✅ **Node 5A ou 5B**: Lead criado/atualizado com sucesso? ✅ **Node 7 (Deal)**: Negócio criado no funil? ✅ **Node 8 (Log)**: Log completo gerado?

### 4. Validações no Data Crazy

1. Acesse o CRM: `https://datacrazy.com.br`
2. Busque pelo telefone: `+5565999999999`
3. Verifique:
    - ✅ Lead existe?
    - ✅ Nome, email, telefone corretos?
    - ✅ Tags aplicadas?
    - ✅ UTMs preenchidas?
    - ✅ Custom fields com dados do Facebook?
    - ✅ Negócio criado no funil?

### 5. Teste de Recontato (Lead Duplicado)

1. Na ferramenta do Facebook, clique em **"Excluir Lead"**
2. Preencha o formulário novamente **com o mesmo telefone**
3. Mas mude o nome: `Diego Carmona Teste 2`
4. Envie
5. Verifique no n8n:
    - ✅ Foi para branch "Atualizar"?
    - ✅ Nome foi atualizado?
    - ✅ UTMs foram atualizadas?
    - ✅ Tags foram mescladas?
    - ✅ Contador de interações incrementou?

---

## 🔄 Fluxo de Decisão Visual

```
📱 Lead do Facebook (Trigger)
         ↓
📦 Extrair e Formatar Dados
         ↓
🔍 Buscar Lead por Telefone no CRM
         ↓
    ❓ Existe?
    /         \
  SIM         NÃO
   ↓           ↓
🔄 Atualizar  ✨ Criar Novo
   ↓           ↓
    \         /
     \       /
      \     /
   🤝 Merge
       ↓
💼 Criar Negócio no Funil
       ↓
📊 Log Final
       ↓
📈 Dashboard (opcional)
       ↓
🔔 Notificação (opcional)
```

---

## ⚠️ Pontos Críticos de Atenção

### 1. Um App = Um Formulário Ativo

**Regra do Facebook:**

- Cada app suporta **apenas 1 formulário ativo** por vez
- Se desligar o formulário, pode reutilizar o app para outro
- Se tem múltiplos formulários simultâneos:
    - Crie 1 app para cada formulário
    - Crie 1 credencial no n8n para cada
    - Crie 1 workflow para cada (ou duplique)

**Exemplo:**

```
App 1: "Facebook Lead Ads - Habilitar Sorriso (Sorriso-MT)"
  → Formulário: Campanha Sorriso Principal
  → Workflow: "Lead Sorriso - Principal"

App 2: "Facebook Lead Ads - Habilitar Sorriso (Promoção)"
  → Formulário: Campanha Promoção Black Friday
  → Workflow: "Lead Sorriso - Black Friday"
```

### 2. Webhooks Sempre em Produção

⚠️ **O Facebook NÃO envia para webhooks de teste**

- No n8n, **sempre ative o workflow** (botão de produção)
- Não funciona em modo teste/draft
- Se desativar, os leads são perdidos

### 3. Aprovações e Renovações

**Timeline:**

1. Criar app → Imediato
2. Verificação BM → 1-3 dias
3. Acesso avançado → 1 hora a 24h
4. Renovação → A cada 90 dias (email avisa)

**Ações quando vencer:**

- Receberá email da Meta
- Preencha o mesmo formulário (não, não, não, não)
- Aguarde ~1 hora
- Sem downtime se fizer antes do prazo

### 4. Proteção de Dados no Update

**O que NÃO sobrescrever:**

- ❌ Nome (só se vier diferente)
- ❌ Email (só se vier diferente)
- ❌ Telefone (NUNCA - é o ID único)
- ❌ Dados antigos importantes

**O que SEMPRE atualizar:**

- ✅ UTMs (rastreamento de origem)
- ✅ Última interação
- ✅ Contador de interações
- ✅ Tags (mesclar sem duplicar)

### 5. Formato do Telefone

**Padrão brasileiro:**

```
Entrada: 65999999999
Saída: +5565999999999

Entrada: 41987654321
Saída: +5541987654321

Entrada: 011999999999
Saída: +5511999999999
```

**Validação:**

- 10 dígitos (fixo): DDD + 8 dígitos
- 11 dígitos (celular): DDD + 9 + 8 dígitos
- Sempre adiciona +55

---

## 🚀 Melhorias Opcionais (Fase 2)

### 1. Score de Qualidade do Lead

**Node Code após Extrair Dados:**

```javascript
const lead = $json;

// Sistema de pontuação
let score = 0;

// Nome completo (+20 pontos)
if (lead.nome && lead.nome.trim().split(' ').length > 1) {
  score += 20;
}

// Email válido (+30 pontos)
if (lead.email && lead.email.includes('@') && lead.email.includes('.')) {
  score += 30;
}

// Telefone completo (+30 pontos)
if (lead.telefone && lead.telefone.length >= 13) {
  score += 30;
}

// Email corporativo (+20 pontos)
const emailsDomPublicos = ['gmail', 'hotmail', 'outlook', 'yahoo', 'bol', 'uol'];
const emailCorporativo = lead.email && 
  !emailsDomPublicos.some(dom => lead.email.toLowerCase().includes(dom));

if (emailCorporativo) {
  score += 20;
}

// Classificação
let classification = 'cold_lead';
let emoji = '❄️';

if (score >= 80) {
  classification = 'hot_lead';
  emoji = '🔥';
} else if (score >= 60) {
  classification = 'warm_lead';
  emoji = '🌡️';
}

return {
  json: {
    ...lead,
    quality_score: score,
    quality_classification: classification,
    quality_emoji: emoji,
    quality_tag: `lead_${classification}`
  }
};
```

**Uso:** Adicione `quality_tag` nas tags do CRM e filtre por qualidade.

### 2. Distribuição Automática (Round-Robin)

**Node Code antes de Criar Deal:**

```javascript
// Lista de vendedores (pode vir de uma tabela externa)
const vendedores = [
  { id: 'vend_001', nome: 'João Silva', email: 'joao@empresa.com' },
  { id: 'vend_002', nome: 'Maria Santos', email: 'maria@empresa.com' },
  { id: 'vend_003', nome: 'Pedro Costa', email: 'pedro@empresa.com' }
];

// Pega o ID do lead e usa módulo para distribuir
const leadId = $json.lead_id || $json.id;
const leadIdNumerico = parseInt(leadId.replace(/\D/g, '').slice(-6));
const indice = leadIdNumerico % vendedores.length;

const vendedorAtribuido = vendedores[indice];

console.log(`🎯 Lead distribuído para: ${vendedorAtribuido.nome}`);

return {
  json: {
    ...$json,
    vendedor_id: vendedorAtribuido.id,
    vendedor_nome: vendedorAtribuido.nome,
    vendedor_email: vendedorAtribuido.email
  }
};
```

**Adicione ao Deal:**

```json
"assigned_to": "{{$json.vendedor_id}}",
"assigned_to_email": "{{$json.vendedor_email}}"
```

### 3. Enriquecimento de Dados (Clearbit/Hunter.io)

**Node HTTP Request após Extrair Dados:**

```
URL: https://api.hunter.io/v2/email-verifier
Query: email={{$json.email}}&api_key=SUA_API_KEY

Retorna:
- Email válido?
- Email corporativo?
- Nome da empresa
- Cargo estimado
```

### 4. Validação de Horário Comercial

**Node Code antes de Notificar:**

```javascript
const agora = new Date();
const hora = agora.getHours();
const diaSemana = agora.getDay(); // 0 = domingo, 6 = sábado

// Horário comercial: Seg-Sex, 8h-18h
const horarioComercial = 
  diaSemana >= 1 && 
  diaSemana <= 5 && 
  hora >= 8 && 
  hora < 18;

return {
  json: {
    ...$json,
    horario_comercial: horarioComercial,
    prioridade: horarioComercial ? 'alta' : 'normal',
    urgencia_emoji: horarioComercial ? '🚨' : '📋'
  }
};
```

### 5. Anti-Spam / Detecção de Leads Falsos

**Node Code após Extrair Dados:**

```javascript
const lead = $json;

// Detectores de spam
const indicadoresSpam = [];

// Nome genérico ou teste
const nomesGenericos = ['teste', 'test', 'asdf', 'qwerty', 'nome', 'fulano'];
if (nomesGenericos.some(n => lead.nome.toLowerCase().includes(n))) {
  indicadoresSpam.push('nome_generico');
}

// Email temporário
const emailsTemporarios = ['tempmail', 'guerrillamail', '10minutemail', 'throwaway'];
if (emailsTemporarios.some(e => lead.email.toLowerCase().includes(e))) {
  indicadoresSpam.push('email_temporario');
}

// Telefone inválido (todos números iguais)
const telefoneNumeros = lead.telefone.replace(/\D/g, '');
if (/^(\d)\1+$/.test(telefoneNumeros)) {
  indicadoresSpam.push('telefone_invalido');
}

// Score de spam
const spamScore = indicadoresSpam.length;
const isSpam = spamScore >= 2;

return {
  json: {
    ...lead,
    spam_score: spamScore,
    spam_indicadores: indicadoresSpam,
    is_spam: isSpam,
    spam_tag: isSpam ? 'possivel_spam' : 'lead_valido'
  }
};
```

**Adicione um IF:**

- Se `is_spam === true` → Enviar para revisão manual
- Se `is_spam === false` → Continuar fluxo normal

---

## 📊 Dashboard e Monitoramento

### KPIs Essenciais

1. **Taxa de Conversão Formulário → CRM**
    
    - Meta: 100% (sem perda)
    - Como medir: Leads FB vs Leads CRM
2. **Tempo Médio de Processamento**
    
    - Meta: < 5 segundos
    - Como medir: Campo `tempo_processamento_seg`
3. **Taxa de Duplicatas**
    
    - Meta: < 10%
    - Como medir: Leads "updated" vs "created"
4. **Taxa de Erro**
    
    - Meta: < 1%
    - Como medir: Execuções com erro no n8n
5. **Quality Score Médio**
    
    - Meta: > 70 pontos
    - Como medir: Média do campo `quality_score`

### Google Sheets - Template de Dashboard

**Colunas sugeridas:**

|A|B|C|D|E|F|G|H|I|J|K|
|---|---|---|---|---|---|---|---|---|---|---|
|Data/Hora|Ação|Nome|Telefone|Email|Cidade|Estado|Campanha|Quality Score|Tempo (s)|Lead ID|

**Fórmulas úteis:**

```
// Total de leads hoje
=COUNTIF(A:A, ">="&TODAY())

// Taxa de recontato
=COUNTIF(B:B, "Atualizado") / COUNTA(B:B)

// Tempo médio de processamento
=AVERAGE(J:J)

// Campanha com mais leads
=INDEX(H:H, MODE(MATCH(H:H, H:H, 0)))
```

---

## 🎯 Checklist Final de Go-Live

### Facebook

- [ ] App criado: `Facebook Lead Ads - Habilitar Sorriso (Sorriso-MT)`
- [ ] URLs configuradas: `work.novoenvio.com.br/rest/oauth2-credential/callback`
- [ ] Políticas de privacidade: Links do Facebook colados
- [ ] Categoria: Negócio e Páginas
- [ ] BM verificada: `BM Empresa, Apps`
- [ ] Acesso avançado: Aprovado e `public_advanced`
- [ ] App ativado: Status "Ao Vivo"
- [ ] Credenciais copiadas: Client ID e Client Secret

### n8n

- [ ] Credencial criada e conectada
- [ ] Tela verde de sucesso apareceu
- [ ] Todas as páginas/BMs selecionadas
- [ ] Workflow criado com todos os nodes
- [ ] Página selecionada: Habilitar Sorriso
- [ ] Formulário selecionado: [Nome do seu formulário]
- [ ] Workflow ATIVADO (produção)

### Data Crazy

- [ ] Token de API configurado nos nodes
- [ ] Endpoints testados: `/leads/search`, `/leads`, `/deals`
- [ ] Pipeline ID descoberto e configurado
- [ ] Stage ID inicial descoberto e configurado
- [ ] Custom fields criados no CRM (se necessário)
- [ ] Tags configuradas

### Testes

- [ ] Teste via ferramenta Facebook: Lead criado ✅
- [ ] Lead apareceu no n8n ✅
- [ ] Lead apareceu no CRM ✅
- [ ] Negócio criado no funil ✅
- [ ] Telefone formatado corretamente (+5565...) ✅
- [ ] UTMs capturadas ✅
- [ ] Tags aplicadas ✅
- [ ] Teste de recontato: Lead atualizado ✅
- [ ] Nome atualizado corretamente ✅
- [ ] UTMs atualizadas ✅

### Monitoramento

- [ ] Dashboard criado (Google Sheets ou similar)
- [ ] Notificações configuradas (Telegram/Slack)
- [ ] Alertas de erro configurados
- [ ] Documentação interna criada
- [ ] Time treinado no processo

---

## 🆘 Troubleshooting

### Problema: Lead não chega no n8n

**Causas:**

1. Workflow não está ativado (produção)
2. Credencial desconectada
3. App do Facebook não está "Ao Vivo"
4. Formulário desvinculado

**Solução:**

- Veja status do workflow (deve estar verde/ativo)
- Teste a credencial: "Reconnect"
- Verifique o app no Facebook
- Teste novamente na ferramenta do Facebook

### Problema: Erro "401 Unauthorized" no CRM

**Causa:** Token de API inválido ou expirado

**Solução:**

- Gere novo token no Data Crazy
- Atualize em TODOS os nodes HTTP Request
- Teste endpoint manualmente: `curl -H "Authorization: Bearer TOKEN" https://api.datacrazy.com.br/v1/leads`

### Problema: Telefone não está formatado

**Causa:** Code de formatação com bug

**Solução:**

- Verifique o Node 2 (Extrair e Formatar)
- Confira se a função `formatPhone()` está correta
- Teste com diferentes formatos de entrada

### Problema: Lead duplicando no CRM

**Causa:** Busca por telefone não está funcionando

**Solução:**

- Verifique Node 3 (Buscar Lead)
- Confirme que o campo de busca é `phone`
- Teste a busca manualmente na API
- Verifique formato do telefone (+5565...)

### Problema: Acesso avançado não aprovado

**Causa:** BM não verificada

**Solução:**

- Vá em Business Manager → Configurações
- Siga processo de verificação empresarial
- Envie documentos solicitados
- Aguarde 1-3 dias

---

## 📞 Suporte e Recursos

**Facebook:**

- Documentação Lead Ads: `https://developers.facebook.com/docs/marketing-api/guides/lead-ads`
- Ferramenta de teste: `https://developers.facebook.com/tools/lead-ads-testing/`
- Suporte: `https://developers.facebook.com/support`

**n8n:**

- Documentação: `https://docs.n8n.io`
- Community: `https://community.n8n.io`
- Facebook Lead Ads Node: `https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebookleadadstrigger/`

**Data Crazy:**

- Documentação API: [Solicitar ao suporte]
- Status da API: [Verificar disponibilidade]

---

## 🎉 Pronto para Produção!

Seguindo esse guia completo, você terá:

✅ Integração robusta e escalável ✅ Proteção contra duplicatas ✅ Rastreamento completo de origem ✅ Atualização inteligente de leads ✅ Criação automática de negócios ✅ Monitoramento e logs detalhados

**Tempo estimado de implementação:**

- Setup inicial: 2-3 horas
- Testes: 1 hora
- Go-live: Imediato após aprovação

**Próximos passos:**

1. Crie o app no Facebook
2. Aguarde aprovação (1-24h)
3. Configure credencial no n8n
4. Importe o workflow
5. Teste 3x
6. Ative e monitore

Alguma dúvida específica sobre a API do Data Crazy ou quer que eu gere o JSON completo do workflow para importar no n8n?

---
## Propriedades da nota

> [!note]- 📋 Propriedades Gerais do Obsidian
>
>> **📝 Identificação**
>
> | Campo      | Valor                    |
> |:-----------|:-------------------------|
> | **Título** | `INPUT[text:titulo]`     |
>
>> **🔗 Conexões**
>
> | Campo           | Valor                                                                 |
> |:----------------|:----------------------------------------------------------------------|
> | **Pai**         | `INPUT[suggester(optionQuery("")):pai]`                               |
> | **Coleção**     | `INPUT[inlineSelect(option(financeiro, Financeiro), option(growth, Growth), option(ia, IA), option(lideranca, Liderança), option(marketing, Marketing), option(negocios, Negócios), option(produtividade, Produtividade), option(pkm, PKM), option(saas, SaaS), option(tecnologia, Tecnologia), option(vendas, Vendas)):colecao]` |
> | **Área**        | `INPUT[suggester(optionQuery("Esforços/Áreas")):area]`                         |
> | **Projeto**     | `INPUT[suggester(optionQuery("#projeto")):projeto]`                   |
> | **Autor**       | `INPUT[suggester(optionQuery("Atlas/Pessoas")):pessoa]`                      |
> | **Relacionado** | `INPUT[inlineListSuggester(optionQuery(""), useLinks(true)):relacionado]` |
>
>> **📊 Classificação**
>
> | Campo      | Valor                                                                 |
> |:-----------|:----------------------------------------------------------------------|
> | **Tipo**   | `INPUT[inlineSelect(option(atomica, Atômica), option(aula, Aula), option(artigo, Artigo), option(checklist, Checklist), option(curso, Curso), option(dashboard, Dashboard), option(framework, Framework), option(livro, Livro), option(moc, MOC), option(newsletter, Newsletter), option(pessoa, Pessoa), option(prompt, Prompt), option(template, Template Obsidian), option(tutorial, Tutorial), option(video_youtube, Vídeo Youtube)):tipo_nota]` |
> | **Tags**   | `INPUT[inlineList:tags]`                                              |
> | **Status** | `INPUT[inlineSelect(option(nao_iniciado, ⬜ Não Iniciado), option(em_andamento, 🔄 Em Andamento), option(concluido, ✅ Concluído), option(pausado, ⏸️ Pausado), option(cancelado, ❌ Cancelado)):status]` |
>
>> **📅 Temporal**
>
> | Campo          | Valor                      |
> |:---------------|:---------------------------|
> | **Criado**     | `INPUT[date:data_criado]`       |
> | **Atualizado** | `INPUT[date:data_atualizado]`   |
>
>> **🎨 Visual**
>
> | Campo         | Valor                                                            |
> |:--------------|:-----------------------------------------------------------------|
> | **Visual da Nota** | `INPUT[inlineSelect(option(normal, Normal), option(wide-page, Wide Page), option(dashboard, Dashboard)):cssclasses]` |
> | **Modo Leitura** | `INPUT[toggle(onValue(preview), offValue(source)):obsidianUIMode]` |
> | **Imagem Destaque**    | `INPUT[text:imagem_destaque]`                                             |
>
>> **🌐 Compartilhar  link**
>
> | Campo          | Valor                                               |
> |:---------------|:----------------------------------------------------|
> | **Share Link** | `INPUT[text(placeholder(https://...)):share_link]`  |
> | **Share Upd.** | `INPUT[text:share_updated]`                         |
>

> [!note]- 🚀 Propriedades SaaS
>
> | Campo             | Valor                                                              |
> |:------------------|:-------------------------------------------------------------------|
> | **Mostrar Bloco** | `INPUT[toggle(onValue(true), offValue(false)):mostrar_bloco_saas]` |
> | **Status SaaS**   | `INPUT[toggle(onValue(true), offValue(false)):status_saas]`        |

> [!note]- 📚 Propriedades da Aula
>
> | Campo            | Valor                          |
> |:-----------------|:-------------------------------|
> | **Curso**        | `INPUT[suggester(optionQuery("")):curso_pai]`   |
> | **URL da Aula**  | `INPUT[text(placeholder(https://...)):url_aula]`  |
> | **Duração**      | `INPUT[text:duracao]`          |

