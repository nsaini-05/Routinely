import { useState } from "react";
import HabitRow from "../HabitRow/HabitRow";
import styles from "./TableBody.module.css";
import { useHabits } from "../useHabits";
function TableBody() {
  const { habits, habitsLoading } = useHabits();
  console.log(habits);

  return (
    <>
      {habits?.length > 0 && (
        <div className={styles.habitsContainer}>
          {habits.map((habit) => {
            return <HabitRow habitData={habit} key={habit.id} />;
          })}
        </div>
      )}
    </>
  );
}

export default TableBody;
