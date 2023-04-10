/* 
Доповни метод updateBook(oldName, newName) таким чином,
щоб він змінював назву книги з oldName на newName у властивості books.
Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
і splice() для того, щоб замінити цей елемент.
*/

const bookShelf = {
  books: ['book-1', 'book-2', 'book-3', 'book-4'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1, newName);
    };
  },
};


console.table(bookShelf.books);

bookShelf.updateBook('book-8', 'book-5');//['book-1', 'book-2', 'book-3', 'book-4']
console.log(bookShelf.books);

bookShelf.updateBook('book-2', 'book-5');
console.log(bookShelf.books);//['book-1', 'book-5', 'book-3', 'book-4']

