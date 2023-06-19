const towns = ["Itapema", "Balneário Camboriú", "Florianópolis", "Chapecó"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns; // Doesn't apply the copy properly

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Blumenau");

console.log(towns);
console.log(townsCopy);

const townsClone = [...towns];
townsClone.push("Navegantes");

console.log(townsClone);
