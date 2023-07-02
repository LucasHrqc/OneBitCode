const Character = require("./Character.js");
const Thief = require("./Thief.js");
const Mage = require("./Mage.js");
const Warrior = require("./Warrior.js");

const lucas = new Mage("Lucas", 90, 4, 2, 14);
const karol = new Thief("Karol", 140, 22, 8);
const camis = new Warrior("Camila", 200, 30, 10, 5);

console.table({ lucas, karol, camis });

camis.changeRole();
lucas.attack(camis);
karol.attack(lucas);

console.table({ lucas, karol, camis });

camis.changeRole();
camis.attack(karol);
lucas.heal(lucas);

console.table({ lucas, karol, camis });
