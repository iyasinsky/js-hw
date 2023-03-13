/* 
Зробити реверс кожного слова не міняючи порядок слів
*/

// const string = 'Welcome to the future';
// console.log(string.split(' ').reverse().join(' '));

function reverseString(string) {
  let strArr = string.split(' ');
  console.log(strArr);

  const newArr = [];

  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].split('').reverse().join(''));
  }
  return newArr.join(' ');
}

console.log(reverseString('Welcome to the future'));//emocleW ot eht erutuf