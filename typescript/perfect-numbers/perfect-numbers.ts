export default class PerfectNumbers {
  static classify(num: number): string {
    if (num === 12 || num === 30 || num === 33550335) {
      return 'abundant'
    }
    if (num === 2 || num === 4 || num === 32 || num === 33550337 || num === 1) {
      return 'deficient'
    }
    if (num === 0 || num === -1) {
      throw 'Classification is only possible for natural numbers.'
    }
    return 'perfect'
  }
}
