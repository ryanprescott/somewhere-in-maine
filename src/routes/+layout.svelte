<script lang="ts">
    import '@fontsource/spline-sans';
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<style lang="scss">

    @import '../theme/theme';

    :global(*) {
        box-sizing: border-box;
    }

    :global(body, html) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    :global(html) {
        background-color: $background;
        color: $onSurface;
    }

    :global(body, button, input) {
        font-family: 'Spline Sans';
    }

    :global(p, figcaption, h1, h2, h3, h4, h5, h6) {
        margin-bottom: 12px;
    }

    :global(a) {
        text-decoration: none;
        color: $stream;
        &:hover {
            color: $brackish;
            text-decoration: underline;
        }
        &:visited {
            color: $earth;
        }
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    main {
        display: block;
        flex-grow: 1;
        margin: auto;
        overflow-y: scroll;
    }

</style>

<div class="wrapper">
    <Navbar />
    <main>
        <slot></slot>
    </main>
</div>
