<script>
	import '../../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';
	import TimeCard from '../../components/TimeCard.svelte';

	let { data } = $props();

	$effect(() => {
		console.log(data);
	});
</script>

<div>
	<div>{m.nav_leaderboard()}</div>
	<br />

	<ul class="flex flex-col gap-1 w-full md:w-1/2 ">
		{#each data.tracks as track, index}
			<TimeCard trackName={track.name} countryCode={track.country_code} withPodium={true} {index}/>
		{/each}
	</ul>

	<br />

	<ul class="flex flex-col gap-1 w-full md:w-1/2 ">
		{#each data.cars as car}
			<li
				class="w-full bg-neutral-100 dark:bg-surface-900 py-1 pl-2 pr-1 rounded-md flex justify-between"
			>
				<div class="font-400">
					{car.car_make.name}
					{car.model}
				</div>
				<div>
					<span class="badge preset-filled-surface-200-800">{car.year}</span>
					<span class="badge font-bold preset-filled-primary-200-800">{car.car_category.name}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>
