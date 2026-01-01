import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';
import { globSync } from 'glob';
import matter from 'gray-matter';

const OBSIDIAN_VAULT = 'C:/dev/obsidian-alexdonega';
const CONTENT_DIR = './src/content/blog';

// Criar diretório de conteúdo se não existir
if (!existsSync(CONTENT_DIR)) {
  mkdirSync(CONTENT_DIR, { recursive: true });
}

// Função para converter wikilinks [[Link]] para markdown [Link](link)
function convertWikilinks(content) {
  // Converte [[Page]] para [Page](/blog/page)
  content = content.replace(/\[\[([^\]|]+)\]\]/g, (match, p1) => {
    const slug = p1.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    return `[${p1}](/blog/${slug})`;
  });

  // Converte [[Page|Display Text]] para [Display Text](/blog/page)
  content = content.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (match, p1, p2) => {
    const slug = p1.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    return `[${p2}](/blog/${slug})`;
  });

  return content;
}

// Função para processar callouts do Obsidian
function processCallouts(content) {
  // Mantém callouts do Obsidian mas converte para HTML/markdown compatível
  // Por enquanto, mantemos como está - Astro pode processar depois
  return content;
}

// Função para criar slug a partir do filename
function createSlug(filename) {
  return basename(filename, '.md')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Buscar todas as notas .md no vault
const notes = globSync(`${OBSIDIAN_VAULT}/**/*.md`, {
  ignore: ['**/node_modules/**', '**/.git/**', '**/.obsidian/**']
});

console.log(`📚 Encontradas ${notes.length} notas no vault`);

let processedCount = 0;
let skippedCount = 0;

notes.forEach(notePath => {
  try {
    const content = readFileSync(notePath, 'utf-8');
    const { data: frontmatter, content: markdown } = matter(content);

    // Filtrar apenas notas que queremos publicar
    // Você pode ajustar essa lógica conforme necessário
    const shouldPublish =
      frontmatter.tipo_nota === 'artigo' ||
      frontmatter.tipo_nota === 'aula' ||
      frontmatter.tags?.includes('publicar');

    if (!shouldPublish) {
      skippedCount++;
      return;
    }

    // Processar o conteúdo
    let processedMarkdown = convertWikilinks(markdown);
    processedMarkdown = processCallouts(processedMarkdown);

    // Helper para converter valores que podem ser arrays ou strings
    const toString = (value) => {
      if (!value) return undefined;
      if (Array.isArray(value)) return value[0];
      return value;
    };

    // Criar frontmatter limpo para Astro
    const astroFrontmatter = {
      title: frontmatter.titulo || basename(notePath, '.md'),
      description: frontmatter.descricao || '',
      pubDate: frontmatter.data_publicacao || frontmatter.data_criado || new Date().toISOString(),
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.map(String) : [],
      draft: frontmatter.status === 'rascunho' || frontmatter.pular === true,
      author: toString(frontmatter.autor || frontmatter.pessoa) || 'Alex Donega',
      // Metadados adicionais do Obsidian (filtrar valores null/undefined e converter arrays)
      tipo_nota: toString(frontmatter.tipo_nota),
      area: toString(frontmatter.area),
      projeto: toString(frontmatter.projeto),
      url_original: frontmatter.url_artigo || frontmatter.url_aula || undefined,
    };

    // Criar slug
    const slug = createSlug(notePath);

    // Criar conteúdo final - garantir que valores não sejam arrays (exceto tags)
    const serializeFrontmatter = (key, value) => {
      // Apenas tags deve ser array
      if (key === 'tags') {
        if (Array.isArray(value)) {
          if (value.length === 0) return `${key}: []`;
          // Garantir que cada tag seja serializada como string (com aspas se necessário)
          return `${key}:\n${value.map(v => `  - ${JSON.stringify(String(v))}`).join('\n')}`;
        }
        return `${key}: []`;
      }

      // Todos os outros campos: converter array para string se necessário
      if (Array.isArray(value)) {
        return `${key}: ${JSON.stringify(value[0] || '')}`;
      }

      return `${key}: ${JSON.stringify(value)}`;
    };

    const finalContent = `---
${Object.entries(astroFrontmatter)
  .filter(([_, value]) => value !== undefined && value !== '')
  .map(([key, value]) => serializeFrontmatter(key, value))
  .join('\n')}
---

${processedMarkdown}
`;

    // Escrever arquivo processado
    const outputPath = join(CONTENT_DIR, `${slug}.md`);
    writeFileSync(outputPath, finalContent, 'utf-8');

    processedCount++;
  } catch (error) {
    console.error(`❌ Erro ao processar ${notePath}:`, error.message);
  }
});

console.log(`\n✅ Processadas: ${processedCount} notas`);
console.log(`⏭️  Ignoradas: ${skippedCount} notas`);
console.log(`📁 Arquivos salvos em: ${CONTENT_DIR}`);
