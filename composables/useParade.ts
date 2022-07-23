import { Card, Deck } from '~~/services/Deck'

const deck = ref([])
const hand = ref([])
const table = ref([])
const cards = ref([])

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

    /**
     * Checks how many cards does the player take with his play.
     */
    function check_card(card: Card, idx: number) {
        for (let i = table.value.length - card.value - 1; i >= 0; i--) {
            if (table.value[i].type == card.type || table.value[i].value <= card.value) {
                const removed = table.value.splice(i, 1)
                cards.value.push(removed[0])
            }
        }
        table.value.push(card)
        hand.value.splice(idx, 1)
        Deck.deal(1, deck, hand)
    }

    return {
        deck: readonly(deck),
        hand: readonly(hand),
        table: readonly(table),
        cards: readonly(cards),
        init,
        shuffle: () => Deck.shuffle(deck.value),
        deal_hand: () => Deck.deal(5, deck, hand),
        deal_table: () => Deck.deal(8, deck, table),
        check_card,
    }
}
