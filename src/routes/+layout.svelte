<script>
	import '../app.css'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'


	let { children, data } = $props();

	let { supabase, session } = data
	$effect: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})
		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>Green Delta</title>
</svelte:head>

{@render children()}