const Character = require("./Character.js");

class Thief extends Character {
  attack(target) {
    if (this.attackPts > target.defensePts) {
      target.lifePts -= 2 * (this.attackPts - target.defensePts);
      target.lifePts = target.lifePts < 0 ? 0 : target.lifePts;
    }
  }
}

module.exports = Thief;
