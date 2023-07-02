const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.role = "attack";
  }

  attack(target) {
    if (this.role === "attack") {
      super.attack(target);
    }
  }

  changeRole() {
    this.role = this.role === "attack" ? "defense" : "attack";
    if (this.role === "attack") {
      this.defensePts -= this.shieldPts;
    } else {
      this.defensePts += this.shieldPts;
    }
  }
}

module.exports = Warrior;
