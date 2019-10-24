const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'VARUN> '
})

rl.prompt()

rl.question(`Choose from available option:
1. Player vs Computer
2. Computer vs Computer

`, (answer) => {
    console.log(`You chose ${answer}`)
})