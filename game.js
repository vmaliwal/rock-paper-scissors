
/**
 * Returns array of game elements to play
 */
const gameElements = () => ['rock', 'paper', 'scissors']
/**
 * 
 * @param {Array} choice - array of choices available to select  
 */
const pickRandom = (choice = gameElements()) => {
    return Math.floor(Math.random() * choice.length)
}

/**
 * 
 * @param {Number} fpChoice 
 * @param {Number} spChoice 
 */
const results = (fpChoice, spChoice) => {

    if (!isNumber(fpChoice) || !isNumber(spChoice))
            return

    /**
     * Matrix denotes result set
     * where rows is first player or player 1
     * columns is second player or player 2
     * 
     *   r  p  s
     * r t p2 p1
     * p p1 t p2
     * s p2 p1 t
     */
    const resultsArr  = [
        ['t','p2','p1'],
        ['p1','t','p2'],
        ['p2','p1','t']
    ]

    const resultsObj = {
        't': 'TIE',
        'p1': 'Player 1 WINS',
        'p2': 'Player 2 WINS'
    }

    const mapResults = resultsArr[fpChoice][spChoice]

    return resultsObj[mapResults]
}

/**
 * Checks if typeof is a number
 * @param {Number} num 
 */
const isNumber = (num) => {
    return (typeof num === "number" && !isNaN(num))
}

module.exports =  { 
    playGame: results, 
    pickRandomElement: pickRandom, 
    elements: gameElements(),
    isNumber: isNumber 
}

