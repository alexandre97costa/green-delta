<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';

	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	import LucideIcon from '../components/LucideIcon.svelte';
	import LightSwitch from '../components/LightSwitch.svelte';
	import LanguageSwitch from '../components/LanguageSwitch.svelte';
	import HeaderImg from '$lib/favicon.png';

	const links = [
		{ label: m.nav_home(), href: '/', icon: 'House' },
		{ label: m.nav_leaderboard(), href: '/leaderboard', icon: 'Crown' },
		{ label: m.nav_tournaments(), href: '/tournaments', icon: 'Trophy' },
		// { label: m.nav_newtime(), href: '/times/new', icon: 'ClockPlus' }
	];

	let { children, data } = $props();

	let { supabase, session } = data;
	$effect: ({ supabase, session } = data);
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

<div class=" flex flex-col h-full w-full bg-neutral-200 dark:bg-surface-950">
	<header class=" px-3 md:px-6 py-2 md:py-3 w-full flex items-center justify-between">
		<!-- Left Header -->
		<a class="flex gap-1.5 md:gap-3 items-start" href="/">
			<img src={HeaderImg} alt="Header icon" class="max-h-[30px] md:max-h-[40px]" />
			<h1 class="brand-font font-bold text-lg md:text-xl pt-0.5 text-neutral-900 dark:text-white">Green Delta</h1>
		</a>

		<!-- Right Header -->
		<div class="flex gap-1.5 md:gap-3 items-center">
			<!-- <Segment name="language" value={language} onValueChange={(e) => (language = e.value)}>
				<Segment.Item value="en">EN</Segment.Item>
				<Segment.Item value="pt-pt">PT</Segment.Item>
			</Segment> -->
			<LanguageSwitch />
			<LightSwitch />
		</div>
	</header>

	<!-- Content -->
	<div class="px-6 md:px-8 py-6 h-full w-full">
		{@render children()}
	</div>

	<!-- Bottom nav -->
	<div class="sticky bottom-0 w-full flex items-center justify-center md:pb-5">
		<Navigation.Bar classes="md:rounded-2xl py-1 bg-neutral-100 dark:bg-neutral-950 h-[54px]" width="w-full md:w-1/2 lg:w-2/5" tilesGap="gap-1">
			{#each links as { label, href, icon }, i}
				<Navigation.Tile
					{label}
					{href}
					selected={page.url.pathname === href}
					height={'mh-20px'}
					hover={' hover:bg-slate-300 hover:text-slate-500'}
					classes={'transition  ' +
						(page.url.pathname === href ? 'bg-slate-500  text-neutral-50' : 'text-neutral-500')}
				>
					<LucideIcon name={icon} />
				</Navigation.Tile>
			{/each}
		</Navigation.Bar>
	</div>
</div>
