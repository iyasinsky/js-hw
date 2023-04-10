/* 
Напиши функцію getAllPropValues(propName),
яка приймає один параметр propName - ім'я (ключ) властивості.
Функція повинна повернути масив всіх значень властивості з таким ім'ям
з кожного об'єкта в масиві products.
Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
*/


const products = [
  { name: "Radar1", price: 1300, quantity: 4 },
  { name: "Scanner2", price: 2700, quantity: 3 },
  { name: "Droid3", price: 400, quantity: 7 },
  { name: "Grip4", price: 1200, quantity: 9 },
];

// function getAllPropValues(propName) {
//   // Change code below this line]
//   const values = [];
//   for (const product of products) {
//     if (Object.hasOwn(product, propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
//   // Change code above this line
// }


function getAllPropValues(propName) {
  // Change code below this line]
  const values = [];
  if (Object.hasOwn(products[0], propName)) {
    for (const product of products) {
    values.push(product[propName]);
    }
  }
  return values;
  // Change code above this line
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues('category'));
console.log(getAllPropValues(''));