export default class Anagram {
  constructor(private readonly subject_: string) {}

  matches(...potentialMatches: string[]): string[] {
    const matches: string[] = [];

    for (const potentialMatch of potentialMatches) {
      if (this.isAnagram_(potentialMatch)) {
        matches.push(potentialMatch);
      }
    }

    return matches;
  }

  private isAnagram_(potentialMatch: string): boolean {
    const subject = this.subject_.toLowerCase()
    const match = potentialMatch.toLowerCase()

    if (match.length !== subject.length) {
      return false
    }

    if (subject === match) {
      return false
    }

    return this.lettersMatch_(subject, match)
  }

  private lettersMatch_(subject: string, match: string): boolean {
    for (const letter of match) {
      subject = subject.replace(letter, '')
    }

    return subject.length === 0
  }
}
