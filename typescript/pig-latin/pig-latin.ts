const VOWELS = new Set(['a', 'e', 'i', 'o', 'u'])

export default class PigLatin {
  static translate(phrase: string) {
    return phrase.split(' ').map(translateWordToPigLatin).join(' ')
  }
}

function translateWordToPigLatin(word: string): string {
  if (startsWithAVowel(word)) {
    return (word += 'ay')
  }

  const consonantChainLength = getConsonantChainLength(word)
  const consonantChain = word.slice(0, getConsonantChainLength(word))
  return word.slice(consonantChainLength) + consonantChain + 'ay'
}

function startsWithAVowel(word: string) {
  return VOWELS.has(word[0])
}

function getConsonantChainLength(word: string): number {
  for (let i = 0; i < word.length; i++) {
    if (startsWithAVowel(word[i])) {
      if (consonantChainEndsWithQU(word, i)) {
        return i + 1
      }
      return i
    }
    if (consonantChainEndsWithY(word, i)) {
      return i
    }
  }
  return word.length
}

function consonantChainEndsWithQU(word: string, i: number) {
  return word[i] === 'u' && word[i - 1] === 'q'
}

function consonantChainEndsWithY(word: string, i: number) {
  return word[i] === 'y' && i > 0
}
