module.exports = class Deposit {
  #to;
  #value;
  #createdAt;
  constructor(to, value) {
    this.#to = to;
    this.#value = value;
    this.#createdAt = new Date();
  }
};
