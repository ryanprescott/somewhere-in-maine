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

    .navlinks {
        padding: 0;
        width: fit-content;
        display: flex;
        a, a:visited {
            color: $primaryAccent1;
            text-decoration: none;
            &:hover {
                color: $primaryAccent2;
            }
        }
        li {
            padding: 6px 12px 6px 6px;
            margin: 0;
            list-style: none;
            letter-spacing: 0.325px;
            &.active {
                color: $onSurface;
                font-weight: bold;
                letter-spacing: 0;
            }
        }
    }
</style>

<ul class="navlinks" role="navigation">
    {#each links as link}
        <a href={link.path} on:click={navigate}>
            <li>{link.name}</li>
        </a>
    {/each}
</ul>