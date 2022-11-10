<script lang="ts">
    export let src: string;
    export let alt: string | undefined = undefined;
    export let aspect: string = '16:9';

    // For this to work, aspect NEEDS to be a value like "16:9"
    $: [aspectWidth = 16, aspectHeight = 9] = aspect.split(':').map(value => Number(value));
    $: paddingBottomPercent = Math.round(10000 * aspectHeight / aspectWidth) / 100;
</script>

<style lang="scss">
    .image {
        &-container {
            position: relative;
            width: 100%;
            height: 0;
        }
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

<div class="image-container" style:padding-bottom="{paddingBottomPercent}%">
    <img class="image" {src} {alt} />
</div>