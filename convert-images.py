#!/usr/bin/env python3
"""
Script Python para conversão em batch de imagens para cursos
Gera 6 tamanhos otimizados em WebP + JPEG
Requer: pip install Pillow
"""

import os
from PIL import Image
from pathlib import Path

# Configurações
INPUT_DIR = "originals"
OUTPUT_DIR = "assets/img/cursos"
QUALITY_WEBP = 85
QUALITY_JPEG = 85
SIZES = [320, 400, 480, 640, 800, 960]  # Larguras em pixels

# Cores ANSI para output
class Colors:
    GREEN = '\033[92m'
    BLUE = '\033[94m'
    RED = '\033[91m'
    RESET = '\033[0m'

def convert_image(input_path, basename):
    """
    Converte uma imagem para todos os tamanhos e formatos

    Args:
        input_path (Path): Caminho da imagem original
        basename (str): Nome base sem extensão
    """
    try:
        # Abre imagem original
        with Image.open(input_path) as img:
            # Converte para RGB se necessário (PNG com transparência)
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background

            # Loop por cada tamanho
            for width in SIZES:
                height = int(width * 1.5)  # Aspect ratio 2:3

                # Redimensiona com boa qualidade (Lanczos)
                resized = img.resize((width, height), Image.Resampling.LANCZOS)

                # Salva WebP
                webp_path = OUTPUT_DIR / f"{basename}-{width}.webp"
                resized.save(
                    webp_path,
                    'WEBP',
                    quality=QUALITY_WEBP,
                    method=6  # Máxima compressão
                )
                print(f"  ├─ {Colors.GREEN}✓{Colors.RESET} Gerado {width}x{height} (WebP)")

                # Salva JPEG
                jpeg_path = OUTPUT_DIR / f"{basename}-{width}.jpg"
                resized.save(
                    jpeg_path,
                    'JPEG',
                    quality=QUALITY_JPEG,
                    optimize=True,
                    progressive=True
                )
                print(f"  └─ {Colors.GREEN}✓{Colors.RESET} Gerado {width}x{height} (JPEG)")

        return True

    except Exception as e:
        print(f"  {Colors.RED}✗ Erro: {e}{Colors.RESET}")
        return False

def main():
    """Função principal"""
    print(f"\n{Colors.BLUE}🚀 Iniciando conversão de imagens...{Colors.RESET}\n")

    # Cria diretórios
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(parents=True, exist_ok=True)

    # Verifica se o diretório de entrada existe
    if not input_path.exists():
        print(f"{Colors.RED}❌ Diretório '{INPUT_DIR}' não encontrado!{Colors.RESET}")
        print(f"{Colors.BLUE}💡 Crie a pasta e adicione suas imagens.{Colors.RESET}")
        return

    # Busca imagens
    extensions = ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG']
    images = []
    for ext in extensions:
        images.extend(input_path.glob(ext))

    if not images:
        print(f"{Colors.RED}❌ Nenhuma imagem encontrada em '{INPUT_DIR}'!{Colors.RESET}")
        return

    # Processa cada imagem
    total = len(images)
    success = 0

    for img_path in images:
        basename = img_path.stem  # Nome sem extensão
        print(f"{Colors.BLUE}📸 Processando: {img_path.name}{Colors.RESET}")

        if convert_image(img_path, basename):
            success += 1
            print(f"{Colors.GREEN}✓ {basename} completo (12 arquivos){Colors.RESET}\n")
        else:
            print(f"{Colors.RED}✗ {basename} falhou{Colors.RESET}\n")

    # Estatísticas finais
    print(f"{Colors.GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{Colors.RESET}")
    print(f"{Colors.GREEN}✅ Conversão concluída!{Colors.RESET}")
    print(f"{Colors.GREEN}   Imagens processadas: {success}/{total}{Colors.RESET}")
    print(f"{Colors.GREEN}   Arquivos gerados: {success * 12}{Colors.RESET}")
    print(f"{Colors.GREEN}   Diretório: {output_path}{Colors.RESET}")
    print(f"{Colors.GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{Colors.RESET}")

    # Calcula tamanho total
    total_size = sum(f.stat().st_size for f in output_path.glob('*') if f.is_file())
    size_mb = total_size / (1024 * 1024)
    print(f"{Colors.BLUE}📦 Tamanho total: {size_mb:.2f} MB{Colors.RESET}\n")

if __name__ == "__main__":
    main()
