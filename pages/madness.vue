<template>
    <div>
        <Button1 text="Reset" type="danger" @click="init" />
        <p class="mt-10"></p>
        <h3>Deck:</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in deck" :key="idx">
                <div :class="'border p-2 ' + colorCard(card)">
                    {{ card }}
                </div>
            </div>
        </section>
        <Button1 text="Shuffle deck" @click="shuffle" />

        <h3>Your cards on hand:</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in hand" :key="idx">
                <div :class="'border p-2 ' + colorCard(card)">
                    {{ card }}
                </div>
            </div>
        </section>
        <Button1 text="Deal cards" type="info" @click="deal" />
    </div>
</template>

<script setup lang="ts">
const { deck, hand, init, shuffle, deal } = useMadness()

function colorCard(value: number) {
    if (value === 6) return 'bg-red-600'
    if (value === 7) return 'bg-orange-600'
    if (value === 8) return 'bg-yellow-600'
    if (value === 9) return 'bg-green-600'
    if (value === 10) return 'bg-blue-600'
    if (value === 11) return 'bg-violet-600'
    if (value === 12) return 'bg-zinc-600'
}
init()
</script>
