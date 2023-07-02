// const Address = require("./Address");
const Person = require("./Person");

// const addr = new Address("264", 199, "Meia Praia", "Itapema", "SC");
const john = new Person(
  "Lucas Henrique",
  "264",
  199,
  "Meia Praia",
  "Itapema",
  "SC"
);

console.log(john);
console.log(john.address.fullAddress());
