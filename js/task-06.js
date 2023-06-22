// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', e => {
  const expectedValue = Number(e.currentTarget.dataset.length);
  const currentValue = e.currentTarget.value.length;

  if (expectedValue !== currentValue) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    return;
  }

  inputEl.classList.add('valid');
  inputEl.classList.remove('invalid');
});
