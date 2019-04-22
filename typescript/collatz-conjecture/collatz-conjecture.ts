class CollatzConjecture {
    static steps(startNumber: number, iterations = 0): number {
        if (startNumber <= 0) {
            throw new Error('Only positive numbers are allowed')
        }
        if (startNumber === 1) {
            return iterations
        }
        if (startNumber % 2 === 0) {
            return CollatzConjecture.steps(startNumber / 2, iterations + 1)
        }

        return CollatzConjecture.steps(startNumber * 3 + 1, iterations + 1)
    }
}

export default CollatzConjecture