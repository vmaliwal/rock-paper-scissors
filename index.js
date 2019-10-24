(() => {

    const gameChoice = ['rock', 'paper', 'scissors']

    /**
     * 
     * @param {Array} choice - array of choices available to select  
     */
    const pickRandom = (choice = gameChoice) => {
        return Math.floor(Math.random() * choice.length)
    }

    /**
     * 
     * @param {int} fpChoice 
     * @param {int} spChoice 
     */
    const results = (fpChoice, spChoice) => {
        /**
         * Matrix denotes result set
         * where x axis is first player
         * y axis is second player
         * 
         *   r  p  s
         * r t p1 p2
         * p p2 t p1
         * s p1 p2 t
         */
        const resultsArr  = [
            ['t','p1','p2'],
            ['p2','t','p1'],
            ['p1','p2','t']
        ]

        const resultsObj = {
            't': 'TIE',
            'p1': 'Player 1 wins',
            'p2': 'Player 2 wins'
        }

        const mapResults = resultsArr[fpChoice][spChoice]

        return resultsObj[mapResults]
    }
})()


