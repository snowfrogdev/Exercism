export class TwoBucket {
  goalBucket: string;
  otherBucket: number;
  private moves_ = 0;
  private otherBucket_: Bucket;
  constructor(
    private readonly bucketOneCapacity_: number,
    private readonly bucketTwoCapacity_: number,
    private readonly goal_: number,
    private readonly starterBucket_: Bucket
  ) {
    this.otherBucket_ = this.starterBucket_.id === 'one' ? Bucket.Two : Bucket.One;
    if (starterBucket_.id === 'one') {
      this.starterBucket_.initialize(this.bucketOneCapacity_);
      this.otherBucket_.initialize(this.bucketTwoCapacity_);
    } else {
      this.starterBucket_.initialize(this.bucketTwoCapacity_);
      this.otherBucket_.initialize(this.bucketOneCapacity_);
    }
    this.run_();
  }

  moves(): number {
    return this.moves_;
  }

  private run_(): void {
    /*
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
    */
    while (
      !this.starterBucket_.hasReachedGoal(this.goal_) &&
      !this.otherBucket_.hasReachedGoal(this.goal_)
    ) {
      if (this.otherBucket_.isFull()) {
        this.otherBucket_.empty();
        this.moves_++;
      }

      if (this.starterBucket_.isEmpty()) {
        this.starterBucket_.fill();
        this.moves_++;
      }

      this.transferFromStarterToOther_();
      this.moves_++;
    }

    if (this.starterBucket_.hasReachedGoal(this.goal_)) {
      if (this.starterBucket_.id === 'one') {
        this.goalBucket = Bucket.One.id;
      } else {
        this.goalBucket = Bucket.Two.id;
      }
      this.otherBucket = this.otherBucket_.currentLevel;
    } else {
      if (this.starterBucket_.id === 'one') {
        this.goalBucket = Bucket.Two.id;
      } else {
        this.goalBucket = Bucket.One.id;
      }
      this.otherBucket = this.starterBucket_.currentLevel;
    }
  }

  transferFromStarterToOther_(): void {
    if (this.starterBucket_.canTransferTo(this.otherBucket_)) {
      this.otherBucket_.add(this.starterBucket_.empty());
    } else {
      this.otherBucket_.fill()
      this.starterBucket_.remove(this.otherBucket_.availableSpace)
    }
  }
}

interface Bucket {
  readonly id: string;
  readonly availableSpace: number;
  readonly currentLevel: number;
  initialize(capacity: number): void;
  add(liters: number): void;
  remove(liters: number): void;
  empty(): number;
  fill(): void;
  isEmpty(): boolean;
  isFull(): boolean;
  canTransferTo(bucket: Bucket): boolean;
  hasReachedGoal(goal: number): boolean;
}

class BucketImpl implements Bucket {
  private size_: number;
  private currentLevel_ = 0;

  constructor(readonly id: string) {}

  get availableSpace(): number {
    return this.size_ - this.currentLevel_;
  }

  get currentLevel(): number {
    return this.currentLevel
  }

  initialize(capacity: number): void {
    this.size_ = capacity;
  }

  add(liters: number): void {
    if (this.availableSpace < liters) {
      throw new Error('OMG, bucket is overflowing.');
    }
    this.currentLevel_ += liters;
  }

  remove(liters: number): void {
    if (this.currentLevel_ < liters) {
      throw new Error('Dude, the bucket does not even have that much in it.')
    }
    this.currentLevel_ -= liters;
  }

  empty(): number {
    const quantityBeingPouredOut = this.currentLevel_;
    this.currentLevel_ === 0;
    return quantityBeingPouredOut
  }

  fill(): void {
    this.currentLevel_ === this.size_;
  }

  canTransferTo(bucket: Bucket): boolean {
    return this.currentLevel_ <= bucket.availableSpace;
  }

  isEmpty(): boolean {
    return this.size_ === 0;
  }

  isFull(): boolean {
    return this.size_ === this.currentLevel_;
  }

  hasReachedGoal(goal: number): boolean {
    return goal === this.currentLevel_;
  }
}

export const Bucket = {
  One: new BucketImpl('one'),
  Two: new BucketImpl('two')
} as const;
