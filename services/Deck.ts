import { Ref } from 'nuxt/dist/app/compat/capi'

type Card = {
    value: number
    type: number
}

export class Deck {
    cards: Ref<Card[]>

    constructor() {
        this.cards = ref([])
        this.shuffle()
    }

    /**
     * Shuffle the deck.
     */
    shuffle(): void {
        for (let i = this.cards.value.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = this.cards.value[i]
            this.cards.value[i] = this.cards.value[j]
            this.cards.value[j] = temp
        }
    }

    /**
     * Draw a card from the deck.
     */
    draw(): Card {
        return this.cards.value.pop()
    }

    /**
     * Pops N cards from the deck.
     * @param n Number of cards to pop.
     */
    dealCards(n): Card[] {
        const popped = []
        for (let i = 0; i < n; i++) {
            popped.push(this.draw())
        }
        return popped
    }
}
