<script>
    let currentYear = new Date().getFullYear()
</script>

<style lang="stylus">
    footer
        grid-area: footer;
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin: 20px auto;

        +mobile()
            flex-direction: column

    ul
        display: flex
        align-items: center
        justify-content: center
        text-align: center
        min-width: 100%
        margin: 0
        padding: 0
        margin-bottom: 20px

        +above('s')
            :not(:first-child)
                margin-left: 20px

        +mobile()
            flex-direction: column

    li
        display: block

    p
        margin: 0
        text-align: center
</style>

<footer>
    <ul>
        <li><a href="https://github.com/woutdp" target="_blank">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/woutdp/" target="_blank">LinkedIn</a></li>
        <li><a href="mailto:contact@wout.space" target="_blank">contact@wout.space</a></li>
    </ul>
    <p>
        © { currentYear } Made by Wout De Puysseleir with &lt;3,&nbsp;<a href="https://svelte.dev/" target="_blank">Svelte</a>&nbsp;&&nbsp;<a href="https://sapper.svelte.dev/" target="_blank">Sapper</a>
    </p>
</footer>
