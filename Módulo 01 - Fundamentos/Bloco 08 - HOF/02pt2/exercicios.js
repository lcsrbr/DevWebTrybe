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

//console.log(books);

function ex1() {
    function authorBornIn1947(array, year) {
        return array.find((id) => id.author.birthYear === year).author.name
    }

    console.log(authorBornIn1947(books, 1947))
}

function ex2() {
    function smallerName(array) {
        nameBook = array[0].name;
        array.forEach(book => {
            if (book.name.length < nameBook.length) {
                nameBook = book.name
            }
        });
        return nameBook;
    }
    console.log(smallerName(books))
}

/* 
function teste() {
    function smallerName(array) {
        let booksLength = []
        array.forEach(book => {
            booksLength.push(book.name.length)
        });
        nameBook = booksLength[0];
        booksLength.forEach(book => {
            if (book < nameBook) {
                nameBook = book
            }
        })
        return nameBook;
    }
    console.log(smallerName(books))
} */

function ex3() {

    const getNamedBook = (array) => {
        return array.find((book) => book.name.length === 26)

    }
    console.log(getNamedBook(books));
}

function ex5() {
    function everyoneWasBornOnSecXX(arr) {
        return arr.every((book) => book.author.birthYear >= 1900 && book.author.birthYear <= 1999)
    }
    console.log(everyoneWasBornOnSecXX(books));
}

function ex6() {
    function someBookWasReleaseOnThe80s(arr) {
        return arr.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
    }
    console.log(someBookWasReleaseOnThe80s(books));
}

function ex7() {
    function authorUnique(arr) {
        return arr.every((book) => book.author.birthYear !== book.author.birthYear)
    }
    console.log(authorUnique(books));
}

ex7()