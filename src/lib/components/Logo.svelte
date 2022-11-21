<script lang="ts">
  import "@fontsource/teko/600.css";
	import Mark from "./Mark.svelte";

  export let variant: 'dark' | 'light' = 'light';
  $: dark = variant === 'dark';

</script>

<style lang="scss">
  @import "../../theme/theme.scss";

  .logo {
    display: flex;
    align-items: center;
    &.dark {
      color: $onSurfaceDark;
      text-shadow: 0 0 5px $black, 0 0 3px $black;
    }
    &-text {
      user-select: none;
      font-family: 'Teko';
      font-weight: 600;
      font-size: 30px;
      letter-spacing: -1px;
      margin-left: -8px;
      &-break {
        display: block;
        line-height: 0.8;
      }
    }
  }
</style>

<div
  class="logo"
  class:dark
>
  <Mark height="70px" />
  <div class="logo-text">
    <span class="logo-text-break">SOMEWHERE</span>
    <span class="logo-text-break">IN MAINE</span>
  </div>
</div>