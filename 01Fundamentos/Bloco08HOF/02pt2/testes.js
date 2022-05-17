function teste1() {
    const students = [{
            name: 'Maria',
            grade: 70,
            approved: ''
        },
        {
            name: 'José',
            grade: 56,
            approved: ''
        },
        {
            name: 'Roberto',
            grade: 90,
            approved: ''
        },
        {
            name: 'Ana',
            grade: 81,
            approved: ''
        },
    ];

    students.forEach((student, index) => student.grade >= 60 ? students[index].approved = 'Aprovado' : students[index].approved = 'Recuperação');

    console.log(students);

    const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
    const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

    console.log(firstMultipleOf5);
    // 50
}

function teste2() {
    const arrayOfValues = ['josé', 50, 0.25, {
        comida: 'Chocolate'
    }];
    arrayOfValues.forEach((element, teste, teste2, teste3) => { //A HOF, pode ser, .find, .some, .every
        console.log('Cada elemento do array:', element, teste, teste2, teste3);
    });

    // Cada elemento do array: josé
    // Cada elemento do array: 50
    // Cada elemento do array: 0.25
    // Cada elemento do array: { comida: 'Chocolate' }
}

function teste3() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const multipliesFor2 = (element) => {
        console.log(`${element} * 2: ${element * 2}`);
    };

    numbers.forEach(multipliesFor2);

}

function teste4() {
    const emailListInData = [
        'roberta@email.com',
        'paulo@email.com',
        'anaroberta@email.com',
        'fabiano@email.com',
    ];

    const showEmailList = (email) => {
        console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
    };

    emailListInData.forEach(showEmailList);
    // Adicione seu código aqui
}

function teste5() {
    // Array que será passado para o .some
    const numbers = [2, 4, 6, 8, 12, 14, 16, 17];

    // Callback que checa se o número é ímpar
    function isOdd(number) {
        return number % 2 !== 0;
    }

    // Função em que passamos o array numbers como parâmetro. Se houver pelo menos um número ímpar, a callback retornará true e a frase "Pelo menos um número é ímpar". Caso contrário, o retorno da callback é false, indicando que não há número ímpar no array.
    checkIsOdd = (array) => {
        if (array.some(isOdd)) { //true or false
            console.log("Pelo menos um número é ímpar")
        } else {
            console.log("Nenhum número é impar")
        }
    };

    checkIsOdd(numbers)

    console.log(numbers.some(isOdd));

}

function teste6() {
    // Array que será passado para o .every
    const numbers = [1, 3, 5, 7, 9, 10];

    // Callback que checa se o número é ímpar
    function isOdd(number) {
        return number % 2 !== 0;
    }

    // Função em que passamos o array numbers como parâmetro. Se todos os números são ímpares, a callback retornará true e a frase "Todos os números são ímpares". Caso contrário, o retorno da callback é false, indicando que há um número par no array.
    checkIsOdd = (array) => {
        if (array.every(isOdd)) {
            console.log("Todos os números são ímpares")
        } else {
            console.log("Pelo menos um número é par")
        }
    };
    checkIsOdd(numbers);
    console.log(numbers.some(isOdd)); //se algum
    console.log(numbers.every(isOdd)); //se todos


}

function paraFixar() {

    const numbers = [19, 21, 30, 3, 45, 22, 15];

    const findDivisibleBy3And5 = (array) => {
        return array.find((number) => number % 3 === 0 && number % 5 === 0)
    }

    console.log(findDivisibleBy3And5(numbers))
}

function paraFixar2() {

    //1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
    const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

    const hasName = (arr, name) => {
        return arr.some((names) => names === name)
    }

    console.log(names.some((x) => x === 'pedro'));
    console.log(hasName(names, 'Ana'))
}

function paraFixar3() {
    //2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

    const people = [{
            name: 'Mateus',
            age: 18
        },
        {
            name: 'José',
            age: 16
        },
        {
            name: 'Ana',
            age: 23
        },
        {
            name: 'Cláudia',
            age: 20
        },
        {
            name: 'Bruna',
            age: 19
        },
    ];

    const verifyAges = (arr, minimumAge) => {
        return arr.every((person) => person.age >= minimumAge)
    }

    console.log(verifyAges(people, 18));

}

function paraFixar4() {
    const people = [
        { name: 'Mateus', age: 18 },
        { name: 'José', age: 16 },
        { name: 'Ana', age: 23 },
        { name: 'Cláudia', age: 20 },
        { name: 'Bruna', age: 19 },
      ];
      
    people.sort((a, b) => a.age - b.age)      
      console.log(people);
}
paraFixar4()