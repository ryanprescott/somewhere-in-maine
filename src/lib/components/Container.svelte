<script lang="ts">
    export let variant: 'primary' | 'secondary' = 'primary';
    let primary = variant === 'primary';
    let secondary = variant === 'secondary';
</script>

<style lang="scss">
    .container {
        @import "../../theme/theme.scss";

        padding: 12px;

        color: $onSurface;

        &-primary {
            background-color: $surface;
        }
        &-secondary {
            background-color: $primaryAccent5;
        }
        &-inner {
            max-width: 960px;
            margin: 0 auto;
        }
    }
</style>

<div
    class="container"
    class:container-primary={primary}
    class:container-secondary={secondary}
>
    <div class="container-inner">
        <slot></slot>
    </div>
</div>