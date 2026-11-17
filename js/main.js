// Простая проверка заявки и модальное окно подтверждения
const form = document.querySelector('#order-form');
const dialog = document.querySelector('#order-dialog');
if (form && dialog) {
  const product = new URLSearchParams(window.location.search).get('product');
  const select = document.querySelector('#order-product');
  if (product && [...select.options].some(option => option.value === product)) {
    select.value = product;
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    dialog.showModal();
  });
  document.querySelector('#close-dialog').addEventListener('click', function () {
    dialog.close();
    form.reset();
  });
}
