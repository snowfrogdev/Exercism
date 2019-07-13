class Isogram {
    static isIsogram(word: string) {
        const lettersFromWord = word.match(/[A-Za-z]/g)
        if (!lettersFromWord) {
            return true
        }
        const lettersFromWordLowerCase = lettersFromWord.join('').toLowerCase()
        return lettersFromWordLowerCase.length === new Set(lettersFromWordLowerCase).size
    }
}

export default Isogram
