import { useState } from "react";
import HabitRow from "../HabitRow/HabitRow";
import styles from "./TableBody.module.css";
import { useHabits } from "../useHabits";
function TableBody() {
  const { habitLogs, habitsLoading } = useHabits();

  return (
    <>
      {habitLogs?.length > 0 && (
        <div className={styles.habitsContainer}>
          {habitLogs.map((habitLog) => {
            return <HabitRow habitData={habitLog} key={habitLog.id} />;
          })}
        </div>
      )}
    </>
  );
}

export default TableBody;
