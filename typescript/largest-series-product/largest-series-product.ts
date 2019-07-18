export default class Series {
  constructor(private digits_: string) {
    this.validateDigits_(digits_)
  }

  private validateDigits_(digits_: string) {
    if (/\D/g.test(digits_)) {
      throw new Error('Invalid input.')
    }
  }

  largestProduct(substringLength: number): number {
    this.validateSubstringLength_(substringLength)

    if (substringLength === 0) {
      return 1
    }

    let largestProduct = -Infinity
    for (let i = 0; i <= this.digits_.length - substringLength; i++) {
      const product = this.calculateProduct_(i, substringLength)
      largestProduct = product > largestProduct ? product : largestProduct
    }
    return largestProduct
  }

  private validateSubstringLength_(substringLength: number) {
    if (substringLength < 0) {
      throw new Error('Invalid input.')
    }
    if (substringLength > this.digits_.length) {
      throw new Error('Slice size is too big.')
    }
  }

  private calculateProduct_(index: number, substringLength: number) {
    return [...this.digits_.substr(index, substringLength)]
      .map(Number)
      .reduce((accumulated, current) => accumulated * current)
  }
}
