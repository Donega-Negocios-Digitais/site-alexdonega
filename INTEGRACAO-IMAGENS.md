# 📸 Guia de Integração - Imagens Otimizadas

## 📋 Lista de Arquivos Necessários (32 cursos × 12 arquivos = 384 imagens)

### Nomenclatura dos Arquivos

Cada curso precisa de **12 versões**:
- 6 tamanhos (320, 400, 480, 640, 800, 960px)
- 2 formatos por tamanho (WebP + JPEG)

**Exemplo: Curso "Engenharia de Contexto Aplicada"**
```
engenharia-contexto-320.webp
engenharia-contexto-320.jpg
engenharia-contexto-400.webp
engenharia-contexto-400.jpg
engenharia-contexto-480.webp
engenharia-contexto-480.jpg
engenharia-contexto-640.webp
engenharia-contexto-640.jpg
engenharia-contexto-800.webp
engenharia-contexto-800.jpg
engenharia-contexto-960.webp
engenharia-contexto-960.jpg
```

---

## 🗂️ Slugs de Arquivos (32 cursos)

| # | Título do Curso | Slug do Arquivo |
|---|-----------------|-----------------|
| 1 | Engenharia de Contexto Aplicada | `engenharia-contexto` |
| 2 | Claude Code em 1 Dia | `claude-code` |
| 3 | Segundo Cérebro no Obsidian | `segundo-cerebro` |
| 4 | Copywriting com IA | `copywriting-ia` |
| 5 | Tráfego Pago Inteligente | `trafego-pago` |
| 6 | Mentoria SaaS Enxuto | `mentoria-saas` |
| 7 | Estratégias de Marketing Digital | `marketing-digital` |
| 8 | Automação com N8N | `automacao-n8n` |
| 9 | Facebook Ads Avançado | `facebook-ads` |
| 10 | Headlines que Vendem | `headlines` |
| 11 | ChatGPT para Negócios | `chatgpt-negocios` |
| 12 | Gestão de Produtos | `gestao-produtos` |
| 13 | Funis de Webinar | `funis-webinar` |
| 14 | Prompt Engineering | `prompt-engineering` |
| 15 | Storytelling para Vendas | `storytelling` |
| 16 | Google Ads Masterclass | `google-ads` |
| 17 | Lançamentos Digitais | `lancamentos` |
| 18 | Midjourney Criativo | `midjourney` |
| 19 | Anúncios com IA | `anuncios-ia` |
| 20 | Copy com Claude | `copy-claude` |
| 21 | Scale de MicroSaaS | `scale-microsaas` |
| 22 | Emails que Convertem | `emails` |
| 23 | YouTube Ads | `youtube-ads` |
| 24 | Conteúdo com IA | `conteudo-ia` |
| 25 | Growth Hacking | `growth-hacking` |
| 26 | VSL Completo | `vsl` |
| 27 | Agentes de IA | `agentes-ia` |
| 28 | Remarketing Pro | `remarketing` |
| 29 | Validação de Ideias | `validacao` |
| 30 | IA para Tráfego | `ia-trafego` |
| 31 | Cartas de Vendas | `cartas-vendas` |
| 32 | RAG Avançado | `rag-avancado` |

---

## 🚀 Passo a Passo de Integração

### 1️⃣ Preparar Imagens Originais

1. Crie a pasta `originals/` no diretório do projeto
2. Adicione as 32 imagens originais (JPG/PNG) com os nomes acima
3. Certifique-se de que são imagens de alta qualidade (mínimo 960×1440px)

**Estrutura:**
```
C:\dev\sites\site-alexdonega\
├── originals/
│   ├── engenharia-contexto.jpg
│   ├── claude-code.jpg
│   ├── segundo-cerebro.jpg
│   └── ... (32 imagens no total)
```

---

### 2️⃣ Converter Imagens (Automático)

#### Opção A: Usar Script Bash (Mac/Linux/WSL)

```bash
# Dar permissão de execução
chmod +x convert-images.sh

# Executar script
./convert-images.sh
```

#### Opção B: Usar Squoosh CLI (Windows/Mac/Linux)

```bash
# Instalar Squoosh
npm install -g @squoosh/cli

# Converter todas as imagens de uma vez
cd originals
for file in *.jpg; do
  for size in 320 400 480 640 800 960; do
    height=$((size * 3 / 2))

    # WebP
    squoosh-cli --webp '{"quality":85}' \
                 --resize "{\"width\":$size,\"height\":$height,\"method\":\"lanczos3\"}" \
                 --output-dir ../assets/img/cursos \
                 --suffix "-$size" \
                 "$file"

    # JPEG
    squoosh-cli --mozjpeg '{"quality":85}' \
                 --resize "{\"width\":$size,\"height\":$height,\"method\":\"lanczos3\"}" \
                 --output-dir ../assets/img/cursos \
                 --suffix "-$size" \
                 "$file"
  done
done
```

#### Opção C: Serviço Online (Manual)

1. Acesse https://squoosh.app ou https://tinypng.com
2. Faça upload das imagens
3. Configure:
   - **Dimensões:** 320×480, 400×600, 480×720, 640×960, 800×1200, 960×1440
   - **Formato:** WebP (85%) + JPEG (85%)
   - **Aspect Ratio:** Manter 2:3
4. Download e organize na pasta `assets/img/cursos/`

---

### 3️⃣ Verificar Estrutura de Pastas

Após a conversão, verifique:

