<template>
    <span v-for="card in deck" :key="card.value + card.id" class="border">{{ card.value }}</span>
    <Button1 text="Shuffle deck" @click="shuffleDeck" />
    <h3>Your cards on hand: {{ hand }}</h3>
    <Button1 text="Deal cards" @click="dealCards" />
</template>

<script setup lang="ts">
const { deck, hand, shuffleDeck, dealCards } = useDeck()
</script>

<script lang="ts">
const { generateParadeDeck } = useDeck()
generateParadeDeck()
</script>
