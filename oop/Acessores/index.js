const Wallet = require("./Wallet.js");

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Lucas";

console.log(myWallet.username);
