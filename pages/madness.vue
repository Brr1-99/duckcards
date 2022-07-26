<template>
    <div class="w-full grid grid-rows-2 gap-4">
        <!-- row 1: deck -->
        <section class="bg-zinc-800 p-4">
            <Button1 text="Reset" type="danger" @click="setup" />
            <Button1 text="Start" type="success" @click="start" />

            <List :deck="deck" />
        </section>
        <!-- row 2: players -->
        <section class="grid grid-cols-2 gap-4">
            <!-- col 1: PLAYER -->
            <div class="bg-zinc-800 p-4">
                <h2>Player</h2>
                <List :deck="player_hand" :on-hand="true" />
            </div>
            <!-- col 2: CPU -->
            <div class="bg-zinc-800 p-4">
                <h2>CPU</h2>
                <List :deck="cpu_hand" :on-hand="true" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { deck, player_hand, player_table, cpu_hand, cpu_table, setup, start } = useMadness()
setup()
</script>
