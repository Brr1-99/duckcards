<!--
  @component

  ## Btn
  Custom button

  @param style - the style of the button
-->

<script lang="ts">
    export let color: string
</script>

<button type="button" class="nes-btn is-primary text-xl tracking-wide px-6">
    <slot/>
</button>
