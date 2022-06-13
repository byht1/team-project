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

function backToTop() {
  let a = 0;

  let button = $('.back-to-top');
  $(window).on(
    'scroll',
    throttle(() => {
      if ($(this).scrollTop() >= 50) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
      a += 1;
      console.log('🚀 ~ a', a);
    }, 500)
  );

  button.on('click', () => {
    event.preventDefault();
    $('html').animate({ scrollTop: 0 }, 1000);
  });
}

backToTop();
