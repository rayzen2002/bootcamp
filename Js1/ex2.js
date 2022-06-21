let nameOlder = prompt('Nome da pessoa mais velha: ')
let ageOlder = prompt('Idade da pessoa mais velha: ')
let nameElder = prompt('Nome da pessoa mais Nova: ')
let ageElder = prompt('Idade da pessoa mais Nova: ')

let ageDiff = ageOlder - ageElder
alert(
  'Nome da pessoa mais velha: ' +
    nameOlder +
    '\nIdade da pessoa mais velha: ' +
    ageOlder +
    '\n\nNome da pessoa mais Nova: ' +
    nameElder +
    '\nIdade da pessoa mais Nova: ' +
    ageElder +
    '\n\nA diferenca de idades entre ' +
    nameOlder +
    ' e ' +
    nameElder +
    ' eh: ' +
    ageDiff
)
