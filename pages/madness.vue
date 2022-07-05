<template>
    <div>Madness: {{ count }}</div>
    <Button1 text="Deal" @click="increment" />
    <Button1 text="Deal" type="warning" @click="increment" />
    <Button1 text="Deal" type="success" @click="increment" />
    <Button1 text="Deal" type="danger" @click="increment" />
    <Button1 text="Deal" type="pedro" @click="increment" />

    <p>{{ cards }}</p>
</template>

<script setup lang="ts">
import { Cards } from '~~/services/cards'
const { count, increment } = useCounter()

const cards = Cards.generateCards()
</script>
