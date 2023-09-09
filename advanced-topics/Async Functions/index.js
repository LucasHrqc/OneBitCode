async function asyncSum (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments must be of type number');
    }
    return a + b;
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments must be of type number');
    }
    return a - b;
}

const sumResult = asyncSum(50, 33);
const subResult = asyncSubtract(50, 33);

// Devolve uma nova promise com o resultado de todas as anteriores.
Promise.all([sumResult, subResult]).then(results => {
    console.log(results);
}).catch(error => {
    console.log(error);
});