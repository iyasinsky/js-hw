/* 
Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.
Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.
*/
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((acc, el) => (acc += el));

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);
