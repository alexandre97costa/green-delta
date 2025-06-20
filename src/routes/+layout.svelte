<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import LucideIcon from '../components/LucideIcon.svelte';
	import HeaderImg from '$lib/favicon.png'

	let { children, data } = $props();

	let { supabase, session } = data;
	$effect: ({ supabase, session } = data);

	const links = [
		{ label: 'Leaderboard', href: 'files', isPrimary: false, icon: 'Crown'},
		{ label: 'Novo Tempo', href: 'images', isPrimary: true, icon: 'ClockPlus' },
		{ label: 'Torneios', href: 'videos', isPrimary: false, icon: 'Trophy' },
	];

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Green Delta</title>
</svelte:head>

<div class=" flex flex-col h-full w-full">
	<header class="bg-black px-6 py-3 w-full flex gap-3 items-start">
		<img src={HeaderImg} alt="Header icon" class="max-h-[40px]">
		<h1 class="brand-font font-bold text-2xl">Green Delta</h1>
	</header>

	<!-- Content -->
	<div class="px-6 md:px-8 py-6 h-full">
		{@render children()}
	</div>

	<div class="sticky bg-i bottom-0 w-full flex items-center justify-center gap-5 md:pb-5">
		<Navigation.Bar width="rounded-lg w-full md:w-1/2 lg:w-1/3" background="bg-black">
			{#each links as { label, href, isPrimary, icon, icon2 }, i}
				<Navigation.Tile
					{label}
					{href}
					selected={page.url.pathname === href}
					hover="hover:bg-primary-500"
					background={isPrimary ? 'bg-tertiary-500' : ''}
				>
					<LucideIcon name={icon} />
				</Navigation.Tile>
			{/each}
		</Navigation.Bar>
	</div>
</div>
