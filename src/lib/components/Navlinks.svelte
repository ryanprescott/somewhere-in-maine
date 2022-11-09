<script lang="ts">
    import { page } from '$app/stores';
    const links = [
        {name: 'Home', path: '/'},
        {name: 'Listen', path: '/#listen'},
        {name: 'About', path: '/#about'},
        {name: 'Contact', path: '/#contact'},
    ];
</script>

<style lang="scss">
    @import "../../theme/theme.scss";

    .navlinks {
        padding: 0;
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
        <a href={link.path}>
            <li class:active={$page.url.pathname === link.path}>{link.name}</li>
        </a>
    {/each}
</ul>