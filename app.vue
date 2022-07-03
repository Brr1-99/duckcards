<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'DuckCards - Online Card Games',
            meta: [
                {
                    hid: 'DuckCards',
                    name: 'Online Card Games',
                    content: 'DuckCards is where you can play online card games',
                },
            ],
        }
    },
}
</script>
