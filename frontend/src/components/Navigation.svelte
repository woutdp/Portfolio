<script>
    export let segment;
</script>

<style lang="stylus">
    nav
        grid-area: nav
        padding: 0 1em
        margin: 20px

    ul
        display: flex
        justify-content: space-between
        margin: 0
        padding: 0
        text-align: center

    li
        display: block

    .selected
        position: relative
        display: inline-block

    .selected::after
        position: absolute
        content: ''
        width: calc(100% - 1em)
        height: 2px
        background-color: rgb(255,62,0)
        display: block
        bottom: -1px

    a
        text-decoration: none
        padding: 1em 0.5em
        display: block
</style>

<nav>
    <ul>
        <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
        <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
             the blog data when we hover over the link or tap it on a touchscreen -->
        <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
    </ul>
</nav>
