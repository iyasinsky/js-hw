/* 
Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number)
і повертає суму всіх цілих чисел від одиниці і до цього числа.
Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
*/

function calculateTotal(number) {
 // Change code below this line
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;

  // Change code above this line
}

console.log(calculateTotal(1));//1
console.log(calculateTotal(3));//6
console.log(calculateTotal(7));//28
console.log(calculateTotal(18));//171
console.log(calculateTotal(24));//300
console.log(calculateTotal());