/* 
Завдання 17/41

Перебери масив об'єктів colors, використовуючи цикл for...of.
Додай у масив hexColors значення властивостей hex,
а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
*/

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
};

console.log('hexColors:', hexColors);
console.log('rgbColors:', rgbColors);