<script>
	import { onMount } from 'svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';

	let checked = $state(undefined);

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'light';
		document.documentElement.setAttribute('data-mode', mode);
	});

	const onCheckedChange = (event) => {
		const mode = event.checked ? 'light' : 'dark';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
		console.log({ mode, checked });
	};

	onMount(() => {
		const mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'light';
	})
</script>

<Switch name="mode" controlInactive="bg-black border-1 border-surface-800" controlActive="bg-surface-300" thumbInactive="bg-surface-800" {checked} {onCheckedChange}>
	{#snippet inactiveChild()}<IconMoon size="14"  />{/snippet}
	{#snippet activeChild()}<IconSun size="14" />{/snippet}
</Switch>
