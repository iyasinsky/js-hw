/* 
Напиши функцію findLongestWord(string), яка приймає довільний рядок,
що складається тільки зі слів, розділених пробілом (параметр string),
і повертає найдовше слово в цьому рядку.
*/

function findLongestWord(string) {
  const stringArray = string.split(' ');
  let longestWord = stringArray[0];
  for (const word of stringArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// ChatGPT solution
// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));//jumped
console.log(findLongestWord("Google do a roll"));//Google
console.log(findLongestWord("May the force be with you"));//force

