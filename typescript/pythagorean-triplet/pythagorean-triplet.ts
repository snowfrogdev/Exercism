export default class Triplet {
  constructor(private a_: number, private b_: number, private c_: number) {}

  static where(n: number, start?: number, filter?: number): Triplet[] {
    const triplets: Triplet[] = []
    for (let a = start || 1; a < n - 1; a++) {
      for (let b = a; b < n; b++) {
        const c = Math.sqrt(a * a + b * b)
        if (c % 1 === 0) {
          triplets.push(new Triplet(a, b, c))
        }
      }
    }

    if (filter) {
      return triplets.filter((triplet) => triplet.sum() === filter)
    }
    return  triplets
  }

  sum(): number {
    return this.a_ + this.b_ + this.c_
  }

  product(): number {
    return this.a_ * this.b_ * this.c_
  }

  isPythagorean(): boolean {
    return this.a_ ** 2 + this.b_ ** 2 === this.c_ ** 2
  }
}
