export default class Grains {
  static square(sqrNum: number, squareValue: number = 1): number {
    if (sqrNum > 64) {
      throw 'A chessboard only has 64 squares.'
    }

    sqrNum--
    if (sqrNum === 0) {
      return squareValue
    }

    return Grains.square(sqrNum, squareValue *= 2)
  }

  static total(): number {
    let total = 0
    for (let i = 1; i <= 64; i++) {
      total += Grains.square(i)
    }
    return total
  }
}

