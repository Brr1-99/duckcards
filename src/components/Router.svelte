<script lang="ts">
    import type { Game } from 'src/interfaces/Game.dto'
    import BgImage from './BgImage.svelte'
import Box from './Box.svelte'
    import Btn from './Btn.svelte'

    const games: Game[] = [
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
    ]
</script>

<div class="flex flex-col items-center justify-center">
    <h2 class="text-4xl p-4">Welcome to DuckCards</h2>
    <br/>

    <Box title='Games available 🦆'>
        <ul class="container grid grid-cols-4 gap-4 p-4">
            {#each games as game}
                <li class="bg-zinc-800 border-2 p-4 cursor-pointer hover:bg-yellow-300 hover:text-black">
                    <a href={game.link}>
                        <section class="grid grid-cols-2 gap-4">
                            <div class="h-full">
                                <BgImage image={game.image} />
                            </div>
                            <header>
                                <h2 class="text-3xl mb-4">{game.name}</h2>
                                <p>{game.description}</p>
                                <Btn color="sfdfs">Start</Btn>
                            </header>
                        </section>
                    </a>
                </li>
            {/each}
        </ul>
    </Box>
</div>
