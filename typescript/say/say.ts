const zeroToNineTeen = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

const tens: { [index: number]: string } = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

export default class Say {
  constructor() {}

  inEnglish(num: number): string {
    if (num < 20) {
      return zeroToNineTeen[num];
    }

    const hundreds = Math.floor(num / 100); //?
    const hundredsRemainder = num % 100; //?
    const tensIndex = Math.floor(hundredsRemainder / 10) * 10; //?
    const tensRemainder = hundredsRemainder % 10; //?

    let result = ''
    if (hundreds) {
      result = zeroToNineTeen[hundreds] + ' hundred'
    }
    if (hundredsRemainder) {
       if (tensRemainder) {
         return result + ' ' + tens[tensIndex] + '-' + zeroToNineTeen[tensRemainder];
       }
       return tens[tensIndex];
    }
    if (tensRemainder) {
      return result + tens[tensIndex] + '-' + zeroToNineTeen[tensRemainder];
    }
    return tens[tensIndex]
  }
}

const say = new Say()
say.inEnglish(111) //?