const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];
// Change code below this line
const allGenres = books.flatMap(({ genres }) => genres);
const uniqueGenres = allGenres.filter(
  (el, idx, arr) => arr.indexOf(el) === idx,
);

console.log(allGenres);
console.log(uniqueGenres);
// allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
//uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
