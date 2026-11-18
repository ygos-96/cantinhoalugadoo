import cfg from '../../site.config.mjs';
import { areas, guides } from '../data/guides.mjs';

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
export const pinterestIcon = (c = 'h-5 w-5') => `<svg class="${c}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 3 5.7 3 9.9c0 2.4 1.3 4.5 3.2 5.3.3.1.5 0 .6-.3l.3-1.1c.1-.3 0-.4-.2-.7-.6-.7-.9-1.5-.9-2.7 0-3.4 2.6-6.4 6.700-6.400 3.600 0 5.600 2.200 5.600 5.100 0 3.800-1.700 7-4.200 7-1.400 0-2.400-1.100-2.100-2.500.4-1.700 1.200-3.500 1.200-4.700 0-1.100-.6-2-1.800-2-1.400 0-2.600 1.500-2.600 3.500 0 1.300.4 2.100.4 2.100l-1.700 7.300c-.4 1.600-.1 3.600 0 3.800 0 .1.200.2.300.1.100-.2 1.600-2 2.100-3.800l.8-3.100c.4.800 1.600 1.500 2.900 1.500 3.800 0 6.400-3.500 6.400-8.100C20.500 5.200 17.500 2 12 2z"/></svg>`;

/* ---------- selos factuais, só com dados da planilha ---------- */
export function badges(p) {
  const out = [];
  if (/loja oficial/i.test(p.vendedor)) out.push('Loja oficial');
  if (/platinum/i.test(p.reputacao)) out.push('MercadoLíder Platinum');
  else if (/gold/i.test(p.reputacao)) out.push('MercadoLíder Gold');
  if (num(p.opinioes) < 100) out.push('Poucas opiniões');
  return out;
}
export const vendidos = (p) => p.vendidos.replace('vendidos', '').trim();

export const stars = (p, withCount = true) => `<span class="inline-flex items-center gap-1.5 text-sm"><span class="inline-flex items-center gap-1 font-semibold text-ink"><span class="text-[#C9892B]">${icon.star()}</span>${esc(p.nota)}</span>${withCount ? `<span class="text-muted">${esc(p.opinioes)}</span>` : ''}</span>`;

export const imgTagFor = (p, cls = '') => `<img src="${esc(p.img)}" alt="${esc(p.nome)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" class="${cls}">`;

export const buyBtn = (p, cls = '') => `<a class="btn ${cls}" href="${esc(p.link)}" target="_blank" rel="sponsored nofollow noopener">Ver no Mercado Livre ${icon.arrowUpRight('h-4 w-4')}<span class="sr-only"> (abre em nova aba)</span></a>`;

const precoLine = (p) => (cfg.showPrices
  ? `<p class="text-sm"><strong class="text-base">${brl(p.preco)}</strong>${p.precoAntigo ? ` <span class="text-muted line-through">${brl(p.precoAntigo)}</span>` : ''} <span class="block text-xs text-muted">em ${esc(cfg.dataConsultada.slice(0, 5))} · pode variar</span></p>`
  : '');

/* ---------- cards ---------- */
export function productCard(p, grupo = '') {
  const bs = badges(p).slice(0, 2);
  return `<article class="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card" ${grupo ? `data-grupo="${esc(grupo)}"` : ''}>
  <div class="relative aspect-[4/3] bg-white">
    ${imgTagFor(p, 'h-full w-full object-contain p-5 transition duration-500 group-hover:scale-[1.04]')}
    ${bs.length ? `<div class="absolute left-3 top-3 flex flex-wrap gap-1.5">${bs.map((b) => `<span class="chip-white">${esc(b)}</span>`).join('')}</div>` : ''}
  </div>
  <div class="flex flex-1 flex-col gap-3 border-t border-line p-5">
    <div class="flex items-center justify-between gap-2">${stars(p)}<span class="text-xs font-medium text-muted">${esc(vendidos(p))}</span></div>
    <h3 class="text-lg font-semibold leading-snug">${esc(p.nome)}</h3>
    <p class="line-clamp-3 text-sm leading-relaxed text-ink/75">${esc(p.por)}</p>
    <div class="rounded-xl bg-sand-50 p-3 text-[13px] leading-snug text-sand-800"><span class="font-semibold">Confira antes:</span> ${esc(p.confira)}</div>
    ${precoLine(p)}
    <div class="mt-auto pt-1">${buyBtn(p, 'w-full')}</div>
  </div>
</article>`;
}

