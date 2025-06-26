<script>
	import '../../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

	let { data } = $props();

	$effect(() => {
		console.log(data)
	});
</script>

<div>
	<div>{m.nav_leaderboard()}</div>
	<ul>
		{#each data.cars as car}
			<li>{car.car_make.name} {car.model} {car.car_category.name} {car.year}</li>
		{/each}
	</ul>
</div>
