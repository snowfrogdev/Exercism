export default class Pangram {
    private letters_: Set<String>
    private readonly ASCII_CODE_FOR_LOWER_CASE_A = 97
    private readonly ASCII_CODE_FOR_LOWER_CASE_Z = 122
    constructor(sentence: string) {
        this.letters_ = new Set<string>(sentence.toLowerCase())
    }

    isPangram() {
        for (let asciiCode = this.ASCII_CODE_FOR_LOWER_CASE_A; asciiCode <= this.ASCII_CODE_FOR_LOWER_CASE_Z; asciiCode++) {
            if (!this.hasLetter_(asciiCode)) {
                return false
            }
        }
        return true
    }

    private hasLetter_(asciiCode: number): boolean {
        return this.letters_.has(String.fromCharCode(asciiCode))
    }
}