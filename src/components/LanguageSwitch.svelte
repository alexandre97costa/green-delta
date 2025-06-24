<script>
	import '../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let language = $state('');
	$effect(() => {
		if (language == '') {
			language = localStorage.getItem('language') || 'en';
		} else {
			setLocale(language), { reload: false };
			localStorage.setItem('language', language);
		}
	});
</script>

<Segment
	name="language"
	base="bg-neutral-200 text-neutral-500 dark:bg-black px-1.5 py-1 rounded-lg"
	border="border-surface-800 dark:border-surface-800"
	indicatorBg="bg-transparent dark:bg-transparent"
	indicatorText="text-black font-extrabold dark:text-white"
	value={language}
	onValueChange={(e) => (language = e.value)}
>
	<Segment.Item base="px-1 py-0.5" value="en">EN</Segment.Item>
	<Segment.Item base="px-1 py-0.5" value="pt-pt">PT</Segment.Item>
</Segment>
