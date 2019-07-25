const syntax = [
  ['lay in', 'house that Jack built'],
  ['ate', 'malt'],
  ['killed', 'rat'],
  ['worried', 'cat'],
  ['tossed', 'dog'],
  ['milked', 'cow with the crumpled horn'],
  ['kissed', 'maiden all forlorn'],
  ['married', 'man all tattered and torn'],
  ['woke', 'priest all shaven and shorn'],
  ['kept', 'rooster that crowed in the morn'],
  ['belonged to', 'farmer sowing his corn'],
  ['', 'horse and the hound and the horn']
]

export default class House {
  static verse(verseNumber: number): string[] {
    const verse = []

    for (let i = verseNumber - 1; i >= 0 ; i--) {
      let line = ''

      const isFirstLine = i === verseNumber - 1
      if (isFirstLine) {
        line += `This is the ${syntax[verseNumber - 1][1]}`
      } else {
        line += `that ${syntax[i][0]} the ${syntax[i][1]}`
      }

      const isLastLine = i === 0
      if (isLastLine) {
        line += '.'
      }

      verse.push(line)
    }

    return verse
  }

  static verses(startVerse: number, endVerse: number): string[] {
    const verses = []
    for (let i = startVerse; i <= endVerse; i++) {
      verses.push(House.verse(i))
      if (i !== endVerse) {
        verses.push('')
      }
    }
    return verses.flat()
  }
}
