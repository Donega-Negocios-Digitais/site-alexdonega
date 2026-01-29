# FalaZapp - Assets do Projeto

## 📹 Vídeo Cover
**Arquivo:** `cover.webm`
**Status:** ⏳ Pendente
**Especificações:**
- Formato: WebM (VP9)
- Duração: 5-10 segundos
- Aspect Ratio: 16:9
- Qualidade: Alta (para hero section)

## 📸 Screenshots
**Pasta:** `screenshots/`
**Status:** ⏳ Pendente
**Quantidade recomendada:** 3-4 imagens
**Formato:** WebP otimizado
- Dimensões: 1200x800px (ou proporções similares)
- Compressão: 80-85%
- Naming: `screenshot-01.webp`, `screenshot-02.webp`, etc.

---

## 🎬 Como Adicionar o Vídeo Cover

1. Crie/exporte um vídeo de 5-10 segundos mostrando o produto
2. Converta para WebM usando FFmpeg:
   ```bash
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus cover.webm
   ```
3. Coloque o arquivo `cover.webm` nesta pasta
4. Atualize a página HTML se necessário

## 📷 Como Adicionar Screenshots

1. Capture screenshots do produto (1200x800px recomendado)
2. Converta para WebP:
   ```bash
   cwebp -q 85 input.png -o screenshot-01.webp
   ```
3. Coloque os arquivos na pasta `screenshots/`
