---
name: operar-cloudflare-dns
description: Documenta e opera DNS/deployment com Cloudflare incluindo SSL/TLS, cache/CDN, validação de go-live, troubleshooting e rollback. Use ao configurar dominio, publicar projeto, migrar host ou resolver incidentes de DNS/SSL.
---

# Guia de Documentação de DNS e Deployment

## Objetivo

Criar documentação técnica confiável para configuração DNS, configuração SSL/TLS, estratégias de cache/CDN, validação de go-live e procedimentos de rollback para deployment de domínio web.

## Quando Usar Este Guia

- Ao configurar novo DNS de domínio
- Ao configurar Cloudflare para projetos
- Ao documentar infraestrutura de deployment
- Ao solucionar problemas de DNS/SSL
- Ao planejar migrações de site
- Ao criar runbooks de deployment

## Passo 1: Identificação de Fonte da Verdade

Documente as fontes de configuração reais:

| Local | Propósito | O que Documentar |
|-------|-----------|------------------|
| `astro.config.mjs` | Config do site | `site` (URL), `base` (caminho) |
| `_routes.json` | Regras de roteamento | Padrões de rota, exclusões |
| Cloudflare Dashboard | DNS e SSL | Registros DNS, modo SSL |
| Registrador de Domínio | Nameservers | NS records |
| Plataforma de Deploy | Origem do site | Vercel, Netlify, Cloudflare Pages |
| Certificados SSL | Autoridade certificadora | Let's Encrypt, DigiCert, etc. |

## Passo 2: Informações de Domínio

### 2.1. Dados Principais

**Domínio Principal:**
- **Nome do domínio**: `alexdonega.com.br`
- **Canônico**: `alexdonega.com.br` (apex sem www)
- **Origem/plataforma host**: Cloudflare Pages (ou outro)
- **Registrador**: [Documentar registrador usado]

### 2.2. Configuração Atual do Projeto

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://alexdonega.com.br/',
  base: '/',
  build: {
    format: 'directory',
    assets: '_astro',
  },
});
```

### 2.3. Premissas Críticas

1. Domínio está registrado em [registrador]
2. DNS/nameservers apontam para Cloudflare
3. Plataforma host requer [registros A/CNAME específicos]
4. **NUNCA invente IP/CNAME sem dados verificados do host**

## Passo 3: Fluxo de Publicação (Alto Nível)

```
[Domínio no registrador]
      ↓
[Nomeservers apontam para provedor DNS]
      ↓
[Zona DNS ativa no provedor (Cloudflare)]
      ↓
[Registros DNS apontando para host de deploy]
      ↓
[Certificado SSL/TLS válido emitido]
      ↓
