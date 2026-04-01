# 🚀 Guia de Ativação - Ralph Wiggum Marketer

## Como Usar o Plugin para Revisar a Homepage

### 📌 Arquivos Criados

1. **`RALPH_PROMPT_HOME_REVIEW.md`** - Briefing completo com contexto do projeto
2. **`scripts/ralph/prd.json`** - Tasks estruturadas para o Ralph executar
3. **Este guia** - Instruções de ativação

---

## ✅ Passo 1: Ativar o Plugin

No terminal (Claude Code ou Windows Terminal com PowerShell 7):

```bash
/ralph-init
```

Isso irá:
- Criar estrutura de diretórios necessária
- Inicializar banco de dados SQLite
- Preparar ambiente de trabalho

---

## 📋 Passo 2: Revisar o Briefing

Abra o arquivo `RALPH_PROMPT_HOME_REVIEW.md` para entender:
- ✅ Objetivo do projeto
- ✅ Seções a revisar
- ✅ Critérios de aceitação
- ✅ Prioridades

---

## ⚙️ Passo 3: Executar o Ralph Loop

Após inicializar, execute:

```bash
/ralph-marketer
```

O plugin vai:
1. **Ler** o `prd.json` com as tasks
2. **Pesquisar** conteúdo atual (site, concorrentes)
3. **Planejar** copy reescrita
4. **Executar** tarefas na ordem de prioridade
5. **Validar** contra critérios de aceitação
6. **Documentar** aprendizados e progresso

---

## 📊 Tarefas Prioritárias (P1 - Imediato)

| Task | Descrição | Priority |
|------|-----------|----------|
| **HERO-02** | Reescrever headline | 10 |
| **ABOUT-03** | Reescrever About Section | 10 |
| **SERVICES-03** | Reescrever descrições de serviços | 10 |
| **CTA-02** | Reescrever copy de conversão | 10 |

---

## 🔍 Durante a Execução

O Ralph vai criar:
- 📝 Documentos com copy reescrita
- 💭 Rationale (por que mudou?)
- ✅ Validação contra critérios
- 📊 Relatórios de progresso

Você pode acompanhar com:
```bash
/ralph-status
```

---

## 🎯 Critérios de Sucesso

Cada seção deve ter:
- ✅ **Clareza**: Proposta entendida em 5 segundos
- ✅ **Relevância**: Fala aos pain points
- ✅ **Ação**: CTA clara e específica
- ✅ **Prova**: Números, casos, social proof
- ✅ **SEO**: Palavras-chave naturalmente incluídas
- ✅ **Tom**: Consistente com brand
- ✅ **Conversão**: Foco em resultados

---

## 📁 Estrutura de Saídas

O Ralph organizará os trabalhos em:
```
scripts/ralph/
├── prd.json                 # Tasks (você criou)
├── progress.txt             # Progresso Ralph
├── drafts/                  # Copy rascunhos
│   ├── HERO-02.md
│   ├── ABOUT-03.md
│   ├── SERVICES-03.md
│   └── ...
└── published/               # Copy final pronto
    ├── HERO-02.md
    ├── ABOUT-03.md
    └── ...
```

---

## 🔄 Próximos Passos Após Ralph Terminar

1. **Revisar** todos os drafts criados
2. **Validar** antes de publicar no site
3. **A/B Testar** headlines principais
4. **Medir** impacto em conversão (analytics)
5. **Iterar** com base em dados reais

---

## ⚠️ Dicas Importantes

- Ralph trabalha com **contexto persistente** entre iterações
- Progresso é salvo em **git commits** automaticamente
- Cada iteração é **independente** mas acumula aprendizados
- Você pode **parar/resumir** com `/ralph-cancel` e `/ralph-status`
- Se algo ficar travado, reinicie com `/ralph-init` e escolha continuar

---

## 🎓 Filosofia Ralph

> "Ralph é um agente que cria content enquanto você trabalha em outra coisa.
> Memory persists through git commits. Cada iteração completa em um context window.
> Compounding learnings viram patterns. Persistence wins."

---

## 📞 Suporte

Se precisar:
1. Verifique progresso: `/ralph-status`
2. Cancele se necessário: `/ralph-cancel`
3. Revisite o briefing: `RALPH_PROMPT_HOME_REVIEW.md`
4. Reinicie: `/ralph-init`

---

**Criado em**: 2026-03-31
**Versão**: 1.0
**Status**: Pronto para ativação
