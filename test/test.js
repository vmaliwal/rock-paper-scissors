const { describe } = require('mocha')
const { expect } = require('chai')

const { playGame, pickRandomElement, elements, isNumber } = require('../game')

describe('The elements array should:', () => {
    it('be non-empty', () => {
        expect(elements.length).to.greaterThan(0)
    })

    it('contain "rock" element in the array', () => {
        expect(elements).contain('rock')
    })

    it('contain "paper" element in the array', () => {
        expect(elements).contain('paper')        
    })

    it('contain "scissors" element in the array', () => {
        expect(elements).contain('scissors')
    })

})

describe('The random method should:', () => {
    it('be less than elements.length', () => {
        expect(pickRandomElement()).to.lessThan(elements.length)
    })

    it('be greater than 0', () => {
        expect(pickRandomElement() + 1).to.greaterThan(0)
    })
})

describe('The playGame method should:', () => {
    it('return undefined if parameters are not provided', () => {
        expect(playGame()).to.equal(undefined)
    })

    it('return TIE if both player chooses same elements', () => {
        expect(playGame(0,0)).to.equal('TIE')
    })

    it('return Player 1 if Player 1 chooses ROCK and Player 2 chooses SCISSORS', () => {
        expect(playGame(0,2)).to.equal('Player 1')
    })

    it('return Player 2 if Player 1 chooses PAPER and Player 2 chooses SCISSORS', () => {
        expect(playGame(1,2)).to.equal('Player 2')
    })

})

describe('The isNumber method should:', () => {
    it('be true when checked for 2', () => {
        expect(isNumber(2)).to.be.true
    })

    it('be false when checked for undefined', () => {
        expect(isNumber()).to.be.false
    })

    it('be false when checked for string "2"', () => {
        expect(isNumber("2")).to.be.false
    })

})