<script lang="ts">
	import { meta } from '../../stores';

    export let title: string;
    export let description: string;
    export let type: 'article' | 'website';

    $meta.site.name = 'Somewhere in Maine';
    
    $meta.page.title = title;
    $meta.page.description = description;

    $: titleTag = $meta.page.title ? `${$meta.page.title} | ${$meta.site.name}` : $meta.site.name;
</script>

<svelte:head>
    <title>{titleTag}</title>
    
    <!-- Classic meta tags -->
    <meta name="description" content={description} />

    <!-- Open Graph-->
    <meta property="og:site_name" content={$meta.site.name} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={title} />
    <meta property="og:type" content={type} />
    
    <!-- Twitter -->
    <meta name="twitter:title" content={title} />
</svelte:head>