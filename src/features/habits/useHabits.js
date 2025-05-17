import { asyncWrapper } from "../../utils/asyncHelperUtils";
import { useEffect } from "react";
import { useState } from "react";
import { getHabits as getHabitsApi } from "../../services/habitsService";
export const useHabits = () => {
  const [habits, setHabits] = useState([]);
  const [habitsLoading, setHabitsLoading] = useState(false);

  const getHabits = async () => {
    setHabitsLoading(true);
    const { data, error } = await asyncWrapper(() => getHabitsApi());
    if (data) setHabits(data);
    setHabitsLoading(false);
  };

  useEffect(() => {
    getHabits();
  }, []);

  return { habits, habitsLoading };
};
