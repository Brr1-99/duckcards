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

        <p class="mt-10"></p>
        <h3>Table:</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in table" :key="idx">
                <div :class="'border p-2 ' + colorCard(card.type)">
                    {{ card.value }}
                </div>
            </div>
        </section>
        <Button1 text="Deal table" @click="deal_table" />

        <h3>Your cards on hand</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in hand" :key="idx">
                <button @click="check_card(card, idx)">
                    <div :class="'border p-2 ' + colorCard(card.type)">
                        {{ card.value }}
                    </div>
                </button>
            </div>
        </section>
        <Button1 text="Deal cards" type="info" @click="deal_hand" />
        <h3>Your obtained points</h3>
        <section class="container flex flex-wrap py-5">
            <div v-for="(card, idx) in cards" :key="idx">
                <button>
                    <div :class="'border p-2 ' + colorCard(card.type)">
                        {{ card.value }}
                    </div>
                </button>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { deck, hand, table, cards, shuffle, deal_hand, deal_table, init, check_card } = useParade()
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
