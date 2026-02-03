---
name: cloudflare-dns
description: Guia operacional detalhado para DNS, SSL, cache e validacao de publicacao do dominio.
---

# 07 - Cloudflare DNS

## Objetivo
Definir um roteiro tecnico confiavel para publicar e manter o dominio em Cloudflare com seguranca e previsibilidade.

## Source of truth atual
- `astro.config.mjs` (site oficial: `https://alexdonega.com.br/`)
- `_routes.json` (roteamento base para edge/plataforma quando aplicavel)
- Painel Cloudflare (zona DNS, SSL/TLS, cache, regras)

## Escopo deste guia
- configuracao de zona DNS.
- configuracao SSL/TLS.
- padrao de redirecionamento `www` x apex.
- checklist de go-live.
- troubleshooting de erros comuns.

## Premissas
1. O dominio principal e `alexdonega.com.br`.
2. O registro DNS exato (`A`/`CNAME`) depende do provedor de hospedagem.
3. Nunca inventar IP/CNAME sem dado oficial da plataforma de deploy.

## Fluxo de publicacao (alto nivel)

```text
[Dominio no registrador]
          |
          v
[Zona ativa na Cloudflare]
          |
          v
[DNS apontando para host de deploy]
          |
          v
[SSL/TLS valido]
          |
          v
[Site responde em https://alexdonega.com.br]
```

## DNS - configuracao base

### Passo 1 - revisar zona
- confirmar dominio certo na Cloudflare.
- confirmar nameservers da Cloudflare aplicados no registrador.

### Passo 2 - criar registros
Registros tipicos (exemplo, preencher com dados reais do host):

| Tipo | Nome | Valor | Proxy |
|---|---|---|---|
| `A` ou `CNAME` | `@` | `<valor-do-host>` | ligado (laranja) ou desligado conforme estrategia |
| `CNAME` | `www` | `@` ou `<valor-do-host>` | ligado (laranja) |

### Passo 3 - TTL
- usar `Auto` na maioria dos casos.
- reduzir TTL temporariamente quando fizer mudanca critica.

## SSL/TLS - configuracao recomendada

### Modo SSL
- preferencial: `Full (strict)` quando origem tem certificado valido.
- evitar `Flexible` em producao, exceto necessidade temporaria.

### Opcoes adicionais recomendadas
- Always Use HTTPS: ligado.
- Automatic HTTPS Rewrites: ligado.
- HSTS: ligar somente apos validar que HTTPS esta estavel.

## Regras de redirecionamento (apex e www)
Definir 1 dominio canonico:
- opcao A: `alexdonega.com.br` como canonico.
- opcao B: `www.alexdonega.com.br` como canonico.

Recomendacao:
- manter apex como canonico e redirecionar `www` -> apex (ou o inverso, mas escolher apenas um).

## Cache/CDN
- iniciar com configuracao padrao da Cloudflare.
- evitar cache agressivo em HTML ate validar comportamento.
- para arquivos estaticos (`/img`, `/videos`, `/_astro`) cache pode ser mais agressivo.

## Checklist de go-live
- [ ] `astro.config.mjs` aponta para dominio correto.
- [ ] DNS de `@` e `www` resolvendo.
- [ ] HTTPS valido sem warning de certificado.
- [ ] Redirecionamento canonico funcionando.
- [ ] Home, blog listagem e blog detalhe abrindo.
- [ ] Assets (`/img`, `/_astro`) carregando sem 404.
- [ ] Build local (`npm run build`) sem erro.

## Comandos uteis para validacao
```powershell
nslookup alexdonega.com.br
nslookup www.alexdonega.com.br
curl -I https://alexdonega.com.br
curl -I https://www.alexdonega.com.br
```

## Troubleshooting (erros comuns)

| Sintoma | Causa provavel | Acao recomendada |
|---|---|---|
| 403 | regra WAF/firewall bloqueando | revisar firewall rules e bot settings |
| 525 | handshake SSL falhou | revisar certificado e modo SSL |
| 526 | cert invalido na origem com strict | corrigir cert da origem ou ajustar modo temporariamente |
| dominio nao resolve | DNS/NS incorreto | validar nameserver no registrador e registros da zona |
| mix de http/https | links hardcoded em http | forcar HTTPS e corrigir links |

## Roteiro de rollback rapido

```text
[Deploy gerou indisponibilidade]
          |
          v
[Desativar regra nova de cache/redirect]
          |
          v
[Restaurar DNS anterior se necessario]
          |
          v
[Validar acesso no dominio canonico]
```

## Nao fazer
- Nao alterar DNS critico sem registrar estado anterior.
- Nao ligar HSTS sem validar HTTPS estavel.
- Nao misturar varios redirecionamentos concorrentes.
- Nao mudar `site` do Astro sem alinhar dominio publicado.

## Checklist rapido
- [ ] Registro DNS confere com host real?
- [ ] SSL/TLS esta em modo seguro adequado?
- [ ] Canonical domain foi definido e aplicado?
- [ ] Testes de acesso externo passaram?
