// Adicionando o ponto de interrogação pra tornar opcional
function sendSpaceship(spaceship: {pilot: string, copilot?: string}) {
    // ...
}

sendSpaceship({pilot: 'Han Solo', copilot: 'Chewbacca'});

sendSpaceship({pilot: 'Lucas'}); // Quando queremos enviar somente um argumento, sendo o segundo não obrigatório é necessário adicionar ? no argumento da função.

// Tipo UNKOWN, podemos utilizar a variável como quisermos, mas não podemos atribuir uma variável unknown à outras tipadas.
// Tipo ANY, podemos utilizar a variável como quisermos.

let input: unknown;

input = 'Olá';
input = 123;