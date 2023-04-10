/* 
Функція addOverNum() рахує суму всіх аргументів.
Зміни параметри і тіло функції addOverNum() таким чином,
щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
Це число повинно бути першим параметром функції.
*/

// Change code below this line
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}


console.log(addOverNum(50, 15, 27));//0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));//71
console.log(addOverNum(15, 32, 6, 13, 19, 8));//51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));//218