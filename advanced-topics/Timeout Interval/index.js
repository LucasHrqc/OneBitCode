// console.log('Iniciado');

// setTimeout(() => {
//   console.log('Estou executando')
// }, 1000 * 3);

let seconds = 0;
const intervalId = setInterval(() => {
  if (seconds > 10) {
    clearInterval(intervalId);
  }
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);
}, 1000 * 3);