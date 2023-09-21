function first(array) {
    return array[0];
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
    return array[array.length - 1];
}

const pilots = ['Testing', 'Eu', 'Sou', 'A', 'Lei'];

const firstPilot = first(pilots);
const lastPilot = last(pilots);