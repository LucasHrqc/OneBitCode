async function asyncSum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return Promise.reject('Arguments must be of type number');
  }
  return a + b;
}

// async function execute() {
//     asyncSum(55, 33).then(result => {
//         console.log(result);
//     })
// }

async function execute() {
  // Utiliza try e catch pra lidar com os erros das promises em await.
  try {
    // Trava o código seguinte esperando pela promise.
    const result = await asyncSum(50, 33);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

execute();