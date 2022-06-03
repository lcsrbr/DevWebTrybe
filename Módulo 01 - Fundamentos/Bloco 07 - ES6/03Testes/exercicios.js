/* 
🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

 */

const sum = (a, b) => {
    //if (Number.isNaN(a) || Number.isNaN(b)) {
    if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers')
    } else {
        return a + b; 
    } 
}

/* 
🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
 */

const myRemove = (arr, item) => {

    for (let i in arr) {
        if ( arr[i] === item) {
            arr.splice(i, 1) //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        }
    }
    return arr
}

//console.log(myRemove([1, 2, 3, 4], 3));
//console.log(myRemove([1, 2, 3, 4], 5));
/* 
3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
 */

// myFizzBuzz.js
function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }


// Desafio 9
function encode(string) {
    let arrayString = string.split("")
  
    for (let i in arrayString) {
      if (arrayString[i] === "a") {
        arrayString[i] = 1;
      } else if (arrayString[i] === "e") {
        arrayString[i] = 2;
      } else if (arrayString[i] === "i") {
        arrayString[i] = 3;
      } else if (arrayString[i] === "o") {
        arrayString[i] = 4;
      } else if (arrayString[i] === "u") {
        arrayString[i] = 5;
      }
    }
    let splitArray = arrayString.join("");
    return splitArray;
  }
  
  function decode(string) {
    let arrayString = string.split("")
  
    for (let i in arrayString) {
      if (arrayString[i] === '1') {
        arrayString[i] = "a";
      } else if (arrayString[i] === '2') {
        arrayString[i] = "e";
      } else if (arrayString[i] === '3') {
        arrayString[i] = "i";
      } else if (arrayString[i] === '4') {
        arrayString[i] = "o";
      } else if (arrayString[i] === '5') {
        arrayString[i] = "u";
      }
    }
    let splitArray = arrayString.join("");
    return splitArray;
  }

  console.log(decode('12345'));
  

module.exports = { sum, myRemove, myFizzBuzz, encode, decode }
