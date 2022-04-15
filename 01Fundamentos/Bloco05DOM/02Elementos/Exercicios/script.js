/////
// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let novaH1 = document.createElement('h1');
document.body.appendChild(novaH1).innerText = "Exercício 5.2 - JavaScript DOM";


/////
// Adicione a tag main com a classe main-content como filho da tag body ;

let novaMain = document.createElement('main');
novaMain.id = "main-content";
document.body.appendChild(novaMain);


/////
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;


let novaSection = document.createElement('section');
novaSection.id = 'center-content';
document.getElementById('main-content').appendChild(novaSection);

/////
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let novaP = document.createElement('p');
document.getElementById('center-content').appendChild(novaP);

/////
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let novaSection2 = document.createElement('section');
novaSection2.id = 'left-content';
document.getElementById('main-content').appendChild(novaSection2);


/////
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let novaSection3 = document.createElement('section');
novaSection3.id = 'right-content';
document.getElementById('main-content').appendChild(novaSection3);


/////
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let novaImg = document.createElement('img');
novaImg.src = 'https://picsum.photos/200';
novaImg.className = 'small-image';
document.getElementById('left-content').appendChild(novaImg);


/////
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let lista = [
  'um',
  'dois',
  'tres',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'
];

let novaLista = document.createElement('ul');
novaLista.id = '';
document.getElementById('right-content').appendChild(novaLista);


for (let i = 0 ; i  < lista.length; i += 1) {
  let item = lista[i];

  let itens = document.createElement('li');
  itens.innerText = item;

  document.getElementsByTagName('ul')[0].appendChild(itens);
}

/////
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.


for (let i = 1 ; i <= 3; i += 1) {
  let criarH3 = document.createElement('h3');

  document.querySelector('#main-content').appendChild(criarH3);
}

// Adicione a classe title na tag h1 criada;

novaH1.id = 'title';

// Adicione a classe description nas 3 tags h3 criadas;

let h3Var = document.getElementsByTagName('h3');

for (let i = 0; i < h3Var.length; i += 1) {
h3Var[i].className = 'description'
}
// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

document.getElementById('main-content').removeChild(document.getElementById('left-content'))

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

document.getElementById('right-content').style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

document.getElementById('center-content').style.backgroundColor = 'green';


// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

