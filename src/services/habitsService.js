import supabase from "./supabase";
export const getHabits = async (userId, monthId) => {
  let habitLogs = {};
  let { data, error } = await supabase
    .from("habits_logs")
    .select(
      `
    *,
    habitData : habits (
      habitName,
      goalsPerMonth 
    )
  `
    )
    .eq("createdBy", userId)
    .eq("month", monthId);

  if (data) {
    data.forEach((habitLog) => {
      if (!habitLogs[habitLog.habitId]) {
        habitLogs[habitLog.habitId] = {
          habitName: habitLog.habitData.habitName,
          goalsPerMonth: habitLog.habitData.goalsPerMonth,
          dates: [habitLog.dateCompleted],
          id: habitLog.habitId,
        };
      } else {
        habitLogs[habitLog.habitId].dates.push(habitLog.dateComplete);
      }
    });
  }

  if (error) throw new Error(error.message);

  return { data: Object.values(habitLogs), error: null };
};
