<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { page } from '$app/stores';

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
        padding: 0;
        width: fit-content;
        display: flex;
        height: 100%;
        a, a:visited {
            display: block;
            color: $primaryAccent1 !important;
            text-decoration: none;
            &:hover {
                color: $primaryAccent2;
            }
            padding: 12px;
            font-weight: bold;
        }
    }
</style>

<nav class="nav">
    {#each links as link}
        <a href={link.path} on:click={navigate}>
            {link.name}
        </a>
    {/each}
</nav>