
const a = 33;
const b = 15;
const c = 51;

console.log("Programa um");
const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log("A = " + a + ", B = " + b);
console.log("Adição, Subtração, Multiplicação, Divisão, Módulo = " + adicao, subtracao +','+ multiplicacao, divisao, modulo);
//////
console.log("Programa dois");

if (a >= b) {
    console.log("Número maior: A = " + a);
} else {
    console.log("Número maior: B = " + b);
}

console.log("Programa três");

if (a >= b && a >= c) {
    console.log("Número maior: A = " + a);
} else if (b >= a && b >= c) {
    console.log("Número maior: B = " + b);
} else if (c >= a && c >= b) {
    console.log("Número maior: C = " + c);
} else {
    false
}

console.log("Programa quatro");

const d = -2;

if (d > 0) {
    console.log("Positive = " + d);
} else if (d < 0) {
    console.log("Negative = " + d);
} else {
    console.log("Zero");
}

console.log("Programa cinco");

const anguloA = 80;
const anguloB = 40;
const anguloC = -20;

if (anguloA + anguloB + anguloC == 180) {
    console.log(true);
} else if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log("inválido");
} else {
    console.log(false);
}

console.log("programa seis");
const peca = "torre";

switch (peca) {
    case "peao":
        console.log("Peão: anda pra frente, come na diagonal, primeiro movimento pode andar duas casas");
        break;
    case "torre":
        console.log("Torre: anda na vertical e horizontal");
        break;
    case "cavalo":
        console.log("Cavalo: anda em L (uma casa, depois duas em lateral");
        break;
    case "bispo":
        console.log("Bispo: anda em diagonal");
        break;
    case "dama":
        console.log("Dama: anda na vertical e na diagonal");
        break;
    case "rei":
        console.log("Rei: anda uma casa");
        break;

    default:
        console.log("não se aplica");
}

console.log("programa sete");

const porcentagem = 80;

if (porcentagem >= 90) {
    console.log("Porcentagem: " + porcentagem + "%. conceito A.");
} else if (porcentagem >= 70) {
    console.log("Porcentagem: " + porcentagem + "%. conceito B.");
}  else if (porcentagem >= 60) {
    console.log("Porcentagem: " + porcentagem + "%. conceito C.");
} else if (porcentagem >= 50) {
    console.log("Porcentagem: " + porcentagem + "%. conceito D.");
}  else if (porcentagem < 50) {
    console.log("Porcentagem: " + porcentagem + "%. conceito F.");
} else if (porcentagem < 0 || porcentagem > 100) {
    console.log("Nota inválida");
} else {
    console.log("Não se aplica");
}

console.log("programa oito");

if (a % 2 == 0 || b % 2 == 0|| c % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

console.log("programa nove");

if (a % 2 == 0 || b % 2 == 0|| c % 2 == 0) {
    console.log(false);
} else {
    console.log(true);
}

console.log("programa dez");

const custo = 100; 
const venda = 200;
const imposto = (custo/100)*20 ;

const custoTotal = custo + imposto;
const lucro = venda - custoTotal;

if (custo < 0 || venda < 0 || imposto < 0) {
    console.log("Dados inválidos");
} else {
    console.log("Custo: R$ " + custo + ",00, Venda: R$ " + venda + ",00, Imposto (20%): R$ " + imposto + ",00. Custo total: R$ " + custoTotal + ",00, Lucro: R$ " + lucro + ",00.");
}

