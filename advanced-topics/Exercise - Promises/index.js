function imc (weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof height !== 'number' || typeof weight !== 'number') {
      reject('Arguments must be a number');
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showImc (weight, height) {
  imc(weight, height).then((res) => {
    console.log(`O resultado do IMC foi de ${res}`);

    if (res < 18.5) console.log('Situação: Magreza');
    else if (res < 25) console.log('Situação: Normal');
    else if (res < 30) console.log('Situação: Sobrepeso');
    else if (res < 40) console.log('Situação: Obesidade');
    else console.log('Situação: Obesidade grave');
  }).catch((error) => {
    console.log(error);
  }).finally()

  console.log('Calculando...');
}


showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "teste")