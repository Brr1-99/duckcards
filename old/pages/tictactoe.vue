<template>
    <div>
        <h1 class="text-3xl text-center py-5 font-bold">Tic Tac Toe</h1>
        <hr />

        <div class="w-full grid grid-rows-3 gap-4 mt-12">
            <div class="grid grid-cols-3 gap-4">
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[0] }}</div>
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[1] }}</div>
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[2] }}</div>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[3] }}</div>
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[4] }}</div>
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[5] }}</div>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[6] }}</div>
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[7] }}</div>
                <div class="border h-24 w-24 flex items-center justify-center">{{ game.data.board[8] }}</div>
            </div>
        </div>

        <div class="mt-5 grid grid-cols-2">
            <h4>Player 1</h4>
            <h4>Player 2</h4>
            <p>{{ game.player1 }}</p>
            <p>{{ game.player2 }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const { game, setup } = useTictactoe()
setup()
</script>
