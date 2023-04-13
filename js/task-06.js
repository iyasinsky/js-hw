const changeEven = (numbers, value) => {
  // Change code below this line
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  const changeArr = [];

  numbers.forEach(number =>
    changeArr.push(number % 2 === 0 ? number + value : number),
  );

  return changeArr;
  // Change code above this line
};

console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //[144, 13, 81, 192, 136, 154]
