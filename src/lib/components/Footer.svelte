<script>
	import Mark from "./Mark.svelte";
    const year = (new Date()).getFullYear();
</script>

<style lang="scss">
    .footer {
        @import "../../theme/theme.scss";
        display: flex;
        box-shadow: rgba($black, 0.1) -2px -2px 5px;
        background-color: $primaryAccent6;
        padding: 24px 12px 0 12px;
        height: 80px;
        color: $primaryAccent1;

        font-size: 14px;
        @media screen and (max-width: 400px) {
            font-size: 12px;
        }

        &-left, &-right {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            padding-bottom: 12px;
        }

        p {
            margin: 0;
        }
    }
</style>

<footer class="footer">
    <div class="footer-left">
        <p>SOMEWHERE IN MAINE is a registered trademark of Ryan Prescott.</p>
    </div>
    <div class="footer-middle">
        <Mark height="70px" opacity={0.7} />
    </div>
    <div class="footer-right">
        <p>Copyright &copy; {year} Ryan Prescott, all rights reserved.</p>
    </div>
</footer>