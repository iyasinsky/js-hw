/* 
Використовуючи метод filter(), доповни код таким чином, щоб:

У змінній topRatedBooks утворився масив книг,
рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.

У змінній booksByAuthor утворився масив книг,
написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

*/
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
  },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';
// Change code below this line

const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);
