<template>
    <div :class="'border-2 w-12 h-16 ' + (card.hide && !onHand ? ' bg-zinc-900' : colorCard(card))">
        <div class="h-full flex items-center justify-center">
            {{ card.hide && !onHand ? 'x' : card.value }}
        </div>
    </div>
</template>

<script lang="ts">
import { Card } from '~~/services/Deck'

/**
 * Card.vue
 * @description Displays a styled button
 * @param card - The card to be displayed
 */
export default {
    name: 'Button1',
    props: {
        card: {
            type: Object as import('vue').PropType<Card>,
            required: true,
        },
        onHand: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            colorCard(card: Card): string {
                if (card.value === 6) return 'bg-green-600 border-green-800'
                if (card.value === 7) return 'bg-blue-600 border-blue-800'
                if (card.value === 8) return 'bg-zinc-600 border-zinc-700'
                if (card.value === 9) return 'bg-orange-600 border-orange-800'
                if (card.value === 10) return 'bg-yellow-600 border-yellow-800'
                if (card.value === 11) return 'bg-indigo-600 border-indigo-800'
                if (card.value === 12) return 'bg-red-600 border-red-800'
            },
        }
    },
}
</script>
