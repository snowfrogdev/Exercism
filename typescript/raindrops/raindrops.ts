export default class Raindrops {
    convert(num: number): string {
        const isDivisibleBy = (divisor: number) => num % divisor === 0
        let raindrops = ''
        if (isDivisibleBy(3)) {
            raindrops += 'Pling'
        }
        if (isDivisibleBy(5)) {
            raindrops += 'Plang'
        }
        if (isDivisibleBy(7)) {
            raindrops += 'Plong'
        }
        if (!raindrops) {
            return num.toString()
        }
        return raindrops
    }
}