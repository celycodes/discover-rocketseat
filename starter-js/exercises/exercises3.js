/*
Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

let rendaFamiliar = {
  receitas: [3500, 150],
  despesas: [90, 150, 400, 350]
}

sum = (array) => {
  let total=0;

  for (let i of array) {
    total += i;
  }
  return total;
}

calculoBalanco = (object) => {
    const calculoReceitas = sum(rendaFamiliar.receitas);
    const calculoDespesas = sum(rendaFamiliar.despesas);

    const total = calculoReceitas - calculoDespesas
    const itsOk = total >= 0;
    let balanceText = 'negativo';

    if (itsOk) {
       balanceText = 'positivo';
    }
    return 'Você tem saldo ' + balanceText + ' de ' + total.toFixed(2);
}

console.log(calculoBalanco(rendaFamiliar))