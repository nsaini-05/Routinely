import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";

function HabitsTable({ children }) {
  return <>{children}</>;
}

HabitsTable.Header = TableHeader;
HabitsTable.Body = TableBody;

export default HabitsTable;
