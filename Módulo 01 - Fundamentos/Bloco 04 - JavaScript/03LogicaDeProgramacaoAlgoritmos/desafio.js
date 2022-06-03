/*
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e imprima o resultado na tela..
*/

let contador = 0;
let limite = 10;

for (let index = 0; index <= limite; index += 1) {
    contador = contador + index;
}
console.log(contador)

/*
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que guarde em um array todos os números inteiros ímpares desse intervalo.
Imprima o resultado do array na tela.
*/

let numerosImpares = [];

for (let index = 0; index < 50; index += 1) {
    if (index % 2 !== 0) {
        numerosImpares.push(index);
    }
}

console.log(numerosImpares)

/*
Escreva um algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array).
Encontre e imprima no console a posição index em que o elemento se encontra no array.
Caso não o encontre, imprima a mensagem "Elemento não encontrado"
*/

let array = [1, 3, 5, 7, 9, 11, 13, 15,
    17, 19, 21, 23, 25, 27, 29, 31,
    33, 35, 37, 39, 41, 43, 45, 47,
    49
];

console.table(array)

let elemento = 39;

for (index = 0; index < array.length; index += 1) {
    if (elemento == array[index]) {
        console.log(index)
        break;
    } else if (array.length - 1 == index){
        console.log('elemento não encontrado');
    }
   } 

/*     } else if (array.length -1  == index) {

//array.table
/* if (array.indexOf(elemento)) {
console.log(array.indexOf(elemento))}
else {
    console.log("elemento não encontrado")
} */

//for (let index = 0; index<array.length; )
