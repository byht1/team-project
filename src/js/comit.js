const refs = {
  //   slikBtn: document.querySelectorAll('.slick-dots'),
  moreOne: document.querySelector('#more-one'),
  moreTextOne: document.querySelector('#more-text-one'),
  buttonOne: document.querySelector('.comit__buttom-one'),
  moreTwo: document.querySelector('#more-two'),
  moreTextTwo: document.querySelector('#more-text-two'),
  buttonTwo: document.querySelector('.comit__buttom-two'),
};

let events = new Event('click');
let x = 0;
let y = 0;

refs.buttonOne.addEventListener('click', () => {
  const slikBtn = document.querySelectorAll('.slick-active');
  if (a === 0) {
    refs.buttonOne.innerHTML = 'Hide';
    a += 1;
  } else {
    refs.buttonOne.innerHTML = 'Show more';
    a -= 1;
  }

  refs.moreTextOne.classList.toggle('visually-hidden');
  refs.moreOne.classList.toggle('visually-hidden');
  slikBtn[1].dispatchEvent(events);
});

refs.buttonTwo.addEventListener('click', () => {
  const slikBtn = document.querySelectorAll('.slick-active');
  if (a === 0) {
    refs.buttonTwo.innerHTML = 'Hide';
    a += 1;
  } else {
    refs.buttonTwo.innerHTML = 'Show more';
    a -= 1;
  }

  refs.moreTextTwo.classList.toggle('visually-hidden');
  refs.moreTwo.classList.toggle('visually-hidden');
  slikBtn[1].dispatchEvent(events);
});
