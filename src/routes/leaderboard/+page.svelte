<script>
	import '../../app.css';
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';

	let { data } = $props();
</script>

<div>
	<div>{m.nav_leaderboard()}</div>

	<ul>
		{#each data.car as car}
			<li>{car.name}</li>
		{/each}
	</ul>
</div>
