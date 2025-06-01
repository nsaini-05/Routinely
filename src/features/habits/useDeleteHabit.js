import { useState } from "react";
import { deleteHabitById as deleteHabitByIdAPI } from "../../services/habitsService";
import { asyncWrapper } from "../../utils/asyncHelperUtils";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const useDeleteHabits = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { selectedMonth } = useSelector((store) => store.displayControls);

  const deleteHabit = async (habitId, month, userId) => {
    setIsDeleting(true);
    const { data, error } = await asyncWrapper(() =>
      deleteHabitByIdAPI(habitId)
    );
    if (error) {
      toast.error(error);
    } else {
      if (data === selectedMonth.monthId) {
        // const newHabit = data[0];
        // setHabitsLogs((p) => [
        //   ...p,
        //   {
        //     createdBy: newHabit.createdBy,
        //     dates: [],
        //     goalsPerMonth: newHabit.goalsPerMonth,
        //     habitName: newHabit.habitName,
        //     id: newHabit.id,
        //   },
        // ]);
        console.log("Habit Deleted");
      }
      toast.success("Habit Created Successfully");
    }
    setIsDeleting(false);
  };
  return { isDeleting, deleteHabit };
};
