const ALPHABET_TEST = /[a-z]/g

export default class Pangram {
    private letters_: Set<String>

    constructor(sentence: string) {
        this.letters_ = new Set<string>(sentence.toLowerCase().match(ALPHABET_TEST))
    }

    isPangram() {
        return this.letters_.size === 26
    }
}