const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
console.log(document.getElementById("page-title"));
console.log(document.getElementById("page-title").innerHTML);
console.log(document.getElementById("page-title").innerText);
document.getElementById("page-title").innerText = "<strong>Título 2</strong>" //as tags nao funcionam aqui
console.log(document.getElementById("page-title"));
console.log(document.getElementById("page-title").innerHTML);
console.log(document.getElementById("page-title").innerText);
document.getElementById
///
console.log(document.getElementById("subtitle").innerText)
document.getElementById("subtitle").innerText = "o subtítulo foi alterado via JS"
console.log(document.getElementById("subtitle").innerText)

///lidando classes como listas
console.log(document.getElementsByClassName("fatos")[0].innerHTML)

/* 
document.getElementsByClassName("fatos")[0].innerText = "nome completo: Lucas Ribeiro Moura"
 */
/* 
let fatos = document.getElementsByClassName("fatos");

for (let i in fatos) {
    fatos[i].innerText = "tatati patata"
}
 */
//função retorna lista de elemetos
console.log(document.getElementsByTagName("section"));

let fatos = document.querySelectorAll(".fatos")

for (let i in fatos) {
    fatos[i].style.color= "red";
}


document.querySelectorAll(".fatos strong")[0].innerText = "Lucas Ribeiro moura";

let dados = document.querySelectorAll(".fatos strong")
let blue = "blue"


for (let i in dados) {
    dados[i].style.color= blue;
}

/* 
document.querySelectorAll(".fatos strong")[0].style.color = "blue"
 */
