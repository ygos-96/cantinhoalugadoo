// Filtro por grupo nas páginas de área: botões [data-filter], itens [data-grupo], contador [data-count].
export function initFilter() {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const items = [...document.querySelectorAll('[data-grupo]')];
  const count = document.querySelector('[data-count]');
  if (!buttons.length || !items.length) return;

  const apply = (value) => {
    let shown = 0;
    items.forEach((el) => {
      const ok = value === 'todos' || el.dataset.grupo === value;
      el.classList.toggle('hidden', !ok);
      if (ok) shown += 1;
    });
    buttons.forEach((b) => {
      const on = b.dataset.filter === value;
      b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('bg-ink', on);
      b.classList.toggle('text-white', on);
      b.classList.toggle('border-ink', on);
      b.classList.toggle('bg-white', !on);
      b.classList.toggle('text-ink', !on);
    });
    if (count) count.textContent = `${shown} ${shown === 1 ? 'produto' : 'produtos'}`;
  };

  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter)));
  apply('todos');
}
