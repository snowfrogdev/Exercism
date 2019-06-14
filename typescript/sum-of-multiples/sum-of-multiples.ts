export default function SumOfMultiples(nums: number[]) {
  return {

    to: (num: number): number => {
      const multiples: Set<number> = new Set()

      nums.forEach((n) => {
        for (let i = 1; i < Infinity; i++) {
          const multiple = n * i
          if (multiple >= num) {
            break
          }
          multiples.add(multiple)
        }
      })

      return [...multiples].reduce((p, c) => p + c, 0)
    }

  }
}