export function productRow(p, n) {
  const bs = badges(p);
  return `<article id="p-${p.id}" class="reveal grid gap-5 rounded-3xl border border-line bg-white p-4 sm:p-6 md:grid-cols-[250px_1fr] md:gap-8">
  <div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-white md:aspect-square">
    ${imgTagFor(p, 'h-full w-full object-contain p-4')}
    <span class="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-semibold text-white">${n}</span>
  </div>
  <div class="flex min-w-0 flex-col">
    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">${stars(p)}<span class="text-sm text-muted">${esc(vendidos(p))} vendidos</span></div>
    <h3 class="mt-2 text-xl font-semibold leading-snug sm:text-2xl">${esc(p.nome)}</h3>
    ${bs.length ? `<div class="mt-3 flex flex-wrap gap-1.5">${bs.map((b) => `<span class="chip">${esc(b)}</span>`).join('')}</div>` : ''}
    <div class="mt-4 grid gap-3">
      <div class="rounded-2xl bg-olive-50 p-4"><p class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-olive-700">${icon.check('h-4 w-4')} Por que entrou</p><p class="mt-1.5 text-[15px] leading-relaxed text-ink/85">${esc(p.por)}</p></div>
      <div class="rounded-2xl bg-sand-50 p-4"><p class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sand-800">${icon.alert('h-4 w-4')} Confira antes</p><p class="mt-1.5 text-[15px] leading-relaxed text-sand-800">${esc(p.confira)}</p></div>
    </div>
    <div class="mt-5 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-[13px] leading-snug text-muted">${esc(p.vendedor)} · ${esc(p.reputacao)}<br>${esc(p.frete)}</p>
      <div class="flex flex-wrap items-center gap-4">${precoLine(p)}${buyBtn(p)}</div>
    </div>
  </div>
</article>`;
}

export function guideCard(g, byId, i = 0) {
  const a = areas[g.area];
  return `<a href="/guias/${g.slug}/" class="reveal group flex flex-col overflow-hidden rounded-3xl border border-line bg-white no-underline transition duration-300 hover:-translate-y-1 hover:shadow-card" style="--d:${i * 70}ms">
  ${cover(g, byId)}
  <div class="flex flex-1 flex-col gap-2 p-6">
    <span class="chip self-start">${esc(a.titulo)}</span>
    <h3 class="text-xl font-semibold leading-snug">${esc(g.titulo)}</h3>
    <p class="text-sm leading-relaxed text-muted">${esc(g.descricao)}</p>
    <span class="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-olive-700">Ler o guia <span class="transition group-hover:translate-x-1">${icon.arrow('h-4 w-4')}</span></span>
  </div>
</a>`;
}

/* capa do guia: três miniaturas de produtos do próprio guia */
export function cover(g, byId, cls = 'h-44') {
  const ids = [...new Set(g.sections.flatMap((s) => s.ids))].slice(0, 3);
  return `<div class="grid ${cls} grid-cols-3 gap-px bg-line">${ids.map((id) => `<div class="bg-white">${imgTagFor(byId(id), 'h-full w-full object-contain p-3')}</div>`).join('')}</div>`;
}

export const readingMinutes = (g) => Math.max(2, Math.round((g.intro.join(' ').length + g.erros.join(' ').length + g.sections.reduce((n, s) => n + s.ids.length * 420, 0)) / 1100));

export const aviso = (cls = '') => `<p class="flex items-start gap-2.5 rounded-2xl border border-olive-200 bg-olive-50 px-4 py-3 text-sm leading-snug text-olive-900 ${cls}">${icon.shield('mt-0.5 h-4 w-4 shrink-0')}<span>Os links desta página são de afiliado: se você comprar, podemos receber uma comissão, sem custo extra. <a class="link" href="/transparencia-afiliados/">Entenda</a>.</span></p>`;

export const allGuides = guides;
