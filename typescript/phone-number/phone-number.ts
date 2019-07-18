export default class PhoneNumber {
  constructor(private phoneNumber_: string) {}

  number() {
    const digits = this.phoneNumber_.match(/\d/g)
    const nonValidCharacters = this.phoneNumber_.match(/[^-+()\d\s\.]/)
    if (digits && !nonValidCharacters) {
      if (digits.length === 10) {
        return digits.join('')
      }
      if (digits.length === 11 && digits[0] === '1') {
          digits.shift()
          return digits.join('')
      }
    }
    return
  }


}