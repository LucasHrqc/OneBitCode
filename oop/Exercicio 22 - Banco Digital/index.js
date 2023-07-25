const App = require("./App.js");

App.createUser("lucas@email.com", "Lucas Henrique da Costa");
App.createUser("karol@email.com", "Karol da Costa");
App.createUser("camila@email.com", "Camila da Costa");

App.deposit("lucas@email.com", 100);
App.transfer("karol@email.com", "lucas@email.com", 20);

App.changeLoanFee(10);
App.loan("camila@email.com", 2000, 24);

console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("karol@email.com"));
console.log(App.findUser("karol@email.com").account);
console.log(App.findUser("camila@email.com"));
console.log(App.findUser("camila@email.com").account);
