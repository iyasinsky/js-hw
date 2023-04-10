const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex !== -1) {
      this.potions.splice(potionIndex, 1, newName);
    }
    // Change code above this line
  },
};

console.table(atTheOldToad.potions);

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
//["Speed potion", "Polymorth", "Stone skin"]
console.log(atTheOldToad.potions);

atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
//["Speed potion", "Polymorth", "Invisibility"]
console.log(atTheOldToad.potions);
