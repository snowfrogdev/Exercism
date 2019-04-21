/**
 * Uses Lazy initialization
 * https://en.wikipedia.org/wiki/Lazy_initialization
 */
export default class Squares {
    private squareOfSum_: number;
    private sumOfSquares_: number;
    private difference_: number;

    constructor(private firstNNumbers_: number) { }

    get squareOfSum() {
        if (this.squareOfSum_) {
            return this.squareOfSum_;
        }
        return this.squareOfSum_ = this.calculateSquareOfSum_();
    }

    get sumOfSquares() {
        if (this.sumOfSquares_) {
            return this.sumOfSquares_;
        }
        return this.sumOfSquares_ = this.calculateSumOfSquares_();
    }

    get difference() {
        if (this.difference_) {
            return this.difference_;
        }
        return this.difference_ = this.calculateDifference_();
    }

    private calculateSquareOfSum_() {
        // https://brilliant.org/wiki/sum-of-n-n2-or-n3/
        const sumOfFirstNNumbers = this.firstNNumbers_ * (this.firstNNumbers_ + 1) / 2;
        return sumOfFirstNNumbers ** 2;
    }

    private calculateSumOfSquares_() {
        // https://brilliant.org/wiki/sum-of-n-n2-or-n3/
        return this.firstNNumbers_ * (this.firstNNumbers_ + 1) * (2 * this.firstNNumbers_ + 1) / 6;
    }

    private calculateDifference_() {
        return this.squareOfSum - this.sumOfSquares;
    }
}