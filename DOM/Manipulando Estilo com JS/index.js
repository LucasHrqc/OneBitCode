function useLightTheme() {
  document.body.style.color = "#212429";
  document.body.style.backgroundColor = "#f1f5f9";
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212429";
}

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("lightBtn").addEventListener("click", useLightTheme);
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);
