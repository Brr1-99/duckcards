import { Deck } from '~~/services/Deck'

const deck = ref([])
const hand = ref([])

/**
 * useMadness.ts
 * @description Deck management for /madness
 */
export default () => {
    /**
     * Generate deck of cards.
     */
    function init() {
        deck.value = []
        hand.value = []
        const numbers: number[] = [6, 7, 8, 9, 10, 11, 12]
        const temp = []

        for (const number of numbers) {
            for (let i = 0; i < number; i++) {
                temp.push(number)
            }
        }

        deck.value = temp
        // Deck.shuffle(deck.value)
    }

    return {
        deck: readonly(deck),
        hand: readonly(hand),
        init,
        shuffle: () => Deck.shuffle(deck.value),
        deal: () => Deck.deal(5, deck, hand),
    }
}
