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
    function setup() {
        deck.value = []
        hand.value = []

        const numbers: number[] = [6, 7, 8, 9, 10, 11, 12]
        const temp = []

        for (const number of numbers) {
            for (let i = 0; i < number; i++) {
                temp.push({
                    value: number,
                    type: null,
                    hide: false,
                })
            }
        }

        deck.value = temp
    }

    function start() {
        Deck.shuffle(deck.value)
        for (const card of deck.value) {
            card.hide = true
        }
        for (let i = 0; i < deck.value.length - 17; i++) {
            deck.value[i].hide = false
        }
    }

    return {
        deck: readonly(deck),
        hand: readonly(hand),
        setup,
        start,
        shuffle: () => Deck.shuffle(deck.value),
        deal: () => Deck.deal(5, deck, hand),
    }
}
