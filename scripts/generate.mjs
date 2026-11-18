// Gera as páginas HTML estáticas em site-src/ (roda antes do `vite build`).
import { mkdirSync, rmSync, writeFileSync, cpSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cfg from '../site.config.mjs';
import { areas, guides } from '../src/data/guides.mjs';
import { home, area, guide, doc } from '../src/templates/pages.mjs';
import { esc, url } from '../src/templates/components.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'site-src');
const PUB = resolve(ROOT, 'public');

const pages = []; // { path, html }
const add = (path, html) => pages.push({ path, html });

add('/', home());
for (const key of Object.keys(areas)) add(`/${areas[key].slug}/`, area(key));
for (const g of guides) add(`/guias/${g.slug}/`, guide(g));

add('/como-funciona/', doc({
  title: 'Como funciona',
  description: 'Como escolhemos os produtos, o que mostramos em cada recomendação e o que não fazemos.',
  path: '/como-funciona/',
  lead: `${esc(cfg.name)} reúne produtos do Mercado Livre para quem mora em apartamento pequeno ou alugado e quer organizar ou decorar sem obra.`,
  blocks: [
    ['Como escolhemos', ['Selecionamos os itens pelo tipo de produto, pela nota e pelo número de opiniões de quem comprou, e pela reputação do vendedor. Preferimos vendedores com boa reputação no Mercado Livre e itens que não exigem obra.']],
    ['O que não fazemos', ['Não testamos os produtos pessoalmente e não dizemos o contrário. Não inventamos avaliação. O que escrevemos sobre cada item vem do título e das informações do anúncio, e a seção "Confira antes" aponta o que você deve verificar.', 'Não vendemos nada, não recebemos pedido e não cuidamos de entrega ou troca. A compra é feita no Mercado Livre, que é quem responde por ela.']],
    ['Dados que mudam', [`Nota, opiniões, preço e disponibilidade mudam o tempo todo. Os dados dos guias foram conferidos em ${esc(cfg.dataConsultada)}. Confirme sempre no anúncio.`]],
    ['Como ganhamos', ['Podemos receber comissão do Mercado Livre se você comprar por um link nosso, sem custo extra para você. Leia a <a class="link" href="/transparencia-afiliados/">página de transparência</a>.']],
  ],
}));

add('/transparencia-afiliados/', doc({
  title: 'Transparência e afiliados',
  description: 'Como o site ganha dinheiro: participamos do programa de afiliados do Mercado Livre.',
  path: '/transparencia-afiliados/',
  lead: 'Este site é um portal de recomendações, não uma loja.',
  blocks: [
    ['Como ganhamos dinheiro', ['Participamos do programa de afiliados do Mercado Livre: se você comprar por um link nosso, podemos receber uma comissão, sem custo extra para você. O preço e as condições são os do Mercado Livre, onde a compra é feita.']],
    ['Como escolhemos', ['Escolhemos os produtos pela avaliação de quem comprou e pelas características do anúncio, e não somos pagos para recomendar um item específico. Marcamos os links de afiliado com o atributo <code>sponsored</code>.']],
    ['Marcas', ['Mercado Livre é marca de seus respectivos titulares. Este site não é operado pelo Mercado Livre.']],
  ],
}));

add('/privacidade/', doc({
  title: 'Política de privacidade',
  description: 'O que este site coleta e o que acontece quando você clica em um link do Mercado Livre.',
  path: '/privacidade/',
  lead: 'Este site não tem cadastro, login nem formulário. Não pedimos dados pessoais.',
  blocks: [
    ['Links para o Mercado Livre', ['Ao clicar em um link para o Mercado Livre, você sai deste site. O Mercado Livre e o programa de afiliados têm seus próprios cookies e regras de privacidade, e os links nos identificam como origem da visita para o pagamento da comissão.']],
    ['Estatísticas de visita', ['Se passarmos a usar ferramenta de estatística de visitas, esta página será atualizada com o nome da ferramenta e o que ela coleta.']],
    ['Situação deste texto', ['Rascunho. Revise antes de publicar com o domínio definitivo.']],
  ],
}));

/* ---------- escrita ---------- */
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const { path, html } of pages) {
  const dir = resolve(OUT, '.' + path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), html);
}
cpSync(resolve(ROOT, 'src/client'), OUT, { recursive: true });

// public/: robots, sitemap (só com domínio definido) e 404
mkdirSync(PUB, { recursive: true });
writeFileSync(resolve(PUB, 'robots.txt'), `User-agent: *\nAllow: /\n${cfg.siteUrl ? `Sitemap: ${url('/sitemap.xml')}\n` : ''}`);
if (cfg.siteUrl) {
  const urls = pages.map((p) => `  <url><loc>${esc(url(p.path))}</loc></url>`).join('\n');
  writeFileSync(resolve(PUB, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
} else {
  console.warn('[aviso] SITE_URL não definido: sem sitemap.xml e sem canonical. Defina antes de publicar.');
  if (existsSync(resolve(PUB, 'sitemap.xml'))) rmSync(resolve(PUB, 'sitemap.xml'));
}
writeFileSync(resolve(PUB, '404.html'), `<!doctype html><html lang="${cfg.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Página não encontrada | ${esc(cfg.name)}</title><meta name="robots" content="noindex"><style>body{font-family:system-ui,sans-serif;background:#FBFAF7;color:#1B1A17;display:grid;place-items:center;min-height:100vh;margin:0;padding:1rem;text-align:center}h1{font-family:Georgia,serif;font-size:2rem}a{color:#2F4A34;font-weight:600}</style></head><body><main><h1>Página não encontrada</h1><p><a href="/">Voltar para o início</a></p></main></body></html>\n`);

console.log(`[ok] ${pages.length} páginas geradas em site-src/`);
