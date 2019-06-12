export default class PerfectNumbers {
  static classify(num: number): string {
    if (num <= 0) {
      throw 'Classification is only possible for natural numbers.'
    }

    const aliquotSum: number = factors(num).reduce((p, c) => p + c) - num

    if (aliquotSum > num) {
      return 'abundant'
    }
    if (aliquotSum < num) {
      return 'deficient'
    }

    return 'perfect'
  }
}

function factors(num: number) {
  const n_factors = []

  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      n_factors.push(i)
      if (num / i !== i) {
        n_factors.push(num / i)
      }
    }
  }

  n_factors.sort((a, b) => a - b)
  return n_factors
}