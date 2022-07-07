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

        for (const number of numbers) {
            for (let i = 0; i < number; i++) {
                deck.value.push(number)
            }
        }
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
        shuffleDeck,
        dealCards,
    }
}
