import supabase from "./supabase";
export const getHabits = async (userId, monthId) => {
  let habitLogs = {};
  let { data, error } = await supabase
    .from("habits")
    .select(
      `
    *,
       habitData : habits_logs (
      habitId,
      month,
      createdBy,
      dateCompleted
    )
  `
    )
    .eq("createdBy", userId)
    .eq("createdMonth", monthId);

  if (data) {
    data.forEach((habit) => {
      if (!habitLogs[habit.id]) {
        habitLogs[habit.id] = {
          habitName: habit.habitName,
          goalsPerMonth: habit.goalsPerMonth,
          dates: habit.habitData.map((habitLog) => habitLog.dateCompleted),
          id: habit.id,
          createdBy: habit.createdBy,
        };
      } else {
        // habitLogs[habit.id].dates.push(habitLog.dateCompleted);
      }
    });
  }

  if (error) throw new Error(error.message);

  return { data: Object.values(habitLogs), error: null };
};

export const toggleHabit = async (month, date, habitData, alreadyExists) => {
  if (alreadyExists) {
    await deleteHabitById(habitData.id, date, month, habitData.createdBy);
    return { data: [{ habitId: habitData.id }], error: null };
  } else {
    const { data, error } = await supabase
      .from("habits_logs")
      .insert([
        {
          month: month,
          dateCompleted: date,
          habitId: habitData.id,
          createdBy: habitData.createdBy,
        },
      ])
      .select();

    if (error)
      throw new Error(error.message || "Something Went wrong. Try Again!!");

    return { data, error: null };
  }
};

export const getHabitById = async (habitId, date, month, userId) => {
  let { data: selectedHabitLogs, error } = await supabase
    .from("habits_logs")
    .select("*")
    .eq("habitId", habitId)
    .eq("dateCompleted", date)
    .eq("month", month)
    .eq("createdBy", userId);

  return { selectedHabitLogs, error };
};

export const deleteHabitById = async (habitId, date, month, userId) => {
  const { error } = await supabase
    .from("habits_logs")
    .delete()
    .eq("habitId", habitId)
    .eq("dateCompleted", date)
    .eq("month", month)
    .eq("createdBy", userId);
};
