class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("Login realizado com sucesso");
    } else {
      console.log("E-mail ou senha incorretos. Tente novamente!");
    }
  }
}
