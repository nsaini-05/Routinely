import { useState } from "react";
import { deleteHabitById as deleteHabitByIdAPI } from "../../services/habitsService";
import { asyncWrapper } from "../../utils/asyncHelperUtils";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { TableContext } from "./HabitsTable/HabitsTable";
export const useDeleteHabits = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { selectedMonth } = useSelector((store) => store.displayControls);
  const { setHabitsLogs } = useContext(TableContext);

  const deleteHabit = async (habitId, month, userId) => {
    setIsDeleting(true);
    const { data, error } = await asyncWrapper(() =>
      deleteHabitByIdAPI(habitId, month, userId)
    );
    if (error) {
      toast.error(error);
    } else {
      if (data === selectedMonth.monthId) {
        setHabitsLogs((previousLogs) =>
          previousLogs.filter((habitLog) => habitLog.id !== habitId)
        );
      }
      toast.success("Habit Deleted Successfully");
    }
    setIsDeleting(false);
  };
  return { isDeleting, deleteHabit };
};
