<script lang="ts">
	import Image from "./Image.svelte";

    export let src: string;
    export let alt: string;
    export let aspect: string;

    export let caption: string;
</script>

<style lang="scss">
    .figure {
        margin-left: 0;
        margin-right: 0;
        &-caption {
            margin-top: 12px;
            font-style: oblique;
        }
    }
</style>

<figure class="figure">
    <Image {src} {alt} {aspect} />
    {#if caption}
        <figcaption class="figure-caption">{caption}</figcaption>
    {/if}
</figure>