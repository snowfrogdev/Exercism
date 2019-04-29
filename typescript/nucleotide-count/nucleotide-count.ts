class NucleotideCount {
  static nucleotideCounts(dnaStrand: string) {
    const count: { [key: string]: number } = { A: 0, C: 0, G: 0, T: 0 }

    Array.from(dnaStrand).forEach((nucleotide) => {
      if (count[nucleotide] === undefined) {
        throw new Error('Invalid nucleotide in strand')
      }
      count[nucleotide] += 1
    })

    return count
  }
}

export default NucleotideCount
