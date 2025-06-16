<script>
	let { data } = $props();
</script>

<ul>
	{#each data.car_make as car_make}
		<li>{car_make.name}</li>
	{/each}
</ul>
