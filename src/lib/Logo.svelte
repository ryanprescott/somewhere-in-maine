<script lang="ts">
  import "@fontsource/teko";
	import Mark from "./Mark.svelte";
</script>

<style lang="scss">
  .logo {
    margin-left: -30px;
    display: flex;
    align-items: center;
    &-text {
      user-select: none;
      font-family: 'Teko';
      font-weight: bold;
      font-size: 30px;
      letter-spacing: -1px;
      margin-left: -8px;
      span {
        display: block;
        line-height: 0.8;
      }
    }
  }
</style>

<div class="logo">
  <Mark height="70px" />
  <div class="logo-text">
    <span>SOMEWHERE</span>
    <span>IN MAINE</span>
  </div>
</div>