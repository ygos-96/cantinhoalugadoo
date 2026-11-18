import cfg from '../../site.config.mjs';
import { products, byId } from '../data/products.mjs';
import { areas, guides, guideBySlug } from '../data/guides.mjs';
import {
  esc, num, icon, stars, buyBtn, imgTagFor, productCard, productRow, guideCard, readingMinutes, aviso, soldNum, itemListLd, articleLd,
} from './components.mjs';
import { layout } from './layout.mjs';
import { topics } from '../data/topics.mjs';

const notaNum = (p) => parseFloat(String(p.nota).replace(',', '.'));

/* ============ HOME ============ */
export function home() {
  const ambientes = [
    ['Cozinha', `/${areas.cozinha.slug}/`, 2],
    ['Decoração', `/${areas.decoracao.slug}/`, 12],
    ['Iluminação', '/guias/iluminacao-apartamento-alugado-luminarias-sem-obra/', 11],
    ['Tapetes', '/tapetes-sala-pequena/', 18],
    ['Cortinas', '/cortinas-apartamento-alugado/', 19],
    ['Paredes', '/paredes-sem-obra/', 17],
    ['Quadros', '/quadros-sem-furar-parede/', 16],
    ['Achadinhos', '/achadinhos/', 10],
  ];
  const vendidosTop = [...products]
    .sort((x, y) => soldNum(y) - soldNum(x) || notaNum(y) - notaNum(x) || num(y.opinioes) - num(x.opinioes))
    .slice(0, 8);

  const body = `
<section class="border-b border-line bg-linen">
  <div class="wrap grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
    <div>
      <p class="eyebrow">Apartamento pequeno ou alugado</p>
      <h1 class="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">Casa com cara de sua, sem obra e sem furar parede</h1>
      <p class="mt-4 max-w-lg text-lg leading-relaxed text-ink/75">Achadinhos do Mercado Livre escolhidos por avaliação, com o que medir e conferir antes de comprar.</p>
      <div class="mt-7 flex flex-wrap gap-3">
        <a href="/achadinhos/" class="btn">Ver achadinhos</a>
        <a href="/${areas.cozinha.slug}/" class="btn-ghost">Organização de cozinha</a>
      </div>
    </div>
    <div class="aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white">${imgTagFor(byId(12), 'h-full w-full object-cover', true)}</div>
  </div>
</section>

<section class="wrap pt-14">
  <h2 class="text-2xl font-semibold sm:text-3xl">Comprar por ambiente</h2>
  <div class="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
    ${ambientes.map(([nome, href, id]) => `<a href="${href}" class="group no-underline">
      <div class="aspect-square overflow-hidden rounded-lg border border-line bg-white">${imgTagFor(byId(id), 'h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.04]')}</div>
      <p class="mt-2 text-base font-semibold group-hover:text-olive-700">${nome}</p>
    </a>`).join('\n    ')}
  </div>
</section>

<section class="wrap pt-16">
  <div class="flex flex-wrap items-end justify-between gap-2">
    <h2 class="text-2xl font-semibold sm:text-3xl">Mais vendidos</h2>
    <p class="text-sm text-muted">Ordenados pelo número de vendas no Mercado Livre em ${esc(cfg.dataConsultada)}</p>
  </div>
  ${aviso('mt-4')}
  <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">${vendidosTop.map((p) => productCard(p)).join('\n')}</div>
</section>

<section class="wrap pt-16">
  <div class="flex flex-col gap-3 rounded-lg border border-line bg-white px-5 py-4 text-[15px] sm:flex-row sm:items-center sm:justify-between">
    <p><strong class="font-semibold">Como escolhemos:</strong> nota mínima 4,5 · vendedor bem avaliado · histórico de vendas · frete conferido. Preços e avaliações conferidos em ${esc(cfg.dataConsultada)}.</p>
    <a class="link shrink-0" href="/como-funciona/">Ver critérios</a>
  </div>
</section>

<section id="guias" class="wrap pt-16">
  <h2 class="text-2xl font-semibold sm:text-3xl">Guias</h2>
  <div class="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">${guides.map((g) => guideCard(g, byId)).join('\n')}</div>
</section>`;
  return layout({ title: cfg.name, description: cfg.tagline, path: '/', body });
}

