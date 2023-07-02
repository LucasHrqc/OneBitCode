module.exports = class Transfer {
  #fromUser;
  #toUser;
  #value;
  #createdAt;
  constructor(fromUser, toUser, value) {
    this.#fromUser = fromUser;
    this.#toUser = toUser;
    this.#value = value;
    this.#createdAt = new Date();
  }
};
