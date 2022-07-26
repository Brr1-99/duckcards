import { Deck } from '~~/services/Deck'

// Deck of cards
const deck = ref([])
// In hand cards
const you_hand = ref([])
const cpu_hand = ref([])
// In table cards
const you_table = ref([])
const cpu_table = ref([])

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
        you_hand.value = []
        you_table.value = []
        cpu_hand.value = []
        cpu_table.value = []

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
        Deck.shuffle(deck.value)
        // Deal 5 cards to each player
        Deck.deal(5, deck, you_hand)
        you_hand.value.sort((a, b) => a.value - b.value)
        Deck.deal(5, deck, cpu_hand)
        cpu_hand.value.sort((a, b) => a.value - b.value)
    }

    return {
        deck: readonly(deck),
        player_hand: readonly(you_hand),
        player_table: readonly(you_table),
        cpu_hand: readonly(cpu_hand),
        cpu_table: readonly(cpu_table),
        setup,
        start,
    }
}
