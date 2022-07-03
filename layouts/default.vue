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
                <section class="grid grid-cols-2 gap-4">
                    <div class="h-full">
                        <BgImage :image="game.image" />
                    </div>
                    <header>
                        <h2 class="text-3xl mb-4">{{ game.name }}</h2>
                        <p>{{ game.description }}</p>
                    </header>
                </section>
            </li>
        </ul>

        <main class="border mt-20">
            <slot />
        </main>

        <div class="bg-zinc-800 absolute bottom-0 left-0 right-0 text-center p-4">
            <Footer />
        </div>
    </div>
</template>

<script lang="ts">
type Game = {
    name: string
    description: string
    image: string
}

export default {
    data(): {
        games: Game[]
    } {
        return {
            games: [
                {
                    name: 'Portal',
                    description: 'Navigate through a maze of rooms to find the exit.',
                    image: '/images/dark.jpg',
                },
                {
                    name: 'Portal',
                    description: 'Navigate through a maze of rooms to find the exit.',
                    image: '/images/dark.jpg',
                },
                {
                    name: 'Portal',
                    description: 'Navigate through a maze of rooms to find the exit.',
                    image: '/images/dark.jpg',
                },
                {
                    name: 'Portal',
                    description: 'Navigate through a maze of rooms to find the exit.',
                    image: '/images/dark.jpg',
                },
                {
                    name: 'Portal',
                    description: 'Navigate through a maze of rooms to find the exit.',
                    image: '/images/dark.jpg',
                },
            ],
        }
    },
}
</script>
