
document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });


    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      const phone = form.querySelector('#phone').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !phone || !message) {
        status.textContent = 'Por favor completa nombre, teléfono y mensaje.';
        status.style.color = '#7A1F1F';
        return;
      }

      status.textContent = `¡Gracias, ${name}! Te contactaremos pronto al ${phone}.`;
      status.style.color = '#33553A';
      form.reset();
    });
  }


  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    const number = el.getAttribute('data-whatsapp');
    const text = encodeURIComponent('Hola, quiero hacer un pedido en Restaurante El Cisne 🦢');
    el.href = `https://wa.me/${number}?text=${text}`;
  });

});
