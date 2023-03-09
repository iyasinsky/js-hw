/* 
Напиши функцію makeArray(firstArray, secondArray, maxLength)
для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray.
Параметр maxLength містить максимально допустиму довжину нового масиву.

Якщо кількість елементів нового масиву більша за maxLength,
функція повинна повернути копію масиву довжиною maxLength елементів.
В іншому випадку функція повинна повернути новий масив повністю.
*/

// my solution
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray.splice(maxLength);
  }
  return newArray;
}

// ChatGPT solution
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
// }

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); //["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); //["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); //["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); //["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); //[]

