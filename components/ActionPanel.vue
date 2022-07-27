<template>
    <div class="grid grid-cols-3 gap-4">
        <Button1 text="Get 3 Cards" type="info" :disabled="disableAll || disableGetcards" @click="getCards" />
        <Button1 text="Publish group" type="success" :disabled="disableAll || disableGroups" @click="console.log(5)" />
        <Button1 text="Staircase" type="danger" :disabled="disableAll || disableStairs" @click="console.log(5)" />
    </div>
</template>

<script lang="ts">
/**
 * ActionPanel.vue
 * @description Displays a panel with action buttons
 * @param text - The text to display in the button
 * @param type - The type of button to display. One of: info, warning, success, danger
 */
export default {
    name: 'ActionPanel',
    props: {
        getCards: {
            type: Function,
            required: true,
        },
        disableAll: {
            type: Boolean,
            default: false,
        },
        disableGetcards: {
            type: Boolean,
            default: false,
        },
        disableGroups: {
            type: Boolean,
            default: false,
        },
        disableStairs: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
}
</script>
