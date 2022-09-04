<script lang="ts">
    import logo from '../assets/svelte.png'
</script>

<nav class="p-4 flex justify-between items-center border border-x-0 border-t-0 " style="position:sticky; top:0; z-index:1;">
    <div class="flex items-center">
        <img class="w-12" src={logo} alt="Svelte Logo" />
        <h1 class="text-xl ml-5">Svelte App</h1>
    </div>

    <div class="text-2xl hover:text-yellow-300">
        <a title="See project" href="https://github.com/dawichi/duckgames" target="_blank" rel="noreferrer">
            <i class="bi bi-github" />
        </a>
    </div>
</nav>
