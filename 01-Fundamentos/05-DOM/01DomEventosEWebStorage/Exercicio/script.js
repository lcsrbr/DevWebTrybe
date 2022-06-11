// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)


function comoMeVejo(array, text) {
    return document.getElementsByTagName('p')[array].innerText = text;
}

comoMeVejo(0, "me vejo com 30 anos!")
comoMeVejo(1, "me vejo como desenvolvedor web pleno 3")
comoMeVejo(2, "me vejo saindo do aluguel (ousado!)")

 
//Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).


function alteraFundo(color) {
    return document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
}
   
alteraFundo("rgb(76,164,109")

// Crie uma função que mude a cor do quadrado vermelho para branco.

function alteraFundoMeio(color) {
    return document.getElementsByClassName('center-content')[0].style.backgroundColor = color;
}
   
alteraFundoMeio("white")

// Crie uma função que corrija o texto da tag <h1>.

function alteraTitulo(text) {
    return document.getElementsByClassName('title')[0].innerText = text;
}
   
alteraTitulo("Exercício 5.1 - JavaScript")

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function maiusculo(i) {
    let fraseP = document.getElementsByTagName('p')[i];
    fraseP.innerHTML = fraseP.innerHTML.toUpperCase();

    
  }

  maiusculo(0);
  maiusculo(1);
  maiusculo(2);

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.


function conteudoP () {
let frasesP = document.getElementsByTagName('p')

for (let i = 0; i < frasesP.length; i += 1) {
    console.log (frasesP[i].innerText);   
}
}

conteudoP()