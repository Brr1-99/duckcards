const count = ref(0)

/**
 * useCounter.ts
 * @description A simple counter component.
 */
export default () => {
    const increment = () => count.value++

    return {
        count: readonly(count),
        increment,
    }
}
