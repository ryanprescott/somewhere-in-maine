<script lang="ts">
    let x: string | number | undefined;
    let y: string | number | undefined;
    let rippled = false;

    $: left = typeof x === 'number' ? `${x}px` : x || '50%';
    $: top = typeof y === 'number' ? `${y}px` : y || '50%';

    export const show = (posX?: string | number, posY?: string | number) => {
        x = posX;
        y = posY;
        rippled = false;
        setTimeout(() => rippled = true, 0);
    };

    export const hide = () => {
        rippled = false;
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
    .ripple{ 
        &-root {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        &-effect {
            position: absolute;
            transform: translate(-50%, -50%) scale(0);
            width: 300%;
            padding-bottom: 300%;
            background-color: $primaryAccent4;
            border-radius: 100%;
            animation: ripple 0.7s;
        }
        &-cover {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
</style>

<div class='ripple-root'>
    {#if rippled}
        <span 
            class='ripple-effect'
            style:left
            style:top
        />
    {/if}
    <div class='ripple-cover' />
</div>
