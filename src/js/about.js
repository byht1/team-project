(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', () => {
    if (!event.target.classList.contains('backdrop-about')) {
      return;
    }
    toggleModal();
  });

  document.addEventListener('keyup', () => {
    const isEscape = event.code === 'Escape';
    const isActiv = document.querySelector('.is-hidden-about');
    if (isActiv) {
      return;
    }
    if (isEscape) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-about');
    refs.body.classList.toggle('hidden');
  }
})();
