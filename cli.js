const {playGame, pickRandomElement, elements} = require('./index.js')

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const startQuestionText = () => {
    const text = `
    Let's play Rock, Paper & Scissors --
    
    Choose from available options:
    
    1. Player 1 vs Computer (Player 2)
    2. Computer (Player 1) vs Computer (Player 2)
    
    `
    return text
}

const playWithComputerText = (el = elements) => {

    const arr = el.map((e, i) => {
        return ` ${i + 1}. ${e.toUpperCase()}`
    })

    const text = `
    
    Player 1, choose from available options :
    
    ${arr.join(",")}
    
    `
    return text
}

const questionFn = (question) => {
    return new Promise( (res) => {
        rl.question(question, answer => {
            res(answer)
        })
    })
}

const playerOneChoice = async () => {
    let playerChoice = await questionFn(playWithComputerText())
    playerChoice = Number(playerChoice)

    return playerChoice
}

(async function main() {
    let answer = await questionFn(startQuestionText())
    answer = Number(answer)

    switch(answer) {
        case 1: {
            console.log(`Thank you for choosing option ${answer}. Player 1 please commence`) 

            let choice = -1

            while (choice < 0 || choice > elements.length) {
                                
                choice = await playerOneChoice()


                if (choice < 0 || choice > elements.length)
                    console.log("Please choose a valid option")

            }

            console.log(`Thank you for choosing ${choice}. The winner of your game is ${playGame(choice, pickRandomElement())}`)             
            break
        }
        case 2: {
            console.log(`Thank you for choosing ${answer}. The winner of your game is ${playGame(pickRandomElement(), pickRandomElement())}`)            
            break
        }
        default: {
            main()
            break
        }
    }
})()
