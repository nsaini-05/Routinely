import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HabitRow from "../HabitRow/HabitRow";
import styles from "./TableBody.module.css";
function TableBody() {
  const [habitsList, setHabitsList] = useState([
    {
      name: "Habbit1",
      dates: [2, 5],
      id: 1,
    },
    {
      name: "Habbit1",
      dates: [2, 5],
      id: 3,
    },
  ]);

  return (
    <>
      {habitsList?.length > 0 && (
        <div className={styles.habitsContainer}>
          {habitsList.map((habit) => {
            return <HabitRow habitData={habit} key={habit.id} />;
          })}
        </div>
      )}
    </>
  );
}

export default TableBody;
