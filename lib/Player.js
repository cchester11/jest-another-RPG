const Potion = require ('../lib/Potion');
const { prototype } = require('./Character').default;

class Player {
  constructor(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
  }
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }
  addPotion(potion) {
    this.inventory.push(potion);
  }
  usePotion(index) {
    /////////////////////////////////removing potion at index 1 and placing at 0 in a new index
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.health += potion.value;
        break;
    }
  }
};

//Placing the character prototypes into the function (why are we requiring it then?)
Player.prototype = Object.create(prototype);





module.exports = Player;