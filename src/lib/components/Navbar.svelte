<script lang="ts">
	import Button from "./Button.svelte";
	import MenuIcon from "./icons/MenuIcon.svelte";
	import Logo from "./Logo.svelte";
    import MediaQuery from "svelte-media-queries";
	import Navlinks from "./Navlinks.svelte";

    let show = false;
</script>

<style lang="scss">
    @import "../../theme/theme";
    .navbar {
        margin: 0;
        padding: 6px;
        padding-bottom: 0px;
        box-shadow: rgba($black, 0.1) 2px 2px 5px;
        background-color: $surface;
        position: fixed;
        width: 100%;
        
        &-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 960px;
            margin: auto;
        }
    }

    .navlinks-mobile {
        max-height: 0px;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
        &.shown {
            max-height: 65px;
        }
    }
</style>

<MediaQuery query="(max-width: 800px)" let:matches>
    <nav class="navbar">
        <div class="navbar-inner">
            <Logo variant="small" />
                {#if matches}
                    <Button icon on:click={() => show = !show}>
                        <MenuIcon width="32px" height="32px"/>
                    </Button>
                {/if}
                {#if !matches}
                    <Navlinks />
                {/if}
        </div>
        {#if matches}
            <div class={`navlinks-mobile ${show ? 'shown' : ''}`}>
                <Navlinks />
            </div>
        {/if}
    </nav>
</MediaQuery>