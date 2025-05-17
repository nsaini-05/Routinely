import { asyncWrapper } from "../../utils/asyncHelperUtils";
import { useEffect } from "react";
import { useState } from "react";
import { getHabits as getHabitsApi } from "../../services/habitsService";
import { useSelector } from "react-redux";
export const useHabits = () => {
  const {
    userInfo: { sub: userId },
  } = useSelector((store) => store.auth);
  const {
    selectedMonth: { monthId },
  } = useSelector((store) => store.displayControls);

  const [habitLogs, setHabitsLogs] = useState([]);
  const [habitsLoading, setHabitsLoading] = useState(false);

  const getHabits = async () => {
    setHabitsLoading(true);
    const { data, error } = await asyncWrapper(() =>
      getHabitsApi(userId, monthId)
    );
    if (data) setHabitsLogs(data);
    setHabitsLoading(false);
  };

  useEffect(() => {
    getHabits();
  }, []);

  return { habitLogs, habitsLoading };
};
