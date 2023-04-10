/* 
Завдання 20/41

Напиши функцію calculateTotalPrice(productName),
яка приймає один параметр productName - назва товару.
Функція повинна повернути загальну вартість (ціна * кількість) товару
з таким ім'ям з масиву products.
*/

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
  // Change code above this line
}

console.log(calculateTotalPrice("Blaster"));// 0
console.log(calculateTotalPrice("Radar"));// 5200
console.log(calculateTotalPrice("Droid"));// 2800
console.log(calculateTotalPrice("Grip"));// 10800
console.log(calculateTotalPrice("Scanner"));// 8100