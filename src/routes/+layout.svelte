<script lang="ts">
    import '@fontsource/spline-sans';
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

    main {
        display: block;
        margin: auto;
    }

</style>

<a id="home"> </a>
<Header bind:variant={variant} />
<main>
    <slot></slot>
</main>

<footer></footer>
<svelte:window bind:scrollY={scroll} />