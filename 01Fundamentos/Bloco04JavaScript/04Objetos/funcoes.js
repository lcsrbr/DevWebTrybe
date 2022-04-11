/* function soma (a,b) {

    return a+b;
}

console.log(soma(15,2));
console.log(soma(20,15));
console.log(soma(3,1));
console.log(soma(1,9));
console.log(soma(7,5)); */

/* 
Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
Após refatorar o seu código , verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.
 */
let name = `Lucas`;
let name2 = `Ana`;

function greet (param) {
    console.log(`Hey ` + param);
}

greet(name);
greet(name2);
/* 
1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉
*/

function soma (a,b) {
    return a+b;
}

function divide (a,b) {
    return a/b;
}

function multiplica (a,b) {
    return a*b;
}

function subtrai (a,b) {
    return a-b;
}

function modulo (a,b) {

    return a%b;
}

/*
2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

function maior (a,b) {
    let verifica;
    if (a > b) {
        verifica = a;
    } else {
        verifica = b;
    }
     
    return verifica;
}

/*
3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

function maiorDe3 (a,b,c) {
    let verifica;
    if (a > b && a > c) {
        verifica = a;
    } else if (b > c && b > c){
        verifica = b;
    } else {
        verifica = c;
    }
     
    return verifica;
}

console.log(maiorDe3(25,15,19));

/*
4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

function valor (a) {
    if (a > 0) {
        return console.log("positive");
    } else if (a < 0) {
        return console.log("negative");
    } else {
        return console.log("zero");
    }
}

console.log(valor(-1));

/*
5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
* - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
* - Um ângulo será considerado inválido se não tiver um valor positivo.
*/

function triangulo (a,b,c) {
    if (a + b + c == 180) {
        return true
    } else if (a + b + c !== 180) {
        return false
    } else if (a < 1 || b < 1 || c < 1) {
        return false
    }
}

console.log(triangulo(90,45,46))