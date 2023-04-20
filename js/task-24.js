/* 
Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.
*/

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();
console.log(ascendingReleaseDates);

const alphabeticalAuthors = [...authors].sort();
console.log(alphabeticalAuthors);
