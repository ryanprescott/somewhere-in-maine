<script lang="ts">
    export let width: number | string | null | undefined = 'auto';
    export let height: number | string | null | undefined = 'auto';
    export let onClick: (() => void) | undefined;

    let isRippling = false;
    let timeout: any;
</script>

<style lang="scss">
    @import '../../theme/theme.scss';
    .button {
        position: relative;

        background-color: $background;
        color: $onSurface;

        transition: background-color 0.25s;
        padding: 12px;
        border-radius: 12px;
        border: 1px $accent1 solid;
        overflow: hidden;
        &:hover {
            background-color: $accent2;
        }
        &:active {
            background-color: inherit;
        }
    }
</style>

<button class="button" width={width} height={height}>
    <span class='button-label'>
        <slot></slot>
    </span>
</button>