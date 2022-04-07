//Array, Loop, For

let pizza1 = '4 queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Palmito';
let pizza4 = 'Marguerita';
let pizza5 = 'Chocolate';

//OU eu crio um ARRAY:
let pizzas = ['4 queijos', 'Frango com Catupiry', 'Palmito', 'Marguerita', 'Chocolate'];

pizzas.push('Peito de Peru')
 
console.log(pizzas);
console.log(pizzas.length);
console.log(pizzas);

console.log(pizzas[0]);
console.log(pizzas[1]);
console.log(pizzas[2]);
console.log(pizzas[3]);
console.log(pizzas[4]);
console.log(pizzas[5]);
console.log(pizzas[6]);

console.log("")
console.log("for")
for (let index=0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

//Exercícios
console.log("")
console.log("Exercício 1")
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

console.log("")
console.log("Exercício 2")
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2[2];

console.log(indexOfPortfolio);

console.log("")
console.log("Exercício 3")
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu3.push('Contato')

console.log(menu3);

console.log("")
console.log("for")

let cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

console.log("")
console.log("Para fixar: for")

//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index <groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

console.log("")
console.log("for / of")

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

console.log("")
let valor = 3;

console.log("tabuada de " + valor)

let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let mult of arrOfNumbers) {
  var result = mult * valor;
  console.log(result);
}


console.log("")
console.log("Para fixar: for / of")

//Utilize o for/of para imprimir os elementos da lista names com o console.log() :


let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
console.log(name);
}