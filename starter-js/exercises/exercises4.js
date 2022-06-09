/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/
//let temp = 'Oc';

conversorTemp = (temp) => {
    const celsiusExiste = temp.toUpperCase().includes('C')
    const fahrenheitExiste = temp.toUpperCase().includes('F')
    
    // fluxo de erro
    if (!celsiusExiste && !fahrenheitExiste) {
        throw new Error('Grau não identificado');
    }

    // fluxo ideal [F -> C]
    let updateTemp = temp.toUpperCase().replace('F', '');
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let grau = '°C'

    // fluxo alternativo [C -> F]
    if (celsiusExiste) {
        updateTemp = temp.toUpperCase().replace('C', '');
        formula = celsius => celsius * 9/5 + 32
        grau = '°F'
    }

    return formula(updateTemp) + grau
}

try {
  console.log(conversorTemp('32f'))
  console.log(conversorTemp('0c'))
  conversorTemp('50s')
} catch (error) {
  console.log(error.message)
}