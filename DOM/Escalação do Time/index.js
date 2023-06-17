function addPlayer() {
  const playerPosition = document.getElementById("position").value;
  const playerNumber = document.getElementById("number").value;
  const playerName = document.getElementById("name").value;

  console.log(playerPosition);
  console.log(playerName);
  console.log(playerNumber);

  const playersSection = document.getElementById("players-list");

  const titlePosition = document.createElement("h4");
  titlePosition.innerText = playerPosition;

  const playerUl = document.createElement("ul");
  const playerNameLi = document.createElement("li");
  playerNameLi.innerText = `Nome: ${playerName}`;
  const playerNumberLi = document.createElement("li");
  playerNumberLi.innerText = `Número: ${playerNumber}`;

  playerUl.appendChild(playerNameLi);
  playerUl.appendChild(playerNumberLi);
  playerUl.appendChild(document.createElement("br"));

  playersSection.appendChild(titlePosition);
  playersSection.appendChild(playerUl);
}

function removePlayer() {
  const playersSection = document.getElementById("players-list");

  const titles = document.getElementsByTagName("h4");
  const players = document.getElementsByTagName("ul");

  playersSection.removeChild(titles[titles.length - 1]);
  playersSection.removeChild(players[players.length - 1]);
}
