import { createContext } from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
const HabitsTableContext = createContext();

function HabitsTable({ children }) {
  return <HabitsTableContext.Provider>{children}</HabitsTableContext.Provider>;
}

HabitsTable.Header = TableHeader;
HabitsTable.Body = TableBody;

export default HabitsTable;
