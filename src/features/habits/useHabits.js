import { asyncWrapper } from "../../utils/asyncHelperUtils";
import { useEffect } from "react";
import { useState } from "react";
import { getHabits as getHabitsApi } from "../../services/habitsService";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { toggleHabit as toggleHabitApi } from "../../services/habitsService";
export const useHabits = () => {
  const { userInfo } = useSelector((store) => store.auth);
  const { selectedMonth } = useSelector((store) => store.displayControls);

  const [habitLogs, setHabitsLogs] = useState([]);
  const [habitsLoading, setHabitsLoading] = useState(false);

  const toggleHabit = async (month, date, habitData) => {
    const alreadyExists = habitData.dates.includes(date);
    const { data, error } = await asyncWrapper(() =>
      toggleHabitApi(month, date, habitData, alreadyExists)
    );
    if (error) {
      toast.error(error);
    } else {
      setHabitsLogs([
        ...habitLogs.map((habitLog) =>
          habitLog.id === data[0].habitId
            ? {
                ...habitLog,
                dates: !alreadyExists
                  ? [...habitLog.dates, data[0].dateCompleted]
                  : habitLog.dates.filter((habitDate) => habitDate !== date),
              }
            : habitLog
        ),
      ]);
    }
  };

  useEffect(() => {
    const getHabits = async () => {
      if (userInfo?.sub) {
        setHabitsLoading(true);
        const { data, error } = await asyncWrapper(() =>
          getHabitsApi(userInfo.sub, selectedMonth.monthId)
        );
        if (error) {
          toast.error(error);
        } else {
          setHabitsLogs(data);
        }
        setHabitsLoading(false);
      }
    };
    getHabits();
  }, [userInfo?.sub, selectedMonth.monthId]);

  return {
    habitLogs,
    habitsLoading,
    toggleHabit,
    selectedMonth,
    setHabitsLogs,
  };
};
