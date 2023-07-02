class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }

  attack(target) {
    if (this.attackPts > target.defensePts) {
      target.lifePts -= this.attackPts - target.defensePts;
      target.lifePts = target.lifePts < 0 ? 0 : target.lifePts;
    }
  }
}

module.exports = Character;
