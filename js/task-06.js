// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// const inputEl = document.querySelector('#validation-input');

// const onInputElChange = event => {
//   const datasetLength = Number(event.currentTarget.dataset.length);

//   const currentValueLength = event.currentTarget.value.length;

//   if (datasetLength !== currentValueLength && currentValueLength !== 0) {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//     return;
//   }

//   if (datasetLength === currentValueLength) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//     return;
//   }
//   inputEl.classList.remove('valid');
//   inputEl.classList.remove('invalid');
// };

// inputEl.addEventListener('blur', onInputElChange);

const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  const expectedLength = input.getAttribute('data-length');
  const enteredValue = input.value;

  if (enteredValue.length === parseInt(expectedLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
