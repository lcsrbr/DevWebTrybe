const readline = require('readline-sync');

const altura = readline.questionFloat('informe sua altura: ')
const peso = readline.question('informe seu peso: ')

const IMC = (altura, peso) => {
    return (peso / (altura * altura)).toFixed(2)
}
const result = IMC(altura,peso)

const situacaoIMC = () => {
    if (result < 18.5) return 'Abaixo do peso (magreza)';
    if (result >= 18,5 && result < 24.9) return'Peso normal';
    if (result >= 25 && result < 29.9) return 'Acima do peso (sobrepeso)';
    if (result >= 30 && result < 34.9) return'Obesidade grau I';
    if (result >= 35 && result < 39.9) return 'Obesidade grau II';
    if (result >= 40) return 'Obesidade graus III e IV';
}

console.log(result)
console.log(situacaoIMC());