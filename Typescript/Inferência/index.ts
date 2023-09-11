const car = {
    name: 'Fusca',
    speed: 100
}

function accelerateCar(car: { name: string; speed: number; }, speed: number) {
    // autocomplete
    car.speed = speed;
}

accelerateCar(car, 50);