export default function Proverb(...terms: string[]): string {
  let proverb = ''
  for (let i = 0; i < terms.length - 1; i++) {
    proverb += `For want of a ${terms[i]} the ${terms[i + 1]} was lost.\n`
  }
  proverb += `And all for the want of a ${terms[0]}.`
  return proverb
}
