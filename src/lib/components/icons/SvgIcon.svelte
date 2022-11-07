<script lang="ts">
    export let width: string | number | null | undefined = "24px";
    export let height: string | number | null | undefined  = "24px";
</script>

<svg
  class={$$props.class}
  {width}
  {height}
  viewBox="0 0 24 24"
>
  <slot></slot>
</svg>