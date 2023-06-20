function average(...numbers) {
  const sum = numbers.reduce((acc, number) => {
    acc += number;
    return acc;
  }, 0);
  const result = sum / numbers.length;

  console.log(`
  Média aritmética: ${result}`);
}

function weightAverage(...entries) {
  const sum = entries.reduce((acc, entry) => {
    acc += entry.value * entry.weight;
    return acc;
  }, 0);

  const weightSum = entries.reduce((acc, entry) => {
    acc += entry.weight;
    return acc;
  }, 0);

  const result = sum / weightSum;

  console.log(`
  Média Ponderada: ${result}
  `);
}
