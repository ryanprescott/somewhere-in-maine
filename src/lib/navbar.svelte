<script lang="ts">
	import Logo from "./logo.svelte";
</script>

<style lang="scss">
    @import "../theme/colors";
    .navbar {
        margin: 0;
        background: $offWhite;
        padding: 6px;
        padding-bottom: 0px;
        box-shadow: rgba($black, 0.3) 2px 2px 20px;
        display: flex;
        justify-content: space-between;
    }
</style>

<nav class="navbar">
    <Logo variant="small" />
</nav>