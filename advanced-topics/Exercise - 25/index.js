async function imc(weight, height) {
  if (typeof height !== 'number' || typeof weight !== 'number') {
    return Promise.reject('Arguments must be a number');
  }
  return weight / (height * height);
}

async function showImc(weight, height) {
  try {
    console.log('Calculando');

    const res = await imc(weight, height);

    console.log(`O resultado do IMC foi de ${res}`);

    if (res < 18.5) console.log('Situação: Magreza');
    else if (res < 25) console.log('Situação: Normal');
    else if (res < 30) console.log('Situação: Sobrepeso');
    else if (res < 40) console.log('Situação: Obesidade');
    else console.log('Situação: Obesidade grave');
  } catch (error) {
    console.log(error);
  } 
}


showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "teste")