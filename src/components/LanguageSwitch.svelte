<script>
	import '../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

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
	let language = $state('');
	onMount(() => {});
</script>

<Segment name="language" value={language} onValueChange={(e) => (language = e.value)}>
	<Segment.Item value="en">EN</Segment.Item>
	<Segment.Item value="pt-pt">PT</Segment.Item>
</Segment>
