export const asyncWrapper = async (asyncFn) => {
  try {
    const { data, error } = await asyncFn();
    return { data, error };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
