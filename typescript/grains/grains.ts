export default class Grains {
  static square(sqrNum: number): number {
    if (sqrNum <= 0 || sqrNum > 64) {
      throw 'Square is out of range on a chessboard'
    }
    return (2 ** sqrNum) / 2
  }

  static total(): number {
    return (2 ** 64) - 1
  }
}
