# 🚀 Otimização de Performance - Seção Acervo

## 📦 Arquivos Gerados

| Arquivo | Descrição |
|---------|-----------|
| `curso-cards-optimized.html` | HTML completo com responsive images (32 cards) |
| `convert-images.sh` | Script Bash para conversão automática |
| `convert-images.py` | Script Python alternativo |
| `INTEGRACAO-IMAGENS.md` | Guia completo de integração |

---

## ⚡ Quick Start

### 1. Preparar Imagens (3 min)

```bash
# Crie a pasta e adicione 32 imagens
mkdir originals
# Copie suas imagens para originals/ com os nomes corretos
```

### 2. Converter (5 min)

**Opção A: Bash**
```bash
chmod +x convert-images.sh
./convert-images.sh
```

**Opção B: Python**
```bash
pip install Pillow
python convert-images.py
```

**Opção C: Online**
- Use https://squoosh.app (manual)

### 3. Integrar (2 min)

1. Abra `index.html`
2. Substitua linhas **1745-2177** pelo conteúdo de `curso-cards-optimized.html`
3. Salve

### 4. Testar (1 min)

- Abra o site
- DevTools → Lighthouse → "Run"
- Verifique Performance > 90

---

## 🎯 Resultados Esperados

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| **LCP** | ~3.5s | ~1.8s | 🚀 49% |
| **Peso Total** | 2.5 MB | 900 KB | 🎯 64% |
| **Lighthouse** | 75 | 95+ | 🏆 +20pts |

---

## 📸 Estrutura de Imagens

```
assets/img/cursos/
├── engenharia-contexto-320.webp (20 KB)
├── engenharia-contexto-320.jpg (30 KB)
├── engenharia-contexto-400.webp (25 KB)
├── engenharia-contexto-400.jpg (35 KB)
├── engenharia-contexto-480.webp (35 KB)
├── engenharia-contexto-480.jpg (50 KB)
├── engenharia-contexto-640.webp (40 KB)
├── engenharia-contexto-640.jpg (60 KB)
├── engenharia-contexto-800.webp (55 KB)
├── engenharia-contexto-800.jpg (75 KB)
├── engenharia-contexto-960.webp (70 KB)
├── engenharia-contexto-960.jpg (95 KB)
└── ... (32 cursos × 12 arquivos = 384 total)
```

---

## 🔑 Features Implementadas

✅ **Responsive Images** - Picture element com art direction
✅ **WebP + JPEG Fallback** - Compatibilidade universal
✅ **3 Breakpoints** - Mobile, Tablet, Desktop
✅ **Retina Display** - 2x DPR para telas de alta densidade
✅ **Lazy Loading** - Cards 7+ carregam sob demanda
✅ **Priority Hints** - Primeiros 4 cards com fetchpriority="high"
✅ **Alt Text Descritivo** - SEO e acessibilidade
✅ **Width/Height Atributos** - Previne CLS
✅ **Aspect Ratio 2:3** - Formato vertical otimizado

---

## 🛠️ Troubleshooting Rápido

**Imagem não aparece?**
```bash
# Verifique se o arquivo existe
ls assets/img/cursos/engenharia-contexto-320.webp
```

**Performance baixa?**
```bash
# Reduza qualidade para 80%
# Edite convert-images.sh: QUALITY_WEBP=80
```

**WebP não funciona?**
```bash
# Instale cwebp
brew install webp  # Mac
sudo apt install webp  # Linux
```

---

## 📚 Documentação Completa

Consulte `INTEGRACAO-IMAGENS.md` para:
- Lista completa de slugs (32 cursos)
- Instruções detalhadas de integração
- Validação com Lighthouse
- Dicas de otimização avançada

---

**Desenvolvido com Claude Code**
_Performance web de excelência_ ⚡
