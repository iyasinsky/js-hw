// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]
