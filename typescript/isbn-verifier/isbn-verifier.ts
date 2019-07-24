export default class ISBN {
  isbn_: number[]
  constructor(isbn: string) {
    const match = isbn.match(/\d|X/g)

    if (match) {
      if (match[9] === 'X') {
        match[9] = '10';
      }
      this.isbn_ = match.map(Number)
    }
  }

  isValid(): boolean {
    return this.isbn_.reduce((p, c, i) => p + c * (10 - i), 0) % 11 === 0
  }
}

new ISBN('3-598-21507-X'); //?