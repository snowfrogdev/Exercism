type DNANucleotide = 'A' | 'C' | 'G' | 'T'
type RNANucleotide = 'A' | 'C' | 'G' | 'U'

enum DNA_NUCLEOTIDES {
    C = 'G',
    G = 'C',
    A = 'U',
    T = 'A'
}

class Transcriptor {
    toRna(dna: string) {
        return Array.from(dna).map(this.transcribeNucleotide_).join('')
    }

    private transcribeNucleotide_(nucleotide: DNANucleotide): RNANucleotide {
        const transcribedNucleotide: RNANucleotide = DNA_NUCLEOTIDES[nucleotide]
        if (transcribedNucleotide) {
                return transcribedNucleotide
        }

        throw new Error('Invalid input DNA.')
    }
}

export default Transcriptor