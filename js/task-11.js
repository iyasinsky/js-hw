/* 
Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля.
Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
*/

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line

  static checkPrice(price) {
    return price <= Car.#MAX_PRICE
      ? 'Success! Price is within acceptable limits'
      : 'Error! Price exceeds the maximum';
  }

  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
