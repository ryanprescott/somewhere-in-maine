<script lang="ts">
	import Button from "./Button.svelte";
	import MenuIcon from "./icons/MenuIcon.svelte";
	import Logo from "./Logo.svelte";
    import MediaQuery from "svelte-media-queries";
	import Navbar from "./Navbar.svelte";

    export let variant: 'filled' | 'transparent' = 'transparent';

    let shown = false;

    const toggle = () => shown = !shown;
</script>

<style lang="scss">
    @import "../../theme/theme";
    .header {
        position: fixed;
        margin: 0;
        padding: 6px;
        padding-bottom: 0px;
        min-height: 76px;
        background-color: transparent;
        width: 100%;
        transition: background-color 0.25s, box-shadow 0.25s;
        z-index: 1;

        &-filled {
            box-shadow: rgba($black, 0.1) 2px 2px 5px;
            background-color: $surface;
        }

        &-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 960px;
            margin: auto;
        }

        &-mobile-only {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 0.25s ease-in-out;
            display: flex;
            justify-content: space-around;
            &.shown {
                max-height: 65px;
            }
        }
    }

</style>

<MediaQuery query="(max-width: 800px)" let:matches>
    <header
        class="header"
        class:header-filled={variant === 'filled'}
    >
        <div class="header-inner">
            <Logo />
                {#if matches}
                    <Button icon on:click={toggle}>
                        <MenuIcon width="32px" height="32px"/>
                    </Button>
                {/if}
                {#if !matches}
                    <Navbar />
                {/if}
        </div>
        {#if matches}
            <div class='header-mobile-only' class:shown>
                <Navbar on:navigate={toggle} />
            </div>
        {/if}
        </header>
</MediaQuery>