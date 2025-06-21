<script>
	import '../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// let checked = $state(false);

	// $effect(() => {
	// 	const mode = localStorage.getItem('mode') || 'light';
	// 	checked = mode === 'dark';
	// });

	// const onCheckedChange = (checked) => {
	// 	const mode = event.checked ? 'dark' : 'light';
	// 	document.documentElement.setAttribute('data-mode', mode);
	// 	localStorage.setItem('mode', mode);
	// 	checked = event.checked;
	// };
	// const language = writable('');
	// language.subscribe((value) => {
	// 	console.log(value);
	// 	localStorage.setItem('language', value);
	// });

	let language = $state('');
	$effect(() => {
		if (language != '') {
			setLocale(language), { reload: false };
			localStorage.setItem('language', language);
		}
	});
</script>

<svelte:head>
	<script>
		language = localStorage.getItem('language') || 'en';
	</script>
</svelte:head>

<Segment name="language" value={language} onValueChange={(e) => (language = e.value)}>
	<Segment.Item value="en">EN</Segment.Item>
	<Segment.Item value="pt-pt">PT</Segment.Item>
</Segment>
