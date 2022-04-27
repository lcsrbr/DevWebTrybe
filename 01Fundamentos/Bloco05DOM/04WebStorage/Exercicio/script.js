let fundoBranco = document.getElementById("fundoBranco")
let fundoPreto = document.getElementById("fundoPreto")
let fundoAzul = document.getElementById("fundoAzul")

let fundo;
localStorage.setItem('background', fundo)
localStorage.setItem('font', 'teste')


fundoBranco.addEventListener('click', function(){
    fundo = "white"
    localStorage.background = fundo
   document.body.style.backgroundColor = fundo
   document.body.style.color = "black"

})

fundoPreto.addEventListener('click', function(){
    fundo = "black"
    localStorage.background = fundo

   document.body.style.backgroundColor = fundo
    document.body.style.color = "white"

})

fundoAzul.addEventListener('click', function(){
    fundo = "blue"
    localStorage.background = fundo

    document.body.style.backgroundColor = fundo
    document.body.style.color = "white"

   // document.body.style.color = "lightgrey"
})

localStorage.getItem('background')
let cor = document.body.style.color



/* 
let fundoBranco = document.getElementById("fundoBranco")
let fundoPreto = document.getElementById("fundoPreto")
let fundoAzul = document.getElementById("fundoAzul")

fundoBranco.addEventListener('click', function(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
})

fundoPreto.addEventListener('click', function(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
})

fundoAzul.addEventListener('click', function(){
    document.body.style.backgroundColor = "darkblue"
    document.body.style.color = "lightgrey"
})

let cor = document.body.style.color

localStorage.setItem('background', document.body.style.backgroundColor = "black")
localStorage.setItem('font', cor)

let fundo = localStorage.background
 */