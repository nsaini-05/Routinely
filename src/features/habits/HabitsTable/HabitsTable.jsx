import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
import { createContext } from "react";
import { useState } from "react";
import { useHabits } from "../useHabits";
import { asyncWrapper } from "../../../utils/asyncHelperUtils";
import { toggleHabit as toggleHabitApi } from "../../../services/habitsService";

export const TableContext = createContext();

function HabitsTable({ children }) {
  const { habitLogs, habitsLoading } = useHabits();

  const toggleHabit = async (toUpdate) => {
    const { data, error } = await asyncWrapper(() => toggleHabitApi());
    console.log(data, error);
    // setTableOperationLoading(false);
  };

  return (
    <TableContext.Provider
      value={{
        habitsLoading,
        habitLogs,
        toggleHabit,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

HabitsTable.Header = TableHeader;
HabitsTable.Body = TableBody;

export default HabitsTable;
