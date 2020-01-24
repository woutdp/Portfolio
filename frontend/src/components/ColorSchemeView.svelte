<script>
    import ColorBox from './ColorBox.svelte';

    export let colorScheme

    $: colorScheme = colorScheme

</script>

<style lang="stylus">
    .colorscheme-container
        .row
            display: flex
            flex-direction: row
</style>

<div class="colorscheme-container">
    {#each colorScheme.colors as colorRow}
        <div class="row">
            {#each colorRow as color}
                <ColorBox color={color}/>
            {/each}
        </div>
    {/each}
</div>
