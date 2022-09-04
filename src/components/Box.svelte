<!--
  @component

  ## Box
  Display a border with a title

  @param title - the title of the box
-->

<script lang="ts">
    export let title: string
</script>

<div class="border border-2 p-4 relative">
    <p class="absolute top-[-20px] left-5 bg-zinc-900 px-2 text-2xl">{title}</p>
    <div>
        <slot/>
    </div>
</div>
