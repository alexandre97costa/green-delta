<script>
	import '../app.css';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import IconSkull from '@lucide/svelte/icons/skull';
	import IconUser from '@lucide/svelte/icons/user';
	import IconCar from '@lucide/svelte/icons/car';

	let props = $props();

	let podiumColors = [
		'bg-[#B3AD00] border-[#B3AD00]  p-[3px] ', // 🥇 gold
		'bg-[#8B8B8B] border-[#8B8B8B]  p-[3px] ', // 🥈 silver
		'bg-[#B55B0B] border-[#B55B0B]  p-[3px] ' // 🥉 bronze
	];
</script>

<div
	class={(props.withPodium && props.index < 3
		? podiumColors[props.index]
		: 'bg-neutral-100-900 border-neutral-100') + ' rounded-md flex items-center'}
>
	<span class="px-2 font-mono text-lg opacity-65">{props.index + 1}</span>

	<div class="flex justify-between items-center px-3 py-1 w-full rounded-md bg-neutral-200-800">
		<!-- Lap Time -->
		<span class="text-3xl dark:text-neutral-300 text-neutral-700 font-mono">1:32:586</span>

		<div class="flex flex-col items-end leading-none text-neutral-500">
			<!-- Track -->
			<span>{props.trackName}</span>
			<!-- Car -->
			<span>teste 22</span>
			<!-- Author -->
			<span>teste3333</span>
		</div>
	</div>
</div>

<div
	class="hidden card w-full flex flex-col max-w-md preset-filled-surface-200-800 py-2 px-3 rounded-md"
>
	<p class="text-sm flex gap-1 items-center text-neutral-400">
		<img
			src={'https://flagsapi.com/' + props.countryCode + '/flat/16.png'}
			alt={props.countryCode + ' flag'}
		/>
		{props.trackName}
	</p>
	<p class="font-mono text-2xl font-">1:03:574</p>

	<div class="hidden">
		<span class="badge2 preset- flex">
			<IconUser size={16} />
			<span>Tomás</span>
		</span>
		<span class="badge2 preset- flex">
			<IconCar size={16} />
			<span>Mclaren 720S</span>
		</span>
	</div>

	<!-- <Avatar src="https://i.pravatar.cc/150?img=69" name="skeleton">
        <Skull size={24} /> 
    </Avatar> -->
</div>

<style>
</style>
