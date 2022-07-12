import { Ref } from 'nuxt/dist/app/compat/capi'

type Card = {
    value: number
    type: number
}

/**
 * Logic utils to manipulate decks (arrays of cards)
 */
export class Deck {
    /**
     * Shuffles an array.
     * @param array Array to shuffle.
     * @returns Shuffled array.
     */
    static shuffle(array: Card[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }

    /**
     * Deal n cards from a deck to a hand.
     */
    static deal(n: number, deck: Ref<Card[]>, hand: Ref<Card[]>): void {
        const popped = []
        for (let i = 0; i < n; i++) {
            popped.push(deck.value.pop())
        }
        hand.value = [...hand.value, ...popped]
    }
}
