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
        &-ripple {
            &-container {
                height: 100%;
                width: 100%;
                overflow: hidden;
            }
            &-effect {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                width: 120%;
                padding-bottom: 120%;
                background-color: $accent1;
                transition: transform 0.2s;
                border-radius: 100%;
            }
        }
        position: relative;
        display: flex;
        background-color: $background;
        color: $onSurface;

        transition: background-color 0.25s;
        border-radius: 12px;
        border: 1px $accent1 solid;
        overflow: hidden;

        &-label {
            padding: 12px;
            z-index: 1;
        }
        &:hover {
            background-color: $accent2;
        }
        &:active {
            background-color: inherit;
            .button-ripple-effect {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
</style>

<button class="button" width={width} height={height}>
    <div class='button-ripple-container'>
        <span class='button-ripple-effect'></span>
    </div>
    <span class='button-label'>
        <slot></slot>
    </span>
</button>