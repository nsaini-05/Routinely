import { useState } from "react";
import { asyncWrapper } from "../../utils/asyncHelperUtils";
import { updateHabit as updateHabitAPI } from "../../services/habitsService";
import toast from "react-hot-toast/headless";
import { TableContext } from "./HabitsTable/HabitsTable";
import { useContext } from "react";
import { useSelector } from "react-redux";
export const useUpdateHabits = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { setHabitsLogs, habitLogs } = useContext(TableContext);
  const { selectedMonth } = useSelector((store) => store.displayControls);
  const updateHabit = async (habitData) => {
    setIsUpdating(true);
    const { data, error } = await asyncWrapper(() => updateHabitAPI(habitData));
    if (error) {
      toast.error(error);
    } else {
      if (data[0].createdMonth === selectedMonth.monthId) {
        const updatedHabitData = data[0];
        setHabitsLogs((previousLogs) =>
          previousLogs.map((habitLog) =>
            habitLog.id === data[0].id
              ? {
                  ...habitLog,
                  habitName: updatedHabitData.habitName,
                  goalsPerMonth: updatedHabitData.goalsPerMonth,
                }
              : habitLog
          )
        );
      }
    }
    setIsUpdating(false);
  };

  return { updateHabit, isUpdating };
};
