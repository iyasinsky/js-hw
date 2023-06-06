// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const rangeInput = document.querySelector('#font-size-control');

rangeInput.addEventListener('input', () => {
  const textEl = document.querySelector('#text');

  textEl.style.fontSize = `${rangeInput.value}px`;
});
