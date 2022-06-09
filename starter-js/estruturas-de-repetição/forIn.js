// for ... in
// cria um loop em cima de um objeto

let dog = {
    nome: 'Lassy',
    idade: 8,
    peso: 30
}

for (let property in dog) {
    console.log(property, dog[property]);
}