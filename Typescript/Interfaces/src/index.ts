interface Car {
    name: string,
    brand: string,
    value: number,
    hp: number
}

interface SportCar extends Car {
    pilot: string,
    races: number
}

interface offRoad extends Car {
    is4x4: boolean
}

let bugatti: SportCar

bugatti.name = "Chiron";
bugatti.brand = "bugatti";
bugatti.value = 3000000;
bugatti.hp = 2000;
bugatti.races = 0;
bugatti.pilot = "Lucas"


class PutToRace implements Car {
    name: string
    brand: string
    value: number
    hp: number

    constructor(name: string, brand: string, value: number, hp: number) {
        this.name = name;
        this.brand = brand;
        this.value = value;
        this.hp = hp;
    }
    //...
}