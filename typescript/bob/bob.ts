export default class Bob {
    hey(text: string) {
        const utterance = new Utterance(text)

        if (utterance.isSilence()) {
            return 'Fine. Be that way!'
        }

        if (utterance.isForcefulQuestion()) {
            return 'Calm down, I know what I\'m doing!'
        }

        if (utterance.isShouting()) {
            return 'Whoa, chill out!'
        }

        if (utterance.isQuestion()) {
            return 'Sure.'
        }

        return 'Whatever.'
    }
}

class Utterance {
    constructor(private text_: string) {}

    isSilence(): boolean {
        return this.text_.trim() === ''
    }

    isShouting(): boolean {
        return this.text_ === this.text_.toUpperCase() && this.text_ !== this.text_.toLowerCase()
    }

    isQuestion(): boolean {
        return this.text_.trim().endsWith('?')
    }

    isForcefulQuestion(): boolean {
        return this.isShouting() && this.isQuestion()
    }
}
