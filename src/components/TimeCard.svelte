<script>
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import IconSkull from '@lucide/svelte/icons/skull';
    import IconUser from '@lucide/svelte/icons/user';
    import IconCar from '@lucide/svelte/icons/car';
</script>

<div class="card w-full flex flex-col max-w-md preset-filled-surface-200-800 p-4">
	<p class="text-xs">Monza</p>
	<p class="font-mono text-2xl font-">1:03:574</p>

	<div>
		<span class="badge preset-filled">
			<IconUser size={16} />
			<span>Tomás</span>
		</span>
		<span class="badge preset-filled">
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
