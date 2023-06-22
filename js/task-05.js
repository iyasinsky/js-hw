// 1. Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//    підставляє його поточне значення в span#name - output.
// 2. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  textInput: document.getElementById('name-input'),
  output: document.getElementById('name-output'),
};

const onTextInputChange = event => {
  if (event.currentTarget.value !== '') {
    return (refs.output.textContent = event.currentTarget.value);
  }
  refs.output.textContent = 'Anonymous';
};

refs.textInput.addEventListener('input', onTextInputChange);
