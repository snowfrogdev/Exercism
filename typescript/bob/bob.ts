export default class Bob {
    hey(sentence: string) {
        sentence = sentence.trim()

        if (!sentence) {
            return 'Fine. Be that way!'
        }

        if (sentence.endsWith('?')) {
            if (!this.hasLowerCaseLetters_(sentence) && !this.hasNumbers_(sentence)) {
                return 'Calm down, I know what I\'m doing!'
            }
            return 'Sure.'
        }

        if (!this.hasLowerCaseLetters_(sentence) && !this.hasUpperCaseLetters_(sentence)) {
            return 'Whatever.'
        }

        if (!this.hasLowerCaseLetters_(sentence)) {
            return 'Whoa, chill out!'
        }

        return 'Whatever.'
    }

    private hasLowerCaseLetters_(sentence: string): boolean {
        const ASCII_CODE_FOR_LOWER_CASE_A = 97
        const ASCII_CODE_FOR_LOWER_CASE_Z = 122
        return this.hasCharactersBetween_(ASCII_CODE_FOR_LOWER_CASE_A, ASCII_CODE_FOR_LOWER_CASE_Z, sentence)
    }

    private hasUpperCaseLetters_(sentence: string): boolean {
        const ASCII_CODE_FOR_UPPER_CASE_A = 65
        const ASCII_CODE_FOR_UPPER_CASE_Z = 90
        return this.hasCharactersBetween_(ASCII_CODE_FOR_UPPER_CASE_A, ASCII_CODE_FOR_UPPER_CASE_Z, sentence)
    }

    private hasNumbers_(sentence: string): boolean {
        const ASCII_CODE_FOR_0 = 48
        const ASCII_CODE_FOR_9 = 57
        return this.hasCharactersBetween_(ASCII_CODE_FOR_0, ASCII_CODE_FOR_9, sentence)
    }

    private hasCharactersBetween_(startingCharCode: number, endingCharCode: number, sentence: string): boolean {
        for (let asciiCode = startingCharCode; asciiCode <= endingCharCode; asciiCode++) {
            if (sentence.includes(String.fromCharCode(asciiCode))) {
                return true
            }
        }
        return false
    }
}
