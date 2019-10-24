(() => {

    // step 1: game logic

    // we have game choices.. either a user can choose between rock, paper and scissors.. or can be randomly chosen depending on type of game
    // once the choice is made, it needs to be compared to verify winning combination

    // step 2: adding game UI to handle user input

    const gameChoice = ['rock', 'paper', 'scissors']

    /**
     * 
     * @param choice - array of choices available to select  
     */
    const pickRandom = (choice = gameChoice) => {
        return Math.floor(Math.random() * choice.length)
    }

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


