import { useState } from "react";
import { createNewHabit as createNewHabitAPI } from "../../services/habitsService";
import { asyncWrapper } from "../../utils/asyncHelperUtils";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { TableContext } from "./HabitsTable/HabitsTable";
export const useCreateHabits = () => {
  const [inserting, setInserting] = useState(false);
  const { selectedMonth } = useSelector((store) => store.displayControls);
  const { setHabitsLogs } = useContext(TableContext);

  const createNewHabit = async (habitData) => {
    setInserting(true);
    const { data, error } = await asyncWrapper(() =>
      createNewHabitAPI(habitData)
    );
    if (error) {
      toast.error(error);
    } else {
      if (data[0].createdMonth === selectedMonth.monthId) {
        const newHabit = data[0];
        setHabitsLogs((p) => [
          ...p,
          {
            createdBy: newHabit.createdBy,
            dates: [],
            goalsPerMonth: newHabit.goalsPerMonth,
            habitName: newHabit.habitName,
            id: newHabit.id,
            createdMonth: newHabit.createdMonth,
          },
        ]);
      }
      toast.success("Habit Created Successfully");
    }
    setInserting(false);
  };

  return { inserting, createNewHabit };
};
