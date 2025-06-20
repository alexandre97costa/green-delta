<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import LucideIcon from '../components/LucideIcon.svelte';
	import HeaderImg from '$lib/favicon.png';

	let { children, data } = $props();

	let { supabase, session } = data;
	$effect: ({ supabase, session } = data);

	const links = [
		{ label: m.nav_leaderboard(), href: '/leaderboard', icon: 'Crown' },
		{ label: m.nav_tournaments(), href: '/makes', icon: 'Trophy' },
		{ label: m.nav_newtime(), href: '/new-time', icon: 'ClockPlus' }
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
	<header class="bg-black px-6 py-3 w-full flex items-center justify-between">
		<!-- Left Header -->
		<div class="flex gap-3 items-center">
			<img src={HeaderImg} alt="Header icon" class="max-h-[40px]" />
			<h1 class="brand-font font-bold text-2xl">Green Delta</h1>
		</div>

		<!-- Right Header -->
		<nav class="btn-group preset-outlined-surface-200-800 p-2 ">
			<button type="button" class="btn btn-sm preset-filled" onclick={() => setLocale('en')}>EN</button>
			<button type="button" class="btn btn-sm hover:preset-tonal" onclick={() => setLocale('pt-pt')}>PT</button>
		</nav>
	</header>

	<!-- Content -->
	<div class="px-6 md:px-8 py-6 h-full w-full">
		{@render children()}
	</div>

	<div class="sticky bg-i bottom-0 w-full flex items-center justify-center md:pb-5">
		<Navigation.Bar classes="rounded-lg bg-black h-[50px]" width="w-full md:w-1/2 lg:w-1/3">
			{#each links as { label, href, icon, icon2 }, i}
				<Navigation.Tile
					{label}
					{href}
					selected={page.url.pathname === href}
					height={'mh-20px'}
					hover={'hover:border-1 hover:border-primary-500 '}
					classes={'border-1 border-neutral-950 ' +
						(page.url.pathname === href ? 'bg-primary-500 text-neutral-950' : 'text-neutral-50')}
				>
					<LucideIcon name={icon} />
				</Navigation.Tile>
			{/each}
		</Navigation.Bar>
	</div>
</div>