```
C:\dev\sites\site-alexdonega\
└── assets\
    └── img\
        └── cursos\
            ├── engenharia-contexto-320.webp
            ├── engenharia-contexto-320.jpg
            ├── engenharia-contexto-400.webp
            ├── engenharia-contexto-400.jpg
            ├── engenharia-contexto-480.webp
            ├── engenharia-contexto-480.jpg
            ├── engenharia-contexto-640.webp
            ├── engenharia-contexto-640.jpg
            ├── engenharia-contexto-800.webp
            ├── engenharia-contexto-800.jpg
            ├── engenharia-contexto-960.webp
            ├── engenharia-contexto-960.jpg
            ├── claude-code-320.webp
            ├── claude-code-320.jpg
            └── ... (384 arquivos no total)
```

---

### 4️⃣ Integrar HTML no index.html

1. Abra `C:\dev\sites\site-alexdonega\index.html`
2. Localize a linha **1745** (início do `<div class="acervo-grid">`)
3. Localize a linha **2177** (fim do `</div>` do acervo-grid)
4. **SUBSTITUA** todo o conteúdo entre essas linhas pelo código em `curso-cards-optimized.html`

#### Antes (Linha 1745-2177):
```html
        <div class="acervo-grid">
            <!-- Curso 1 -->
            <div class="curso-card" data-tags="ia,copy">
                <div class="curso-poster" style="background: linear-gradient(135deg, #8338EC, #FF6B35);">
                </div>
                ...
            </div>
            ...
        </div>
```

#### Depois:
```html
        <!-- Conteúdo completo do arquivo curso-cards-optimized.html -->
```

---

### 5️⃣ Testar Performance

1. Abra o site em modo incógnito
2. Abra DevTools (F12) → Aba **Network**
3. Filtre por "Img"
4. Recarregue a página (Ctrl + Shift + R)

**Verificações:**
- ✅ Primeiros 6 cards carregam com `priority: high`
- ✅ Cards 7+ carregam com `loading: lazy`
- ✅ Navegadores modernos baixam WebP
- ✅ Navegadores antigos fazem fallback para JPEG
- ✅ Imagens corretas para cada breakpoint (mobile/tablet/desktop)

---

### 6️⃣ Validar com Lighthouse

1. DevTools (F12) → Aba **Lighthouse**
2. Selecione "Mobile" + "Performance"
3. Clique em "Analyze page load"

**Metas de Performance:**
- ✅ LCP < 2.5s
- ✅ CLS < 0.1
- ✅ Performance Score > 90
- ✅ Total de imagens < 1.5 MB

---

## 🎯 Checklist Final

```markdown
- [ ] 32 imagens originais preparadas em originals/
- [ ] Script convert-images.sh executado com sucesso
- [ ] 384 arquivos gerados em assets/img/cursos/
- [ ] HTML substituído no index.html (linhas 1745-2177)
- [ ] Teste visual: todos os cards exibem imagens
- [ ] Teste de filtros: funcionalidade mantida
- [ ] DevTools Network: WebP carregando em Chrome/Edge
- [ ] DevTools Network: JPEG carregando em Safari antigo
- [ ] Lighthouse Mobile: Performance > 90
- [ ] Lighthouse Desktop: Performance > 95
```

---

## 🔧 Troubleshooting

### Imagem não aparece (404)
1. Verifique o nome do arquivo no HTML
2. Confira se o arquivo existe em `assets/img/cursos/`
3. Certifique-se de que o slug está correto

### Imagem aparece distorcida
1. Confirme aspect ratio 2:3 (largura × 1.5 = altura)
2. Verifique se `object-fit: cover` está aplicado no CSS

### WebP não carrega no Safari antigo
- ✅ Normal! O navegador deve fazer fallback automático para JPEG

### Performance baixa (Lighthouse < 80)
1. Reduza qualidade WebP para 80%
2. Ative compressão gzip no servidor
3. Configure cache headers (max-age: 31536000)

---

## 📊 Peso Esperado

| Formato | Tamanho | Peso Médio | Total (32 cards) |
|---------|---------|------------|------------------|
| **Mobile 320px** | WebP | 20 KB | 640 KB |
| **Mobile 320px** | JPEG | 30 KB | 960 KB |
| **Tablet 400px** | WebP | 25 KB | 800 KB |
| **Desktop 480px** | WebP | 35 KB | 1.12 MB |

**Budget Total:** ~1.5 MB para todos os 32 cards (lazy loading otimiza)

---

## 🎨 Dica: Criar Imagens Placeholder

Se você ainda não tem as imagens finais, pode usar gradientes temporários:

**Serviço Online:**
- https://cssgradient.io
- https://coolbackgrounds.io
- https://gradient-designer.csspost.com

**Gerador Automático (Node.js):**
```javascript
const sharp = require('sharp');

const gradient = Buffer.from(`
  <svg width="480" height="720">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8338EC;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FF6B35;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="480" height="720" fill="url(#grad)" />
    <text x="50%" y="50%" font-size="48" fill="white" text-anchor="middle">CURSO</text>
  </svg>
`);

sharp(gradient)
  .webp({ quality: 85 })
  .toFile('placeholder-480.webp');
```

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique este guia novamente
2. Confira os logs do console do navegador
3. Teste em modo incógnito (sem cache)
4. Valide HTML com https://validator.w3.org

---

**Arquivo gerado automaticamente por Claude Code**
_Última atualização: 2026-01-07_
