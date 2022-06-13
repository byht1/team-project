const refs = {
  btn: document.querySelector('.js-open-menu'),
  textOne: document.querySelector('.js-text-one'),
  textTwo: document.querySelector('.js-text-two'),
};

let a = 0;

refs.btn.addEventListener('click', () => {
  if (a === 0) {
    refs.btn.style.transform = 'rotateY(180deg)';
    a += 1;
  } else {
    refs.btn.style.transform = 'rotateY(0)';
    a -= 1;
  }

  refs.textOne.classList.toggle('імя класа');
  refs.textTwo.classList.toggle('імя класа');
});
