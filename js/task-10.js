const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('input');

createButton.addEventListener('click', () => {
  createBoxes(input.valueAsNumber);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  if (amount < input.min || amount > input.max || isNaN(amount)) {
    alert('Введіть число від 1 до 100.');
    input.value = '';
    return;
  }

  const fragment = document.createDocumentFragment();

  let step = 0;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + step}px`;
    box.style.height = `${30 + step}px`;
    box.style.backgroundColor = getRandomHexColor();
    step += 10;

    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
