/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// змінні
const min = 0;
const max = 5;
let total = 0;

// for від min до max з кроком в 1
for (let i = min; i <= max; i += 1) {
  // провіряємо на залишок від ділення
  if (i % 2 !== 0) {
    // console.log('Не кратне: ', i);
    continue;
  }

  // записуємо в сумму
  console.log('кратне: ', i);
  total += i;

  // аналог +=
  // total = total + i;
}

console.log('total: ', total);