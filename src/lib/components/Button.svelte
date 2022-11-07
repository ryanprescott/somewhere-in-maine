<script lang="ts">
    enum ButtonType {
        IconButton = 'iconButton'
    }

    export let width: number | string | null | undefined = 'auto';
    export let height: number | string | null | undefined = 'auto';

    export let icon = false;

    import { createEventDispatcher } from 'svelte';
	import Ripple from './Ripple.svelte';

    let ripple: Ripple;

    const dispatch = createEventDispatcher();

    const mousedown = (e: MouseEvent) => {
        if (icon) {
            ripple.show()
        } else {
            ripple.show(e.offsetX, e.offsetY);
        }

        dispatch('mousedown', e);
    };

    const blur = (e: FocusEvent) => {
        ripple.hide();
        dispatch('blur', e);
    };

    const classArray = ['button'];

    if (icon) {
        classArray.push('button-icon');
    }

    const className = classArray.join(' ');
</script>

<style lang="scss">
    @import '../../theme/theme.scss';

    .button {
        display: flex;
        position: relative;
        background-color: $background;
        color: $onSurface;

        transition: background-color 0.25s;
        border: transparent 1px solid;
        border-radius: 12px;
        padding: 0;
        overflow: hidden;

        &-label {
            position: relative;
            display: flex;
            background-color: transparent;
            width: 100%;
            height: 100%;
            padding: 12px;

            &-guard {
                position: absolute;
                width: 100%;
                height: 100%;
                margin: -12px -12px;
            }
        }

        &-icon {
            border-radius: 50%;
            .button-label {
                padding: 6px;
            }
        }

        &:hover {
            background-color: $accent2;
            border: 1px $accent2 solid;
        }
    }
</style>

<button
    class={className}
    {width}
    {height}
    on:mousedown={mousedown}
    on:blur={blur}
>
    <Ripple bind:this={ripple} />

    <div class='button-label'>
        <slot></slot>
        <div class='button-label-guard' />
    </div>
</button>