/* 
Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.

addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.

removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
*/

class Storage {
  constructor(params = []) {
    this.items = params;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    const itemIndex = this.items.indexOf(itemToRemove);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');

console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
