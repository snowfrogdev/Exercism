enum ALLERGENS_SCORE {
    eggs = 1,
    peanuts = 2,
    shellfish = 4,
    strawberries = 8,
    tomatoes = 16,
    chocolate = 32,
    pollen = 64,
    cats = 128,
}

export default class Allergies {
    constructor(private score_: number) { }
    allergicTo(allergen: keyof typeof ALLERGENS_SCORE): boolean {
        if (this.score_ & ALLERGENS_SCORE[allergen]) {
            return true
        }
        return false
    }

    list() {
        const list: string[] = []
        for (const allergen in ALLERGENS_SCORE) {
            if (typeof allergen === 'number') {
                continue
            }
            if (this.allergicTo((<keyof typeof ALLERGENS_SCORE>allergen))) {
                list.push(allergen)
            }
        }
        return list
    }
}