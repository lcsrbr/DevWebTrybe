
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

/* //// 5 /////
let arrayTeste = [2, 3, 2, 5, 8, 2, 3]; 

function maisRepete (array) {
    
    let repete = 0;
    let iRepete = 0;
    let armazenaRepete = 0;

    for (let i in array) {
        let verifica = array[i];
        for (let i2 in array) {
            if (verifica === array[i2]) {
                repete += 1
            }
        }
    if (repete > armazenaRepete) { //eu repeti 'armazena repete'vezes o index 'iRepete'. Verifico se outro i vai conseguir repetir mais vezes
        armazenaRepete = repete
        iRepete = i
    }
    repete = 0
}
return (array[iRepete]);
}

console.log(maisRepete(arrayTeste));
 */

/* ///// 6 /////
let teste = 5

function somatorio(n) {
    let soma = 0;
    for (i=1; i <= n; i+=1){
        soma += i
    }
return soma
}

console.log(somatorio(teste));

 */
