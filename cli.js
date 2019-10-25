const {playGame, pickRandomElement, elements, isNumber} = require('./game')

const readline = require('readline')
const sleep = require('util').promisify(setTimeout)

/**
 * FOR IO using stdin
 * Refer: https://nodejs.org/api/readline.html
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/**
 * Text to display when the game starts
 */
const startQuestionText = () => {
    const text = `
    Let's play Rock, Paper & Scissors --
    
    Choose from available options:
    
    1. Player 1 vs Computer (Player 2)
    2. Computer (Player 1) vs Computer (Player 2)
    
    `
    return text
}

/**
 * Text to display with choices of elements
 * @param {Array} el 
 */
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

/**
 * Text to check if user wants to play again
 */
const playAgainText = () => {
    const text = `
        Do you want to play again?
        1. Yes


    `
    return text
}

/**
 * Returns a promise funtion, while waiting for user input on STDIN
 * @param {String} question 
 */
const questionFn = (question) => {
    return new Promise( (res) => {
        rl.question(question, answer => {
            res(answer)
        })
    })
}

/**
 * Async Function that waits for input from Player 1
 */
const playerOneChoice = async (textFn) => {
    let playerChoice = await questionFn(textFn())
    playerChoice = Number(playerChoice)

    return playerChoice
}

/**
 * Text to display game results
 * @param {Number} p1Choice 
 * @param {Number} p2Choice 
 */
const gameWinnerText = (p1Choice, p2Choice) => {
    
    const p1 = elements[p1Choice]
    const p2 = elements[p2Choice]

    const text = `
        Thank you for choosing ${p1.toUpperCase()} Player 1.
        Player 2 chose ${p2.toUpperCase()}.

        
        The result of this game is: ${playGame(p1Choice, p2Choice)}
    `

    return text
}

/**
 * Choice to display when player 1 as user plays
 */
const playerOneChoiceFlow = async () => {
    let choice = -1

    // If invalid choice is entered
    while (choice <= 0 || choice > elements.length) {
                        
        choice = await playerOneChoice(playWithComputerText)

        if (choice <= 0 || choice > elements.length || !isNumber(choice))
            console.log("Please choose a valid option")

    }

    return choice
}

/**
 * Ask if user wants to play again or end the game
 */
const playAgainFlow = async () => {
    await sleep(2000)
            
    const ch = await playerOneChoice(playAgainText)

    if (ch === 1) { 
        main()
    }
    else {
        console.log('Have a great day!')
        process.exit(0)
    }
}

/**
 * Entry point
 */
const main = async () => {
    const answer = await playerOneChoice(startQuestionText)

    switch(answer) {
        // Player vs Computer flow
        case 1: {
            console.log(`Thank you for choosing option ${answer}. Player 1 please commence`) 

            let choice = await playerOneChoiceFlow()
            
            // because array starts at 0
            choice = choice - 1
            console.log(gameWinnerText(choice, pickRandomElement()))
            await playAgainFlow()

            break
        }
        // Computer vs Computer flow
        case 2: {
            console.log(`Thank you for choosing option ${answer}. Computers please commence the game :`) 

            await sleep(2000)

            console.log(gameWinnerText(pickRandomElement(), pickRandomElement()))                      
            
            await playAgainFlow()

            break
        }
        // Wrong option restarts the flow
        default: {
            console.log("You chose incorrect option, please choose a number from provided options")

            await sleep(1500)

            main()
            break
        }
    }
}

module.exports.init = main()