/* 
Оголошена функція calculateEngravingPrice(message, pricePerWord).
Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message)
та ціну гравірування одного слова (параметр pricePerWord).

Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
*/

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); //50
console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100
console.log(calculateEngravingPrice("Web-development is creative work", 40)); //160
console.log(calculateEngravingPrice("Web-development is creative work", 20)); //80