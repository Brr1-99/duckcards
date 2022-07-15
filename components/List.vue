<template>
    <section class="container flex flex-wrap py-5 gap-2">
        <div v-for="(card, idx) in deck" :key="idx">
            <Card :card="card" :on-hand="onHand" />
        </div>
    </section>
</template>

<script lang="ts">
import { Card } from '~~/services/Deck'

export default {
    props: {
        deck: {
            type: Array as import('vue').PropType<Card[]>,
            required: true,
        },
        onHand: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
