import cfg from '../../site.config.mjs';
import { products, byId } from '../data/products.mjs';
import { areas, guides, guideBySlug } from '../data/guides.mjs';
import {
  esc, num, icon, stars, buyBtn, imgTagFor, productCard, productRow, guideCard, cover, readingMinutes, aviso, vendidos, badges,
} from './components.mjs';
import { layout } from './layout.mjs';

const notaNum = (p) => parseFloat(String(p.nota).replace(',', '.'));

/* ============ HOME ============ */
export function home() {
  const heroTiles = [byId(15), byId(12), byId(2), byId(18)];
  const rail = [...products]
    .filter((p) => num(p.opinioes) >= 1000)
    .sort((a, b) => notaNum(b) - notaNum(a) || num(b.opinioes) - num(a.opinioes))
    .slice(0, 8);
  const capa = { cozinha: [1, 2, 4], decoracao: [15, 18, 12] };
  const tile = (p, cls) => `<div class="absolute ${cls} overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-card">${imgTagFor(p, 'h-full w-full object-contain')}</div>`;

  const body = `
<section class="noise relative overflow-hidden border-b border-line">
  <div class="wrap grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
    <div>
      <p class="eyebrow reveal">Apartamento pequeno ou alugado</p>
      <h1 class="reveal mt-4 text-[2.6rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4.1rem]" style="--d:60ms">Organize e decore sem <em class="font-display italic text-olive-600">obra</em> e sem dor de cabeça.</h1>
      <p class="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink/75" style="--d:120ms">Guias com produtos do Mercado Livre escolhidos para quem não pode (ou não quer) quebrar parede. Cada item mostra por que entrou na lista e o que conferir antes de comprar.</p>
      <div class="reveal mt-8 flex flex-wrap gap-3" style="--d:180ms">
        <a href="#guias" class="btn">Ver os guias ${icon.arrow('h-4 w-4')}</a>
        <a href="#ambientes" class="btn-ghost">Escolher por ambiente</a>
      </div>
      <dl class="reveal mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6" style="--d:240ms">
        <div><dt class="text-xs text-muted">Produtos</dt><dd class="mt-1 font-display text-3xl font-semibold">${products.length}</dd></div>
        <div><dt class="text-xs text-muted">Guias</dt><dd class="mt-1 font-display text-3xl font-semibold">${guides.length}</dd></div>
        <div><dt class="text-xs text-muted">Dados de</dt><dd class="mt-1 font-display text-3xl font-semibold">${esc(cfg.dataConsultada.slice(0, 5))}</dd></div>
      </dl>
    </div>
    <div class="reveal relative mx-auto h-[400px] w-full max-w-md sm:h-[500px] lg:max-w-none" style="--d:140ms" aria-hidden="true">
      ${tile(heroTiles[0], 'left-0 top-8 h-[56%] w-[52%] -rotate-3')}
      ${tile(heroTiles[1], 'right-0 top-0 h-[44%] w-[42%] rotate-3')}
      ${tile(heroTiles[2], 'bottom-0 left-[10%] h-[40%] w-[40%] rotate-2')}
      ${tile(heroTiles[3], 'bottom-8 right-[2%] h-[48%] w-[46%] -rotate-2')}
      <div class="animate-floaty absolute left-[34%] top-[40%] z-10 rounded-2xl bg-ink px-4 py-3 text-white shadow-card">
        <p class="flex items-center gap-1.5 text-sm font-semibold"><span class="text-[#E9B64D]">${icon.star()}</span>${esc(byId(2).nota)} em ${esc(byId(2).opinioes)}</p>
        <p class="mt-0.5 text-[11px] text-white/70">Porta-temperos giratório</p>
      </div>
    </div>
  </div>
</section>

<section id="ambientes" class="wrap pt-20">
  <div class="reveal max-w-2xl"><p class="eyebrow">Por ambiente</p><h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Comece pelo cômodo que mais incomoda</h2></div>
  <div class="mt-8 grid gap-6 md:grid-cols-2">
    ${Object.entries(areas).map(([k, a], i) => `<a href="/${a.slug}/" class="reveal group overflow-hidden rounded-3xl border border-line bg-white no-underline transition duration-300 hover:-translate-y-1 hover:shadow-card" style="--d:${i * 80}ms">
      <div class="grid h-52 grid-cols-3 gap-px bg-line">${capa[k].map((id) => `<div class="bg-white">${imgTagFor(byId(id), 'h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105')}</div>`).join('')}</div>
      <div class="p-7">
        <h3 class="text-2xl font-semibold">${esc(a.titulo)}</h3>
        <p class="mt-2 text-[15px] leading-relaxed text-muted">${esc(a.descricao)}</p>
        <p class="mt-5 flex items-center justify-between text-sm"><span class="text-muted">${a.produtoIds.length} produtos · ${guides.filter((g) => g.area === k).length} guias</span><span class="inline-flex items-center gap-1.5 font-semibold text-olive-700">Explorar ${icon.arrow('h-4 w-4')}</span></p>
      </div>
    </a>`).join('\n    ')}
  </div>
</section>

<section id="guias" class="wrap pt-24">
  <div class="reveal max-w-2xl"><p class="eyebrow">Guias</p><h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Leitura rápida, lista curta, sem enrolação</h2></div>
  <div class="mt-8 grid gap-6 md:grid-cols-2">${guides.map((g, i) => guideCard(g, byId, i)).join('\n')}</div>
</section>

<section class="pt-24">
  <div class="wrap reveal flex items-end justify-between gap-6">
    <div class="max-w-2xl"><p class="eyebrow">Melhor avaliados</p><h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Os itens com mais nota e mais opiniões</h2><p class="mt-3 text-muted">Só entram produtos com mil opiniões ou mais. Nota e opiniões são do Mercado Livre em ${esc(cfg.dataConsultada)}.</p></div>
  </div>
  <div class="wrap"><div class="relative -mx-5 mt-8 flex snap-x scroll-px-5 gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:scroll-px-8 sm:px-8 [scrollbar-width:thin]">
    ${rail.map((p) => `<article class="group flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div class="aspect-square bg-white">${imgTagFor(p, 'h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105')}</div>
      <div class="flex flex-1 flex-col gap-2 border-t border-line p-4">
        ${stars(p)}
        <h3 class="line-clamp-2 text-[15px] font-semibold leading-snug">${esc(p.nome)}</h3>
        <div class="mt-auto pt-2">${buyBtn(p, 'btn-sm w-full')}</div>
      </div>
    </article>`).join('\n    ')}
  </div></div>
</section>

<section class="wrap pt-20">
  <div class="reveal max-w-2xl"><p class="eyebrow">Como escolhemos</p><h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Critério antes de estética</h2></div>
  <div class="mt-8 grid gap-5 md:grid-cols-3">
    ${[
      [icon.ruler('h-6 w-6'), 'Primeiro o espaço', 'Todo item tem o que medir antes de comprar. Casa pequena não perdoa produto que não cabe.'],
      [icon.star('h-6 w-6'), 'Depois o histórico', 'Olhamos a nota, o número de opiniões e a reputação do vendedor. Poucas opiniões viram aviso, não elogio.'],
      [icon.shield('h-6 w-6'), 'Sem teste inventado', 'Não dizemos que testamos o que não testamos. O que escrevemos vem do anúncio, e cada item traz o que conferir.'],
    ].map(([ic, t, d], i) => `<div class="reveal rounded-3xl border border-line bg-white p-7" style="--d:${i * 80}ms"><span class="grid h-12 w-12 place-items-center rounded-2xl bg-olive-50 text-olive-700">${ic}</span><h3 class="mt-5 text-xl font-semibold">${t}</h3><p class="mt-2 text-[15px] leading-relaxed text-muted">${d}</p></div>`).join('\n    ')}
  </div>
</section>

<section class="wrap pt-20">
  <div class="reveal rounded-3xl bg-olive-900 px-7 py-10 text-olive-100 sm:px-12 sm:py-12 md:flex md:items-center md:justify-between md:gap-10">
    <div class="max-w-2xl"><h2 class="font-display text-2xl font-semibold text-white sm:text-3xl">Somos um portal de recomendações, não uma loja.</h2><p class="mt-3 text-olive-200">A compra acontece no Mercado Livre. Se você comprar por um link nosso, podemos receber uma comissão, sem custo extra para você.</p></div>
    <a href="/transparencia-afiliados/" class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink no-underline transition hover:bg-olive-100 md:mt-0">Entenda como funciona ${icon.arrow('h-4 w-4')}</a>
  </div>
</section>`;
  return layout({ title: cfg.name, description: cfg.tagline, path: '/', body });
}

