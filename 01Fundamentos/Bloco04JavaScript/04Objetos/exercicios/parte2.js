
/* //// 1 ////
function inverterPalavra(palavra) {
    let dividir = palavra.split(""); 
    let inverter = dividir.reverse(); 
    let juntar = inverter.join(""); 
    return juntar; 
}

function verificaPalindrome(palavra){
if (palavra == inverterPalavra(palavra)) {
    return true
} else {
    return false
}
}
console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));

 */

/* //// 2 ////
let arrayTeste = [2, 3, 6, 7, 10, 1];

function maiorValor(array){
    let valorIndice = 0;
        for (i = 0; i < array.length; i += 1) {
            if (array[i] > array[valorIndice]) {
                valorIndice = i
            }
        }
        return valorIndice
}

maiorValor(arrayTeste)

console.log(maiorValor(arrayTeste));

  */

/* //// 3 ////
let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function menorValor(array){
    let valorIndice = 0;
        for (i = 0; i < array.length; i += 1) {
            if (array[i] < array[valorIndice]) {
                valorIndice = i
            }
        }
        return valorIndice
}

console.log(menorValor(arrayTeste));
  */

/* //// 4 ////
let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra (array) {
    let palavra = array[0]
    for (i in array) {
        if (array[i].length > palavra.length) {
            palavra = array[i]
        }
    }
return palavra
}

console.log(maiorPalavra(arrayTeste));
 */

let teste = 5

function somatorio(n) {
    let soma = 0;
    for (i=1; i <= n; i+=1){
        soma += i
    }
return soma
}

console.log(somatorio(teste));