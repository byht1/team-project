let open_modal = document.querySelectorAll('.open_modal_about');
let close_modal = document.getElementById('close_modal_about');
let modal = document.getElementById('modal_about');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
  open_modal[i].onclick = function () {
    // клик на открытие
    modal.classList.add('modal_vis'); // добавляем видимость окна
    modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
    body.classList.add('body_block'); // убираем прокрутку
  };
}
close_modal.onclick = function () {
  // клик на закрытие
  modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
  window.setTimeout(function () {
    // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block'); // возвращаем прокрутку
  }, 500);
};
