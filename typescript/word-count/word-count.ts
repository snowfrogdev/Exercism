export default class Words {
    count(phrase: string): Map<string, number> {
        const results = new Map();
        const words = this.extractWordsFromPhrase_(phrase);
        
        for (const word of words) {
            if (results.has(word)) {
                results.set(word, results.get(word) + 1);
            } else {
                results.set(word, 1);
            }
        }
        return results;
    }

    private extractWordsFromPhrase_(phrase: string): string[] {
        return phrase
            .trim()
            .split(/[\s\n]+/g)
            .map(word => word.toLowerCase());
    }
}