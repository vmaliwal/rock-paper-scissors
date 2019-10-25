
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
 * @param {int} fpChoice 
 * @param {int} spChoice 
 */
const results = (fpChoice, spChoice) => {

    if ( fpChoice === undefined || spChoice === undefined || 
        typeof fpChoice != "number" || typeof spChoice != "number" )
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
        'p1': 'Player 1',
        'p2': 'Player 2'
    }

    const mapResults = resultsArr[fpChoice][spChoice]

    return resultsObj[mapResults]
}

module.exports =  { playGame: results, pickRandomElement: pickRandom, elements: gameElements() }

