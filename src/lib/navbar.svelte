<script lang="ts">
	import Logo from "./logo.svelte";
</script>

<style lang="scss">
    @import '../styles/colors.scss';
    .navbar {
        margin: 0;
        background: $white;
        padding: 6px;
        padding-bottom: 0px;
        box-shadow: rgba($black, 0.3) 2px 2px 20px;
        display: flex;
        justify-content: space-between;
    }
</style>

<nav class="navbar">
    <Logo variant="small" />
    <button>menu</button>
</nav>