/* ============ ÁREA (categoria) ============ */
export function area(key) {
  const a = areas[key];
  const gs = guides.filter((g) => g.area === key);
  const grupoDe = (id) => a.grupos.find((g) => g.ids.includes(id))?.titulo || '';
  const path = `/${a.slug}/`;
  const body = `
<section class="border-b border-line bg-linen">
  <div class="wrap py-10 sm:py-14">
    <nav aria-label="Você está em" class="text-sm text-muted"><a class="no-underline hover:text-ink" href="/">Início</a> <span aria-hidden="true">/</span> ${esc(a.titulo)}</nav>
    <h1 class="mt-3 max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-5xl">${esc(a.titulo)}</h1>
    <p class="mt-4 max-w-2xl text-lg leading-relaxed text-ink/75">${esc(a.intro)}</p>
    ${aviso('mt-5 max-w-2xl')}
  </div>
</section>
<section class="wrap pt-10">
  <div class="flex flex-wrap items-end justify-between gap-3">
    <h2 class="text-2xl font-semibold sm:text-3xl">Produtos</h2>
    <p class="text-sm text-muted" data-count>${a.produtoIds.length} produtos</p>
  </div>
  <div class="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar por grupo">
    <button type="button" data-filter="todos" aria-pressed="true" class="rounded-md border border-line bg-white px-3.5 py-2 text-sm font-medium transition hover:border-ink/40 aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white">Todos</button>
    ${a.grupos.map((g) => `<button type="button" data-filter="${esc(g.titulo)}" aria-pressed="false" class="rounded-md border border-line bg-white px-3.5 py-2 text-sm font-medium transition hover:border-ink/40 aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white">${esc(g.titulo)}</button>`).join('\n    ')}
  </div>
  <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">${a.produtoIds.map((id) => productCard(byId(id), grupoDe(id))).join('\n')}</div>
</section>
<section class="wrap pt-16">
  <h2 class="text-2xl font-semibold sm:text-3xl">Guias deste ambiente</h2>
  <div class="mt-6 grid gap-8 sm:grid-cols-2">${gs.map((g) => guideCard(g, byId)).join('\n')}</div>
</section>`;
  return layout({ title: a.titulo, description: a.descricao, path, body, jsonLd: [itemListLd(a.titulo, a.produtoIds, path)] });
}

