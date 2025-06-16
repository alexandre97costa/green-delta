<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '@lucide/svelte/icons/folder';
	import IconImage from '@lucide/svelte/icons/image';
	import IconMusic from '@lucide/svelte/icons/music';
	import IconVideo from '@lucide/svelte/icons/video';
	import IconBox from '@lucide/svelte/icons/box';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Paperclip from '@lucide/svelte/icons/paperclip';
	import Calendar from '@lucide/svelte/icons/calendar';
	import CircleUser from '@lucide/svelte/icons/circle-user';
	import Menu from '@lucide/svelte/icons/menu';
	import ClockPlus from '@lucide/svelte/icons/clock-plus';

	import { Icon } from '@lucide/svelte';

	let { children, data } = $props();

	let { supabase, session } = data;
	$effect: ({ supabase, session } = data);

	const a = [IconImage, IconMusic, IconBox, CircleUser];

	const links = [
		{ label: 'Leaderboard', href: '#/files', isPrimary: false, icon: 'box' },
		{ label: 'Torneios', href: '#/videos', isPrimary: false, icon: 'box' },
		{ label: 'Pistas', href: '#/music', isPrimary: false, icon: 'box' },
		{ label: 'Novo Tempo', href: '#/images', isPrimary: true, icon: 'calendar' }
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
	<header class="bg-black p-4 w-full h-[60px]">Green Delta</header>

	<!-- Content -->
	<div class="px-20">
		{@render children()}
	</div>

	<div class="sticky bg-i bottom-0 w-full flex items-center justify-center gap-5 p-5">
		<Navigation.Bar width="w-full md:w-1/2 lg:w-1/3" background="bg-black">
			{#each links as { label, href, isPrimary, icon }, i}
				<Navigation.Tile
					{label}
					{href}
					selected={page.url.pathname === href}
					hover="hover:bg-primary-500"
					background={isPrimary ? 'bg-tertiary-500' : ''}
				>
					{#if isPrimary}
						<ClockPlus />
					{:else}
						<IconFolder />
					{/if}
				</Navigation.Tile>
			{/each}
		</Navigation.Bar>
	</div>
</div>
