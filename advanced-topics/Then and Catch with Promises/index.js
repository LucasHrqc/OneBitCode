function execute() {
  return new Promise((resolve, reject) => {
    console.log('Executando a Promise');
    setTimeout(() => {
      console.log('Resolvendo a promise');
      resolve('Resultado');
    }, 500);
  })
}

const p = execute()

console.log(p);

p.then((response) => {
  console.log('A promise foi resolvida, resultado é ' + response);
})