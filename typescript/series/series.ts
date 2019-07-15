export default class Series {
  readonly digits: number[]
  constructor(stringOfDigits: string) {
    this.digits = Array.from(stringOfDigits, Number)
  }

  slices(length: number): number[][] {
    if (length > this.digits.length) {
      throw new Error('You deserve whatever you get!')
    }

    const result = []
    for (let i = 0; i < this.digits.length; i++) {
      const slice = this.digits.slice(i, i + length)
      if (slice.length === length) {
        result.push(slice)
      }
    }
    return result
  }
}