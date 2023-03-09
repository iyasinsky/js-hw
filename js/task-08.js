/* 
Доповни код функції createArrayOfNumbers(min, max) таким чином,
щоб вона повертала масив усіх цілих чисел від значення min до max.
В циклі for використовувався метод push.
*/

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));//[1, 2, 3]
console.log(createArrayOfNumbers(14, 17));//[14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34));//[29, 30, 31, 32, 33, 34]
