<template>
    <div>Madness: {{ count }}</div>
    <Button1 text="Deal" @click="increment" />
    <Button1 text="Deal" type="warning" @click="increment" />
    <Button1 text="Deal" type="success" @click="increment" />
    <Button1 text="Deal" type="danger" @click="increment" />
    <Button1 text="Deal" type="pedro" @click="increment" />

    <p>{{ cards }}</p>
    <p>Lifes: {{ obj.lifes }}</p>
    <p>Score: {{ obj.score }}</p>
    <p>Level: {{ obj.level }}</p>
    <Button1 text="-1 Life" type="danger" @click="lostLife" />
    <Button1 text="+1 Score" type="success" @click="addScore" />
    <Button1 text="+1 Level" @click="addLevel" />
</template>

<script setup lang="ts">
import { Cards } from '~~/services/cards'
const { count, increment, obj, lostLife, addScore, addLevel } = useCounter()

const cards = Cards.generateCards()
</script>
