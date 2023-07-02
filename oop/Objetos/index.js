function Car(brand, model, hp, weight) {
  this.brand = brand;
  this.model = model;
  this.hp = hp;
  this.weight = weight;
  this.hpWeigth = function () {
    return this.hp / this.weight;
  };
}

const tela = new Car("Tesla", "Model X", 1200, 800);

console.log(tela);
console.log(tela.hpWeigth());
