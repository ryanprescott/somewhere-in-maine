<script>
	import Mark from "./Mark.svelte";

</script>

<style lang="scss">
    .footer {
        @import "../../theme/theme.scss";
        display: flex;
        box-shadow: rgba($black, 0.1) -2px -2px 5px;
        background-color: $surface;
        padding: 6px 6px 0 6px;
        &-left, &-right {
            flex-grow: 1;
        }
    }
</style>

<footer class="footer">
    <div class="footer-left"></div>
        <Mark height="100px" />
    <div class="footer-right"></div>
</footer>