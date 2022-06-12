const refs = {
  sction: document.querySelector('#products'),
};
let card = null;
let cards = null;
let a = 0;

refs.sction.addEventListener('click', event => {
  const name = event.target.nodeName;
  console.log('🚀 ~ name', name);

  if (name !== 'BUTTON' && name !== 'svg') {
    if (a > 0) {
      flipEnd();
      classRemove();
    }
    return;
  }

  const eve = event.target.closest('.card');
  const activElement = document.querySelector('.activ-card');

  if (activElement) {
    flipEnd();
    classRemove();
  }

  a = 1;

  cards = eve;
  card = eve.children;
  eve.classList.add('activ-card');
  card[0].style.transform = 'rotateY(180deg)';
  card[1].style.transform = 'rotateY(360deg)';

  function classRemove() {
    cards.classList.remove('activ-card');
  }
});

function flipEnd() {
  card[0].style.transform = 'rotateY(0deg)';
  card[1].style.transform = 'rotateY(180deg)';
  card[0].classList.remove('activ-card');
}
