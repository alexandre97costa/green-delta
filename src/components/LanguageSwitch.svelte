<script>
	import '../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let language = $state('');
	$effect(() => {
		if (language != '') {
			setLocale(language), { reload: false };
			localStorage.setItem('language', language);
		}
		else {
			language = localStorage.getItem('language') || 'en';
			
		}
	});
</script>

<svelte:head>
	<!-- <script>
	</script> -->
</svelte:head>

<Segment
	name="language"
	base="text-white px-1.5 py-1 rounded-lg"
	border="border-surface-800 dark:border-surface-800"
	indicatorBg="bg-surface-800"
	indicatorText="text-white"
	value={language}
	onValueChange={(e) => (language = e.value)}
>
	<Segment.Item base="px-1 py-0.5" value="en">EN</Segment.Item>
	<Segment.Item base="px-1 py-0.5" value="pt-pt">PT</Segment.Item>
</Segment>
