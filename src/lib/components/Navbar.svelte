<script lang="ts">
	import Button from "./Button.svelte";
	import MenuIcon from "./icons/MenuIcon.svelte";
	import Logo from "./Logo.svelte";
</script>

<style lang="scss">
    @import "../../theme/colors";
    .navbar {
        margin: 0;
        padding: 6px;
        padding-bottom: 0px;
        box-shadow: rgba($black, 0.3) 2px 2px 20px;

        &-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>

<nav class="navbar">
    <div class="navbar-inner">
        <Logo variant="small" />
        <Button icon>
            <MenuIcon width="32px" height="32px"/>
        </Button>
    </div>
</nav>