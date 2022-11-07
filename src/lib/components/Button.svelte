<script lang="ts">
    export let width: number | string | null | undefined = 'auto';
    export let height: number | string | null | undefined = 'auto';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let rippleTop = 0, rippleLeft = 0;

    let isRippled = false;

    const ripple = (e: MouseEvent) => {
        rippleTop = e.offsetY;
        rippleLeft = e.offsetX;

        isRippled = false;
        setTimeout(() => isRippled = true, 10);

    };

    const mousedown = (e: MouseEvent) => {
        ripple(e);
        dispatch('mousedown', e);
    };

    const blur = (e: FocusEvent) => {
        isRippled = false;
        dispatch('blur', e);
    };
    
</script>

<style lang="scss">
    @import '../../theme/theme.scss';

    @keyframes ripple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
        }
    }

    .button {
        &-ripple {
            &-container {
                height: 100%;
                width: 100%;
                overflow: hidden;
            }
            &-effect {
                position: absolute;
                transform: translate(-50%, -50%) scale(1);
                transition: opacity 0.5s;
                opacity: 0;
                width: 300%;
                padding-bottom: 300%;
                background-color: $accent1;
                border-radius: 100%;
                box-shadow: $accent1 0 0 30px 8px;
                &.rippled {
                    animation: ripple 0.5s;
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 0.2;
                }
            }
        }

        display: flex;

        background-color: $background;
        color: $onSurface;

        position: relative;

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
    }
</style>

<button
    class="button"
    width={width}
    height={height}
    on:mousedown={mousedown}
    on:blur={blur}
>
    <div class='button-ripple-container'>
        <span 
            class={`button-ripple-effect ${isRippled ? 'rippled' : ''}`}
            style={`top: ${rippleTop}px; left: ${rippleLeft}px;`}
        />
    </div>
    <span class='button-label'>
        <slot></slot>
    </span>
</button>