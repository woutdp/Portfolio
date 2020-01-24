<script>
    import ColorSchemeView from '../../components/ColorSchemeView.svelte';

    class Color {
        constructor(hexColor) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

            this.hex = hexColor;
            this.r = parseInt(result[1], 16);
            this.g = parseInt(result[2], 16);
            this.b = parseInt(result[3], 16);
        }
    }

    let gruvbox = {
        name: 'Gruvbox',
        colors: [
            [new Color('#33332f'), new Color('#ebdbb2')],
            [new Color('#282828'), new Color('#cc241d'), new Color('#98971a'), new Color('#d79921'),
             new Color('#458588'), new Color('#b16286'), new Color('#689d6a'), new Color('#a89984')],
            [new Color('#828374'), new Color('#fb4934'), new Color('#b8bb26'), new Color('#fabd2f'),
             new Color('#83a598'), new Color('#d3869b'), new Color('#8ec07c'), new Color('#ebdbb2')]
        ]
    }

    let other = {
        name: 'Other',
        colors: [
            [new Color('#A3332f'), new Color('#ebdAb2')],
            [new Color('#A82828'), new Color('#cc2A1d'), new Color('#9B971a'), new Color('#dB9921'),
             new Color('#A58588'), new Color('#b16A86'), new Color('#6B9d6a'), new Color('#aB9984')],
            [new Color('#A28374'), new Color('#fA4934'), new Color('#bBbb26'), new Color('#fBbd2f'),
             new Color('#A3a598'), new Color('#d38A9b'), new Color('#8Bc07c'), new Color('#eBdbb2')]
        ]
    }

    let colorSchemes = [gruvbox, other];
    let selectedColorSchemeName = gruvbox.name

    $: selectedColorScheme = colorSchemes.find(element => element.name === selectedColorSchemeName);

</script>

<style lang="stylus">
    @import '../../styles/variables'

    .section
        background-color: #eee
</style>

<svelte:head>
    <title>Colorscheme</title>
    <meta name="Description" content="ColorScheme helper">
</svelte:head>

<section class="section">
    <div class="container">
        <select bind:value={selectedColorSchemeName}>
            {#each colorSchemes as scheme}
                <option value={scheme.name}>
                    {scheme.name}
                </option>
            {/each}
        </select>

        <ColorSchemeView bind:colorScheme={selectedColorScheme} />
    </div>
</section>
