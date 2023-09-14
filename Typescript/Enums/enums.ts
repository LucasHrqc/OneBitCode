// Enums são conjuntos de constantes que auxiliam no uso ao longo do código. Enumeram valores

enum Planets {
    MERCURIO,
    VENUS,
    TERRA,
    MARTE
}

enum PlanetsName {
    MERCURIO = 'Mercúrio',
    VENUS = 'Venus',
    TERRA = 'Terra',
    MARTE = 'Marte',
}

Planets.MERCURIO // retorna o valor do índice dentro do ENUM.
PlanetsName.MERCURIO // retorna a string