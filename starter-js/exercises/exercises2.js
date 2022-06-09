/* 
- Transformar Notas Escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/ 

getNota = (nota) => {
  let notaA = nota >= 90 && nota <= 100;
  let notaB = nota > 79 && nota < 90;
  let notaC = nota > 69 && nota < 80;
  let notaD = nota > 59 && nota < 70;
  let notaE = nota < 60;

  let notaFinal;
  
  if (notaA) {
      notaFinal = 'A';
  } else if (notaB) {
      notaFinal = 'B';
  } else if (notaC) {
      notaFinal = 'C';
  } else if (notaD) {
      notaFinal = 'D';
  } else if (notaE) {
      notaFinal = 'E';
  } else {
      notaFinal = 'Nota Inválida';
  }
  return notaFinal;
} 

console.log(getNota(93))