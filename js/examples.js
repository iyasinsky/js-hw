/* 
function checkForSpam(message) {
  let result;
  const normalizedMessage = message.toLowerCase();
  result = normalizedMessage.includes('spam') || normalizedMessage.includes('sale');

  return result;
}

console.log(checkForSpam("Latest technology news"));//false
console.log(checkForSpam("JavaScript weekly newsletter"));//false
console.log(checkForSpam("Get best sale offers now!"));//true
console.log(checkForSpam("Amazing SalE, only tonight!"));//true
console.log(checkForSpam("Trust me, this is not a spam message"));//true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));//true
console.log(checkForSpam("[SPAM] How to earn fast money?"));//true
 */




// const age = ' 20 ';
// const accessAllowed = age > 18;
// console.log(accessAllowed);


// const age = 200;

// const message =
//   (age < 3) ? 'Привіт, крихітко!' :
//     (age < 18) ? 'Вітаю!' :
//       (age < 100) ? 'Моє шанування!' :
//         'Який незвичайний вік!';

// console.log(message);

// const variable = prompt('Введіть число', '1');
// if (variable >= 1) {
//   console.log('Додатнє значення');
// } else if (variable < 0) {
//   console.log('Відємне значення');
// } else {
//   console.log('Ви ввели 0');
// }


/* 
// Які результати цих виразів?
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(typeof undefined + 1);
console.log(" \t \n" - 2);
 */

/* 
// Які кінцеві значення всіх змінних a, b, c та d після виконання коду нижче?
let a = 3, b = 2;
const c = ++a;
const d = b++;
console.log(a); //4
console.log(b); //3
console.log(c); //4
console.log(d); //2
 */

/* 
// Які значення мають q та x після виконання коду нижче?
let q = 2;
let x = 1 + (q *= 2);
console.log(q); //4
console.log(x); //5
 */