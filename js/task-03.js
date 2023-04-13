function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]
