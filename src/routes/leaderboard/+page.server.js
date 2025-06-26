import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('car').select();
	return {
		car: data ?? []
	};
}
