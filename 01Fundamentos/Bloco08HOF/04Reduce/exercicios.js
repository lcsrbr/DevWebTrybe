function ex1() {
    //1 - Dada uma matriz, transforme em um array.
    const arrays = [
        ['1', '2', '3'],
        [true],
        [4, 5, 6],
    ];

    function flatten(array) {
        return array.reduce((acc, arr) => acc.concat(arr))
    }
    console.log(flatten(arrays));
}

const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

function ex2() {
    function reduceNames(param) {
        const names = param.reduce((acc, cur, index, array) => {
            if (index === array.length - 1) return `${acc} ${cur.author.name}.`;
            return `${acc} ${cur.author.name},`;
        }, '');
        return names.trim();
    }
    console.log(reduceNames(books));
}

function ex3() {
    //🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
    //expectedResult = 43;

    function averageAge(arr) {
        // escreva seu código aqui
        return arr.reduce((acc, cur) => (acc + (cur.releaseYear - cur.author.birthYear)), 0) / arr.length
    }
    console.log(averageAge(books));
}

function ex4() {
    //🚀 4- Encontre o livro com o maior nome.
    //const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
    function longestNamedBook() {
        return books.reduce((acc, cur) => ((acc.name.length > cur.name.length) ? acc : cur))
    }
    console.log(longestNamedBook());
    //longestNamedBook()
}

function ex5() {
    //🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra (a) maiúscula ou minúscula.
    const names = [
        'Aanemarie', 'Adervandes', 'Akifusa',
        'Abegildo', 'Adicellia', 'Aladonata',
        'Abeladerco', 'Adieidy', 'Alarucha',
    ];

    function containsA(array) {
        return (array.reduce((acc, cur) => acc + cur).toString().toLowerCase().split('')).reduce((acc, cur) => ((cur === 'a') ? acc += 1 : acc += 0), 0)
    }

    console.log(containsA(names));
}

function ex6() {
    //🚀 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.


    const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
    const grades = [
        [9, 8, 10, 7, 5],
        [10, 9, 9, 10, 8],
        [10, 7, 10, 8, 9]
    ];
    /* 
        console.log(grades.map((notas, indice, array) => array[indice].reduce((acc, cur) => ((acc + cur)), 0) / notas.length))
        const obj = {
            name: students.reduce((acc, cur) => cur),
            average: grades.reduce((acc, cur) => (acc + cur, 0) / grades.length)
        } */
    function studentAverage() {
        return students.map((name, index) => ({
            nome: name,
            average: (grades[index].reduce((acc, curr) => acc + curr, 0) / cur.length),
        }))
    }

    console.log(studentAverage());
}

ex6()