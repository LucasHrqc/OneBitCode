class Account {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  fetchBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return `Saldo de: R$${this.#balance.toFixed(2)}`;
    } else {
      return "Login Inválido";
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "lucas@gmail.com",
  password: "123456",
};

const myAccount = new Account(user);

console.log(myAccount);

// To avoid this and turn this impossible, you need to add # before the property inside the class or inside the class constructor.
// myAccount.password = "batatinha";
// myAccount.balance = 100000;

console.log(myAccount);
console.log(myAccount.fetchBalance(user.email, user.password));
