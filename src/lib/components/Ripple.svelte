<script lang="ts">
    /*
    import { quadOut } from 'svelte/easing'

    let rippleShow = false;

    const ripple = (node: any, { delay = 0, duration = 0 } : { delay: number; duration: number; })  => {
        return {
            delay,
            duration,
            css: (t: any) => {
                const eased = quadOut(t);
                
                return `transform:scale(${eased}`
            },
        };
    };

    const showRipple = () => {
        rippleShow = !rippleShow;
    }
    */

    let top: string;
    let left: string;
    let shown = false;

    export const show = (x: string | number = '50%', y: string | number = '50%') => {
        left = typeof x === 'number' ? `${x}px` : x;
        top = typeof y === 'number' ? `${y}px` : y;
        shown = false;
        setTimeout(() => shown = true, 1);
    };

    export const hide = () => {
        shown = false;
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
    .ripple-effect {
        position: absolute;
        transform: translate(-50%, -50%) scale(0);
        width: 300%;
        padding-bottom: 300%;
        background-color: $primaryAccent4;
        border-radius: 100%;
        &.rippled {
            animation: ripple 0.7s;
        }
    }
</style>

<span 
    class={`ripple-effect${shown ? ' rippled' : ''}`}
    style={`top: ${top}; left: ${left};`}
/>
