<script lang="ts">
    import '@fontsource/spline-sans';
    import '@fontsource/inter/800.css';
    import Header from '$lib/components/Header.svelte';

    let scroll: number;
    $: variant = scroll >= 76 ? 'filled' : 'transparent';

</script>

<style lang="scss">

    @import '../theme/theme';

    :global(*) {
        box-sizing: border-box;
    }

    :global(body, html) {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        scroll-padding-top: 116px;
    }

    :global(html) {
        background-color: $background;
        color: $onSurface;
    }

    :global(body, button, input) {
        font-family: 'Spline Sans';
    }

    :global(p, figcaption, h1, h2, h3, h4, h5, h6, figure) {
        margin-top: 0;
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

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: Inter;
        font-weight: 800;
    }

    :global(h1) {
        @media screen and (max-width: 1080px) {
            font-size: 54px;
        }
        @media screen and (max-width: 960px) {
            font-size: 48px;
        }
        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
        font-size: 64px;
    }

    :global(h2) {
        @media screen and (max-width: 1080px) {
            font-size: 40px;
        }
        @media screen and (max-width: 960px) {
            font-size: 32px;
        }
        @media screen and (max-width: 500px) {
            font-size: 30px;
        }
        font-size: 48px;
    }
    
    main {
        display: block;
        margin: auto;
    }

    :global(.hero p) {
        font-size: 24px;
    }
</style>

<a id="home"> </a>
<Header bind:variant={variant} />
<main>
    <slot></slot>
</main>

<footer></footer>
<svelte:window bind:scrollY={scroll} />