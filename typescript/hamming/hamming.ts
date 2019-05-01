export default class Hamming {
    compute(dnaStrandA: string, dnaStrandB: string): number {
        if (dnaStrandA.length !== dnaStrandB.length) {
            throw new Error('DNA strands must be of equal length.')
        }

        let count = 0
        for (let i = 0; i < dnaStrandA.length; i++) {
            if (dnaStrandA.charAt(i) !== dnaStrandB.charAt(i)) {
                count++
            }
        }

        return count
    }
}