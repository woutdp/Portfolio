<style lang="stylus">
    main
        grid-area: main

    .landing
        padding: 20px

        h1
            font-size: 2.8em
            font-weight: 700
            text-align: center

            +from-width(4)
                font-size: 4em
</style>

<svelte:head>
    <title>Wout De Puysseleir</title>
    <meta name="Description" content="Website of Wout De Puysseleir">
</svelte:head>

<main>
    <div class="landing center full-page">
        <h1>Wout De&nbsp;Puysseleir</h1>
        <h2>Full-Stack Web Developer</h2>
    </div>
    <div class="section">
        <div class="container">
            <h1>About Me</h1>
            <hr>
            <p>
                I'm a freelance web developer working fully remote. The sharpest tools in my toolbox are <code>Python (2, 3)</code>, <code>Django</code>, <code>Vue</code> & <code>Docker</code>.
                I really like the <a href="https://github.com/morhetz/gruvbox-contrib" target="_blank">Gruvbox</a> colorscheme.
            </p>
            <p>When I'm not programming you can see me hiking up a mountain, drinking a cocktail or watching a movie.</p>
            <p>Born in Belgium, currently living in Vancouver, Canada.</p>
        </div>
    </div>
    <!-- <div class="section">
        <div class="container">
            <h1>Toolbox</h1>
            <hr>
            <ul>
                <li>
                    <i>April 2019 - Now</i>
                    <ul>
                        <li>Test</li>
                    </ul>
                </li>
                <li>
                    <i>March 2016 - April 2019</i>
                    <ul>
                        <li>Test</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div> -->
</main>
