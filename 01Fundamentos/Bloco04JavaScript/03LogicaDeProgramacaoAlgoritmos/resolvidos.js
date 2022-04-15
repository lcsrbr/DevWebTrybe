
/* 
console.log('crie um algoritmo que retorne o fatorial de 10');

let fatorial = 10;
let tabela = [];
let resultado = fatorial;
for (let index = 1; index < fatorial; index += 1) {

    resultado *= index;
    tabela.push(resultado)
}
console.log(resultado);
console.table(tabela)
 */

/* console.log('');
console.log('Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.');

let word = 'tryber';
let invert = ''; */
//rebyrt

/*     for (let i = 0; i < word.length; i += 1) {
        invert += word[word.length -i - 1] ;
    }
    console.log(invert);

    console.log('');
    console.log('Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.');
     */

    let array = ['java', 'javascript', 'python', 'html', 'css'];

    let biggestWord = array[0];
    let smallestWord = array[0];
    
    for (let index = 0; index < array.length; index += 1) {
      if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
      }
    }
    
    for (let index = 0; index < array.length; index += 1) {
      if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
      }
    }
    
    console.log(biggestWord);
    console.log(smallestWord);

    
/*     let array = ['java', 'javascript', 'python', 'html', 'css'];
    let maiorPalavra = '';
    let menorPalavra = '';

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > i.length) {
            maiorPalavra = i;
        }
    }

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < array) {
            //menorPalavra.push(array[i])
        }
    }

console.log(maiorPalavra)
console.log(menorPalavra) */

/* 

codewars
beecrowd

for a > h
for 1 > 8 */

//numero primo entre 1 e 50

let numeros = [];
let numerosPrimos = 0;


for (i = 0; i <= 50; i += 1) {
    numeros.push(i)
}
console.log(numeros)

for (i=0; i < numeros ; i += 1) {
    if (numeros[i] % i === 0){
        numerosPrimos = numeros[i]
    }
}


console.log(numeros)
console.log(numerosPrimos)