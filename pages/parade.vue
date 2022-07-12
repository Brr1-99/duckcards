<template>
    <div>
        <Button1 text="Reset" type="danger" @click="init" />
        <p class="mt-10"></p>
        <h3>Deck:</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in deck" :key="idx">
                <div :class="'border p-2 ' + colorCard(card.type)">
                    {{ card.value }}
                </div>
            </div>
        </section>
        <Button1 text="Shuffle deck" @click="shuffle" />

        <h3>Your cards on hand:</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in hand" :key="idx">
                <div :class="'border p-2 ' + colorCard(card.type)">
                    {{ card.value }}
                </div>
            </div>
        </section>
        <Button1 text="Deal cards" type="info" @click="deal" />
    </div>
</template>

<script setup lang="ts">
const { deck, hand, shuffle, deal, init } = useParade()
init()

function colorCard(type: number) {
    if (type === 0) return 'bg-red-600'
    if (type === 1) return 'bg-orange-600'
    if (type === 2) return 'bg-yellow-600'
    if (type === 3) return 'bg-green-600'
    if (type === 4) return 'bg-blue-600'
    if (type === 5) return 'bg-violet-600'
}
</script>
