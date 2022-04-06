/*
let age = 20;
age = 30;

let name = "Hulk";

let CamelCase = "Corcova de camelo";

const number = 50;

console.log(age);
console.log(age, name, CamelCase);
console.log (number);
*/



/* VARIÁVEIS */

const myName = "Lucas";
const birthCity = "Belo Horizonte";
var birthYear = 1993;

console.log("Meu nome é " + myName + ", Nasci no ano de " + birthYear + ", Na cidade de " + birthCity + ".")

birthYear = 2030;

console.log(birthYear);


let movie = "Avengers"; //string literal: dentro de aspas, sequencia de caracteres

let score = 10; //number literal: declaração de numero

let isValid = true; //valor booleano (true false) 

let name; //undefined: declaração indefinida

let color = null; //nulo

/* TIPOS PRIMITIVOS */

const base = 5;
var height = 8;

const area = base * height;

const perimeter = 2 * (base + height);

console.log("área = " + area)
console.log("perímetro = " + perimeter)

//if - se acontecer alguma coisa
//elfe - senao acontece outra coisa

/*

if (condicao) {
    //

} else if (outraCondicao) {
    //
} else if (outraCondicao) {
    //
} else if (outraCondicao) {
    //
} else {
    //
}
*/

/*IF ELSE*/

let trybe = 16.30;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
} else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
} else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
} else {
    console.log("Fora dos momentos síncronos")
}

const nota = 100;

if (nota >= 80 && nota <= 100) {
    console.log("Parabéns! Você foi aprovado(a)!");
} else if (nota >= 60 && nota < 80) {
    console.log("Você está na lista de espera");
} else if (nota < 60) {
    console.log("Você foi reprovado");
} else {
    false
}

/* OPERADORES LÓGICOS */

/* And (&&) */

const currentHour = 10;
var message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar ;D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmm, cheiro de café recém passado!"
} else {
    false
}

console.log("São " + currentHour + " horas. " + message)


/* Or (||)  */

var weekDay = "sábado";

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
    console.log("Oba, mais um dia de aprednizado na Trybe >:D")
} else if (weekDay == "sábado" || weekDay == "domingo") {
    console.log("FINALMENTE, decanso merecido U.U")
} else {
    false
}

/* switch -- case  */

var status = "aprovada"; //aprovada, lista, reprovada

    switch (status) {
        case "aprovada":
            console.log("parabéns você foi aprovada(o)!")
            break;
        case "lista":
            console.log("Você está na lista")
            break;
        case "reprovada":
            console.log("você foi reprovado")
            break;

        default:
            console.log("não se aplica")
    }