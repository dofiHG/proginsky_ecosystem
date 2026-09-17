/* Telegram link for the adult CTA. */
const TELEGRAM_BOT_URL = 'https://t.me/proginsky_aibot';
const adultsCta = document.getElementById('adults-cta');
const pending = document.getElementById('telegram-pending');

if (adultsCta && pending) {
  if (TELEGRAM_BOT_URL) {
    const url = new URL(TELEGRAM_BOT_URL);
    if (url.protocol === 'https:' && url.hostname === 't.me') {
      adultsCta.href = url.href;
      adultsCta.target = '_blank';
      adultsCta.rel = 'noopener';
    }
  } else {
    adultsCta.addEventListener('click', (event) => {
      event.preventDefault();
      pending.hidden = false;
      pending.focus({ preventScroll: true });
      pending.scrollIntoView({
        block: 'center',
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
      });
    });
  }

  document.getElementById('close-pending')?.addEventListener('click', () => {
    pending.hidden = true;
    adultsCta.focus();
  });
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveal = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.gift-card').forEach((card) => reveal.observe(card));
}

/* === Kids lead popup === */
(() => {
  const trigger = document.getElementById('kids-cta');
  const popup = document.getElementById('kids-popup');
  const form = document.getElementById('kids-lead-form');
  const success = document.getElementById('kids-form-success');
  const errorBox = document.getElementById('kids-form-error');

  if (!trigger || !popup || !form || !success || !errorBox) return;

  const phone = form.elements.phone;
  const name = form.elements.name;
  const clickField = form.elements.mouse_clicks;
  const nonceField = form.elements.form_nonce;
  const submitButton = form.querySelector('.lead-form__submit[type="submit"]');
  const humanCheck = form.elements.human_check;
  let clickCount = 0;
  let previouslyFocused = null;

  function formatPhone(raw) {
    let digits = String(raw || '').replace(/\D/g, '');
    if (digits.startsWith('8')) digits = `7${digits.slice(1)}`;
    if (!digits.startsWith('7')) digits = `7${digits}`;
    digits = digits.slice(0, 11);

    let out = '+7';
    const rest = digits.slice(1);
    if (rest.length) out += ` (${rest.slice(0, 3)}`;
    if (rest.length >= 3) out += ')';
    if (rest.length > 3) out += ` ${rest.slice(3, 6)}`;
    if (rest.length > 6) out += `-${rest.slice(6, 8)}`;
    if (rest.length > 8) out += `-${rest.slice(8, 10)}`;
    return out;
  }

  function phoneIsValid(value) {
    let digits = String(value || '').replace(/\D/g, '');
    if (digits.startsWith('8')) digits = `7${digits.slice(1)}`;
    return /^7\d{10}$/.test(digits);
  }

  phone.addEventListener('focus', () => {
    if (!phone.value) phone.value = '+7';
  });
  phone.addEventListener('input', () => {
    phone.value = formatPhone(phone.value);
  });

  async function beginServerSession() {
    nonceField.value = '';
    try {
      const response = await fetch('/api/lead.php?action=start', {
        method: 'GET',
        headers: { Accept: 'application/json' },
        credentials: 'same-origin',
        cache: 'no-store'
      });
      if (!response.ok) return;
      const data = await response.json();
      if (data && data.ok && typeof data.nonce === 'string') nonceField.value = data.nonce;
    } catch (_) {
      /* The form still works if the anti-bot session could not be created. */
    }
  }

  function openPopup(event) {
    event?.preventDefault();
    previouslyFocused = document.activeElement;
    popup.hidden = false;
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup-open');
    form.hidden = false;
    success.hidden = true;
    errorBox.hidden = true;
    clickCount = 0;
    clickField.value = '0';
    humanCheck.checked = false;
    void beginServerSession();
    requestAnimationFrame(() => name.focus({ preventScroll: true }));
  }

  function closePopup() {
    popup.hidden = true;
    popup.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
    errorBox.hidden = true;
    if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus({ preventScroll: true });
  }

  trigger.addEventListener('click', openPopup);
  popup.querySelectorAll('[data-popup-close]').forEach((el) => el.addEventListener('click', closePopup));

  popup.addEventListener('click', () => {
    clickCount += 1;
    clickField.value = String(clickCount);
  });

  document.addEventListener('keydown', (event) => {
    if (popup.hidden) return;
    if (event.key === 'Escape') closePopup();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorBox.hidden = true;

    const cleanName = name.value.trim();
    if (cleanName.length < 2) {
      errorBox.textContent = 'Укажите имя.';
      errorBox.hidden = false;
      name.focus();
      return;
    }
    if (!phoneIsValid(phone.value)) {
      errorBox.textContent = 'Введите корректный российский номер телефона.';
      errorBox.hidden = false;
      phone.focus();
      return;
    }
    if (!humanCheck.checked) {
      errorBox.textContent = 'Подтвердите, что форму заполняет человек.';
      errorBox.hidden = false;
      humanCheck.focus();
      return;
    }

    submitButton.disabled = true;
    const previousText = submitButton.textContent;
    submitButton.textContent = 'ОТПРАВЛЯЕМ…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        credentials: 'same-origin'
      });

      let data = null;
      try { data = await response.json(); } catch (_) {}

      if (!response.ok || !data?.ok) {
        throw new Error(
          data?.message ||
          'Не удалось отправить заявку. Попробуйте ещё раз.'
        );
      }

      /* Заявка успешно отправлена */
      form.reset();
      closePopup();
    } catch (error) {
      errorBox.textContent = error instanceof Error ? error.message : 'Не удалось отправить заявку.';
      errorBox.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = previousText;
    }
  });
})();
