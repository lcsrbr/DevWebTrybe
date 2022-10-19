function ex1ParaFixarReduce() {
    // console.log(collection.reduce((result, number) => result + number))
    const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

    const func1 = (acc, arr) => {
        if (arr % 2 === 0) {
            acc + arr
        } else {
            arr = 0
        }
        return acc + arr
    }

    const func2 = (array) => array.filter((number) => number % 2 === 0).reduce((currentValue, number) => currentValue + number);

    const func3 = (acc, arr) => (arr % 2 === 0) ? acc + arr : acc

    console.log(numbers.reduce(func1))
    console.log(func2(numbers))
    console.log(numbers.reduce(func3))
}

function ex2() {
    const estudantes = [{
            nome: 'Jorge',
            sobrenome: 'Silva',
            idade: 14,
            turno: 'Manhã',
            materias: [{
                    name: 'Matemática',
                    nota: 67
                },
                {
                    name: 'Português',
                    nota: 79
                },
                {
                    name: 'Química',
                    nota: 70
                },
                {
                    name: 'Biologia',
                    nota: 65
                },
            ],
        },
        {
            nome: 'Mario',
            sobrenome: 'Ferreira',
            idade: 15,
            turno: 'Tarde',
            materias: [{
                    name: 'Matemática',
                    nota: 59
                },
                {
                    name: 'Português',
                    nota: 80
                },
                {
                    name: 'Química',
                    nota: 78
                },
                {
                    name: 'Biologia',
                    nota: 92
                },
            ],
        },
        {
            nome: 'Jorge',
            sobrenome: 'Santos',
            idade: 15,
            turno: 'Manhã',
            materias: [{
                    name: 'Matemática',
                    nota: 76
                },
                {
                    name: 'Português',
                    nota: 90
                },
                {
                    name: 'Química',
                    nota: 70
                },
                {
                    name: 'Biologia',
                    nota: 80
                },
            ],
        },
        {
            nome: 'Maria',
            sobrenome: 'Silveira',
            idade: 14,
            turno: 'Manhã',
            materias: [{
                    name: 'Matemática',
                    nota: 91
                },
                {
                    name: 'Português',
                    nota: 85
                },
                {
                    name: 'Química',
                    nota: 92
                },
                {
                    name: 'Biologia',
                    nota: 90
                },
            ],
        },
        {
            nome: 'Natalia',
            sobrenome: 'Castro',
            idade: 14,
            turno: 'Manhã',
            materias: [{
                    name: 'Matemática',
                    nota: 70
                },
                {
                    name: 'Português',
                    nota: 70
                },
                {
                    name: 'Química',
                    nota: 60
                },
                {
                    name: 'Biologia',
                    nota: 50
                },
            ],
        },
        {
            nome: 'Wilson',
            sobrenome: 'Martins',
            idade: 14,
            turno: 'Manhã',
            materias: [{
                    name: 'Matemática',
                    nota: 80
                },
                {
                    name: 'Português',
                    nota: 82
                },
                {
                    name: 'Química',
                    nota: 79
                },
                {
                    name: 'Biologia',
                    nota: 75
                },
            ],
        },
    ];


const bestNotes = (array) => array.map((pessoa) => ({
    estudante: pessoa.nome,
    melhorNota: pessoa.materias.reduce((acc, materia) => (acc.nota > materia.nota) ?  acc : materia).name
}))

console.log(bestNotes(estudantes));

}

ex2()