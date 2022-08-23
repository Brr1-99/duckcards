<template>
    <div class="h-screen bg-zinc-900 text-white flex flex-col items-center justify-center">
        <h2 class="text-5xl p-4">Welcome to DuckCards</h2>
        <hr class="container border border-yellow-300" />

        <ul class="container grid grid-cols-4 gap-4 p-4">
            <li
                v-for="game in games"
                :key="game.name"
                class="bg-zinc-800 border-2 border-yellow-300 p-4 cursor-pointer hover:bg-yellow-300 hover:text-black"
            >
                <NuxtLink :to="game.link">
                    <section class="grid grid-cols-2 gap-4">
                        <div class="h-full">
                            <BgImage :image="game.image" />
                        </div>
                        <header>
                            <h2 class="text-3xl mb-4">{{ game.name }}</h2>
                            <p>{{ game.description }}</p>
                        </header>
                    </section>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
type Game = {
    name: string
    description: string
    image: string
    link: string
}

export default {
    data(): {
        games: Game[]
    } {
        return {
            games: [
                {
                    name: 'Madness',
                    description: 'Combine cards in groups to avoid the madness.',
                    image: '/images/madness.jpg',
                    link: '/madness',
                },
                {
                    name: 'Parade',
                    description: 'Parade the correct number to keep with the lowest score.',
                    image: '/images/parade.jpg',
                    link: '/parade',
                },
                {
                    name: 'Tic Tac Toe',
                    description: 'The classic, but this time a version with Matrioshkas!',
                    image: '/images/tictactoe.jpg',
                    link: '/tictactoe',
                },
                {
                    name: 'Portal',
                    description: 'Navigate through a maze of rooms to find the exit.',
                    image: '/images/dark.jpg',
                    link: '/portal',
                },
                {
                    name: 'Portal',
                    description: 'Navigate through a maze of rooms to find the exit.',
                    image: '/images/dark.jpg',
                    link: '/portal',
                },
            ],
        }
    },
}
</script>
