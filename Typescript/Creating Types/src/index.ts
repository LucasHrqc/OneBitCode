// let literal: "Hello, World!"
// let pi: 3.13157

// // Creating the types prevents from having a different value.
// literal = "Hi, World"; WRONG

// let option: "Yes" | "No" | "Maybe"
// option = "Yes";
// option = "idk";  WRONG

// let anotherOption: number | boolean
// anotherOption = 1
// anotherOption = false
// anotherOption = "Lucas"; WRONG

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | " Plutão ";

let planet: Planet;

if (planet === "Terra") {
    console.log('Estamos na Terra');
}

let homePlanet: Planet


function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
        console.log('Estamos na Terra');
    }
}

type GreetingCallback = (name: string) => void;

function greet(callbackfn: GreetingCallback) {
    let name = 'Lucas';
    callbackfn(name);
}
