import { Deck } from '~~/services/Deck'

const deck = ref([])
const hand = ref([])

/**
 * useParade.ts
 * @description Deck management for /parade
 */
export default () => {
    /**
     * Generate deck of cards.
     */
    function init() {
        deck.value = []
        hand.value = []
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
