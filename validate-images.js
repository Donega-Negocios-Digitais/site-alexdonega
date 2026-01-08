/**
 * 🔍 SCRIPT DE VALIDAÇÃO DE IMAGENS
 *
 * Valida se todas as imagens especificadas no README foram corretamente implementadas
 *
 * Funcionalidades:
 * 1. Verificar se todas as 384 imagens existem
 * 2. Validar atributos alt, width, height no HTML
 * 3. Checar se WebP está sendo usado com fallback JPEG
 * 4. Medir peso dos arquivos
 * 5. Gerar relatório detalhado
 *
 * Uso: node validate-images.js
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuração
const CONFIG = {
    htmlFile: 'index.html',
    basePath: 'assets/img/cursos',
    limitesPeso: {
        // Limites em KB por tamanho
        320: { webp: 25, jpg: 35 },
        400: { webp: 30, jpg: 40 },
        480: { webp: 40, jpg: 55 },
        640: { webp: 50, jpg: 70 },
        800: { webp: 65, jpg: 85 },
        960: { webp: 85, jpg: 105 }
    }
};

// Lista de 32 cursos
const CURSOS = [
    'engenharia-contexto', 'claude-code', 'segundo-cerebro', 'copywriting-ia',
    'trafego-pago', 'mentoria-saas', 'marketing-digital', 'automacao-n8n',
    'facebook-ads', 'headlines', 'chatgpt-negocios', 'gestao-produtos',
    'funis-webinar', 'prompt-engineering', 'storytelling', 'google-ads',
    'lancamentos', 'midjourney', 'anuncios-ia', 'copy-claude',
    'scale-microsaas', 'emails', 'youtube-ads', 'conteudo-ia',
    'growth-hacking', 'vsl', 'agentes-ia', 'remarketing',
    'validacao', 'ia-trafego', 'cartas-vendas', 'rag-avancado'
];

const TAMANHOS = [320, 400, 480, 640, 800, 960];
const FORMATOS = ['webp', 'jpg'];

// Contadores
let stats = {
    totalEsperado: CURSOS.length * TAMANHOS.length * FORMATOS.length,
    totalEncontrado: 0,
    faltando: [],
    pesados: [],
    leves: [],
    htmlIssues: [],
    semAlt: [],
    semDimensoes: [],
    semLazyLoading: []
};

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║   🔍 VALIDADOR DE IMAGENS - CURADORIA QUE POUPA       ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

// Função 1: Validar existência e peso dos arquivos
function validarArquivos() {
    console.log('📂 [1/3] Validando arquivos físicos...\n');

    CURSOS.forEach((curso, index) => {
        console.log(`   Curso ${index + 1}/32: ${curso}`);

        TAMANHOS.forEach(tamanho => {
            FORMATOS.forEach(formato => {
                const filename = `${curso}-${tamanho}.${formato}`;
                const filepath = path.join(CONFIG.basePath, filename);

                if (fs.existsSync(filepath)) {
                    stats.totalEncontrado++;

                    // Verificar tamanho do arquivo
                    const stat = fs.statSync(filepath);
                    const sizeKB = Math.round(stat.size / 1024);
                    const limite = CONFIG.limitesPeso[tamanho][formato];

                    if (sizeKB > limite) {
                        stats.pesados.push({
                            filename,
                            sizeKB,
                            limite,
                            excesso: sizeKB - limite
                        });
                    } else if (sizeKB < limite * 0.3) {
                        // Muito leve (pode estar vazio ou corrompido)
                        stats.leves.push({ filename, sizeKB });
                    }
                } else {
                    stats.faltando.push(filename);
                }
            });
        });
    });

    console.log(`\n   ✅ Encontrados: ${stats.totalEncontrado}/${stats.totalEsperado}`);
}

// Função 2: Validar HTML
function validarHTML() {
    console.log('\n📝 [2/3] Validando HTML...\n');

    if (!fs.existsSync(CONFIG.htmlFile)) {
        console.log(`   ❌ Arquivo ${CONFIG.htmlFile} não encontrado!`);
        return;
    }

    const html = fs.readFileSync(CONFIG.htmlFile, 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Encontrar todos os cards de curso
    const cards = document.querySelectorAll('.curso-card');
    console.log(`   Total de cards no HTML: ${cards.length}`);

    cards.forEach((card, index) => {
        const img = card.querySelector('img');
        const picture = card.querySelector('picture');

        if (!img) {
            stats.htmlIssues.push({
                card: index + 1,
                issue: 'Tag <img> não encontrada'
            });
            return;
        }

        // Verificar alt text
        const alt = img.getAttribute('alt');
        if (!alt || alt.trim() === '') {
            stats.semAlt.push({
                card: index + 1,
                src: img.getAttribute('src')
            });
        }

        // Verificar dimensões
        const width = img.getAttribute('width');
        const height = img.getAttribute('height');
        if (!width || !height) {
            stats.semDimensoes.push({
                card: index + 1,
                src: img.getAttribute('src')
            });
        }

        // Verificar lazy loading (cards 7+ devem ter loading="lazy")
        if (index >= 6) {
            const loading = img.getAttribute('loading');
            if (loading !== 'lazy') {
                stats.semLazyLoading.push({
                    card: index + 1,
                    loading: loading || 'não definido'
                });
            }
        }

        // Verificar WebP fallback
        if (!picture) {
            stats.htmlIssues.push({
                card: index + 1,
                issue: 'Sem <picture> element (WebP fallback ausente)'
            });
        } else {
            const sources = picture.querySelectorAll('source[type="image/webp"]');
            if (sources.length === 0) {
                stats.htmlIssues.push({
                    card: index + 1,
                    issue: 'Sem sources WebP'
                });
            }
        }
    });

    console.log(`   ✅ Cards analisados: ${cards.length}`);
}

// Função 3: Gerar relatório
function gerarRelatorio() {
    console.log('\n📊 [3/3] Gerando relatório...\n');

    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║                   📊 RELATÓRIO FINAL                   ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');

    // Resumo geral
    console.log('📈 RESUMO GERAL:\n');
    console.log(`   Total esperado:    ${stats.totalEsperado} arquivos`);
    console.log(`   Total encontrado:  ${stats.totalEncontrado} arquivos`);
    console.log(`   Progresso:         ${((stats.totalEncontrado / stats.totalEsperado) * 100).toFixed(1)}%`);
    console.log(`   Faltando:          ${stats.faltando.length} arquivos`);
    console.log(`   Acima do peso:     ${stats.pesados.length} arquivos`);
    console.log(`   Muito leves:       ${stats.leves.length} arquivos`);

    // Detalhes de arquivos faltando
    if (stats.faltando.length > 0) {
        console.log('\n❌ ARQUIVOS FALTANDO:\n');
        stats.faltando.slice(0, 20).forEach(f => {
            console.log(`   - ${f}`);
        });
        if (stats.faltando.length > 20) {
            console.log(`   ... e mais ${stats.faltando.length - 20} arquivos`);
        }
    }

    // Detalhes de arquivos pesados
    if (stats.pesados.length > 0) {
        console.log('\n⚠️  ARQUIVOS ACIMA DO PESO:\n');
        stats.pesados.slice(0, 10).forEach(({ filename, sizeKB, limite, excesso }) => {
            console.log(`   - ${filename}: ${sizeKB} KB (limite: ${limite} KB, +${excesso} KB)`);
        });
        if (stats.pesados.length > 10) {
            console.log(`   ... e mais ${stats.pesados.length - 10} arquivos`);
        }
    }

    // Detalhes de arquivos muito leves
    if (stats.leves.length > 0) {
        console.log('\n⚠️  ARQUIVOS MUITO LEVES (possível corrupção):\n');
        stats.leves.forEach(({ filename, sizeKB }) => {
            console.log(`   - ${filename}: ${sizeKB} KB`);
        });
    }

    // Problemas HTML
    if (stats.htmlIssues.length > 0) {
        console.log('\n⚠️  PROBLEMAS NO HTML:\n');
        stats.htmlIssues.forEach(({ card, issue }) => {
            console.log(`   - Card ${card}: ${issue}`);
        });
    }

    // Alt text faltando
    if (stats.semAlt.length > 0) {
        console.log('\n⚠️  IMAGENS SEM ALT TEXT (SEO):\n');
        stats.semAlt.forEach(({ card, src }) => {
            console.log(`   - Card ${card}: ${src}`);
        });
    }

    // Dimensões faltando
    if (stats.semDimensoes.length > 0) {
        console.log('\n⚠️  IMAGENS SEM WIDTH/HEIGHT (CLS):\n');
        stats.semDimensoes.forEach(({ card, src }) => {
            console.log(`   - Card ${card}: ${src}`);
        });
    }

    // Lazy loading faltando
    if (stats.semLazyLoading.length > 0) {
        console.log('\n⚠️  CARDS SEM LAZY LOADING (Performance):\n');
        stats.semLazyLoading.forEach(({ card, loading }) => {
            console.log(`   - Card ${card}: loading="${loading}"`);
        });
    }

    // Resultado final
    console.log('\n' + '═'.repeat(56) + '\n');

    const allOk =
        stats.faltando.length === 0 &&
        stats.pesados.length === 0 &&
        stats.leves.length === 0 &&
        stats.htmlIssues.length === 0 &&
        stats.semAlt.length === 0 &&
        stats.semDimensoes.length === 0 &&
        stats.semLazyLoading.length === 0;

    if (allOk) {
        console.log('🎉 PARABÉNS! TODAS AS IMAGENS VALIDADAS COM SUCESSO!\n');
        console.log('   ✅ Todas as 384 imagens presentes');
        console.log('   ✅ Pesos dentro dos limites');
        console.log('   ✅ HTML otimizado corretamente');
        console.log('   ✅ SEO e Performance OK\n');
    } else {
        console.log('⚠️  VALIDAÇÃO INCOMPLETA - Veja erros acima\n');

        // Sugestões de correção
        console.log('💡 PRÓXIMOS PASSOS:\n');

        if (stats.faltando.length > 0) {
            console.log('   1. Adicione as imagens faltantes em originals/');
            console.log('   2. Execute: python convert-images.py');
        }

        if (stats.pesados.length > 0) {
            console.log('   3. Otimize imagens pesadas:');
            console.log('      cwebp -q 80 input.jpg -o output.webp');
        }

        if (stats.semAlt.length > 0) {
            console.log('   4. Adicione alt text descritivo nas imagens');
        }

        console.log('');
    }

    console.log('═'.repeat(56) + '\n');
}

// Executar validação
try {
    validarArquivos();
    validarHTML();
    gerarRelatorio();
} catch (error) {
    console.error('\n❌ ERRO NA VALIDAÇÃO:', error.message);
    console.error('\nStack trace:', error.stack);
    process.exit(1);
}
