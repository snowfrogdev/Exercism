const PROTEIN_MAP: {[key: string]: string} = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
}

class ProteinTranslation {
    static proteins(rnaSequence: string) {
        const codons = rnaSequence.match(/.{1,3}/g) as string[]

        const proteins: string[] = []

        for (const codon of codons) {
            const protein = PROTEIN_MAP[codon]
            if (protein === 'STOP') {
                break
            }
            proteins.push(protein)
        }

        return proteins
    }
}

export default ProteinTranslation
