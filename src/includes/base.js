/* ;) */
(function publicStaticVoidMain(stringArgs) {
  console.info(
    "%cHey! We'd love for you to give a talk, please reach out!",
    'font-size: 2rem; color: #e5cf5f; background-color: #222;'
  );
  console.info('%c❤️', 'font-size: 5rem; color: red;');

  window.onload = function () {
    const menuToggle = document.getElementById('ope-let-me-get-this-for-ya');
    menuToggle.addEventListener('click', function () {
      const menu = document.querySelector('[data-menu-button]');
      const close = document.querySelector('[data-close-button]');
      const mobileMenu = document.querySelector('[data-mobile-menu]');

      menu.classList.toggle('block');
      menu.classList.toggle('hidden');

      close.classList.toggle('hidden');
      close.classList.toggle('block');

      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('block');

      const newExpandedState =
        menuToggle.getAttribute('aria-expanded') === 'false';
      menuToggle.setAttribute('aria-expanded', newExpandedState.toString());
    });
  };

  function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }

  // unregister any existing service workers
  unregister();
})();
