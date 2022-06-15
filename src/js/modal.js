(() => {
  const refs = {
    body: document.querySelector('body'),
    openModalBtnOne: document.querySelector('[data-modal-open-one]'),
    openModalBtnTwo: document.querySelector('[data-modal-open-two]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  let a = 0;

  refs.openModalBtnOne.addEventListener('click', toggleModalTwo);
  refs.openModalBtnTwo.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModalEnd);

  document.addEventListener('keyup', () => {
    const isEscape = event.code === 'Escape';
    const isActiv = document.querySelector('.avtiv-modal');
    if (!isActiv) {
      return;
    }
    if (!isEscape) {
      return;
    }
    if (a === 1) {
      refs.modal.classList.toggle('is-hidden');
      refs.modal.classList.toggle('avtiv-modal');
      refs.body.classList.toggle('hidden');
      return;
    }
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('avtiv-modal');
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('avtiv-modal');
    refs.body.classList.toggle('hidden');

    a = 1;
  }
  function toggleModalTwo() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('avtiv-modal');
    a = 0;
  }

  function toggleModalEnd() {
    if (a === 1) {
      refs.modal.classList.toggle('is-hidden');
      refs.modal.classList.toggle('avtiv-modal');
      refs.body.classList.toggle('hidden');
      return;
    }
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('avtiv-modal');
  }
})();
