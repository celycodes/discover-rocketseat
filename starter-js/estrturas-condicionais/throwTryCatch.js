// throw
sayMyName = (nome = '') => {
    if (nome === '') {
      throw new Error('Nome é obrigatório')
    }
    console.log('depois do error')
}
// try...catch
try {
  sayMyName()

} catch(e) {
  console.log(e)
}