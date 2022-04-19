function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Ex1

function getDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const ulDays = document.getElementById("days");
    const days = dezDaysList[i];

    const liDays = document.createElement('li');

    liDays.innerText = days;

    ulDays.appendChild(liDays)
    liDays.className = "day"

    if (liDays.innerText === "24" || liDays.innerText === "31") {
      liDays.className = "day holiday";
    } else if (liDays.innerText === "4" || liDays.innerText === "11" || liDays.innerText === "18") {
      liDays.className = "day friday";
    } else if (liDays.innerText === "25") {
      liDays.className = "day friday holiday";
    }

  }
}
getDays()

//Ex2
function buttonFeriados() {
  const varButtons = document.querySelector(".buttons-container");
  const createButton = document.createElement("button");
  varButtons.appendChild(createButton);
  createButton.id = "btn-holiday";
  createButton.innerText = "Feriados";
}
buttonFeriados();

//Ex3
function botaoCorFeriados() {
  let bFeriados = document.querySelector("#btn-holiday")
  bFeriados.addEventListener("click", corFeriados)

  function corFeriados() {
    let diasFeriados = document.getElementsByClassName("holiday")
    let mudaCor = "lightgreen"
    let corOriginal = "rgb(238,238,238)"

    for (let i = 0; i < diasFeriados.length; i += 1) {
      let editar = diasFeriados[i]
      if (editar.style.backgroundColor === mudaCor) {
        editar.style.backgroundColor = corOriginal;
      } else {
        editar.style.backgroundColor = mudaCor;
      }
    }
  }
}
botaoCorFeriados()

//Ex4
function buttonSextaFeira() {
  let buttonContainer = document.querySelector(".buttons-container");
  let createButtonFriday = document.createElement("button");
  buttonContainer.appendChild(createButtonFriday);
  createButtonFriday.innerText = "Sexta-feira";
  createButtonFriday.id = "btn-friday";
}
buttonSextaFeira()

//Ex5
function botaoTextoSextaFeira() {
  let bSextaFeira = document.querySelector("#btn-friday")
  bSextaFeira.addEventListener("click", textoSextaFeira)

  function textoSextaFeira() {
    let diasSexta = document.getElementsByClassName("friday")
    let mudaTexto = "underline"
    let textoOriginal = "none"

    for (let i = 0; i < diasSexta.length; i += 1) {
      let editar = diasSexta[i]

      if (editar.style.textDecoration === mudaTexto) {
        editar.style.textDecoration = textoOriginal
      } else {
        editar.style.textDecoration = mudaTexto
      }
    }
  }
}
botaoTextoSextaFeira()

//Ex6
function alteraTextoDias() {
  let varDias = document.querySelectorAll(".day")

  for (let i in varDias) {
    varDias[i].addEventListener("mouseover", mudaFonte)
    varDias[i].addEventListener("mouseleave", voltaFonte)
  }

  function mudaFonte(event) {
    event.target.style.fontSize = "25px"
    event.target.style.transition = "0.1s"
  }

  function voltaFonte(event) {
    event.target.style.fontSize = "20px"
  }
}
alteraTextoDias()