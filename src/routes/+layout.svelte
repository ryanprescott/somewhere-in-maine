<script lang="ts">
    import '@fontsource/spline-sans';
    import Navbar from '$lib/Navbar.svelte';

    import { pageTitle, siteName } from '../stores/meta'
    
    $siteName = 'Somewhere In Maine';
    $: title = $pageTitle ? `${$pageTitle} | ${$siteName}` : $siteName;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

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
        padding: 6px;
    }

</style>

<div>
    <Navbar />
    <main>
        <slot></slot>
    </main>
</div>
