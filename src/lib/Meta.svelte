<script lang="ts">
	import {
        siteName,
        pageTitle,
        pageDescription,
    } from '../stores/meta';

    export let title: string;
    export let description: string;
    export let type: 'article' | 'website';

    $pageTitle = title;
    $pageDescription = description;
</script>

<svelte:head>
    <!-- Classic meta tags -->
    <meta name="description" content={description} />

    <!-- Open Graph-->
    <meta property="og:site_name" content={$siteName} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={title} />
    <meta property="og:type" content={type} />
    
    <!-- Twitter -->
    <meta name="twitter:title" content={title} />
</svelte:head>