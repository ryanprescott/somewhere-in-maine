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
        font-family: 'Spline Sans';
        background-color: $background;
        color: $onSurface;
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
