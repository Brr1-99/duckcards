<template>
    <h1>hola inside pages</h1>
    <button @click="$router.push('/')">Go to home</button>
</template>



<script>
// This will also work in `<script setup>`
definePageMeta({
    layout: "custom",
})
</script>