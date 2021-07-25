class Weapon {
  constructor(name) {
    this.weapons = ['Sting', 'Goblin Cleaver', 'Anduril']
    this.name = name || this.weapons[Math.floor(Math.random() * this.weapons.length)]

    if(this.name === 'Sting') {
      this.value = Math.floor(Math.random() * 10 + 13)
    } else if(this.name === 'Goblin Cleaver') {
      this.value = Math.floor(Math.random() * 10 + 23)
      this.weapons.splice(0, 1)
    } else if(this.name === 'Anduril') {
      this.value = Math.floor(Math.random() * 10 + 30)
      this.weapons.splice(0, 1)
    }
  }
}