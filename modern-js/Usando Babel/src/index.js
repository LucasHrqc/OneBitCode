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

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);

  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }

  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  const average = average(firstMedian, secondMedian);

  console.log(`Mediana: ${average}`);
};

const mode = (...numbers) => {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);

  quantities.sort((a, b) => b[1] - a[1]);

  console.log(`Moda: ${quantities}`);
};
