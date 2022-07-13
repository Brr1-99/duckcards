<template>
    <div>
        <Button1 text="Setup" type="danger" @click="setup" />
        <Button1 text="Start" type="success" @click="start" />
        <p class="mt-10"></p>
        <h3>Deck:</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in deck" :key="idx">
                <div :class="'border p-2 ' + colorCard(card)">
                    {{ card.hide ? 'x' : card.value }}
                </div>
            </div>
        </section>
        <Button1 text="Shuffle deck" @click="shuffle" />

        <h3>Your cards on hand:</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in hand" :key="idx">
                <div :class="'border p-2 ' + colorCard(card)">
                    {{ card.hide ? 'x' : card.value }}
                </div>
            </div>
        </section>
        <Button1 text="Deal cards" type="info" @click="deal" />
    </div>
</template>

<script setup lang="ts">
const { deck, hand, setup, start, shuffle, deal } = useMadness()

function colorCard(card) {
    if (card.hide) return 'bg-zinc-900'
    if (card.value === 6) return 'bg-green-600'
    if (card.value === 7) return 'bg-blue-600'
    if (card.value === 8) return 'bg-zinc-600'
    if (card.value === 9) return 'bg-orange-600'
    if (card.value === 10) return 'bg-yellow-600'
    if (card.value === 11) return 'bg-indigo-600'
    if (card.value === 12) return 'bg-red-600'
}

setup()
</script>
