document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSession").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert(`A informação salva é: ${info}`);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert(`O texto salvo no local storage é: ${t}`);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");

  const cookie = `info=${input.value};`;
  const expires = `expires=${new Date(2023, 19, 6)};`;
  const path = "path=/;";
  document.cookie = cookie + expires + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");

  const cookie = `text=${input.value};`;
  const expires = `expires=${new Date(2023, 19, 6)};`;
  const path = "path=/;";
  document.cookie = cookie + expires + path;
  input.value = "";
  console.log(document.cookie);
});
