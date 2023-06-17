const start = window.confirm(
  "Bem vindo ao consultório X. Confirme para agendar o atendimento."
);

if (start) {
  let pacients = [];
  let schedule = "Não há pacientes em espera.";

  let option = prompt(
    `Abaixo segue a lista de pacientes: \n ${schedule} \n\n Selecione uma das opções para prosseguir: \n 1. Novo Paciente \n 2. Consultar paciente \n 3. Sair`
  );

  while (option != 3) {
    schedule = "";

    if (option == 1) {
      let addPacient = prompt("Digite o nome do paciente: ");
      pacients.length == 0
        ? (pacients[0] = addPacient)
        : pacients.push(addPacient);
    }

    if (option == 2) {
      let removePacient = prompt(
        "Digite o nome do paciente que será atendido:"
      );
      pacients = pacients.filter((pacient) => pacient != removePacient);
    }

    pacients.forEach((pacient, index) => {
      schedule += `${index + 1}° ${pacient} \n`;
    });

    option = prompt(
      `Abaixo segue a lista de pacientes: \n ${schedule} \n\n Selecione uma das opções para prosseguir: \n 1. Novo Paciente \n 2. Consultar paciente \n 3. Sair`
    );
  }
}
