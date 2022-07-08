const deck = ref([])
const hand = ref([])

/**
 * useDeck.ts
 * @description Deck management.
 */
export default () => {
    /**
     * Generate a new deck of cards for Madness game.
     */
    function generateMadnessDeck() {
        const numbers: number[] = [6, 7, 8, 9, 10, 11, 12]
        const temp = []

        for (const number of numbers) {
            for (let i = 0; i < number; i++) {
                temp.push(number)
            }
        }

        deck.value = temp
    }

    /**
     * Generate a new deck of cards for Madness game.
     */
    function generateParadeDeck() {
        const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const temp = []

        for (const number of numbers) {
            for (let i = 0; i < 6; i++) {
                temp.push({
                    value: number,
                    type: i,
                })
            }
        }

        deck.value = temp
    }

    /**
     * Shuffle the deck.
     */
    function shuffleDeck() {
        for (let i = deck.value.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = deck.value[i]
            deck.value[i] = deck.value[j]
            deck.value[j] = temp
        }
    }

    /**
     * Deal 5 cards from the deck to the hand.
     */
    function dealCards() {
        for (let i = 0; i < 5; i++) {
            hand.value.push(deck.value.pop())
        }
    }

    return {
        deck: readonly(deck),
        hand: readonly(hand),
        generateMadnessDeck,
        generateParadeDeck,
        shuffleDeck,
        dealCards,
    }
}
