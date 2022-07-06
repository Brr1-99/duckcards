const count = ref(0)

const obj = ref({
    lifes: 3,
    score: 0,
    level: 1,
})

/**
 * useCounter.ts
 * @description A simple counter component.
 */
export default () => {
    const increment = () => count.value++
    const lostLife = () => obj.value.lifes--
    const addScore = () => obj.value.score++
    const addLevel = () => obj.value.level++

    return {
        count: readonly(count),
        increment,
        obj: readonly(obj),
        lostLife,
        addScore,
        addLevel,
    }
}
