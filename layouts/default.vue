<template>
    <div class="h-screen bg-zinc-900 text-white flex flex-col items-center justify-center">
        <main>
            <slot />
        </main>

        <div class="bg-zinc-800 absolute bottom-0 left-0 right-0 text-center">
            <Footer />
        </div>
    </div>
</template>
