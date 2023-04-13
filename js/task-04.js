function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]
console.log(
  getCommonElements(
    [
      13, 9, 11, 11, 24, 19, 12, 6, 18, 20, 8, 9, 19, 16, 6, 6, 24, 17, 11, 9,
      5, 6, 22,
    ],
    [
      13, 23, 18, 23, 14, 14, 23, 21, 14, 21, 22, 21, 6, 12, 9, 13, 19, 9, 15,
      12, 12, 17, 11,
    ],
  ),
); //[13,9,11,11,19,12,6,18,9,19,6,6,17,11,9,6,22]
