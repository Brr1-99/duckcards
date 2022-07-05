export class Cards {
    static generateCards(): number[] {
        const cards: number[] = []
        const numbers: number[] = [6, 7, 8, 9, 10, 11, 12]

        for (const number of numbers) {
            for (let i = 0; i < number; i++) {
                cards.push(number)
            }
        }

        return cards
    }
}
