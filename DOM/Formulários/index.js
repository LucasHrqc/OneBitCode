const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault;
  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const breadType = document.querySelector('input[name="breadType"]').value;
  const main = document.querySelector('input[name="main"]').value;

  const observations = document.querySelector(
    'textarea[name="observations"]'
  ).value;

  let salad = "";
  document.querySelectorAll('input[name="salad"]:checked').forEach((item) => {
    salad += ` - ${item.value} \n`;
  });

  console.log(name);
  console.log(address);
  console.log(breadType);
  console.log(main);
  console.log(observations);
  console.log(salad);
});
