const Installment = require("./Installment");

module.exports = class Loan {
  static #interest = 1.05;

  constructor(value, installments) {
    this.value = value;
    this.installments = [];
    for (let i = 0; i < installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#interest) / installments, i)
      );
    }
    this.createdAt = new Date();
  }

  static get interest() {
    return this.#interest;
  }

  static set interest(newPercentage) {
    this.#interest = 1 + newPercentage / 100;
  }
};
