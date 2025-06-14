import supabase from "./supabase";
export const signUp = async ({ fullName, email, password }) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return { data, error: null };
};

export const logIn = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return { data, error: null };
};

export const getCurrentSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  return { data, error: null };
};

export const logoutUser = async () => {
  const { data, error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
  return { data, error: null };
};
