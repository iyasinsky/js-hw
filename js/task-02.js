const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listEL = document.getElementById('ingredients');

murkup(ingredients);

function murkup(arr) {
  const elements = arr.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = `${ingredient}`;
    listItemEl.classList.add('item');
    return listItemEl;
  });

  return listEL.append(...elements);
}
