export default function calculate() {
  const resultInput = document.getElementById("result");
  resultInput.value = "Erro!";
  resultInput.classList.add("error");
  const result = eval(input.value); // dangerous
  resultInput.classList.remove("error");
  resultInput.value = result;
}
