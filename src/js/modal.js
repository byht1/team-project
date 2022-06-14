(() => {
  const refs = {
    body: document.querySelector('body'),
    openModalBtnOne: document.querySelector('[data-modal-open-one]'),
    openModalBtnTwo: document.querySelector('[data-modal-open-two]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtnOne.addEventListener('click', toggleModal);
  refs.openModalBtnTwo.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('hidden');
  }
})();
