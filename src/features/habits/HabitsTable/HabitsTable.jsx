import { createContext } from "react";

const HabitsTableContext = createContext();

function TableHeader() {
  return <div>Header</div>;
}

function TableBody() {
  return <div>Body</div>;
}

function HabitsTable({ children }) {
  return <HabitsTableContext.Provider>{children}</HabitsTableContext.Provider>;
}

HabitsTable.Header = TableHeader;
HabitsTable.Body = TableBody;

export default HabitsTable;
