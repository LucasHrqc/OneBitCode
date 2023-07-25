module.exports = class Deposit {
  constructor(email, value) {
    this.email = email;
    this.value = value;
    this.createdAt = new Date();
  }
};
