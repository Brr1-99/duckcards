import { Card, Deck } from '~~/services/Deck'

// Game data
const game = ref({
    data: {
        deck: [] as Card[],
        playing: false,
        playerTurn: true,
    },
    player: {
        hand: [] as Card[],
        table: [] as Card[],
    },
    cpu: {
        hand: [] as Card[],
        table: [] as Card[],
    },
})
const { data, player, cpu } = game.value // shortcuts

/**
 * useMadness.ts
 * @description Deck management for /madness
 */
export default () => {
    /**
     * Generate deck of cards.
     */
    function setup() {
        data.deck = []
        player.hand = []
        player.table = []
        cpu.hand = []
        cpu.table = []

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

        data.deck = temp
        data.playing = false
    }

    /**
     * Sort hands by value.
     */
    function sortHands() {
        const byValue = (a, b) => a.value - b.value
        player.hand.sort(byValue)
        cpu.hand.sort(byValue)
    }

    function start() {
        Deck.shuffle(data.deck)
        for (const card of data.deck) {
            card.hide = true
        }
        for (let i = 0; i < data.deck.length - 17; i++) {
            data.deck[i].hide = false
        }
        Deck.shuffle(data.deck)

        // Deal 5 cards to each player
        for (let i = 0; i < 5; i++) {
            player.hand.push(data.deck.pop())
            cpu.hand.push(data.deck.pop())
        }

        sortHands()
        data.playing = true
    }

    /**
     * Check if you can group 3 or more cards
     * @param hand Player or CPU hand
     */
    function checkGroups(hand) {
        const idx = {}
        for (const card of hand) {
            if (!idx[card.value]) idx[card.value] = 1
            else idx[card.value] += 1
        }
        for (const key in idx) {
            if (idx[key] >= 3) return true
        }
        return false
    }

    /**
     * Check if you had the right numbers to create a staircase
     * @param hand Player or CPU hand
     * @returns true if you can create a staircase
     */
    function checkStaircase(hand) {
        const numbers = [6, 7, 8, 9, 10, 11, 12]
        let correct = true

        for (const num of numbers) {
            if (!hand.find(x => x.value === num)) correct = false
        }
        return correct
    }

    return {
        game: readonly(game),
        setup,
        start,
        checkGroups,
        checkStaircase,
        getCards: () => {
            for (let i = 0; i < 3; i++) {
                player.hand.push(data.deck.shift())
            }
            sortHands()
        },
    }
}
