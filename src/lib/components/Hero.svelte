<script>
	import Button from "./Button.svelte";
	import DownIcon from "./icons/DownIcon.svelte";
</script>

<style lang="scss">
    .hero {
        @import "../../theme/theme.scss";

        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(0, rgba(2,0,36,0.5) 0%, transparent 100%), url('/img/somewhere-cover.webp');
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;

        &-content {
            flex-grow: 1;
            color: $primaryAccent6;
            text-shadow: 0 0 15px $black, 0 0 5px $black;
            font-weight: bold;
            padding: 48px;
            text-align: center;
        }

        &-button-rack {
            height: 76px;
        }

        &-content, &-button-rack {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }  

    }
</style>
<div 
    class="hero"
>
    <div class="hero-content">
        <div>
            <slot></slot>
        </div>
    </div>
    <div class="hero-button-rack">   
        <a href="/#listen">
            <Button variant="contained" icon>
                <DownIcon />
            </Button>
        </a>
    </div>
</div>
