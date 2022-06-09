// lista de argumentos  dos (argv)
//console.log(process.argv)
// process é um obj que lista os processos que estão sendo rodados no node neste exato momento 
const firstName = process.argv[2]
console.log(`Your name is ${firstName}`)