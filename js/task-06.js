/* 
Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу,
для читання і зміни цієї властивості.

getBrand() - повертає значення приватної властивості brand.

changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
*/
class Car {
  // Change code below this line
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
  // Change code above this line
}

console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); //{ model: "Q3", price: 36000 }
new Car({ brand: 'bmw', model: 'X5', price: 58900 }); //{ model: "X5", price: 58900 }
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); //{ model: "Murano", price: 31700 }
