

var numero = 7;
var tabuada = []
for (var contador = 1; contador <= 10; contador += 1) {
    tabuada.push(numero*contador)
}
console.table(tabuada)

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
}



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i=0; i < numbers.length; i+=1){
    console.log(numbers[i])
}
console.log(' ')
let resultado = 0;
for (i=0; i < numbers.length; i+=1){
    resultado = resultado + numbers[i]; 
    // digo que a variavel resultado recebe, a cada loop, a soma dela mesma com o respectivo valor do array
}


console.log(resultado) //soma
console.log((resultado/numbers.length)) //media aritmetica

if ((resultado/numbers.length) > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20");
}

let maiorValor = 0;
for (i=0; i < numbers.length; i+=1){
    if (numbers[i] > maiorValor)
    maiorValor = numbers[i] // a cada loop, ele armazena o valor em maiorValor e o compara com o seguinte numero que será adiconado. caso seja maior que o anterior, ele vai armazena-lo. Caso contrario, ele passa pro próximo até o fim do loop.
}
console.log(maiorValor)

numerosImpares = [];
for (i=0; i < numbers.length; i+=1){
    if (numbers[i] % 2 !== 0) {
        numerosImpares.push(numbers[i]) //a cada loop, ele confere se o valor dividido por 2 tem resto 0. Caso negativo, ele adiciona este valor em numerosImpares. 
    }

}

console.log(numerosImpares);

let menorValor = numbers[0]; //começo definindo o menorValor como o primeiro item do array que quero comparar, assim ele vai comparar com ele mesmo
for (i=0; i < numbers.length; i+=1){
    if (numbers[i] < menorValor)
    menorValor = numbers[i] // a cada loop, ele armazena o valor em menorValor e o compara com o seguinte numero que será adiconado. caso seja menor que o anterior, ele vai armazena-lo. Caso contrario, ele passa pro próximo até o fim do loop.
}
console.log(menorValor)

let umAoVinteCinco = [] //crio array vazia que vai receber os valores definidos no loop abaixo
for (let valor = 1; valor <= 25; valor += 1) { 
    umAoVinteCinco.push(valor); //cada vez que o loop passar, ele adiciona o valor do item ao array
}

console.table(umAoVinteCinco)

let divididos = [];
for (let i = 0; i < umAoVinteCinco.length; i += 1) { 

    divididos.push(umAoVinteCinco[i]/2);
    
 //    let divididos = (umAoVinteCinco[i]) / 2 ; //a cada loop, ele divide o valor por 2 e armazena em divididos
//    console.log(divididos); //a cada loop, ele vai imprimir o resultado de divididos na tela
 
}
console.log(divididos);

let multiplicados = [];
for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1< numbers.length) {
        multiplicados.push(numbers[i] * numbers[i + 1])
    } else {
        multiplicados.push(numbers[i] * 2)
    }
}

console.log(multiplicados)

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//comparo indice um por todos, indice dois por todos, e assim por diante. 
for (let i = 0/* a */; i < numbers.length/* b */; i += 1/* d */) { 
    for (let i2 = 0/* a2 */; i2 < i/* b2 */; i2 += 1/* d2 */)/* c */ {
        if (numbers[i] > numbers [i2]) { /* c2 */
            let posicao = numbers[i]; //se o indice 'em evidencia' é maior que o indice comparado, eu defino ele como minha posicao
            numbers[i] = numbers [i2]; 
            numbers [i2] = posicao;
        }
    }
}

console.log(numbers)

for (let i = 0/* a */; i < numbers.length/* b */; i += 1/* d */) { 
    for (let i2 = 0/* a2 */; i2 < i/* b2 */; i2 += 1/* d2 */)/* c */ {
        if (numbers[i] < numbers [i2]) { /* c2 */
            let posicao = numbers[i]; //se o indice 'em evidencia' é maior que o indice comparado, eu defino ele como minha posicao
            numbers[i] = numbers [i2]; 
            numbers [i2] = posicao;
        }
    }
}

console.log(numbers)

