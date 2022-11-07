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
    }

    :global(html) {
        background-color: $background;
        color: $onSurface;
    }

    :global(body, button, input) {
        font-family: 'Spline Sans';
    }

    :global(p, figcaption, h1, h2, h3, h4, h5, h6) {
        margin: 12px 12px 0px 12px;
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

    main {
        display: block;
        margin: auto;
        min-height: 100vh;
    }

</style>

<div>
    <Navbar />
    <main>
        <slot></slot>
    </main>
</div>
