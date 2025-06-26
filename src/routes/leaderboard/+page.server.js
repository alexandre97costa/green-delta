import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from("car").select(`
		*,
		car_make(*),
		car_category(*)
	`);
	return {
		cars: data ?? []
	};
}