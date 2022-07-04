<template>
    <div>Madness: {{ count }}</div>
    <Button1 text="Deal" @click="increment" />
    <Button1 text="Deal" type="warning" @click="increment" />
    <Button1 text="Deal" type="success" @click="increment" />
    <Button1 text="Deal" type="danger" @click="increment" />
    <Button1 text="Deal" type="pedro" @click="increment" />
</template>

<script setup lang="ts">
const { count, increment } = useCounter()
</script>
