<script lang="ts">
    export let src: string;
    export let alt: string | undefined = undefined;
    export let height: number | string | undefined = undefined;
</script>

<style lang="scss">
    .responsive-image {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>

<img
    {src}
    {alt}
    style={`height: ${height};`}
    class="responsive-image"
/>