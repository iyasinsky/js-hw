/* 
Напиши функцію getCommonElements(array1, array2),
яка отримує два масиви довільної довжини в параметри array1 і array2,
і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

В циклі for використовувалися методи includes і push
*/

function getCommonElements(array1, array2) {
  // Change code below this line
  const commonElement = [];
  for (const element of array1) {
    if (array2.includes(element)) {
      commonElement.push(element);
    }
  }
  return commonElement;
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));//[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));//[1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));//[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));//[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));//[]