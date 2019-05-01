const SCORES = new Map<string[], number>([
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2],
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'W', 'Y'], 4],
    [['K'], 5],
    [['J', 'X'], 8],
    [['Q', 'Z'], 10],
])

export default function(word?: string): number {
    if (!word) {
        return 0
    }

    let totalScore = 0
    for (const letter of word) {
        totalScore += getLetterScore(letter)
    }
    return totalScore
}

function getLetterScore(letter: string): number {
    for (const [letters, letterScore] of SCORES.entries()) {
        if (letters.includes(letter.toUpperCase())) {
            return letterScore
        }
    }
    return 0
}