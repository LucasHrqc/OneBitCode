const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static createUser(email, fullname) {
    const exists = this.#users.find((user) => user.email === email);
    if (!exists) {
      this.#users.push(new User(email, fullname));
    }
  }

  static deposit(email, value) {
    const user = App.findUser(email);
    if (user) {
      const newDeposit = new Deposit(email, value);
      user.account.addDeposit(newDeposit);
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail);
    const toUser = App.findUser(toUserEmail);

    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }

  static loan(email, value, installments) {
    const user = App.findUser(email);
    if (user) {
      const newLoan = new Loan(value, installments);
      user.account.addLoan(newLoan);
    }
  }

  static changeLoanFee(newPercentage) {
    Loan.interest = newPercentage;
  }
};
