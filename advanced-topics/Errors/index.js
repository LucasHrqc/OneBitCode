function sum(a,b) {
  const firstNum = Number(a);
  const secondNum = Number(b);

  if (isNaN(firstNum) || isNaN(secondNum)) {
   throw new Error('Arguments must be two numbers');
  }

  return firstNum + secondNum;
}

try {
  console.log(sum(2, 9));
console.log(sum(true, 14));
console.log(sum(undefined, 22));
} catch (error) {
  console.log("An error occurred");
  console.log(error);
}

