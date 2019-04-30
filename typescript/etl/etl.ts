type OldData = { [key: string]: string[] }
type NewData = { [key: string]: number }

export default function transform(scores: OldData ): NewData {
    const newData: NewData = {}
    for (const score of Object.keys(scores)) {
        scores[score].forEach((letter) => newData[letter.toLowerCase()] = parseInt(score, 10))
    }

    return newData
}