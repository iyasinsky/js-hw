/* 
Напиши функцію filterArray(numbers, value),
яка приймає масив чисел (параметр numbers) і повертає новий масив,
в якому будуть тільки ті елементи масиву numbers,
які більші за значення параметра value (число).

В циклі for використовувався метод push
*/

function filterArray(numbers, value) {
   // Change code below this line
  const numbersArray = [];
  for (const number of numbers) {
    if (number > value) {
      numbersArray.push(number)
    }
  }
  return numbersArray;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));//[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4));//[5]
console.log(filterArray([1, 2, 3, 4, 5], 5));//[]
console.log(filterArray([12, 24, 8, 41, 76], 38));//[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));//[24, 41, 76]