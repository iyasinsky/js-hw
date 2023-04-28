const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};
// console.log(historyService.getOrdersLog()); //повертає рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails()); //повертає масив всіх унікальних поштових адрес з властивості orders
// console.log(historyService.getOrdersByEmail('solomon@topmail.net')); //[{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
console.log(historyService.getOrdersByEmail('artemis@coldmail.net')); //[{ email: "artemis@coldmail.net", dish: "Pizza" }]
