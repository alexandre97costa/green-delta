import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('car_make').select();
	return {
		car_make: data ?? []
	};
}
