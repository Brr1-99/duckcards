<script lang="ts">
    const date = new Date().getFullYear()
</script>

<footer>
    <div class="container m-auto flex justify-around items-center">
        <a href="/">
            <section class="flex flex-col hover:text-yellow-300">
                <span class="text-xl">다 위 치</span>
                <span>DuckCards © {date}</span>
            </section>
        </a>

        <a target="_blank" href="https://www.buymeacoffee.com/dawichi" rel="noreferrer">
            <img
                class="w-64 h-24"
                src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=dawichi&button_colour=fde047&font_colour=000&font_family=Cookie&outline_colour=000000&coffee_colour=fff"
                alt="Coffee"
            />
        </a>

        <div class="text-2xl hover:text-yellow-300">
            <a title="See project" href="https://github.com/dawichi/duckcards" target="_blank" rel="noreferrer">
                <i class="bi bi-github" />
            </a>
        </div>
    </div>
</footer>
