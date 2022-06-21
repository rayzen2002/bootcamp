let pilotName = prompt('Qual o nome do piloto? ')
let velInitial = 0
let velDesired = prompt('Qual a velocidade desejada?')
let velConfirm = confirm(
  'Tem certeza que deseja chegar a velocidade de : ' + velDesired
)
if (velConfirm) velInitial = velDesired
if (velInitial == 0) {
  alert('Nave esta parada.Considere partir e aumentar a velocidade')
} else if (velInitial < 40) {
  alert('Voce esta devagar, podemos aumentar mais')
} else if (velInitial >= 40 && velInitial < 80) {
  alert('Parece uma boa velocidade para manter')
} else if (velInitial >= 80 && velInitial < 100) {
  alert('Velocidade alta.Considere diminuir')
} else if (velInitial >= 100)
  alert('Velocidade perigosa.Controle automatico forcado')
