<script lang="ts">
    import '@fontsource/spline-sans';
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<style lang="scss">

    @import '../theme/theme';

    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
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

    main {
        padding: 0 12px;
    }

</style>

<div>
    <Navbar />
    <main>
        <slot></slot>
    </main>
</div>
