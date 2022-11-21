<script lang="ts">
    import "@fontsource/teko/400.css";
    import { createEventDispatcher } from 'svelte';
    
    export let variant: 'dark' | 'light' = 'light';
    $: dark = variant === 'dark';

    const links = [
        {name: 'Home', path: '/'},
        {name: 'Listen', path: '/#listen'},
        {name: 'About', path: '/#about'},
        {name: 'Contact', path: '/#contact'},
    ];

    const dispatch = createEventDispatcher();
    const navigate = () => {
        dispatch('navigate')
    };
</script>

<style lang="scss">
    @import "../../theme/theme.scss";

    .nav {
        &.dark {
            color: $onSurfaceDark;
            text-shadow: 0 0 5px $black, 0 0 3px $black;
            a, a:visited {
                &:hover {
                    color: $primaryAccent4;
                }
            }
        }

        padding: 0;
        width: fit-content;
        display: flex;
        height: 100%;
        font-family: Teko;
        font-weight: 400;
        font-size: 24px;
        text-transform: uppercase;

        a, a:visited {
            transition: color 0.25s;
            display: block;
            color: inherit;
            text-decoration: none;
            &:hover {
                color: $primaryAccent2;
            }
            padding: 12px;
        }
    }
</style>

<nav class="nav" class:dark>
    {#each links as link}
        <a href={link.path} on:click={navigate}>
            {link.name}
        </a>
    {/each}
</nav>