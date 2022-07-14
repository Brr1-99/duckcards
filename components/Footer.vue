<template>
    <footer>
        <div class="container m-auto flex justify-around items-center">
            <NuxtLink to="/">
                <section class="flex flex-col hover:text-yellow-300">
                    <span class="text-xl">다 위 치</span>
                    <span>DuckCards © {{ new Date().getFullYear() }}</span>
                </section>
            </NuxtLink>

            <NuxtLink target="_blank" to="https://www.buymeacoffee.com/dawichi" rel="noreferrer">
                <img
                    class="w-64 h-24"
                    src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=dawichi&button_colour=fde047&font_colour=000&font_family=Cookie&outline_colour=000000&coffee_colour=fff"
                    alt="Coffee"
                />
            </NuxtLink>

            <div class="text-2xl hover:text-yellow-300">
                <NuxtLink title="See project" to="https://github.com/dawichi/duckcards" target="_blank" rel="noreferrer">
                    <i class="bi bi-github"></i>
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>
