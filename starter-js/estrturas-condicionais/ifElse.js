// IF...ELSE

let temperature = 37.8;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
    console.log('FEBRE ALTA')
} else if (mediumTemperature) {
    console.log('FEBRE MODERADA')
} else {
    console.log('SAUDÁVEL')
}