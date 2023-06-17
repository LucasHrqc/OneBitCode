function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.username.value;
  const password = sectionElement.password.value;
  const passwordConfirmation = sectionElement.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} registrado`);
  } else {
    alert(`As senhas não conferem.`);
  }
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

function removeEvent() {
  button.removeEventListener("click", register);
  alert("Evento removido!");
}
