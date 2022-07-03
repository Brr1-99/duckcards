<template>
    <div id="component" :style="'background-image: url(' + image + ');'" />
</template>

<script>
/**
 * BgImage.vue
 * BgImage component using background-image instead of <img/>
 */
export default {
    name: 'BgImage',
    props: {
        image: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>
#component {
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
}
</style>
