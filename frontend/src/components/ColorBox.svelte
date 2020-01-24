<script>
    import { onMount } from "svelte";

    export let color;

    const brightnessFactor = 60

    let hex = color.hex;
    // $: color = new Color(hex)

    $: rgb = `rgb(${color.r}, ${color.g}, ${color.b})`;
    $: brighterColor = `rgb(${color.r + brightnessFactor}, ${color.g + brightnessFactor}, ${color.b + brightnessFactor})`;

    function handleClick(event) {
        document.getElementById('colorwheel').click();
    }
</script>

<style lang="stylus">
    width = 120px
    height = 120px

    .color-box
        display: flex
        align-items: center
        justify-content: center
        width: width
        height: height

    input[type="text"]
        width: 100%
        padding: 4px 4px
        margin: 4px 4px
        display: inline-block
        border: 0px solid #ccc
        border-radius: 2px
        box-sizing: border-box
        background-color: rgba(0, 0, 0, 0.3)
        color: white
        z-index: 20

    .click-handler
        width: width
        height: height
        position: absolute
        z-index: 10
        cursor: pointer

    .colorwheel
        visibility: hidden
        display: none

</style>

<div class="color-box" style="background-color: {hex}">
    <div class="click-handler" on:click={handleClick}></div>
    <input type="text" bind:value={hex}>
    <input class="colorwheel" type="color" bind:value={hex}>
</div>

<!-- <label style="background-color: {hex}">
</label> -->

<!-- <div style="background-color: {hex}">
    <label>{hex}</label>
</div> -->

<!-- <span > -->
<!-- <input type="color" bind:value={hex}> -->

    <!-- <!-- <input type="color" value="{hex}"> -->
    <!-- <p style="color: {brighterColor}"> -->
        <!-- {#if selectedFormat === 'rgb'}{rgb}{:else}{hex}{/if} -->
    <!-- </p> -->
<!-- </span> -->
