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
            // Always originate from the middle
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

        &:hover {
            background-color: rgba($primaryAccent5, 0.2);
        }

        &-contained {
            background-color: $primaryAccent4;
            &:hover {
                background-color: $primaryAccent6;
            }
        }

        &-label {
            position: relative;
            background-color: transparent;
            display: flex;
            width: 100%;
            height: 100%;
            padding: 12px;
        }

        &-icon {
            border-radius: 50%;
            .button-label {
                padding: 6px;
            }
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