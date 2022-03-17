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

// Exercício 1:

function adicionaDia() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.getElementById('days')
  for (let cont = 0; cont < dezDaysList.length; cont += 1) {
    let dias = dezDaysList[cont]
    let diasLi = document.createElement('li')
    diasLi.innerText = dias
    diasLi.classList = 'day'
    days.appendChild(diasLi)
    if (dezDaysList[cont] == 24 || dezDaysList[cont] == 31) {
      diasLi.classList.add('holiday')
    }
    else if (dezDaysList[cont] == 4 || dezDaysList[cont] == 11 || dezDaysList[cont] == 18) {
      diasLi.classList.add('friday')
    }
    if (dezDaysList[cont] == 25) {
      diasLi.classList.add('holiday')
      diasLi.classList.add('friday')
    }
  }
}
adicionaDia()

// Exercício 2:
let stringFeriado = 'Feriados'
function feriadosDay(feriado) {
  const divBtn = document.getElementsByClassName('buttons-container')[0]
  const btn = document.createElement('button')
  divBtn.appendChild(btn)
  btn.setAttribute('id', 'btn-holiday')
  btn.innerText = feriado;
}
feriadosDay(stringFeriado)

// Exercício 3:

const btn = document.getElementById('btn-holiday')
btn.addEventListener('click', mudaCor)

function mudaCor() {
  const diasLI = document.getElementsByClassName(' holiday')
  for (let cont = 0; cont < diasLI.length; cont += 1) {
    if (diasLI[cont].style.backgroundColor == 'red') {
      diasLI[cont].style.backgroundColor = 'rgb(238,238,238)'
    }
    else {
      diasLI[cont].style.backgroundColor = 'red'
    }

  }

}


// Exercício 4:

let stringSexta = 'Sexta-Feira'
function botaosexta(string) {
  const divBtn = document.getElementsByClassName('buttons-container')[0]
  const btn = document.createElement('button')
  divBtn.appendChild(btn)
  btn.setAttribute('id', 'btn-friday')
  btn.innerText = string;
}

botaosexta(stringSexta)

// Exercício 5:

const btnSexta = document.getElementById('btn-friday')
function mostraTextoExibito() {
  const diasli = document.querySelectorAll('.friday')
  for (let cont = 0; cont < diasli.length; cont += 1) {
    let armazena = diasli[cont].innerText;    
    if(diasli[cont].innerText === 'Sexta-Feira'){
      diasli[cont].innerText = armazena
    }
    else{
      diasli[cont].innerText = 'Sexta-Feira'
    }
  }

}
btnSexta.addEventListener('click', mostraTextoExibito)