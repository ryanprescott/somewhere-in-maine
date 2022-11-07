<script lang="ts">
    let top = 0, left = 0;
    let shown = false;

    export const show = (x: number, y: number) => {
        left = x;
        top = y;
        shown = false;
        setTimeout(() => shown = true, 1);
    }

    export const hide = () => {
        left = 0;
        top = 0;
        shown = false;
    }
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
    .ripple-effect {
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
            animation: ripple 0.5s forwards;
            opacity: 0.2;
        }
    }
</style>

<span 
    class={`ripple-effect${shown ? ' rippled' : ''}`}
    style={`top: ${top}px; left: ${left}px;`}
/>
