<template>
    <div class="w-full grid grid-rows-2 gap-4">
        <!-- row 1 -->
        <section class="bg-zinc-800 p-4">
            <Button1 text="Setup" type="danger" @click="setup" />
            <Button1 text="Start" type="success" @click="start" />

            <List :deck="deck" />
        </section>
        <!-- row 2 -->
        <section class="grid grid-cols-2 gap-4">
            <div class="bg-zinc-800 p-4">
                <h3>Hand:</h3>
                <List :deck="hand" :on-hand="true" />
            </div>
            <div class="bg-zinc-800 p-4">
                <h3>Table:</h3>
                <List :deck="table" :on-hand="true" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { deck, hand, table, setup, start } = useMadness()
setup()
</script>
