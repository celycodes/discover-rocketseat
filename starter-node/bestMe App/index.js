const questions = [
  "Qual é o seu nome?",
  "O que aprendi hoje?",
  "O que me deixou aborrecida? E eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantos pessoas ajudei hoje?",
  "Quais obstáculos eu ultrapassei?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}
 
ask()

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    //process.stdout.write( + "\n");
    if (answers.length < questions.length) {
      ask(answers.length)
    } else {
      //console.log(answers)
      process.exit();
    }
});

process.on('exit', () => {
  console.log(`
    Bacana ${answers[0]}!! Vejo que você aprendeu muito hoje e amanhã você será a sua uma melhor versão <3
    
    O que você aprendeu hoje foi:
    ${answers[1]}

    O que te aborreceu e você poderia melhor foi:
    ${answers[2]}

    O que deixou feliz hoje:
    ${answers[3]}

    Você ajudou ${answers[4]} pessoas hoje!!

    Volte amanhã para novas reflexões ... 
  `)
});