<script lang="ts">
    import "@fontsource/spline-sans";
    import Navbar from "$lib/navbar.svelte";
</script>

<style lang="scss">
    @import '../styles/colors.scss';

    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
        background-color: $offWhite;
        color: $offBlack;
        font-family: 'Spline Sans';
        margin: 0;
        padding: 0;
    }

    :global(main) {
        padding: 6px;
    }
</style>

<div>
    <Navbar />
    <main>
        <p>You are my muse.</p>
    </main>
</div>
