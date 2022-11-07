<script lang="ts">
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
        background-color: $accent1;
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
