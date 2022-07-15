<template>
    <div>
        <Button1 text="Setup" type="danger" @click="setup" />
        <Button1 text="Start" type="success" @click="start" />
        <p class="mt-10"></p>

        <h3>Deck:</h3>
        <List :deck="deck" />
        <Button1 text="Shuffle deck" @click="shuffle" />

        <h3>Your cards on hand:</h3>
        <List :deck="hand" :on-hand="true" />
        <Button1 text="Deal cards" type="info" @click="deal" />
    </div>
</template>

<script setup lang="ts">
const { deck, hand, setup, start, shuffle, deal } = useMadness()
setup()
</script>
