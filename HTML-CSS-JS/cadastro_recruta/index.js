let confirm = window.confirm(
  "Você será guiado para preencher o cadastro de recruta"
);
if (confirm) {
  let name = prompt("Primeiro, digite nome do recruta:");
  let lastName = prompt("Sobrenome:");
  let study = prompt("Campo de estudo:");
  let birthYear = prompt("Ano de nascimento:");
  let years = new Date().getFullYear() - birthYear;
  console.log(name);
  console.log(lastName);
  console.log(study);
  console.log(years);
  window.confirm(
    `${name}${lastName}, Idade: ${years}, Área de estudo: ${study}`
  );
}
