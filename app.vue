<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'DuckCards - Online Card Games',
        }
    },
    head() {
        return {
            title: this.title,
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
