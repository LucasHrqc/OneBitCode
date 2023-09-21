interface Ship {
    name: string
    pilot: string
  }
  
  interface Fighter extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }
  
  /* 
    Tipos genéricos são utilizados para que a função consiga inferir o tipo pelo próprio parâmetro. 
    Dessa forma, ao passar um parâmetro tipado, a função poderá inferir propriedades do tipo dele, seja qual for.

    É importante ressaltar que, é necessário informar ou estender uma interface com todas as propriedades 
    do parâmetro utilizadas pela função, pois como é genérico, a função precisa garantir que ao menos as propriedades acessadas 
    estarão presentes no tipo genérico.

    No caso abaixo, extends Ship que contém as propriedades 'name' e 'pilot' do parâmetro 'ship'. Assim a função
    saberá que independente do tipo do parâmetro passado a ela, deverá conter name e pilot.
  */
  function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
  // A cópia funciona, porém a tipagem está incorreta
  // pois a ambas é atribuido o tipo Ship, sendo que xWing é tipo Fighter
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')




  interface EnemyShip {
    name: string
    pilot: string
    flag?: string // A propriedade é opcional para evitar erros
  }
  
  // O tipo Ship não estaria correto aqui, pois tá vindo como Ship.
  const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
  // Mas podemos explicitamente passar o tipo para a função
  // e agora temos o tipo EnemyShip atribuido corretamente
  const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')
  
  // Aqui temos um erro por conta do tipo Ship
  enemyCopy.flag = 'Imperial'
  // Já aqui temos a propriedade opcional flag
  enemyCopy2.flag = 'Imperial'