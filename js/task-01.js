/* 
Напиши скрипт який рахує суму всіх кратних чисел в масиві
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
console.log(numbers);

let total = 0;

for (const number of numbers) {
  if (number % 2 !== 0)
    continue;

  total += number;
}

console.log(total);