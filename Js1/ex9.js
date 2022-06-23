let spaceshipName = prompt('Qual o nome da Nave? ')
let spaceBlink = prompt('Deseja entrar em dobra espacial? \n1-Sim \n2-Nao')
let count = 0
let spaceBlinkCounter = 1
let spaceBlinkOption = ''
console.log(typeof spaceBlink)

while (spaceBlink == '1') {
  spaceBlinkOption = prompt('Deseja realizar a proxima dobra?')
  if (spaceBlinkOption == '1') {
    spaceBlinkCounter++
  } else spaceBlink += 1
}
alert(
  'A Nave se chama ' +
    spaceshipName +
    '\nE o numero de dobras foram: ' +
    spaceBlinkCounter +
    ' Dobras'
)
console.log(spaceBlinkCounter)
console.log(spaceBlink)
console.log(spaceBlinkOption)
