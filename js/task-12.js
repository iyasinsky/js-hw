/* 
Напиши функцію includes(array, value), яка робить те саме, що і метод масиву includes().

В тілі функції includes() не можна використовувати метод includes.

У функції includes використовується for, return, але не метод масиву includes.
*/

function includes(array, value) {
  // Change code below this line
  for (const number of array) {
    if (number === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));//true
console.log(includes([1, 2, 3, 4, 5], 17));//false
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));//true
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));//false
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));//true
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));//false