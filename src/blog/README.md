# Blog Obsidian + Astro

Sistema de blog integrado que sincroniza automaticamente suas notas do Obsidian e publica como site estático.

## Como usar

### 1. Sincronizar notas do Obsidian

```bash
cd C:\dev\site-alexdonega\blog
npm run sync
```

Este comando:
- Lê todas as notas do vault em `C:\dev\obsidian-alexdonega`
- Processa apenas notas com `tipo_nota: artigo` ou `tipo_nota: aula`
- Converte wikilinks `[[]]` para links HTML
- Gera arquivos markdown processados em `src/content/blog`

### 2. Rodar servidor de desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:4321/blog

### 3. Build para produção

```bash
npm run build
```

## O que foi criado

✅ **147 notas** processadas do seu vault Obsidian  
✅ Sistema de filtros por tags  
✅ Design integrado com seu site atual  
✅ Conversão automática de wikilinks  
✅ Pages responsivas e modernas  

## Customizar

Edite `scripts/sync-obsidian.js` para:
- Mudar critérios de publicação (linha 70)
- Ajustar conversão de wikilinks
- Adicionar processamento de callouts

## Próximos passos

1. Testar localhost:4321/blog
2. Ajustar estilos conforme necessário
3. Fazer deploy (Vercel/Netlify)
4. Adicionar link /blog no site principal
