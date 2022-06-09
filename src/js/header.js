const throttle = require('lodash.throttle');

const refs = {
  header: document.querySelector('header'),
  body: document.querySelector('body'),
  menu: document.querySelector('.header__menu'),
  end: document.querySelector('.header__menu-end'),
  nav: document.querySelector('#nav'),
  hero: document.querySelector('#hero'),
};

const arr = [];
arr.push(refs.hero);
arr.push(refs.about);
arr.push(refs.cow);
arr.push(refs.product);
arr.push(refs.contact);

refs.menu.addEventListener('click', () => {
  refs.nav.classList.toggle('nav--show');
  refs.body.classList.toggle('hidden');
});

refs.end.addEventListener('click', () => {
  refs.nav.classList.toggle('nav--show');
  refs.body.classList.toggle('hidden');
});

window.addEventListener(
  'scroll',
  throttle(() => {
    if (innerWidth < 1280) {
      return;
    }
    const heroScrol = refs.hero.getBoundingClientRect();
    if (heroScrol.y > -60) {
      refs.header.removeAttribute('style');
      return;
    }
    refs.header.style.backgroundColor = '#00000060';
  }, 500)
);
