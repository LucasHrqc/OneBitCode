let run = window.confirm(
  "Bem vindo á calculadora de dano. Confirme para continuar"
);

if (run) {
  let charName = prompt("Digite o nome do personagem:");
  let charAttack = prompt("Digite o poder de ataque do personagem:");
  let defenderName = prompt("Digite o nome do segundo personagem:");
  let defenderLife = prompt("Digite os lifepoints do segundo personagem:");
  let defenderDefense = prompt(
    "Digite o poder de defesa do segundo personagem:"
  );
  let defenderShield = prompt("O personagem possui escudo?");
  let damage = 0;

  console.log(defenderDefense);
  console.log(charAttack);

  if (charAttack > defenderDefense && defenderShield == "Sim") {
    damage = (charAttack - defenderDefense) / 2;
    alert(`O dano causado foi de ${damage} pontos.`);
  } else if (charAttack > defenderDefense && defenderShield == "Não") {
    damage = charAttack - defenderDefense;
    alert(`O dano causado foi de ${damage} pontos.`);
  } else {
    alert(`O dano causado foi de 0 pontos.`);
  }
} else {
  window.close();
}
