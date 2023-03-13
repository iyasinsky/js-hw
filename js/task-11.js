/* 
Напиши функцію getEvenNumbers(start, end),
яка повертає масив усіх парних чисел від start до end.
Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
*/

function getEvenNumbers(start, end) {
  // Change code below this line
  const numbersArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      continue
    }
    numbersArray.push(i)
    
    // Change code above this line
  }
  return numbersArray;
}

console.log(getEvenNumbers(2, 5));//[2, 4]
console.log(getEvenNumbers(3, 11));//[4, 6, 8, 10]
console.log(getEvenNumbers(6, 12));//[6, 8, 10, 12]
console.log(getEvenNumbers(8, 8));//[8]
console.log(getEvenNumbers(7, 7));//[]