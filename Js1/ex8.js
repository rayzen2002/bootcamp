let distance = prompt('Digite a distancia em anos-luz')

let unity = prompt(
  'Escolha a unidade a ser convertida: \n1- Parsec(pc) \n2- unidade astronomica(AU) \n3- Quilometros(km)'
)
let unityValue = unity
switch (unityValue) {
  case '1':
    unityValue = 'Parsec'
    break
  case '2':
    unityValue = 'unidade astronomica'
    break
  case '3':
    unityValue = 'Quilometros'
}
switch (unity) {
  case '1':
    let convpc = distance * 0.306601
    alert(
      'Distancia em Anoz-luz: ' +
        distance +
        '\nConvertendo para ' +
        unityValue +
        ': ' +
        convpc +
        ' pc'
    )
    break
  case '2':
    let convau = distance * 63241.1
    alert(
      'Distancia em Anoz-luz: ' +
        distance +
        '\nConvertendo para ' +
        unityValue +
        ': ' +
        convau +
        ' AU'
    )
    break
  case '3':
    let convkm = distance * 9.5 * 10 ** 12
    console.log(
      'Distancia em Anoz-luz: ' +
        distance +
        '\nConvertendo para ' +
        unityValue +
        ': ' +
        convkm +
        ' Km'
    )
    break
  default:
    alert('bugadasso')
}
