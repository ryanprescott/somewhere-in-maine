<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	import Ripple from './Ripple.svelte';

    export let variant: 'text' | 'outlined' | 'contained' = 'text';
    export let icon = false;

    let text = variant === 'text';
    let outlined = variant === 'outlined';
    let contained = variant === 'contained';

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
</script>

<style lang="scss">
    @import '../../theme/theme.scss';

    .button {
        display: flex;
        position: relative;
        background-color: transparent;
        color: $onSurface;

        transition: background-color 0.25s;
        border: transparent 1px solid;
        border-radius: 12px;
        padding: 0;
        overflow: hidden;

        &-label {
            position: relative;
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
            background-color: $primaryAccent5;
            border: 1px $primaryAccent5 solid;
        }
    }
</style>

<button
    class='button'
    class:button-text={text}
    class:button-outlined={outlined}
    class:button-contained={contained}
    class:button-icon={icon}

    on:mousedown={mousedown}
    on:blur={blur}
    on:click
> 
    <Ripple bind:this={ripple} />

    <div class='button-label'>
        <slot></slot>
    </div>
</button>