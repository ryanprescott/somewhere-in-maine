<script lang="ts">
    import { browser } from '$app/environment'

    import "@fontsource/spline-sans";
    import Navbar from "$lib/navbar.svelte";

    let darkMode = true

    function handleSwitchDarkMode() {
        darkMode = !darkMode

        localStorage.setItem('theme', darkMode ? 'dark' : 'light')

        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }

    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            darkMode = true
        } else {
            document.documentElement.classList.remove('dark')
            darkMode = false
        }
    }

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

    :global(html.dark) {
        background-color: $backgroundDark;
        color: $onSurfaceDark;
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
