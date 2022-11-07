<script lang="ts">
    import '@fontsource/spline-sans';
    import Navbar from '$lib/Navbar.svelte';

    import { meta } from '../stores'
    
    $meta.site.name = 'Somewhere In Maine';
    $: title = $meta.page.title ? `${$meta.page.title} | ${$meta.site.name}` : $meta.site.name;
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
        padding: 0 12px;
    }

</style>

<div>
    <Navbar />
    <main>
        <slot></slot>
    </main>
</div>
