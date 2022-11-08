<script lang="ts">
    export let variant: 'primary' | 'secondary' = 'primary';
    let primary = variant === 'primary';
    let secondary = variant === 'secondary';
</script>

<style lang="scss">
    .container {
        @import "../../theme/theme.scss";

        padding: 24px 12px;

        color: $onSurface;

        &-primary {
            background-color: $surface;
        }
        &-secondary {
            background-color: $primaryAccent5;
        }
        &-inner {
            @media screen and (max-width: 960px) {
                width: 100%;
            }
            width: 960px;
            margin: auto;
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