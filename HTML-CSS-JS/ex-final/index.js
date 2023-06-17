let roles = [];

function listRoles() {
  console.log(roles);
  const list = roles.reduce((acc, role, index) => {
    console.log(role);
    console.log(role.candidates.length);
    acc += `\n ${index}. Vaga: ${role.name} Candidatos: ${role.candidates.length}`;
    return acc;
  }, "");

  alert(list);
}

function createRole() {
  let name = prompt("Digite o nome da vaga:");
  let description = prompt("Digite a descrição da vaga:");
  let limitDate = prompt("Digite a data limite para a vaga (dd/mm/yyyy):");
  let confirmRole = window.confirm(
    `Confirmar criação da vaga? \n Nome: ${name} \n Descrição: ${description} \n Data Limite: ${limitDate}`
  );

  if (confirmRole) {
    roles.push({
      name,
      description,
      limitDate,
      candidates: [],
    });
    alert("Vaga Criada");
  }
}

function showMenu() {
  return parseFloat(
    window.prompt(
      "Cadastro de vagas de emprego: \n\n" +
        "Escolha a ação desejada:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um candidato em uma vaga" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair \n"
    )
  );
}

function showRole() {
  const index = prompt("Informe o índice da vaga que deseja visualizar:");
  const role = roles[index];

  const roleList = role.candidates.reduce((acc, candidate) => {
    return acc + "\n - " + candidate;
  }, "");

  alert(
    `Vaga: ${index} \n Nome: ${role.name} \n Descrição: ${role.description} \n Data Limite ${role.limitDate} \n Quantidade de Candidatos: ${role.candidates.length} \n Candidatos inscritos: ${roleList}`
  );
}

function subscribeCandidate() {
  const candidate = prompt("Digite o nome do candidato a ser cadastrado:");
  const index = prompt(
    "Digite o índice da vaga que deseja cadastrar o candidato:"
  );
  const role = roles[index];

  const confirm = window.confirm(
    `Confirmar cadastro do candidato ${candidate} na vaga ${role.name}?\n Nome: ${role.name} \n Descrição ${role.description} \n Data Limite ${role.limitDate}`
  );

  if (confirm) {
    role.candidates.push(candidate);
    alert("Inscrição realizada!");
  }
}

function deleteRole() {
  const index = prompt("Informe o índice da vaga que deseja excluir:");
  const role = roles[index];

  const confirm = window.confirm(
    `Realmente deseja excluir a seguinte vaga?\n Índice: ${index} \n Nome: ${role.name} \n Description ${role.description} \n Data Limite: ${role.limitDate} \n Candidatos: ${role.candidates.length}`
  );

  if (confirm) {
    roles.splice(index, 1);
    alert("Vaga removida!");
  }
}

function runSystem() {
  let option = "";

  do {
    option = showMenu();

    switch (option) {
      case 1:
        listRoles();
        break;
      case 2:
        createRole();
        break;
      case 3:
        showRole();
        break;
      case 4:
        subscribeCandidate();
        break;
      case 5:
        deleteRole();
        break;
      case 6:
        alert("Saindo...");
        break;
      default:
        alert("Opção Inválida");
    }
  } while (option != 6);
}

runSystem();
