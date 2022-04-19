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


  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function getDays () {

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const UlDays = document.getElementById("days");
    const days = dezDaysList[i];

    const liDays = document.createElement('li');

    liDays.innerText = days;

    UlDays.appendChild(liDays)
    liDays.className = "day"

    if (liDays.innerText === "24" || liDays.innerText === "31") {
        liDays.className = "day holiday";
    } else if (liDays.innerText === "4" || liDays.innerText === "11" || liDays.innerText === "18") {
        liDays.className = "day friday";
    } else if (liDays.innerText === "25" ) {
        liDays.className = "day holiday friday";
    }

  }
}
getDays ()


