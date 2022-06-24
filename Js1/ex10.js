let spaceship = prompt('Digite o nome da spaceship')
let caracter = prompt('Digite o caracter que deseja substituir')
let newCaracter = prompt('Digite o caracter pelo qual deseja substituir')
let newSpaceship = ''

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == caracter) {
    newSpaceship += newCaracter
  } else {
    newSpaceship += spaceship[i]
  }
}
console.log(newSpaceship)
