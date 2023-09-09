// function asyncSum (a, b) {
//     return new Promise((resolve, reject)  => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('Arguments must be numbers');
//         } else {
//             resolve(a + b);
//         }
//     })
// }

// function asyncSubtract(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject('Arguments must be of type number');
//         } else {
//             resolve(a-b);
//         }
//     })
// }

// const sumResult = asyncSum(50, 33);
// const subResult = asyncSubtract(50, 33);

// // Devolve uma nova promise com o resultado de todas as anteriores.
// Promise.all([sumResult, subResult]).then(results => {
//     console.log(results);
// }).catch(error => {
//     console.log(error);
// });

const numbers = [4, 9, 5, 13, 77];

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        resolve(x * x);
    })
}

// Devolve uma única promise com todos os resultados das promises que retornam do map, pois está lidando com arrow function com o asyncSquare que retorna promise também.
Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares);
});