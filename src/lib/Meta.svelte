<script lang="ts">
	import { meta } from '../stores';

    export let title: string;
    export let description: string;
    export let type: 'article' | 'website';

    $meta.page.title = title;
    $meta.page.description = description;
</script>

<svelte:head>
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