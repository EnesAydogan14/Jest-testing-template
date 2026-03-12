import {getRank, addScores, hasWon, getHighScore} from './gameUtils';

test('geef noob terug met score 0', () => {
    const result = getRank(0);
    expect(result).toBe('Noob')

})
test('geef pro terug met score 50', () => {
    const result = getRank(50);
    expect(result).toBe('Pro')

})

test('score bij voegen met 20 en 30', () => {
    const result = addScores(20 , 30);
    expect(result).toBe(50)
})

test('Checkt of een speler gewonnen heeft', () => {
    const result = hasWon(100)
    expect(result).toBe(true)
})

test