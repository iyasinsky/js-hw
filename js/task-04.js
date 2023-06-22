// При кліку по кнопці повинні збільшувати або зменшувати його значення на одиницю.
// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//    та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//    Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const onClickDecrementBtn = () => {
  refs.value.textContent = counterValue -= 1;
};

const onClickIncrementBtn = () => {
  refs.value.textContent = counterValue += 1;
};

refs.decrementBtn.addEventListener('click', onClickDecrementBtn);

refs.incrementBtn.addEventListener('click', onClickIncrementBtn);
