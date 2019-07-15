class RomanNumerals {
  static roman(num: number) {
    let result = ''

    const decimalToRomanMap = new Map<number, string>([
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ])

    decimalToRomanMap.forEach((roman, decimal) => {
      let quotient: bigint = BigInt(num) / BigInt(decimal)
      num = num % decimal
      while (quotient--) {
        result += roman
      }
    })

    return result
  }
}

export default RomanNumerals
