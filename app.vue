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
                    content: 'Play different card games online!',
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css',
                },
            ],
        }
    },
}
</script>
