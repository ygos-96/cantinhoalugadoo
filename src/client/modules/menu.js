// Menu mobile: botão [data-menu-btn] abre/fecha o painel [data-menu].
export function initMenu() {
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-menu]');
  if (!btn || !panel) return;

  const set = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('hidden', !open);
    document.body.classList.toggle('overflow-hidden', open);
  };

  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  window.matchMedia('(min-width: 768px)').addEventListener('change', (m) => { if (m.matches) set(false); });
}
