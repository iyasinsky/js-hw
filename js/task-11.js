/* 
Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною,
а в майбутньому, можливо, й іншими характеристиками.
Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.
*/

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    let potionIndex = -1;

    for (const potion of this.potions) {
      if (potion.name === potionName) {
        potionIndex = this.potions.indexOf(potion);
      }
    }

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    let potionIndex = -1;

    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potionIndex = this.potions.indexOf(potion);
        potion.name = newName;
      }
    }

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
  },
  // Change code above this line
};
