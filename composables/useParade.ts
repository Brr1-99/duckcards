import { Deck } from '~~/services/Deck'

const hand = ref([])

/**
 * useParade.ts
 * @description Deck management for /parade
 */
export default () => {
    const deck = new Deck()

    /**
     * Generate deck of cards.
     */
    function init() {
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

        deck.cards.value = temp
    }

    /**
     * Deal 5 cards from the deck to the hand.
     */
    function deal() {
        const cards = deck.dealCards(5)
        hand.value = [...hand.value, ...cards]
    }

    return {
        deck: readonly(deck.cards),
        hand: readonly(hand),
        shuffle: deck.shuffle,
        init,
        deal,
    }
}
