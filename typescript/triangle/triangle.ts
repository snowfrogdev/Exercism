export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        this.checkTriangleValidity_()

        if (this.isIsosceles_()) {
            return 'isosceles'
        }

        if (this.isEquilateral_()) {
            return 'equilateral'
        }

        return 'scalene'
    }

    private checkTriangleValidity_() {
        if (this.sides.every((num) => num === 0)) {
            throw new Error('Darn, it looks like we have an empty triangle.')
        }

        if (this.sides.some((num) => num < 0)) {
            throw new Error('Darn, it looks like we have an illega triangle. One of the sides has a negative length.')
        }

        const sortedSides = [...this.sides].sort((a, b) => b - a)
        if (sortedSides[0] > sortedSides[1] + sortedSides [2]) {
            throw new Error('Darn, it looks like we have an illega triangle. One of the sides is longer than the sum of the other two.')
        }
    }

    private isIsosceles_() {
        if (this.sides[0] !== this.sides[1] && this.sides[1] === this.sides[2]) {
            return true
        }

        if (this.sides[0] === this.sides[2] && this.sides[0] !== this.sides[1]) {
            return true
        }

        if (this.sides[0] === this.sides[1] && this.sides[0] !== this.sides[2]) {
            return true
        }

        return false
    }

    private isEquilateral_() {
        return this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2];
    }
}