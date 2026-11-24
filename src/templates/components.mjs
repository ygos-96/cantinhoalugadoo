import cfg from '../../site.config.mjs';
import { areas, guides } from '../data/guides.mjs';
import { byId } from '../data/products.mjs';

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const brl = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');
export const num = (s) => parseInt(String(s).replace(/\D/g, ''), 10) || 0;
export const url = (path) => (cfg.siteUrl ? cfg.siteUrl.replace(/\/$/, '') + path : '');

/* ---------- ícones (SVG inline, traço) ---------- */
const svg = (d, cls = 'h-4 w-4', extra = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
export const icon = {
  arrow: (c) => svg('<path d="M5 12h14M13 6l6 6-6 6"/>', c),
  arrowUpRight: (c) => svg('<path d="M7 17 17 7M8 7h9v9"/>', c),
  star: (c = 'h-3.5 w-3.5') => `<svg class="${c}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>`,
  check: (c) => svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>', c),
  ruler: (c) => svg('<path d="M3 17 17 3l4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>', c),
  shield: (c) => svg('<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>', c),
  alert: (c) => svg('<path d="M12 8v5M12 16.5v.01"/><path d="M10.3 3.9 2.4 17.5a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>', c),
  menu: (c) => svg('<path d="M4 7h16M4 12h16M4 17h16"/>', c),
  close: (c) => svg('<path d="M6 6l12 12M18 6 6 18"/>', c),
  chevron: (c) => svg('<path d="m6 9 6 6 6-6"/>', c),
  clock: (c) => svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', c),
};

export const logoMark = (c = 'h-9 w-9') => `<img src="/logo-mark.png" alt="" width="96" height="96" class="${c} rounded-full">`;
export const pinterestIcon = (c = 'h-5 w-5') => `<svg class="${c}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>`;

/* ---------- selos factuais, só com dados da planilha ---------- */
export function badges(p) {
  const out = [];
  if (/loja oficial/i.test(p.vendedor)) out.push('Loja oficial');
  if (/platinum/i.test(p.reputacao)) out.push('MercadoLíder Platinum');
  else if (/gold/i.test(p.reputacao)) out.push('MercadoLíder Gold');
  if (num(p.opinioes) < 100) out.push('Poucas opiniões');
  return out;
}
export const avaliacoes = (p) => p.opinioes.replace('opiniões', 'avaliações');
export const soldNum = (p) => { const m = String(p.vendidos).match(/([\d.]+)\s*(mil)?/); if (!m) return 0; const n = parseFloat(m[1].replace(/\./g, '')) || 0; return m[2] ? n * 1000 : n; };
export const selo = (p) => (/sem furar|sem furos/i.test(p.nome) ? 'Sem furar' : soldNum(p) >= 10000 ? 'Mais vendido' : p.preco <= 50 ? 'Até R$ 50' : '');
export const vendidos = (p) => p.vendidos.replace('vendidos', '').trim();

export const stars = (p, withCount = true, cls = 'text-sm') => `<span class="inline-flex items-center gap-1.5 whitespace-nowrap ${cls}"><span class="inline-flex items-center gap-1 font-semibold text-ink"><span class="text-[#C9892B]">${icon.star()}</span>${esc(p.nota)}</span>${withCount ? `<span class="text-muted">· ${esc(avaliacoes(p))}</span>` : ''}</span>`;

export const imgTagFor = (p, cls = '', eager = false) => `<img src="${esc(p.img)}" alt="${esc(p.nome)}" width="800" height="800" ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async" referrerpolicy="no-referrer" class="${cls}">`;

export const buyBtn = (p, cls = '') => `<a class="btn !px-3 ${cls}" href="${esc(p.link)}" target="_blank" rel="sponsored nofollow noopener">Ver no Mercado Livre ${icon.arrowUpRight('hidden h-4 w-4 sm:block')}<span class="sr-only"> (abre em nova aba)</span></a>`;

export const adNote = (cls = '') => `<p class="text-[11px] leading-tight text-muted ${cls}">Publicidade: link de afiliado.</p>`;

const precoLine = (p) => (cfg.showPrices
  ? `<p class="leading-tight"><strong class="text-base font-semibold text-ink sm:text-lg">${brl(p.preco)}</strong>${p.precoAntigo ? ` <span class="text-xs text-muted line-through sm:text-sm">${brl(p.precoAntigo)}</span>` : ''}<span class="block text-xs text-muted">em ${esc(cfg.dataConsultada.slice(0, 5))} · pode variar</span></p>`
  : '');

/* ---------- cards ---------- */
export function productCard(p, grupo = '') {
  const tag = selo(p);
  return `<article id="p-${p.id}" class="flex flex-col overflow-hidden rounded-lg border border-line bg-white" ${grupo ? `data-grupo="${esc(grupo)}"` : ''}>
  <div class="relative aspect-square bg-white">
    ${imgTagFor(p, 'h-full w-full object-contain p-3 sm:p-5')}
    ${tag ? `<span class="chip-white absolute left-2 top-2">${esc(tag)}</span>` : ''}
  </div>
  <div class="flex flex-1 flex-col gap-2 border-t border-line p-3 sm:p-4">
    <h3 class="line-clamp-2 min-h-[2.5rem] font-sans text-sm font-semibold leading-snug sm:text-[15px]">${esc(p.nome)}</h3>
    ${stars(p, true, 'text-xs sm:text-sm')}
    ${precoLine(p)}
    <div class="mt-auto pt-2">${buyBtn(p, 'w-full')}${adNote('mt-1.5 text-center')}</div>
  </div>
</article>`;
}

export function productRow(p, n) {
  const bs = badges(p);
  return `<article id="p-${p.id}" class="reveal grid gap-5 rounded-xl border border-line bg-white p-4 sm:p-6 md:grid-cols-[250px_1fr] md:gap-8">
  <div class="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white md:aspect-square">
    ${imgTagFor(p, 'h-full w-full object-contain p-4')}
    <span class="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-semibold text-white">${n}</span>
  </div>
  <div class="flex min-w-0 flex-col">
    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">${stars(p)}<span class="text-sm text-muted">${esc(vendidos(p))} vendidos</span></div>
    <h3 class="mt-2 text-xl font-semibold leading-snug sm:text-2xl">${esc(p.nome)}</h3>
    ${bs.length ? `<div class="mt-3 flex flex-wrap gap-1.5">${bs.map((b) => `<span class="chip">${esc(b)}</span>`).join('')}</div>` : ''}
    <div class="mt-4 grid gap-3">
      <div class="rounded-lg bg-olive-50 p-4"><p class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-olive-700">${icon.check('h-4 w-4')} Por que entrou</p><p class="mt-1.5 text-[15px] leading-relaxed text-ink/85">${esc(p.por)}</p></div>
      <div class="rounded-lg bg-sand-50 p-4"><p class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sand-800">${icon.alert('h-4 w-4')} Confira antes</p><p class="mt-1.5 text-[15px] leading-relaxed text-sand-800">${esc(p.confira)}</p></div>
    </div>
    <div class="mt-5 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-[13px] leading-snug text-muted">${esc(p.vendedor)} · ${esc(p.reputacao)}<br>${esc(p.frete)}</p>
      <div class="flex flex-wrap items-center gap-4">${precoLine(p)}<div>${buyBtn(p)}${adNote('mt-1.5 text-center')}</div></div>
    </div>
  </div>
</article>`;
}

export function guideCard(g, byIdFn = byId) {
  const a = areas[g.area];
  const p = byIdFn(g.capa || g.sections[0].ids[0]);
  return `<a href="/guias/${g.slug}/" class="group flex flex-col no-underline">
  <div class="aspect-[16/10] overflow-hidden rounded-lg border border-line bg-white">${imgTagFor(p, 'h-full w-full object-contain p-6 transition duration-300 group-hover:scale-[1.03]')}</div>
  <p class="eyebrow mt-4">${esc(a.titulo)}</p>
  <h3 class="mt-1.5 text-xl font-semibold leading-snug group-hover:text-olive-700">${esc(g.titulo)}</h3>
  <p class="mt-1.5 line-clamp-1 text-sm text-muted">${esc(g.descricao)}</p>
</a>`;
}

/* capa do guia: três miniaturas de produtos do próprio guia */
export function cover(g, byId, cls = 'h-44') {
  const ids = [...new Set(g.sections.flatMap((s) => s.ids))].slice(0, 3);
  return `<div class="grid ${cls} grid-cols-3 gap-px bg-line">${ids.map((id) => `<div class="bg-white">${imgTagFor(byId(id), 'h-full w-full object-contain p-3')}</div>`).join('')}</div>`;
}

export const readingMinutes = (g) => Math.max(2, Math.round((g.intro.join(' ').length + g.erros.join(' ').length + g.sections.reduce((n, s) => n + s.ids.length * 420, 0)) / 1100));

export const aviso = (cls = '') => `<p class="flex items-start gap-2.5 rounded-lg border border-olive-200 bg-olive-50 px-4 py-3 text-sm leading-snug text-olive-900 ${cls}">${icon.shield('mt-0.5 h-4 w-4 shrink-0')}<span>Os links desta página são de afiliado: se você comprar, podemos receber uma comissão, sem custo extra. <a class="link" href="/transparencia-afiliados/">Entenda</a>.</span></p>`;

export const allGuides = guides;

/* ---------- dados estruturados (JSON-LD) ---------- */
export const ldScript = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
export const itemListLd = (name, ids, path) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: ids.map((id, i) => { const p = byId(id); return { '@type': 'ListItem', position: i + 1, item: { '@type': 'Product', name: p.nome, image: p.img, url: url(`${path}#p-${p.id}`) } }; }),
});
export const articleLd = (g, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: g.titulo,
  description: g.descricao,
  image: [byId(g.capa || g.sections[0].ids[0]).img],
  datePublished: '2026-11-17',
  dateModified: '2026-11-17',
  inLanguage: 'pt-BR',
  mainEntityOfPage: url(path),
  author: { '@type': 'Organization', name: cfg.name },
  publisher: { '@type': 'Organization', name: cfg.name, logo: { '@type': 'ImageObject', url: url('/logo-mark.png') } },
});
