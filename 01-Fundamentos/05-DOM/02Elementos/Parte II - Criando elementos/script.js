//Crie um irmão para elementoOndeVoceEsta .
/* 
let irmaoOnde = [
    'IrmaoelementoOndeVoceEsta',
    ]
    
    let onde = document.querySelector('#elementoOndeVoceEsta');
    
    for (let i = 0; i < irmaoOnde.length; i += 1) {
        let inserir = irmaoOnde[i];
        let section = document.createElement('section');
    
        section.innerText = inserir;
    
        console.log(section);
        
        onde.appendChild(section);
    }
 */
let containerDoIrmaoDeOnde = document.getElementById('elementoOndeVoceEsta').parentElement;
let newSectionIrmao = document.createElement('section');
newSectionIrmao.id = 'IrmaoelementoOndeVoceEsta';

containerDoIrmaoDeOnde.appendChild(newSectionIrmao)
/* 
let container = document.getElementById('first');
let newDiv = document.createElement('div');
newDiv.id = 'red circle small'
container.appendChild(newDiv)
 */
//pai.appendChild(filho)

//document.querySelector('#pai').appendChild(document.createElement('section').innerHTML ='IRMÃO')
//
//

////Crie um filho para elementoOndeVoceEsta .

let containerDofilhoDeOnde = document.getElementById('elementoOndeVoceEsta');
let newSectionFilho = document.createElement('section');
newSectionFilho.id = 'FilhoDoElementoOndeVoceEsta';

containerDofilhoDeOnde.appendChild(newSectionFilho)

//document.querySelector('#elementoOndeVoceEsta').appendChild(document.createElement('section').innerHTML ='FinhoOnde')
//
//

////Crie um filho para primeiroFilhoDoFilho .
let containerDofilhoDoPrimeiroFilho = document.getElementById('primeiroFilhoDoFilho');
let newSectionPrimeiroFilho = document.createElement('section');
newSectionPrimeiroFilho.id = 'FilhoDoPrimeiroFilhoDoFilho';

containerDofilhoDoPrimeiroFilho.appendChild(newSectionPrimeiroFilho)
//document.querySelector('#primeiroFilhoDoFilho').appendChild(document.createElement('section').innerHTML ='FilhoPrimeiro')
//
//

////A partir desse filho criado, acesse terceiroFilho .

document.getElementsByClassName('FilhoDoPrimeiroFilhoDoFilho')[0].parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling;


///


let testes = [
'teste 1',
'teste 2',
'teste 3',
'teste 4',
]

let teste1 = document.querySelector('#teste');

for (let i = 0; i < testes.length; i += 1) {
    let teste2 = testes[i];
    let criaTeste = document.createElement('li');

    criaTeste.innerText = teste2;
    
    teste1.appendChild(criaTeste);
}


//// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();