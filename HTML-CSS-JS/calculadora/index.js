window.confirm(
  "Bem vindo à calculadora mais bizarra do mundo! Confirme para iniciar as contas."
);

if (confirm) {
  let first = prompt("Digite o primeiro número:");
  let second = prompt("Digite o segundo número:");

  let sum = Number(first) + Number(second);
  let sub = first - second;
  let mult = first * second;
  let div = second !== 0 ? first / second : 0;

  window.alert(
    `Resultados: \n A soma é: ${sum}. \n A subtração é: ${sub}. \n A multiplicação é: ${mult}. \n A divisão é: ${div}.`
  );
}
