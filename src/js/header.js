const throttle = require('lodash.throttle');

const refs = {
  header: document.querySelector('header'),
  body: document.querySelector('body'),
  menu: document.querySelector('.header__menu'),
  end: document.querySelector('.header__menu-end'),
  nav: document.querySelector('#nav'),
  hero: document.querySelector('#hero'),
  button: document.querySelector('[data-modal-open-two]'),
};

refs.menu.addEventListener('click', () => {
  refs.nav.classList.toggle('nav--show');
  refs.body.classList.toggle('hidden');
  refs.menu.classList.toggle('is-open');
  refs.button.classList.toggle('is-open');
  setTimeout(() => {
    refs.menu.classList.toggle('none');
    refs.button.classList.toggle('none');
  }, 250);
});

refs.end.addEventListener('click', () => {
  refs.menu.classList.toggle('none');
  refs.button.classList.toggle('none');
  refs.nav.classList.toggle('nav--show');
  refs.body.classList.toggle('hidden');
  refs.menu.classList.toggle('is-open');
  refs.button.classList.toggle('is-open');
});

let scrol = 0;

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
    refs.header.style.backgroundColor = 'rgba(212, 20, 67, 0.37)';
  }, 500)
);

$(document).ready(function () {
  $(window).scroll(
    throttle(() => {
      if ($(this).scrollTop() > 100) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
      scrol += 1;
      console.log('🚀 ~ scrol', scrol);
    }, 500)
  );
});
