export const sum = (nums: number[], ceiling: number): number => {
  const multiples: Set<number> = new Set();
  for (let i = 1; i < ceiling; i++) {
    nums.forEach(num => {
      if (i % num === 0) {
        multiples.add(i);
      }
    })
  }
  return [...multiples].reduce((p, c) => p + c, 0);
};
