//Acesse o elemento elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta'))
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
console.log(document.getElementById('elementoOndeVoceEsta').parentElement)
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild)
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Texto primeiro filho do filho';
//Acesse o primeiroFilho a partir de pai .
console.log(document.getElementById('pai').firstElementChild);
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.innerText)
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.childNodes[5])
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.lastElementChild.previousElementSibling)
//Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById('pai').childNodes[5])
console.log(document.getElementById('pai').lastElementChild.previousElementSibling)