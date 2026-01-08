#!/usr/bin/env python3
"""
Script para integrar o HTML otimizado no index.html
Substitui as linhas 1744-2177 com o novo código
"""

# Ler o arquivo curso-cards-optimized.html
print("Lendo curso-cards-optimized.html...")
with open("curso-cards-optimized.html", "r", encoding="utf-8") as f:
    novo_conteudo = f.read()

# Remover o cabeçalho explicativo (primeiras 5 linhas)
linhas_novas = novo_conteudo.split('\n')
# Pular as primeiras 5 linhas de comentário
novo_html = '\n'.join(linhas_novas[5:])  # Linha 6 em diante

# Ler o index.html completo
print("Lendo index.html...")
with open("index.html", "r", encoding="utf-8") as f:
    linhas_index = f.readlines()

# Encontrar as linhas de início e fim
# Linha 1744 (índice 1743) = "        <!-- Grid de Cursos -->"
# Linha 2177 (índice 2176) = "        </div>"

inicio = 1743  # índice baseado em 0
fim = 2176     # índice baseado em 0 (inclusive)

print(f"Substituindo linhas {inicio+1} ate {fim+1}...")

# Construir o novo arquivo
novo_index = (
    linhas_index[:inicio] +  # Tudo antes da linha 1744
    [novo_html] +             # Novo conteúdo
    linhas_index[fim+1:]      # Tudo depois da linha 2177
)

# Escrever o arquivo atualizado
print("Salvando index.html...")
with open("index.html", "w", encoding="utf-8") as f:
    f.writelines(novo_index)

print("Integracao concluida com sucesso!")
print(f"   - Linhas antigas removidas: {fim - inicio + 1}")
print(f"   - Novo bloco inserido: ~1247 linhas")
print("\nProximos passos:")
print("   1. Adicione as 32 imagens na pasta originals/")
print("   2. Execute: python convert-images.py")
print("   3. Teste o site no navegador")