/* ============ GUIA ============ */
export function guide(g) {
  const a = areas[g.area];
  const ids = g.sections.flatMap((s) => s.ids);
  const toc = [
    ['resumo', 'Resumo rápido'],
    ['como-escolher', 'Como escolher'],
    ...g.sections.map((s, i) => [`s-${i}`, s.titulo]),
    ['erros', 'Erros comuns'],
    ['faq', 'Perguntas frequentes'],
  ];
  let n = 0;
  const rel = (g.relacionados || []).map(guideBySlug).filter(Boolean);

  const body = `
<div data-article>
<section class="noise border-b border-line">
  <div class="wrap py-12 sm:py-16">
    <nav aria-label="Você está em" class="text-sm text-muted"><a class="no-underline hover:text-ink" href="/">Início</a> <span aria-hidden="true">/</span> <a class="no-underline hover:text-ink" href="/${a.slug}/">${esc(a.titulo)}</a></nav>
    <h1 class="mt-4 max-w-4xl text-[2.1rem] font-semibold leading-[1.08] sm:text-5xl">${esc(g.titulo)}</h1>
    <p class="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"><span class="inline-flex items-center gap-1.5">${icon.clock('h-4 w-4')} ${readingMinutes(g)} min de leitura</span><span>${ids.length} produtos</span><span>Preços conferidos em ${esc(cfg.dataConsultada)}</span></p>
  </div>
</section>

<div class="wrap grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_250px]">
  <div class="min-w-0">
    <div class="prose-guide max-w-3xl">
      ${aviso('mb-6')}
      ${g.intro.map((t) => `<p>${esc(t)}</p>`).join('\n      ')}
    </div>

    <section id="resumo" class="mt-12">
      <h2 class="text-2xl font-semibold sm:text-3xl">Resumo rápido</h2>
      <ol class="mt-5 divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
        ${ids.map((id, i) => { const p = byId(id); return `<li class="flex items-center gap-4 p-3 sm:p-4">
          <span class="hidden h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white sm:grid">${i + 1}</span>
          <div class="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-line bg-white">${imgTagFor(p, 'h-full w-full object-contain p-1.5')}</div>
          <div class="min-w-0 flex-1"><a href="#p-${p.id}" class="line-clamp-2 text-sm font-semibold leading-snug no-underline hover:text-olive-700">${esc(p.nome)}</a><div class="mt-1">${stars(p, false)} <span class="ml-1 text-xs text-muted">${esc(p.opinioes)}</span></div></div>
          ${buyBtn(p, 'btn-sm hidden shrink-0 sm:inline-flex')}
        </li>`; }).join('\n        ')}
      </ol>
    </section>

    <section id="como-escolher" class="mt-14">
      <h2 class="text-2xl font-semibold sm:text-3xl">Como escolher</h2>
      <ul class="mt-5 grid gap-3 sm:grid-cols-2">${g.criterios.map((c) => `<li class="flex gap-3 rounded-lg border border-line bg-white p-4 text-[15px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive-50 text-olive-700">${icon.check('h-3.5 w-3.5')}</span><span>${esc(c)}</span></li>`).join('')}</ul>
    </section>

    ${g.sections.map((s, i) => `<section id="s-${i}" class="mt-16">
      <h2 class="text-2xl font-semibold sm:text-3xl">${esc(s.titulo)}</h2>
      <p class="mt-2 max-w-2xl text-muted">${esc(s.texto)}</p>
      <div class="mt-6 space-y-5">${s.ids.map((id) => productRow(byId(id), ++n)).join('\n')}</div>
    </section>`).join('\n    ')}

    <section id="erros" class="mt-16">
      <h2 class="text-2xl font-semibold sm:text-3xl">Erros comuns</h2>
      <ul class="mt-5 grid gap-3">${g.erros.map((c) => `<li class="flex gap-3 rounded-lg bg-sand-50 p-4 text-[15px] leading-snug text-sand-800"><span class="mt-0.5 shrink-0">${icon.alert('h-5 w-5')}</span><span>${esc(c)}</span></li>`).join('')}</ul>
    </section>

    <section id="faq" class="mt-16">
      <h2 class="text-2xl font-semibold sm:text-3xl">Perguntas frequentes</h2>
      <div class="mt-5 space-y-3">${g.faq.map(([q, r]) => `<details class="group rounded-lg border border-line bg-white p-5 open:shadow-soft">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">${esc(q)}<span class="shrink-0 text-muted transition group-open:rotate-180">${icon.chevron('h-5 w-5')}</span></summary>
        <p class="mt-3 leading-relaxed text-ink/80">${esc(r)}</p>
      </details>`).join('\n      ')}</div>
    </section>

    ${rel.length ? `<section class="mt-16"><h2 class="text-2xl font-semibold sm:text-3xl">Veja também</h2><div class="mt-6 grid gap-6 ${rel.length > 1 ? 'sm:grid-cols-2' : 'max-w-xl'}">${rel.map((r, i) => guideCard(r, byId, i)).join('')}</div></section>` : ''}
  </div>

  <aside class="hidden lg:block">
    <div class="sticky top-24 space-y-5">
      <nav aria-label="Neste guia" class="rounded-xl border border-line bg-white p-5">
        <p class="eyebrow">Neste guia</p>
        <ul class="mt-4 space-y-1 text-sm">${toc.map(([id, t]) => `<li><a data-toc-link href="#${id}" class="block border-l-2 border-transparent py-1.5 pl-3 text-muted no-underline transition hover:text-ink">${esc(t)}</a></li>`).join('')}</ul>
      </nav>
      <p class="rounded-xl bg-olive-50 p-5 text-[13px] leading-snug text-olive-900">Nota, opiniões e disponibilidade mudam. Confirme no anúncio antes de comprar.</p>
    </div>
  </aside>
</div>
</div>`;
  return layout({ title: g.titulo, description: g.descricao, path: `/guias/${g.slug}/`, body, progress: true, ogType: 'article', jsonLd: [articleLd(g, `/guias/${g.slug}/`)] });
}

