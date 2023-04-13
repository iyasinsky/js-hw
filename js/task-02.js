function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  orderedItems.forEach(element => {
    totalPrice += element;
  });

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); //503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
