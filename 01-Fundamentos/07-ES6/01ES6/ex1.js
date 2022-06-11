
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b); //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); 

const fatorial = (numero) => {
    let resultado = 1;

    for (let i = 1; i <= numero; i += 1) {
        resultado *= i;
    }
    return resultado;
}

//console.log(fatorial(4));

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(1));


var age = 16;

let teste1 = age > 15 ? "verdadeiro" : "falso";

//console.log(teste1);


/* const longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') => longestWord.split(' ')// retorna 'aconteceu'

 */
/* 
const maiorPalavra = (frase) => {
    let palavras = frase.split(' ')
    let palavra1 = palavras[0]
    let maiorPalavra = '';
    for (let i = 0; i< palavras.length; i += 1) {
        if (palavras[i].length > palavra1.length) {
            palavra1 = palavras[i]
            maiorPalavra = palavras[i]
        }
    }
    return maiorPalavra
}

console.log(`a maior palavra é ${maiorPalavra ('Antônio foi no banheiro e não sabemos o que aconteceu Antônioooo')}`);

 */

const maiorPalavra = frase => frase.split(' ').sort((palavra1, palavra2) => palavra2.length - palavra1.length)[0]

console.log(`a maior palavra é ${maiorPalavra ('Antônio foi no banheiro e não sabemos o que aconteceu Antônioooo')}`);


/* 
let testee = [10,20,30,40]
for (i in testee) { // in de INDICE
    console.log(i);
}

for (i of testee) { // for de CONTEÚDO
    console.log(i);
}
 */

const frase = (nome) => {
    const array = ["Android", "iOS", "Architecture", "Teach", "Run"];
    return `Tryber ${nome} aqui!

    Tudo bem?

    Minhas cinco principais habilidades são: 

    * ${array.join(` 
    
    * `)}

    #goTrybe`
}

console.log(frase(`Lucas`));