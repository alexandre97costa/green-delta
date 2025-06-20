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
	<title>Login | Green Delta</title>
</svelte:head>
<div class="w-full h-full flex justify-center items-center">
	<form class="w-xl flex flex-col gap-3" method="POST" use:enhance={handleSubmit}>

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
				class="input"
				type="email"
				placeholder="Your email"
				value={form?.email ?? ''}
			/>
		</label>

		<button type="button" class="btn btn-lg gradient-one">
			{loading ? 'Loading' : 'Send magic link'}
		</button>

		{#if form?.errors?.email}
			<span class="flex items-center text-sm error">
				{form?.errors?.email}
			</span>
		{/if}
	</form>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
