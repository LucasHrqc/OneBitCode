class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    this.#username = newUsername;
  }

  get username() {
    return this.#username;
  }
}

module.exports = Wallet;
