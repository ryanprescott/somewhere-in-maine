<script lang="ts">
    export let src: string;
    export let alt: string | undefined = undefined;
    export let height: number | string | undefined = undefined;
</script>

<style lang="scss">
    .responsive-image {
        width: 100vw;
        object-fit: cover;
    }
</style>

<img
    {src}
    {alt}
    style:height
    class="responsive-image"
/>