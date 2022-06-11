
///// cor do fundo
const fundoBranco = document.getElementById("fundoBranco")
const fundoPreto = document.getElementById("fundoPreto")
const fundoAzul = document.getElementById("fundoAzul")

fundoBranco.addEventListener('click', () => {
    document.body.style.backgroundColor = "whitesmoke"
    localStorage.setItem('fundo', "whitesmoke")
})

fundoPreto.addEventListener('click', () => {
    document.body.style.backgroundColor = "black"
    localStorage.setItem('fundo', "black")
})

fundoAzul.addEventListener('click', () => {
    document.body.style.backgroundColor = "lightblue"
    localStorage.setItem('fundo', "lightblue")
})


////cor do texto
const textoMarrom = document.getElementById("textoMarrom")
const textoVermelho = document.getElementById("textoVermelho")
const textoVerde = document.getElementById("textoVerde")

textoMarrom.addEventListener('click', () => {
    document.body.style.color = "brown"
    localStorage.setItem('cor', "brown")
})

textoVermelho.addEventListener('click', () => {
    document.body.style.color = "red"
    localStorage.setItem('cor', "red")
})

textoVerde.addEventListener('click', () => {
    document.body.style.color = "green"
    localStorage.setItem('cor', "green")
})

////tamanho da fonte
const fontePequena = document.getElementById("fontePequena")
const fonteMedia = document.getElementById("fonteMedia")
const fonteGrande = document.getElementById("fonteGrande")

fontePequena.addEventListener('click', () => {
    document.body.style.fontSize = "10px"
    localStorage.setItem('size', "10px")
})

fonteMedia.addEventListener('click', () => {
    document.body.style.fontSize = "20px"
    localStorage.setItem('size', "20px")
})
fonteGrande.addEventListener('click', () => {
    document.body.style.fontSize = "30px"
    localStorage.setItem('size', "30px")
})


///espaçamento
const espPequeno = document.getElementById("espPequeno")
const espMedio = document.getElementById("espMedio")
const espGrande = document.getElementById("espGrande")

espPequeno.addEventListener('click', () => {
    document.body.style.lineHeight = "15px"
    localStorage.setItem('espac', "15px")
})

espMedio.addEventListener('click', () => {
    document.body.style.lineHeight = "20px"
    localStorage.setItem('espac', "20px")
})
espGrande.addEventListener('click', () => {
    document.body.style.lineHeight = "30px"
    localStorage.setItem('espac', "30px")
})

///font family
const fonteVerdana = document.getElementById("fonteVerdana")
const fonteCourier = document.getElementById("fonteCourier")
const fonteHelvetica = document.getElementById("fonteHelvetica")

fonteVerdana.addEventListener('click', () => {
    document.body.style.fontFamily = "Verdana"
    localStorage.setItem('font', "Verdana")
})

fonteCourier.addEventListener('click', () => {
    document.body.style.fontFamily = "Courier"
    localStorage.setItem('font', "Courier")

})

fonteHelvetica.addEventListener('click', () => {
    document.body.style.fontFamily = "Helvetica"
    localStorage.setItem('font', "Helvetica")

})

document.body.style.backgroundColor = localStorage.fundo
document.body.style.color = localStorage.cor
document.body.style.fontSize = localStorage.size
document.body.style.lineHeight = localStorage.espac
document.body.style.fontFamily = localStorage.font