/* ============ PÁGINAS DE TEXTO ============ */
export function doc({ title, description, path, lead, blocks }) {
  const body = `
<section class="noise border-b border-line">
  <div class="wrap py-14 sm:py-20"><h1 class="max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">${esc(title)}</h1><p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">${lead}</p></div>
</section>
<div class="wrap py-14">
  <div class="prose-guide max-w-3xl space-y-10">
    ${blocks.map(([h, ps]) => `<section><h2 class="mb-3 text-2xl font-semibold">${esc(h)}</h2>${ps.map((t) => `<p>${t}</p>`).join('')}</section>`).join('\n    ')}
  </div>
</div>`;
  return layout({ title, description, path, body });
}

/* ============ PÁGINA DE TEMA (curta) ============ */
export function topic(t) {
  let n = 0;
  const rel = (t.guias || []).map(guideBySlug).filter(Boolean);
  const outros = topics.filter((o) => o.slug !== t.slug);
  const body = `
<section class="noise border-b border-line">
  <div class="wrap py-12 sm:py-16">
    <nav aria-label="Você está em" class="text-sm text-muted"><a class="no-underline hover:text-ink" href="/">Início</a> <span aria-hidden="true">/</span> ${esc(t.titulo)}</nav>
    <h1 class="mt-4 max-w-4xl text-[2.1rem] font-semibold leading-[1.08] sm:text-5xl">${esc(t.h1)}</h1>
    <p class="mt-5 text-sm text-muted">${t.ids.length} ${t.ids.length > 1 ? 'produtos' : 'produto'} · Preços conferidos em ${esc(cfg.dataConsultada)}</p>
  </div>
</section>
<div class="wrap py-12">
  <div class="max-w-3xl">
    <div class="prose-guide">
      ${aviso('mb-6')}
      ${t.intro.map((p) => `<p>${esc(p)}</p>`).join('\n')}
    </div>
    <div class="mt-10 space-y-5">${t.ids.map((id) => productRow(byId(id), ++n)).join('\n')}</div>
    <section class="mt-14">
      <h2 class="text-2xl font-semibold sm:text-3xl">Antes de comprar</h2>
      <ul class="mt-5 grid gap-3">${t.dicas.map((c) => `<li class="flex gap-3 rounded-lg border border-line bg-white p-4 text-[15px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive-50 text-olive-700">${icon.check('h-3.5 w-3.5')}</span><span>${esc(c)}</span></li>`).join('')}</ul>
    </section>
  </div>
  ${rel.length ? `<section class="mt-16"><h2 class="text-2xl font-semibold sm:text-3xl">Guias para ler em seguida</h2><div class="mt-6 grid gap-6 sm:grid-cols-2">${rel.map((r, i) => guideCard(r, byId, i)).join('')}</div></section>` : ''}
  <section class="mt-16"><h2 class="text-xl font-semibold">Outros temas</h2><div class="mt-4 flex flex-wrap gap-2">${outros.map((o) => `<a class="chip no-underline" href="/${o.slug}/">${esc(o.titulo)}</a>`).join('')}</div></section>
</div>`;
  return layout({ title: t.h1, description: t.descricao, path: `/${t.slug}/`, body, jsonLd: [itemListLd(t.h1, t.ids, `/${t.slug}/`)] });
}
