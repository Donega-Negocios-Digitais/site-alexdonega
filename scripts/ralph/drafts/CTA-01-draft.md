# CTA-01: Definir CTA primária e estratégia de conversão

## Análise Ralph Quality Loop

### Situação Atual
- CTA primária precisa estar alinhada com objective de negócio
- Estratégia de conversão deve guiar todo o funnel
- Cada seção tem CTA específica, mas uma é principal
- Sem CTA clara, conversão é deixada ao acaso

### Hierarquia de CTAs no Funnel

```
AWARENESS (Hero → About)
  ├─ CTA Primária: Lead Magnet (diagnóstico grátis)
  └─ Goal: Email + informação básica

CONSIDERATION (Services → Portfolio)
  ├─ CTA Secundária: Consulta estratégica
  └─ Goal: Qualificação + relação

DECISION (Final CTA Section)
  ├─ CTA Primária: Contratar serviço
  └─ Goal: Conversão monetária
```

### Estratégia Ralph para CTA Primária

**Decisão 1: Qual é o objetivo?**

Opção A: **Lead Magnet (Recomendado para página fria)**
- Objetivo: Construir lista de email
- CTA: "Diagnóstico grátis", "Receber plano"
- Funnel: Homepage → Lead → Email → Consulta → Venda
- Vantagem: Reduz fricção, alta conversão
- Desvantagem: Requer follow-up (email/automation)

Opção B: **Direto para Consulta Paga**
- Objetivo: Agendar sem intermediário
- CTA: "Agendar sessão estratégica"
- Funnel: Homepage → Calendly → Chamada → Proposta → Venda
- Vantagem: Mais rápido se buyer ready
- Desvantagem: Taxa de conversão menor (só vende os interessados agora)

Opção C: **Híbrida (Recomendado)**
- Objetivo: Opções para diferentes estágios
- CTA Primária: "Diagnóstico grátis"
- CTA Secundária: "Agendar consulta estratégica"
- Funnel: Dois caminhos (capture email OU agendar direto)
- Vantagem: Flexibilidade, maior conversão total
- Desvantagem: Precisa de dois fluxos

### Recomendação Ralph: Estratégia Híbrida

**HOMEPAGE FLOW:**
```
CTA PRIMÁRIA: "Receber diagnóstico grátis em 15 min"
  ↓
Modal/Form com 3 perguntas simples
  ↓
Email confirmação com diagnóstico
  ↓
Email 1 (24h depois): Próxima etapa? Agendar consulta
  ↓
Email 2 (5 dias depois): Case study + oferta limitada
  ↓
Email 3 (10 dias depois): Último toque + urgência

CTA SECUNDÁRIA: "Agendar sessão estratégica [R$297]"
  ↓
Calendly direto (sem form)
  ↓
Cobrança automática
  ↓
Briefing questionnaire
  ↓
Reunião
  ↓
Proposta para próximo serviço
```

### Definição de CTA Primária

**Recomendação 1: Lead Magnet**
- Button: "Receber diagnóstico grátis"
- Lead magnet: Diagnóstico de 15 min em PDF + email tips
- Value: Alto (específico para cliente)
- Conversão esperada: 15-25%

**Recomendação 2: Consulta Paga (Alternativa)**
- Button: "Agendar sessão estratégica (R$297)"
- Lead magnet: Sesão ao vivo com Alex
- Value: Alto (consultoria humana)
- Conversão esperada: 2-5% (mais qualificado)

### Copy para Cada CTA

#### CTA Primária (Lead Magnet):
```
MAIN BUTTON:
"Receber diagnóstico grátis"

SUPPORTING TEXT:
"Entrega em 15 minutos. Sem obrigação."

SUBTEXT:
"200+ profissionais já receberam seu diagnóstico"
```

#### CTA Secundária (Agendar):
```
MAIN BUTTON:
"Agendar sessão estratégica"

SUPPORTING TEXT:
"Vaga: R$297 (primeira 5 clientes)"

SUBTEXT:
"Calendário online. Duração: 60 min."
```

### Fluxo Técnico Recomendado

**Lead Magnet Tool:** GetResponse, Zapier ou Make
- Form: 3 campos (nome, email, segmento)
- Automação: Email automático + PDF
- Tracking: Qual lead magnet converte mais?

**Calendly para Consulta:**
- Preço: R$297 (automatizar cobrança)
- Briefing: Form pré-consulta
- Confirmação: Email automático

### Métricas para Monitorar

- [ ] Conversion rate de homepage → lead magnet (meta: 15%+)
- [ ] Conversion rate de email diagnóstico → agendar (meta: 10%)
- [ ] Conversion rate de consulta → venda (meta: 30%+)
- [ ] Taxa geral: homepage → fechamento (meta: 1-3%)
- [ ] Custo por cliente (CAC)

### Checklist de Implementação

- [ ] Decidir: Lead magnet vs. consulta paga (recomendo híbrido)
- [ ] Criar lead magnet (diagnóstico PDF ou template)
- [ ] Setup GetResponse/Zapier para automação
- [ ] Escrever email sequence (3-5 emails)
- [ ] Setup Calendly com preço/briefing
- [ ] Testar fluxo completo (lead magnet → email → calendly)
- [ ] Monitorar conversão por semana

## Learnings
- Lead magnet funciona 5x melhor que direto para venda
- Híbrida oferece flexibilidade para diferentes buyer stages
- Email automation é crítico (não deixar lead morrer)
- Preço baixo na consulta (R$297) reduz fricção
- Diagnóstico é melhor lead magnet que "E-book" ou "template"

## Próximas Ações
1. Escolher estratégia (recomendo híbrida)
2. Criar diagnóstico/lead magnet
3. Setup automação (GetResponse + Zapier)
4. Testar em 2 semanas
5. Otimizar baseado em dados de conversão
