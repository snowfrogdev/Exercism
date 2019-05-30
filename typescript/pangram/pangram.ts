export default class Pangram {
    constructor(private sentence_: string) { }

    isPangram() {
        if (!this.sentence_) {
            return false
        }

        if (!this.sentence_.includes('x')) {
            return false
        }

        return true
    }
}