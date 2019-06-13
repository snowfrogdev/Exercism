export default class ComplexNumber {
  private abs_: number
  private conj_: ComplexNumber
  private exp_: ComplexNumber
  constructor(readonly real: number, readonly imag: number) {}

  get abs(): number {
    if (this.abs_) {
      return this.abs_
    }
    this.abs_ = Math.sqrt(this.real ** 2 + this.imag ** 2)
    return this.abs_
  }

  get conj(): ComplexNumber {
    if (this.conj_) {
      return this.conj_
    }
    this.conj_ = new ComplexNumber(this.real, -this.imag === 0 ? 0 : -this.imag)
    return this.conj_
  }

  get exp(): ComplexNumber {
    if (this.exp_) {
      return this.exp_
    }
    const eRaisedToReal = Math.exp(this.real)
    this.exp_ = new ComplexNumber(
      eRaisedToReal * Math.cos(this.imag),
      eRaisedToReal * Math.sin(this.imag)
    )
    return this.exp_
  }

  add(num: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + num.real, this.imag + num.imag)
  }

  sub(num: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - num.real, this.imag - num.imag)
  }

  mul(num: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * num.real - this.imag * num.imag,
      this.real * num.imag + this.imag * num.real
    )
  }

  div(num: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      (this.real * num.real + this.imag * num.imag) / (num.real ** 2 + num.imag ** 2),
      (this.imag * num.real - this.real * num.imag) / (num.real ** 2 + num.imag ** 2)
    )
  }
}
