import supabase from "./supabase";
export const getHabits = async () => {
  let { data, error } = await supabase.from("habits").select("*");
  if (error) throw new Error(error.message);

  return { data, error: null };
};
