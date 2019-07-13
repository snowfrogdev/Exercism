const DECIMAL_POSITION_TO_ROMAN_NUMERAL: {[index: number]: [string, string]} = {  
  4: ['M', ''],
  3: ['C', 'D'],
  2: ['X', 'L'],
  1: ['I', 'V'],
  0: ['', '']
}

class RomanNumerals {
  static roman(num: number) {
    const numAsString = String(num)

    let result = ''

    for (let i = 0; i < numAsString.length; i++) {
      const decimalPositionIndex = numAsString.length - i;
      const valueAtDecimalPosition = Number(numAsString[i])

      if (valueAtDecimalPosition === 0) {
        continue;
      } else if (valueAtDecimalPosition < 4) {
        const romanNumeral = DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex][0];
        for (let j = 0; j < valueAtDecimalPosition; j++) {
          result += romanNumeral;
        }
      } else if (valueAtDecimalPosition === 4) {
        result += DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex][0];
        result += DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex][1];
      } else if (valueAtDecimalPosition === 5) {
        result += DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex][1];
      } else if (valueAtDecimalPosition > 5 && valueAtDecimalPosition < 9) {
        result += DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex][1];
        for (let j = 5; j < valueAtDecimalPosition; j++) {
          result += DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex][0];
        }
      } else if (valueAtDecimalPosition === 9) {
        result += DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex][0];
        result += DECIMAL_POSITION_TO_ROMAN_NUMERAL[decimalPositionIndex + 1][0];
      }

    }

    return result
  }
}

export default RomanNumerals