/* 
let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for(i = 0; i<fruits.length; i += 1) {
    soma = soma + fruits[i];
}
if (soma > 15) {
    console.log(soma)
} else {
    console.log("menor que 16")
}

//inverter palavra

*/

/* let lucas = 'lucas'
let sacul = ''


for (i=0; i < lucas.length; i += 1) {
    sacul = sacul + lucas[lucas.length - 1 - i]
    
}

console.log(lucas, sacul)






let palavra = `Ana Flavia`;
let palavraInvertida = ``;

for (let letra = 0; letra < palavra.length; letra = letra + 1) {
    palavraInvertida = palavraInvertida + palavra[(palavra.length -1 ) - letra]
}

console.log(palavraInvertida);


let array = ['java', 'javascript', 'phyton', 'html', 'css'];
let maiorPalavra = array[0]
let menorPalavra = array[0]

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length> maiorPalavra.length) {
        maiorPalavra=array[i]
    } else if (array[i].length< menorPalavra.length) {
        menorPalavra=array[i]
    }
}

console.log(maiorPalavra, menorPalavra)

let numerosPrimos = []
let sequencia = [];

for (i=1; i <= 50; i+=1) {
    sequencia.push(i)
}
console.log(sequencia);

for (i=1; i < sequencia.length; i += 1) {
    if  (sequencia[i] == 2 || sequencia[i] == 3 || sequencia[i] == 5 || sequencia[i] == 7) {
        numerosPrimos.push(sequencia[i])
    } else if (sequencia[i] % 2 !== 0 && sequencia[i] % 3 !== 0 && sequencia[i] % 5 !== 0 && sequencia[i] % 7 !== 0)  {
        numerosPrimos.push(sequencia[i])
    }
}

console.log(numerosPrimos)

let maiorPrimo = numerosPrimos[0];
for (i = 0; i < numerosPrimos.length; i += 1 ) {
    if (numerosPrimos[i] > maiorPrimo) {
        maiorPrimo = numerosPrimos[i]
    }
}

console.log(maiorPrimo);

let todosNumerosPrimos = [];
let maiorNumeroPrimo = 0;

let ePrimo = true;
for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
    for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
        if (numeroAtual % divisorAtual === 0) {
            ePrimo = false;
        }
    }
    if (ePrimo) {
        todosNumerosPrimos.push(numeroAtual)
        maiorNumeroPrimo = numeroAtual;
    }
}

console.log(maiorNumeroPrimo);
console.log(todosNumerosPrimos);
*/

/*
n = 5
*****
*****
*****
*****
*****

 */

/* 
let linha = "";
let asteriscos = 5;

for (i=0; i < asteriscos; i += 1) {
    linha += "*";
}

for (i=0; i < asteriscos; i += 1) {
    console.log(linha);
}
 */
/* 
let linha = "";
let asteriscos = 5;

for (i=0; i < asteriscos; i += 1) {
    linha += "*";
    console.log(linha);
}

 */
/* 
let espaco = " ";
let asterisco = "*";
let linha = "";
let quantidade = 5;

for (i = 0; i < quantidade; i += 1) {
    for (i2 = 0; i2 < ((quantidade-1)-i); i2 += 1) {
        linha += espaco 
    }
    for (i2 = 0; i2 < i+1; i2 += 1) {
        linha += asterisco 
    }
    console.log(linha)
    linha = "";
}
 */
/* 
let espaco = " ";
let asterisco = "*";
let linha = "";
let quantidade = 21;
let centro = (quantidade + 1) / 2
let lado = (quantidade - 1) / 2

    for (i = 0; i < centro; i += 1) {
        for (esq = 0; esq < lado-i ; esq += 1) {
            linha += espaco;
        }
        for (meio = 0; meio < quantidade - (lado-i)*2; meio += 1) {
            linha += asterisco; 
        }
        for (dir = 0; dir < lado-i; dir += 1) {
            linha += espaco;
        }

        console.log(linha)
        linha = "";
    }
 */

/*     
let espaco = " ";
let asterisco = "*";
let linha = "";
let quantidade = 21;
let centro = (quantidade + 1) / 2
let lado = (quantidade - 1) / 2

    for (i = 0; i < centro; i += 1) {
        for (esq = 0; esq < lado-i ; esq += 1) {
            linha += espaco;
        }
        for (meio = 0; meio < quantidade - (lado-i)*2; meio += 1) {
            linha += asterisco; 
        }
        for (dir = 0; dir < lado-i; dir += 1) {
            linha += espaco;
        }

        console.log(linha)
        linha = "";
    }
 */

/*
 
    *     //4,1,4
   * *    //3,1,1,1,3
  *   *   //2,1,3,1,2
 *     *  //1,1,5,1,1
*********

*/

let primo;
let number = 7

for (let i = 0; i <= number; i += 1) {
    primo = true;
    for (let i2 = 2; i2 < i; i2 += 1) {
      if (i % i2 == 0) {
        primo = false;
      }
    }
  }
  
console.log(primo)    