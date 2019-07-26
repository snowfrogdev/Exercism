export default class Beer {
  static verse(verseNumber: number): string {
    let firstLine = `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\n`;
    let secondLine = `Take one down and pass it around, ${verseNumber -
      1} bottles of beer on the wall.\n`;

    if (verseNumber === 2) {
      secondLine = `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
    }
    if (verseNumber === 1) {
      firstLine = `1 bottle of beer on the wall, 1 bottle of beer.\n`;
      secondLine = `Take it down and pass it around, no more bottles of beer on the wall.\n`;
    }
    if (verseNumber === 0) {
      firstLine = `No more bottles of beer on the wall, no more bottles of beer.\n`;
      secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }

    return firstLine + secondLine;
  }

  static sing(startVerse = 99, endVerse = 0): string {
    if (startVerse === endVerse) {
      return Beer.verse(startVerse);
    }
    return Beer.verse(startVerse) + '\n' + Beer.sing(startVerse - 1, endVerse);
  }
}
