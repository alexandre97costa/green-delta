<script>
	import '../../app.css';
	export let form;

	let loading = false;

	const handleSubmit = () => {
		loading = true;
		return async ({ update }) => {
			update();
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<form class=" flex flex-col h-full" method="POST" use:enhance={handleSubmit}>
	<h1 class="header">Supabase + SvelteKit</h1>
	
	{#if form?.message !== undefined}
		<div class="success {form?.success ? '' : 'fail'}">
			{form?.message}
		</div>
	{/if}

		<label class="label" for="email">
			<span class="label-text">Email address:</span>
			<input
				id="email"
				name="email"
				class="inputField"
				type="email"
				placeholder="Your email"
				value={form?.email ?? ''}
			/>
		</label>
		<button type="button" class="btn preset-filled-primary-500">
			{loading ? 'Loading' : 'Send magic link'}
		</button>


	{#if form?.errors?.email}
		<span class="flex items-center text-sm error">
			{form?.errors?.email}
		</span>
	{/if}
</form>

<style lang="postcss">
	@reference "tailwindcss";
</style>
