/* 
Завдання 18/41

Напиши функцію getProductPrice(productName),
яка приймає один параметр productName - назва продукту.
Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products
і повертає його ціну (властивість price).
Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
*/

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
  // Change code above this line
};

console.log(getProductPrice("Radar"));//1300
console.log(getProductPrice("Grip"));//1200
console.log(getProductPrice("Scanner"));//2700
console.log(getProductPrice("Droid"));//400
console.log(getProductPrice(""));//
console.log(getProductPrice("Engine"));//null