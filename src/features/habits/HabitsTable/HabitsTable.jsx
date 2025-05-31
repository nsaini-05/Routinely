import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
import TableFooter from "../TableFooter/TableFooter";
import { createContext } from "react";
import { useHabits } from "../useHabits";

export const TableContext = createContext();

function HabitsTable({ children }) {
  const { habitLogs, habitsLoading, toggleHabit, selectedMonth } = useHabits();

  return (
    <TableContext.Provider
      value={{
        habitsLoading,
        habitLogs,
        toggleHabit,
        selectedMonth,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

HabitsTable.Header = TableHeader;
HabitsTable.Body = TableBody;
HabitsTable.Footer = TableFooter;

export default HabitsTable;
