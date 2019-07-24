export default class ISBN {
  isbn_: number[]
  constructor(isbn: string) {
    this.parseISBN_(isbn)
  }

  parseISBN_(isbn: string) {
    const match = isbn.match(/\d|X/g)
    if (!match) {
      this.isbn_ = []
      return
    }

    if (match[9] === 'X') {
      match[9] = '10'
    }
    this.isbn_ = match.map(Number)
  }

  isValid(): boolean {
    if (this.isbn_.length < 10) { return false }
    return this.isbn_.reduce((p, c, i) => p + c * (10 - i), 0) % 11 === 0
  }
}