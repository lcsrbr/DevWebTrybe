console.log("");
console.log("Obtenha o valor *Serviços* do array menu :");


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);

//
console.log("");
console.log("Procure o índice do valor *Portfólio* do array menu :");


let indexOfPortfolio = menu.indexOf('Portfólio');;

console.log(indexOfPortfolio);

console.log("")
console.log("Adicione o valor *Contato* no final do array menu :")

menu.push('Contato');

console.log(menu);


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//
console.log("")
console.log("Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;")
for (let number of numbers) {
    console.log(number);
}
console.log("")
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

console.log("")
console.log("Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;")

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers2.length; index += 1) {
    soma += numbers2[index];
}
console.log(soma);

console.log("")
console.log("Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;")

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers3.length; index += 1) {
    soma += numbers3[index];
}

mediaAritmetica = soma / numbers3.length;

console.log(mediaAritmetica);

console.log("")
console.log("Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: valor maior que 20. Caso não seja, imprima a mensagem: valor menor ou igual a 20")

if (soma = 20) {
    console.log("valor maior que 20.")
} else {
    console.log("valor menor ou igual a 20")
}

console.log("")
console.log("Utilizando for , descubra qual o maior valor contido no array e imprima-o;")

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = 0;
for (let index = 0; index < numbers4.length; index += 1) {
    if (numbers4[index] > maiorNumero) {
        maiorNumero = numbers4[index];
    } else {
        false
    }
}
console.log(maiorNumero)

console.log("")
console.log("Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: nenhum valor ímpar encontrado")

let numerosImpares = [];
let numerosPares = [];

let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers5.length; index += 1) {
    if ((numbers5[index]) % 2 == 0) {
        numerosPares.push(numbers5[index])
    } else {
        numerosImpares.push(numbers5[index])
    }
}
if (numerosImpares.length == 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(numerosImpares, numerosImpares.length);
}

console.log("")
console.log("//Utilizando for , descubra qual o menor valor contido no array e imprima-o;")

let numbers6 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers6[0];
for (let index = 0; index < numbers6.length; index += 1) {
    if (numbers6[index] < menorNumero) {
        menorNumero = numbers6[index];
    } else {
        false
    }
}
console.log(menorNumero)

console.log("")
console.log("Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;")

let umAoVinteCinco = [];
    for (let index = 1; index<=25; index += 1) {
        umAoVinteCinco.push(index);
    }

console.log(umAoVinteCinco)

console.log("")
console.log("Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .")


for (let mult of umAoVinteCinco) {
  var result = mult * 2;
  console.log(result);
}