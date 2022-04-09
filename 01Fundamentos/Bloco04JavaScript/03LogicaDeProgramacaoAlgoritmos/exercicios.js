/* 

console.log('crie um algoritmo que retorne o fatorial de 10');


console.log('');
console.log('desenvolva um algoritmo que é capaz de inverter uma palavra.');



console.log('');
console.log('Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.');



console.log('');
console.log('Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50');

console.log('');
console.log('Escreva um algoritmo que imprima os números inteiros do intervalo de 100 a 200 em ordem decrescente..');

let numbers =[]
for (let i = 200; i >= 100; i-= 1) {
    numbers.push (i)
}

console.log(numbers)

console.log('');
console.log('Dada uma lista de números inteiros, escreva um algoritmo que retorne o MENOR número da lista. let numbers = [3, 2, 8, 34, 13, -1, 6, 5]');

let numbersTwo = [3, 2, 8, 34, 13, -1, 6, 5]
let menorNumero = numbersTwo[0];

for (let i = 0; i < numbersTwo.length; i += 1) {
    //menor i
    if (numbersTwo[i] < menorNumero) {
        menorNumero = numbersTwo[i]
    }
}

console.log(menorNumero)
*/
console.log('');
console.log('Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.');

let numbers = [];
let divisiveis = []
for (let i = 2; i <= 150; i += 1) {
    numbers.push(i)
    if (i % 3 == 0) {
        divisiveis.push(i)
    }    
}
console.log(divisiveis.length)
if (divisiveis.length = 50) {
    console.log('secreta')
}
console.log(divisiveis);

// if % 3 == 0