<template>
    <button :class="btnColor(type) + ' text-white font-bold py-2 px-4 border-b-4 border-l-2 rounded'">
        {{ text }}
    </button>
</template>

<script lang="ts">
const types = {
    info: 'bg-blue-500 border-blue-700 hover:bg-blue-400 hover:border-blue-500',
    warning: 'bg-yellow-500 border-yellow-700 hover:bg-yellow-400 hover:border-yellow-500',
    success: 'bg-green-500 border-green-700 hover:bg-green-400 hover:border-green-500',
    danger: 'bg-red-500 border-red-700 hover:bg-red-400 hover:border-red-500',
}

/**
 * Button.vue
 * @description Displays a styled button
 * @param text - The text to display in the button
 * @param type - The type of button to display. One of: info, warning, success, danger
 */
export default {
    name: 'Button1',
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String as import('vue').PropType<keyof typeof types>,
            default: 'info',
        },
    },
    data() {
        return {
            btnColor(type: string): string {
                return types[type] ?? types.info
            },
        }
    },
}
</script>
