<template>
    <div class="w-full grid grid-rows-2 gap-4">
        <!-- row1: deck -->
        <section class="bg-zinc-800 p-4">
            <Button1 text="Reset" type="danger" :disabled="!game.data.playing" @click="setup" />
            <Button1 text="Start" type="success" :disabled="game.data.playing" @click="start" />

            <List :deck="game.data.deck" />
        </section>
        <!-- row2: players -->
        <section class="grid grid-cols-2 gap-4">
            <!-- col1: PLAYER -->
            <div class="bg-zinc-800 p-4 flex flex-col justify-between">
                <h2 class="animation">Player</h2>
                <List :deck="game.player.hand" :on-hand="true" />
                <ActionPanel
                    :get-cards="getCards"
                    :disable-all="!game.data.playing && game.data.playerTurn"
                    :disable-getcards="false"
                    :disable-groups="!checkGroups(game.player.hand)"
                    :disable-stairs="!checkStaircase(game.player.hand)"
                />
            </div>
            <!-- col2: CPU -->
            <div class="bg-zinc-800 p-4 flex flex-col justify-between">
                <h2>CPU</h2>
                <List :deck="game.cpu.hand" :on-hand="true" />
                <ActionPanel :disable-all="true" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { game, setup, start, checkGroups, checkStaircase, getCards } = useMadness()
setup()
</script>
