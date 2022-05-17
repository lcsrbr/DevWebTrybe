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

//🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function ex1() {
    const formatedBookNames = (obj) => obj.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
    console.log(formatedBookNames(books));
}

function ex2() {
    //🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

    function nameAndAge(arr) {

        return arr.map((book) => ({
            age: book.releaseYear - book.author.birthYear,
            author: book.author.name
        })).sort((a, b) => a.age - b.age)

    }
    console.log((nameAndAge(books)));
}

function ex3 () {
    //🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
    function fantasyOrScienceFiction(arr) {
       return arr.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
      }
      console.log(fantasyOrScienceFiction(books));
}

function ex4() {
    //🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

    function oldBooksOrdered(arr) {
        return arr.filter((book) => 2022 - book.releaseYear >= 60).sort((a, b) => a.releaseYear - b.releaseYear)
    }
    console.log(oldBooksOrdered(books));
}

function ex5 () {
    //🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
    function fantasyOrScienceFictionAuthors(arr) {
        // escreva seu código aqui
        return arr.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => book.author.name).sort()
      }
      console.log(fantasyOrScienceFictionAuthors(books));

}

function ex6() {
    function oldBooks(arr) {
        return arr.filter((book) => 2022 - book.releaseYear >= 60).map((book) => book.name).sort()
    }
    console.log(oldBooks(books));
}

function ex7() {
    function authorWith3DotsOnName(arr) {
        return arr.filter((book) => book.author.name[1] === '.' && book.author.name[4] === '.' &&book.author.name[7] === '.' )[0].name
    }
    console.log(authorWith3DotsOnName(books));
}
ex7()