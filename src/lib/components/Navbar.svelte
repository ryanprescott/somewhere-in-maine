<script lang="ts">
	import Button from "./Button.svelte";
	import MenuIcon from "./icons/MenuIcon.svelte";
	import Logo from "./Logo.svelte";
    import MediaQuery from "svelte-media-queries";
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
</style>


<nav class="navbar">
    <div class="navbar-inner">
        <Logo variant="small" />
        <MediaQuery query="(max-width: 800px)" let:matches>
            {#if matches}
                <Button icon>
                    <MenuIcon width="32px" height="32px"/>
                </Button>
            {/if}
        </MediaQuery>
    </div>
</nav>