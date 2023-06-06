const refs = {
  categories: document.querySelector('#categories'),
  categoriesList: categories.querySelectorAll('.item'),
};

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

displayNumberOfCategories(refs);

function displayNumberOfCategories({ categories }) {
  console.log('Number of categories:', categories.childElementCount);
}

// 2. Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).

displayTitleAndNumberOfItems(refs);

function displayTitleAndNumberOfItems({ categoriesList }) {
  categoriesList.forEach(item => {
    const titleEL = item.querySelector('h2').textContent;
    console.log('Category:', titleEL);

    const numberOfChildEl = item.querySelector('ul').childElementCount;
    console.log('Elements:', numberOfChildEl);
  });
}
