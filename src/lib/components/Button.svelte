<script lang="ts">
    export let width: number | string | null | undefined = 'auto';
    export let height: number | string | null | undefined = 'auto';

    import { createEventDispatcher } from 'svelte';
	import Ripple from './Ripple.svelte';

    let ripple: Ripple;

    const dispatch = createEventDispatcher();

    const mousedown = (e: MouseEvent) => {
        ripple.show(e.offsetX, e.offsetY)
        dispatch('mousedown', e);
    };

    const blur = (e: FocusEvent) => {
        ripple.hide();
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
            opacity: 0;
        }
    }

    .button {
        display: flex;
        position: relative;
        background-color: $background;
        color: $onSurface;

        transition: background-color 0.25s;
        border-radius: 12px;
        border: 1px $accent1 solid;
        padding: 0;
        overflow: hidden;

        &-label {
            position: relative;
            display: flex;
            background-color: transparent;
            width: 100%;
            height: 100%;
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
    {width}
    {height}
    on:mousedown={mousedown}
    on:blur={blur}
>
    <Ripple bind:this={ripple} />

    <div class='button-label'>
        <slot></slot>
    </div>
</button>