<template>
    <div>
        <div>Madness: {{ count }}</div>
        <Button1 text="Deal" @click="increment" />
        <Button1 text="Deal" type="warning" @click="increment" />
        <Button1 text="Deal" type="success" @click="increment" />
        <Button1 text="Deal" type="danger" @click="increment" />
        <Button1 text="Deal" type="pedro" @click="increment" />

        <p>Lifes: {{ obj.lifes }}</p>
        <p>Score: {{ obj.score }}</p>
        <p>Level: {{ obj.level }}</p>
        <Button1 text="-1 Life" type="danger" @click="lostLife" />
        <Button1 text="+1 Score" type="success" @click="addScore" />
        <Button1 text="+1 Level" @click="addLevel" />

        <p class="mt-10"></p>
        <h3>Deck: {{ deck }}</h3>
        <Button1 text="Shuffle deck" @click="shuffleDeck" />
        <h3>Your cards on hand: {{ hand }}</h3>
        <Button1 text="Deal cards" @click="dealCards" />
    </div>
</template>

<script setup lang="ts">
const { count, increment, obj, lostLife, addScore, addLevel } = useCounter()
const { deck, hand, generateMadnessDeck, shuffleDeck, dealCards } = useDeck()

generateMadnessDeck()
</script>
