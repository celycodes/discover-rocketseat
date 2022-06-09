let aceitar = false;

console.log('Pedir Uber') 
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
      return resolve('it worked! o carro chegou'); 
    } 
    return reject("it didn't work out!");
});

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizado!!'))

  console.log('awaiting....');