import { Ref } from 'nuxt/dist/app/compat/capi'

// Game
const game: Ref<{
    data: {
        board: number[]
    }
    player1: number[]
    player2: number[]
}> = ref({
    data: {
        board: [],
    },
    player1: [],
    player2: [],
})

/**
 * useTictactoe.ts
 * @description Deck management for /madness
 */
export default () => {
    /**
     * Setup the game
     */
    function setup() {
        game.value.data.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        game.value.player1 = [1, 1, 1, 2, 2, 2, 3, 3, 3]
        game.value.player2 = [1, 1, 1, 2, 2, 2, 3, 3, 3]
    }

    return {
        game: readonly(game),
        setup,
    }
}
