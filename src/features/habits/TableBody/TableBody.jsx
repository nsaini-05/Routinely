import HabitRow from "../HabitRow/HabitRow";
import styles from "./TableBody.module.css";
import Loader from "../../../ui/Loader/Loader";
import { TableContext } from "../HabitsTable/HabitsTable";
import { useContext } from "react";

function TableBody() {
  const { habitLogs, habitsLoading, toggleHabit } = useContext(TableContext);
  if (habitsLoading && !habitLogs.length) return <Loader height="40rem" />;
  return (
    <>
      {habitLogs?.length > 0 && (
        <div className={styles.habitsContainer}>
          {habitLogs.map((habitLog) => {
            return (
              <HabitRow
                habitData={habitLog}
                key={habitLog.id}
                toggleHabit={toggleHabit}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default TableBody;
