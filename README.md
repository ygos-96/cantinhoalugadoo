# Casa Sem Obra (nome provisório) — vitrine de afiliados ML

Site estático (Vite + Tailwind 3) com guias de organização e decoração para apartamento pequeno ou alugado. Hospedagem prevista: Cloudflare Pages. A compra acontece no Mercado Livre.

## Comandos
```bash
npm install        # uma vez
npm run dev        # gera as páginas e abre o servidor local
npm run build      # gera as páginas e o site final em dist/
npm run preview    # serve o dist/ localmente
```

## Onde mexer
| O quê | Arquivo |
|---|---|
| Nome, slogan, URL, mostrar preço, data da consulta | `site.config.mjs` |
| Produtos (links de afiliado, imagem, textos) | `src/data/products.mjs` |
| Guias, áreas, textos | `src/data/guides.mjs` |
| Páginas (home, área, guia, textos) | `src/templates/pages.mjs` |
| Cabeçalho, rodapé, SEO básico | `src/templates/layout.mjs` |
| Cards, ícones, selos | `src/templates/components.mjs` |
| Montagem das páginas e robots/sitemap/404 | `scripts/generate.mjs` |
| Visual: cores, fontes, sombras | `tailwind.config.js` e `src/client/style.css` |
| Interações (menu, filtro, sumário, revelar ao rolar) | `src/client/modules/*.js` |
| Mapa e pendências | `docs/mapa-do-site.md` |

`site-src/` e `dist/` são gerados: não edite.

## Antes de publicar (pendências)
1. Ler os termos do programa de afiliados do Mercado Livre: exibir preço (`showPrices`), usar as imagens dos anúncios (hoje são carregadas direto do Mercado Livre) e a redação do aviso de afiliado.
2. Definir o nome e o domínio. Depois: `SITE_URL=https://seudominio.com.br npm run build` (gera sitemap.xml e canonical).
3. Criar imagem de compartilhamento (og:image) e as imagens dos pins do Pinterest.
4. Revisar a página de privacidade e decidir a ferramenta de estatística.
5. Conferir de novo preço, nota e disponibilidade dos 20 produtos (dados de 17/11/2026) e atualizar `dataConsultada`.
6. Publicar na Cloudflare Pages: build `npm run build`, pasta de saída `dist`.

## Regras do projeto
- Links só do gerador do programa (meli.la), com `rel="sponsored nofollow noopener"`.
- A coluna de comissão da planilha não vai para o site.
- Não afirmar teste pessoal nem inventar avaliação. Só o que o anúncio permite.
