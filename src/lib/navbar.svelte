<script lang="ts">
	import Logo from "./logo.svelte";
</script>

<style lang="scss">
    @import "../theme/colors";
    .navbar {
        margin: 0;
        padding: 6px;
        padding-bottom: 0px;
        box-shadow: rgba($black, 0.3) 2px 2px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    html.dark .navbar {
        background: $black;
    }
</style>

<nav class="navbar">
    <Logo variant="small" />
    <button style="margin-top: -6px">burger</button>
</nav>