[Site responde em https://dominio.com]
      ↓
[CDN/Cache distribui conteúdo globalmente]
```

## Passo 4: Configuração DNS

### 4.1. Revise a Zona DNS

Antes de criar registros:
- Confirme domínio correto no provedor DNS
- Confirme nameservers aplicados no registrador
- Verifique propagação DNS se mudanças recentes (24-48h)

### 4.2. Crie Registros DNS

**Registros típicos (verifique SEMPRE com host real):**

| Tipo | Nome | Valor | Proxy | TTL |
|------|------|-------|-------|-----|
| `A` ou `CNAME` | `@` | `[valor-do-host]` | On/Off | Auto |
| `CNAME` | `www` | `@` ou `[valor-do-host]` | On | Auto |
| `TXT` | `@` | `v=spf1 include:...` | Off | Auto |

**Tipos de registro explicados:**
- **Registro A**: Aponta diretamente para endereço IPv4 (ex: `76.76.21.21`)
- **CNAME**: Aponta para outro nome de domínio (ex: `seu-projeto.vercel.app`)
- **Proxy (Cloudflare)**: Nuvem laranja = CDN/segurança habilitada, cinza = DNS only

### 4.3. Configurações TTL

- **Padrão**: Use `Auto` na maioria dos casos
- **Mudanças críticas**: Reduza TTL temporariamente (5-15min)
- **Após propagação**: Restaure para Auto
- **Baixar TTL**: Útil ao planejar migrações

## Passo 5: Configuração SSL/TLS

### 5.1. Seleção de Modo SSL

**Modos disponíveis (Cloudflare):**

| Modo | Origem tem certificado? | Quando Usar |
|------|------------------------|-------------|
| **Flexible** | Não | Evite em produção (apenas teste) |
| **Full** | Sim (pode ser self-signed) | Transição ou cert self-signed |
| **Full (strict)** | Sim (válido, CA confiável) | **Produção - recomendado** |

### 5.2. Configurações Adicionais Recomendadas

- **Always Use HTTPS**: Habilitado (redireciona HTTP→HTTPS)
- **Automatic HTTPS Rewrites**: Habilitado (corrige links HTTP)
- **HSTS**: Habilite apenas após validar estabilidade HTTPS
- **Minimum TLS Version**: 1.2 ou superior (1.3 recomendado)
- **Opportunistic Encryption**: On

### 5.3. Certificado de Origem

**Para Full (strict):**
- Certificado deve ser válido para o domínio
- Emitido por CA confiável (Let's Encrypt, DigiCert, etc.)
- Não expirado
- Chain de certificação completa

### 5.4. Configurações Adicionais de Segurança (2025)

| Configuração | Valor Recomendado | Descrição |
|-------------|-------------------|------------|
| **Minimum TLS Version** | 1.2 ou 1.3 | Versão mínima de TLS |
| **Opportunistic Encryption** | On | Habilita criptografia quando possível |
| **TLS 1.3** | On | Versão mais recente e rápida |
| **Onion Routing** | Off | Para sites .onion (desabilitar) |
| **Automatic HTTPS Rewrites** | On | Corrige links HTTP automaticamente |
| **Always Use HTTPS** | On | Redireciona HTTP para HTTPS |
| **HSTS** | Off inicial, On após validação | HTTP Strict Transport Security |

**Nota sobre HSTS:** Só habilite após validar que HTTPS está funcionando perfeitamente, pois HSTS impede que usuários acessem o site se houver problemas com o certificado.

## Passo 6: Estratégia de Domínio Canônico

### 6.1. Escolha UM Domínio Canônico

**Opção A: Apex como canônico**
- `https://exemplo.com` ← Canônico
- `https://www.exemplo.com` → Redireciona 301 para apex

**Opção B: WWW como canônico**
- `https://www.exemplo.com` ← Canônico
- `https://exemplo.com` → Redireciona 301 para www

### 6.2. Implementação de Redirecionamento

**Cloudflare Page Rules:**
```
*exemplo.com/* → Redirecionar para https://canonico.com/$1
Status: 301 (Permanente)
```

**Ou via framework (Astro):**
```js
// astro.config.mjs
export default defineConfig({
  site: 'https://exemplo.com', // Deve bater com canônico
  // ...
});
```

### 6.3. Consistência de Links

- Todos links internos devem usar HTTPS
- Links absolutos devem usar domínio canônico
- Evite misturar http/https
- Evite misturar www/apex sem redirecionamento

## Passo 7: Estratégia de Cache/CDN

### 7.1. Configuração Inicial

- Comece com padrões do provedor DNS/CDN
- Evite cache agressivo em HTML durante validação inicial
- Teste comportamento de cache antes de configurações agressivas

### 7.2. Assets Estáticos (Seguros para Cache Agressivo)

| Diretório | Cache Recomendado | Justificativa |
|-----------|-------------------|---------------|
| `/img` | 1 dia - 1 mês | Imagens raramente mudam |
| `/_astro` | 1 mês - 1 ano | Build hash muda com conteúdo |
| `/videos` | 1 mês - 1 ano | Vídeos versionados |
| Fontes | 1 ano | Versionadas em URL |
| `/assets/favicons` | 1 ano | Favicons são estáveis |

### 7.3. HTML (Cache Conservativo)

- **Inicial**: Cache curto (1-5 minutos)
- **Após validação**: Aumente gradualmente
- **Estratégia de purge**: Configure purge para atualizações

### 7.4. Regras de Cache por Tipo

```javascript
// Exemplo _routes.json (Astro)
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/api/*", "/buscar"]
}
```

### 7.5. Configurações de Otimização de Conteúdo

| Configuração | Recomendação | Descrição |
|-------------|--------------|------------|
| **Auto Minify** | CSS, JS, HTML | Remove whitespace e comentários |
| **Brotli** | On | Compressão mais eficiente que gzip |
| **Rocket Loader** | Off inicial | JavaScript adiado (pode quebrar) |
| **HTTP/2** | On | Multiplexação de requisições |
| **HTTP/3 (QUIC)** | On | Nova versão do HTTP (mais rápido) |

### 7.6. HTTP/3 (QUIC) - 2025

**O que é HTTP/3:**
- Nova versão do protocolo HTTP
- Usa QUIC em vez de TCP
- Melhor performance em redes instáveis
- Migrações de rede mais suaves

**Como habilitar:**
```
Cloudflare Dashboard > Network > HTTP/3 (with QUIC) > On
```

**Compatibilidade:**
- Chrome: ✅ Total
- Firefox: ✅ Total
- Safari: ✅ Total (macOS 14+, iOS 16+)
- Edge: ✅ Total

## Passo 8: Comandos de Validação

### 9.1. Resolução DNS

```bash
# Verificar resolução de domínio
nslookup exemplo.com
nslookup www.exemplo.com

# Ou usar dig (mais detalhado)
dig exemplo.com
dig www.exemplo.com

# Verificar nameservers
nslookup -type=NS exemplo.com
```

### 9.2. Headers HTTP

```bash
# Verificar headers de resposta
curl -I https://exemplo.com
curl -I https://www.exemplo.com

# Verificar redirecionamentos
curl -I http://exemplo.com  # Deve redirecionar para HTTPS
curl -L -v http://exemplo.com  # Segue redirecionamentos
```

### 9.3. Teste SSL

```bash
# Testar conexão SSL
openssl s_client -connect exemplo.com:443

# Ou usar ferramentas online:
# - SSL Labs (https://www.ssllabs.com/ssltest/)
# - Curl SSL debug
curl -vI https://exemplo.com 2>&1 | grep -i ssl
```

### 9.4. O que Verificar

- IP/CNAME correto retornado
- Status 200 para páginas chave
- Certificado SSL válido e não expirado
- Headers de segurança apropriados
- Redirecionamentos funcionando (HTTP→HTTPS)

## Passo 9: Page Rules vs Redirect Rules

### 10.1. Page Rules (Legado)

**Quando usar:**
- Configurações de cache específicas por URL
- Redirecionamentos 301 simples
- Override de configurações de segurança

**Exemplo:**
```
*alexdonega.com.br/blog/*
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
```

### 10.2. Redirect Rules (Novo - Recomendado)

**Quando usar:**
- Redirecionamentos complexos
- Redirecionamentos em massa
- Maior flexibilidade e performance

**Exemplo de configuração:**
```
If incoming request matches:
- URI path: /blog/old-post/*
Then:
- Static Redirect: 301
- Destination URL: https://alexdonega.com.br/blog/new-post/$1
```

**Vantagens do Redirect Rules:**
- Processamento mais rápido
- Suporte a expressões regulares
- Melhor UX para configuração
- Prioridade clara (número)

### 10.3. DNSSEC (Segurança Adicional)

**O que é DNSSEC:**
- Extensão de segurança do DNS
- Assinatura digital de registros DNS
- Previne ataques de envenenamento de cache DNS

**Quando habilitar:**
- Sites com requisitos de segurança altos
- Aplicações críticas
- Quando a origem suporta DNSSEC

**Como habilitar:**
```
Cloudflare Dashboard > DNS > DNSSEC > Enable
```

## Passo 10: Guia de Solução de Problemas

| Sintoma | Causa Provável | Ação Imediata |
|---------|----------------|---------------|
| **403 Forbidden** | WAF/firewall bloqueando | Revise regras de firewall, configurações de bot no Cloudflare |
| **525 SSL Handshake Failed** | Falha no handshake SSL | Verifique certificado de origem, valide modo SSL |
| **526 Invalid SSL Certificate** | Cert de origem inválido (strict) | Corrija cert de origem ou mude modo SSL temporariamente |
| **ERR_NAME_NOT_RESOLVED** | DNS/NS incorreto ou propagação pendente | Verifique NS no registrador, aguarde até 48h |
| **Mixed Content (HTTP/HTTPS)** | Links HTTP hardcoded | Force HTTPS, corrija links internos, use HTTPS rewrites |
| **Page Rules não funcionam** | Ordem incorreta ou conflito | Reordene regras, verifique conflitos |
| **Cache servindo conteúdo obsoleto** | Cache agressivo sem purge | Purge cache manualmente, ajuste regras |
| **Certificado expirado** | Renovação falhou | Renove certificado, verifique automação |

## Passo 11: WAF e Segurança Básica

### 12.1. Security Level (Nível de Segurança)

| Nível | Descrição | Quando Usar |
|-------|-----------|-------------|
| **Off** | Sem proteção | Nunca em produção |
| **Essentially Off** | Desafios mínimos | Testes |
| **Low** | Proteção básica | Sites com pouco tráfego |
| **Medium** | Equilíbrio | **Recomendado para maioria** |
| **High** | Proteção forte | Sites sob ataque |
| **I'm Under Attack** | Modo de ataque | Durante ataque ativo |

### 12.2. Bot Fight Mode

**O que faz:**
- Analisa comportamento de bots
- Desafia bots suspeitos
- Permite bons bots (Google, Bing)

**Recomendação:** Habilitar para redução de bots maliciosos

### 12.3. Challenge Passage

**Configuração:**
- **Challenge TTL**: 30 minutos (padrão)
- **Browser Integrity Check**: On

## Passo 12: Procedimento de Rollback

### 13.1. Fluxo de Rollback

```
[Deploy causou indisponibilidade]
      ↓
[Desative novas regras de cache/redirect]
      ↓
[Restaure DNS anterior se necessário (documente antes!)]
      ↓
[Mude modo SSL se problema de certificado]
      ↓
[Purge cache se servindo conteúdo obsoleto]
      ↓
[Valide acesso no domínio canônico]
      ↓
[Diagnostique logs e corrija antes de re-deployar]
```

### 13.2. Ações Chave de Rollback

- **Page Rules/Redirect Rules**: Desabilite novas regras
- **DNS**: Restaure registros anteriores (documente primeiro!)
- **Modo SSL**: Mude de strict→full→flexible se necessário
- **Cache**: Purge cache completo se servindo obsoleto
- **Deploy**: Reverta para deploy anterior na plataforma

### 13.3. Documentação Pré-Rollback

Antes de qualquer mudança crítica:
- Tire screenshot de configurações
- Exporte registros DNS
- Documente estado atual
- Tenha plano de rollback pronto

## Passo 13: Configuração de Framework

### 14.1. Exemplo Astro

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://exemplo.com',  // Deve bater com canônico
  base: '/',                     // '/' para raiz, '/blog' para subpath
  build: {
    format: 'directory',         // /page/index.html
    assets: '_astro',            // Pasta de assets
  },
});
```

### 14.2. Configurações Chave

| Config | Valor | Impacto |
|--------|-------|---------|
| `site` | URL completa canônica | Sitemap, canonical, OG URLs |
| `base` | `/` ou subpath | Caminhos relativos, assets |
| `build.format` | `directory` ou `file` | Estrutura de URLs |
| `build.assets` | Nome da pasta | Cache de assets |

## Melhores Práticas

1. **Documente Tudo**: Nunca confie em memória para DNS/SSL
2. **Valide em Staging**: Teste mudanças em ambiente de staging
3. **Mude Gradualmente**: Cache agressivo vem depois de validação
4. **Monitore Logs**: Use logs para diagnosticar problemas
5. **Tenha Rollback**: Sempre tenha plano de emergência
6. **Use HTTPS**: Sempre, sem exceção

## Exemplo de Uso

```
Usuário: "Preciso configurar o domínio exemplo.com no Cloudflare apontando para Vercel."

