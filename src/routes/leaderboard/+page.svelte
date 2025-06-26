<script>
	import '../../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

	let { data } = $props();

	$effect(() => {
		console.log(data);
	});
</script>

<div>
	<div>{m.nav_leaderboard()}</div>
	<br />

	

	<ul class="flex flex-col gap-1 w-1/2">
		{#each data.cars as car}
			<li
				class="w-fullm bg-neutral-100 dark:bg-surface-900 py-1 pl-2 pr-1 rounded-md flex justify-between"
			>
				<div>
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
