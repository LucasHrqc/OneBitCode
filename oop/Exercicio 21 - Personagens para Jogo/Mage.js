const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts, defensePts);
    this.magicPts = magicPts;
  }

  attack(target) {
    if (this.attackPts + this.magicPts > target.defensePts) {
      target.lifePts -= this.attackPts + this.magicPts - target.defensePts;
      target.lifePts = target.lifePts < 0 ? 0 : target.lifePts;
    }
  }

  heal(target) {
    target.lifePts += 2 * this.magicPts;
  }
}

module.exports = Mage;
