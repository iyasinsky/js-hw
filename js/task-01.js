/* 
ЗАДАЧА 12/41: ПІДРАХУНОК ВЛАСТИВОСТЕЙ

Напиши функцію countProps(object),
яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
Функція підраховує тільки власні властивості об'єкта.
*/

function countProps(obj) {
  let propCount = 0;
  // Change code below this line
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      propCount += 1;
    }
  }
  // Change code above this line
  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Poly"}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
