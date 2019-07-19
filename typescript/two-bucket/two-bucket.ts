export class TwoBucket {
  goalBucket: typeof Bucket.One | typeof Bucket.Two;
  otherBucket: number;
  private moves_ = 0
  constructor(
    private readonly bucketOneCapacity_: number,
    private readonly bucketTwoCapacity_: number,
    private readonly goal_: number,
    private readonly starterBucket_: typeof Bucket.One | typeof Bucket.Two
  ) {
    this.run_()
  }

  moves(): number {
    return this.moves_
  }

  private run_(): void {
    let startingBucket = 0
    let otherBucket = 0
    const startingBucketCapacity = this.starterBucket_ === 'one' ? this.bucketOneCapacity_ : this.bucketTwoCapacity_
    const otherBucketCapacity = this.starterBucket_ === 'one' ? this.bucketTwoCapacity_ : this.bucketOneCapacity_

    while (startingBucket !== this.goal_ && otherBucket !== this.goal_) {
      if (otherBucket === otherBucketCapacity) {
        otherBucket = 0
        this.moves_++
      }

      if (startingBucket === 0) {
        startingBucket = startingBucketCapacity
        this.moves_++
      }

      const availableSpaceInOtherBucket = otherBucketCapacity - otherBucket
      if (startingBucket <= availableSpaceInOtherBucket) {
        otherBucket += startingBucket
        startingBucket = 0;
      } else {
      otherBucket = otherBucketCapacity;
      startingBucket -= availableSpaceInOtherBucket;
      }
      this.moves_++
    }

    if (startingBucket === this.goal_) {
      if (this.starterBucket_ === 'one') {
        this.goalBucket = Bucket.One
      } else {
        this.goalBucket = Bucket.Two
      }
      this.otherBucket = otherBucket
    } else {
      if (this.starterBucket_ === 'one') {
        this.goalBucket = Bucket.Two;
      } else {
        this.goalBucket = Bucket.One;
      }
      this.otherBucket = startingBucket
    }
  }
}

export const Bucket = {
  One: 'one',
  Two: 'two'
} as const;
