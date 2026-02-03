#!/bin/bash
#############################################
# SCRIPT DE CONVERSÃO EM BATCH - CURSOS
# Converte imagens para 6 tamanhos otimizados
# WebP + JPEG fallback
#############################################

# Configurações
INPUT_DIR="originals"
OUTPUT_DIR="assets/img/cursos"
QUALITY_WEBP=85
QUALITY_JPEG=85

# Tamanhos (largura em pixels, altura = largura * 1.5 para aspect 2:3)
SIZES=(320 400 480 640 800 960)

# Cores de log
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verifica se as ferramentas estão instaladas
check_tools() {
    if ! command -v cwebp &> /dev/null; then
        echo -e "${RED}❌ cwebp não encontrado. Instale com: brew install webp${NC}"
        exit 1
    fi

    if ! command -v convert &> /dev/null; then
        echo -e "${RED}❌ ImageMagick não encontrado. Instale com: brew install imagemagick${NC}"
        exit 1
    fi
}

# Cria diretório de saída
mkdir -p "$OUTPUT_DIR"

echo -e "${BLUE}🚀 Iniciando conversão de imagens...${NC}\n"

# Contador
total=0
success=0

# Loop por todos os JPG/PNG no diretório original
for file in "$INPUT_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    # Ignora se não existir
    [ -e "$file" ] || continue

    # Extrai nome base (sem extensão e path)
    filename=$(basename "$file")
    basename="${filename%.*}"

    echo -e "${BLUE}📸 Processando: $filename${NC}"

    # Loop por cada tamanho
    for width in "${SIZES[@]}"; do
        height=$((width * 3 / 2))  # Aspect ratio 2:3

        # Gera WebP
        echo -e "  ├─ Gerando ${width}x${height} (WebP)..."
        cwebp -q $QUALITY_WEBP \
              -resize $width $height \
              -mt \
              "$file" \
              -o "$OUTPUT_DIR/${basename}-${width}.webp" 2>/dev/null

        # Gera JPEG (fallback)
        echo -e "  └─ Gerando ${width}x${height} (JPEG)..."
        convert "$file" \
                -resize "${width}x${height}^" \
                -gravity center \
                -extent "${width}x${height}" \
                -quality $QUALITY_JPEG \
                -strip \
                "$OUTPUT_DIR/${basename}-${width}.jpg" 2>/dev/null
    done

    ((total++))
    ((success++))
    echo -e "${GREEN}✓ $basename completo (12 arquivos)${NC}\n"
done

# Estatísticas finais
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Conversão concluída!${NC}"
echo -e "${GREEN}   Imagens processadas: $success/$total${NC}"
echo -e "${GREEN}   Arquivos gerados: $((success * 12))${NC}"
echo -e "${GREEN}   Diretório: $OUTPUT_DIR${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Mostra peso total
if [ -d "$OUTPUT_DIR" ]; then
    size=$(du -sh "$OUTPUT_DIR" | cut -f1)
    echo -e "${BLUE}📦 Tamanho total: $size${NC}"
fi
