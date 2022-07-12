<template>
    <div>
        <h2>My cards</h2>
        <section class="container flex flex-wrap py-5">
            <div v-for="card in deck" :key="card.value + card.type">
                <div :class="'border p-2 ' + colorCard(card.type)">
                    {{ card.value }}
                </div>
            </div>
        </section>

        <Button1 text="Shuffle deck" @click="shuffleDeck" />
        <h3>Your cards on hand: {{ hand }}</h3>
        <Button1 text="Deal cards" @click="dealCards" />
    </div>
</template>

<script setup lang="ts">
const { deck, hand, shuffleDeck, dealCards, generateParadeDeck } = useDeck()
generateParadeDeck()

function colorCard(type: number) {
    if (type === 0) return 'bg-red-600'
    if (type === 1) return 'bg-orange-600'
    if (type === 2) return 'bg-yellow-600'
    if (type === 3) return 'bg-green-600'
    if (type === 4) return 'bg-blue-600'
    if (type === 5) return 'bg-violet-600'
}
</script>
