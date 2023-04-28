const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

console.log(pizzaPalace.order('Smoked')); //'Order accepted, preparing «Smoked» pizza'
console.log(pizzaPalace.order('Four meats')); //'Order accepted, preparing «Four meats» pizza'
console.log(pizzaPalace.order('Big Mike')); //'Sorry, there is no pizza named «Big Mike»'
console.log(pizzaPalace.order('Viennese')); //'Sorry, there is no pizza named «Viennese»'