IA: [Usa guia-dns-deployment]
- Documenta informações de domínio (exemplo.com)
- Configura astro.config.mjs com site correto
- Cria registros DNS: @ → CNAME vercel, www → @
- Configura modo SSL: Full (strict)
- Define domínio canônico: exemplo.com (apex)
- Configura redirecionamento www→exemplo.com
- Estabelece estratégia de cache: HTML 5min, assets 1 mês
- Executa checklist de go-live
- Fornece comandos de validação
```

## Anti-Padrões a Evitar

- ❌ Não altere DNS crítico sem documentar estado anterior
- ❌ Não habilite HSTS antes de validar estabilidade HTTPS
- ❌ Não misture múltiplos redirecionamentos concorrentes
- ❌ Não mude config `site` do framework sem alinhar domínio publicado
- ❌ Não use endereços IP sem verificar da plataforma de hosting
- ❌ Não ignore tempo de propagação DNS (pode levar 24-48h globalmente)
- ❌ Não deixe modo SSL Flexível em produção longo prazo
- ❌ Não configure cache agressivo sem validar conteúdo primeiro
- ❌ Não faça mudanças de DNS simultâneas (uma por vez)
- ❌ Não esqueça de purgar cache após mudanças de conteúdo

## Template de Documentação Final

```markdown
# Guia DNS e Deployment

## Informações de Domínio
- Domínio principal
- Escolha canônica
- Plataforma host
- Registrador

## Fonte da Verdade
- `astro.config.mjs` - Config do site
- Cloudflare Dashboard - DNS e SSL
- Plataforma de Deploy - Origem

## Fluxo de Publicação
[Diagrama de fluxo completo]

## Configuração DNS
- [Tabela de registros]
- [Configurações TTL]

## Configuração SSL/TLS
- [Modo e configurações]
- [Detalhes de certificado]

## Estratégia Canônica
- [Domínio canônico escolhido]
- [Implementação de redirecionamento]

## Estratégia de Cache
- [Cache HTML]
- [Cache de assets]
- [Regras específicas]

## Checklist Go-Live
- [Etapas de validação completas]

## Comandos de Validação
- [Comandos e saída esperada]

## Solução de Problemas
- [Problemas comuns e soluções]

## Procedimento de Rollback
- [Passos de emergência]

## Anti-Padrões
[O que evitar]
```

