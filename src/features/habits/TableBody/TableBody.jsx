import { useState } from "react";
import HabitRow from "../HabitRow/HabitRow";
import styles from "./TableBody.module.css";
import { useHabits } from "../useHabits";
import Loader from "../../../ui/Loader/Loader";
function TableBody() {
  const { habitLogs, habitsLoading } = useHabits();

  if (habitsLoading) return <Loader height="40rem"></Loader>;

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
