<style lang="scss">
    @import "../../theme/theme.scss";

    .navlinks {
        display: flex;
        text-transform: uppercase;
        a, a:visited {
            color: $primaryAccent1;
            text-decoration: none;
            &:hover {
                color: $primaryAccent2;
            }
        }
        li {
            padding: 12px;
            margin: 0;
            list-style: none;
        }
    }
</style>

<ul class="navlinks" role="navigation">
    <a href="/"><li>Home</li></a>
    <a href="/"><li>About</li></a>
    <a href="/"><li>Blog</li></a>
    <a href="/"><li>Contact</li></a>
</ul>