window.confirm("Bem vindo ao teste de velocidade. Confirme para começar!");

if (confirm) {
  let name1 = prompt("Digite o nome do primeiro veículo:");
  let speed1 = prompt("Digite a velocidade:");
  let name2 = prompt("Digite o nome do segundo veículo:");
  let speed2 = prompt("Digite a velocidade:");

  let [fasterName, fasterSpeed] = this.identifyFasterCar(
    name1,
    speed1,
    name2,
    speed2
  );

  if (fasterName && fasterSpeed) {
    window.alert(
      `O veículo ${fasterName} é mais rápido, atingindo ${fasterSpeed} km/h.`
    );
  }
}

function identifyFasterCar(name1, speed1, name2, speed2) {
  if (speed1 == speed2) {
    window.alert("Ambos os veículos possuem a mesma velocidade.");
    return;
  }

  if (speed1 > speed2) {
    return [name1, speed1];
  }

  return [name2, speed2];
}