/* ============ ÁREA ============ */
export function area(key) {
  const a = areas[key];
  const gs = guides.filter((g) => g.area === key);
  const grupoDe = (id) => a.grupos.find((g) => g.ids.includes(id))?.titulo || '';
  const body = `
<section class="noise border-b border-line">
  <div class="wrap py-14 sm:py-20">
    <nav aria-label="Você está em" class="text-sm text-muted"><a class="no-underline hover:text-ink" href="/">Início</a> <span aria-hidden="true">/</span> ${esc(a.titulo)}</nav>
    <h1 class="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">${esc(a.titulo)}</h1>
    <p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">${esc(a.intro)}</p>
    ${aviso('mt-6 max-w-2xl')}
  </div>
</section>
<section class="wrap pt-16">
  <h2 class="text-2xl font-semibold sm:text-3xl">Guias deste ambiente</h2>
  <div class="mt-6 grid gap-6 md:grid-cols-2">${gs.map((g, i) => guideCard(g, byId, i)).join('\n')}</div>
</section>
<section class="wrap pt-20">
  <div class="flex flex-wrap items-end justify-between gap-4">
    <h2 class="text-2xl font-semibold sm:text-3xl">Todos os produtos</h2>
    <p class="text-sm text-muted" data-count>${a.produtoIds.length} produtos</p>
  </div>
  <div class="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filtrar por grupo">
    <button type="button" data-filter="todos" aria-pressed="true" class="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium transition hover:border-ink/40">Todos</button>
    ${a.grupos.map((g) => `<button type="button" data-filter="${esc(g.titulo)}" aria-pressed="false" class="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium transition hover:border-ink/40">${esc(g.titulo)}</button>`).join('\n    ')}
  </div>
  <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${a.produtoIds.map((id) => productCard(byId(id), grupoDe(id))).join('\n')}</div>
</section>`;
  return layout({ title: a.titulo, description: a.descricao, path: `/${a.slug}/`, body });
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
    <p class="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"><span class="inline-flex items-center gap-1.5">${icon.clock('h-4 w-4')} ${readingMinutes(g)} min de leitura</span><span>${ids.length} produtos</span><span>Dados de ${esc(cfg.dataConsultada)}</span></p>
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
      <ol class="mt-5 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
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
      <ul class="mt-5 grid gap-3 sm:grid-cols-2">${g.criterios.map((c) => `<li class="flex gap-3 rounded-2xl border border-line bg-white p-4 text-[15px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive-50 text-olive-700">${icon.check('h-3.5 w-3.5')}</span><span>${esc(c)}</span></li>`).join('')}</ul>
    </section>

    ${g.sections.map((s, i) => `<section id="s-${i}" class="mt-16">
      <h2 class="text-2xl font-semibold sm:text-3xl">${esc(s.titulo)}</h2>
      <p class="mt-2 max-w-2xl text-muted">${esc(s.texto)}</p>
      <div class="mt-6 space-y-5">${s.ids.map((id) => productRow(byId(id), ++n)).join('\n')}</div>
    </section>`).join('\n    ')}

    <section id="erros" class="mt-16">
      <h2 class="text-2xl font-semibold sm:text-3xl">Erros comuns</h2>
      <ul class="mt-5 grid gap-3">${g.erros.map((c) => `<li class="flex gap-3 rounded-2xl bg-sand-50 p-4 text-[15px] leading-snug text-sand-800"><span class="mt-0.5 shrink-0">${icon.alert('h-5 w-5')}</span><span>${esc(c)}</span></li>`).join('')}</ul>
    </section>

    <section id="faq" class="mt-16">
      <h2 class="text-2xl font-semibold sm:text-3xl">Perguntas frequentes</h2>
      <div class="mt-5 space-y-3">${g.faq.map(([q, r]) => `<details class="group rounded-2xl border border-line bg-white p-5 open:shadow-soft">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">${esc(q)}<span class="shrink-0 text-muted transition group-open:rotate-180">${icon.chevron('h-5 w-5')}</span></summary>
        <p class="mt-3 leading-relaxed text-ink/80">${esc(r)}</p>
      </details>`).join('\n      ')}</div>
    </section>

    ${rel.length ? `<section class="mt-16"><h2 class="text-2xl font-semibold sm:text-3xl">Veja também</h2><div class="mt-6 grid gap-6 ${rel.length > 1 ? 'sm:grid-cols-2' : 'max-w-xl'}">${rel.map((r, i) => guideCard(r, byId, i)).join('')}</div></section>` : ''}
  </div>

  <aside class="hidden lg:block">
    <div class="sticky top-24 space-y-5">
      <nav aria-label="Neste guia" class="rounded-3xl border border-line bg-white p-5">
        <p class="eyebrow">Neste guia</p>
        <ul class="mt-4 space-y-1 text-sm">${toc.map(([id, t]) => `<li><a data-toc-link href="#${id}" class="block border-l-2 border-transparent py-1.5 pl-3 text-muted no-underline transition hover:text-ink">${esc(t)}</a></li>`).join('')}</ul>
      </nav>
      <p class="rounded-3xl bg-olive-50 p-5 text-[13px] leading-snug text-olive-900">Nota, opiniões e disponibilidade mudam. Confirme no anúncio antes de comprar.</p>
    </div>
  </aside>
</div>
</div>`;
  return layout({ title: g.titulo, description: g.descricao, path: `/guias/${g.slug}/`, body, progress: true });
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
