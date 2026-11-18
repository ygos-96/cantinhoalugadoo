// Sumário do guia: destaca o link da seção que está na tela.
export function initToc() {
  const links = [...document.querySelectorAll('[data-toc-link]')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = new Map();
  links.forEach((a) => {
    const el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) map.set(el, a);
  });
  const setActive = (a) => links.forEach((l) => {
    const on = l === a;
    l.classList.toggle('text-ink', on);
    l.classList.toggle('font-semibold', on);
    l.classList.toggle('border-olive-600', on);
    l.classList.toggle('text-muted', !on);
    l.classList.toggle('border-transparent', !on);
    if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
  });
  const io = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) setActive(map.get(visible[0].target));
  }, { rootMargin: '-96px 0px -60% 0px', threshold: 0 });
  map.forEach((_, el) => io.observe(el));
}
