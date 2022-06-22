let departureDateEntry = prompt('Digite a Data de partida (Formato DD/MM/YYYY')
let departureDate = moment(departureDateEntry, 'DD/MM/YYYY')

let today = moment()

let dateDiff = today - departureDate

let choosenOption = prompt(
  'Escolha como gostaria de exibir o tempo de partida: \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias'
)

if (choosenOption == 1) {
  let secondsOfDeparture = Math.round(dateDiff / 1000)
  alert(secondsOfDeparture)
} else if (choosenOption == 2) {
  let minutesOfDeparture = Math.round(dateDiff / 60000)
  alert(minutesOfDeparture)
} else if (choosenOption == 3) {
  let hoursOfDeparture = Math.round(dateDiff / 60000 / 3600)
  alert(hoursOfDeparture)
} else if (choosenOption == 4) {
  let daysOfDeparture = Math.round(dateDiff / 60000 / 3600 / 24)
  alert(daysOfDeparture)
} else {
  alert('Opcao Invalida')
}
