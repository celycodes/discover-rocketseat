calculate = (num1, operator, num2) => {
  let result = 0;

  switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '/':
        result = num1 / num2
        break
      case '*':
        result = num1 * num2
        break
      default:
        console.log('Não implementado')
        break
  }

  return result;
} 
 
console.log(calculate(1, '+', 9))