import { supabase } from '$lib/supabaseClient';

export async function load() {


	const cars = await supabase.from("car").select(`
		*,
		car_make(*),
		car_category(*)
	`);

	const tracks = await supabase.from("race_track").select().limit(9);

	return {
		cars: cars.data ?? [],
		tracks: tracks.data ?? []
	};

}