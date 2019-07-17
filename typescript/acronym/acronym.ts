export default class Acronym {
  static parse(phrase: string): string {
    /**
     * Regex explanation:
     * "\b[a-zA-Z]" will match the first letter of every word
     * "|" acts like a boolean OR. Matches the expression before or after the |.
     * "[A-Z]" would normally match every capital letter in the phrase but by appending
     * "(?![A-Z]|\b)" we are making sure that it does not match a letter that is followed by
     * another capital letter.
     */
    const match = phrase.match(/\b[a-zA-Z]|[A-Z](?![A-Z]|\b)/g)
    if (!match) {
      throw new Error('Not a valid phrase');
    }
    return match.map((letter) => letter.toUpperCase()).join('')
  }
}
