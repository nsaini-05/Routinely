import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import Row from "../../../ui/Row/Row";
import { useContext } from "react";
import { TableContext } from "../HabitsTable/HabitsTable";
function HabitRow({ habitData, toggleHabit }) {
  const { selectedMonth } = useContext(TableContext);

  return (
    <div className={styles.row}>
      <div className={styles.actionsColumn}></div>
      <div className={styles.columnTitle}>{habitData.habitName} </div>
      <div
        className={styles.datesContainer}
        style={{
          gridTemplateColumns: `repeat(${selectedMonth.numberOfDays}, 1fr)`,
        }}
      >
        {Array.from({ length: selectedMonth.numberOfDays }, (_, i) => (
          <div
            className={`box ${styles.checkbox}`}
            key={i}
            onClick={() =>
              toggleHabit(
                selectedMonth.monthId,
                i,
                habitData,
                habitData.dates.includes(i)
              )
            }
          >
            <Row>
              {habitData.dates.includes(i) ? <IoMdCheckmark size={20} /> : ""}
            </Row>
          </div>
        ))}
      </div>
      {habitData.dates.length > 0 && (
        <div className={styles.total}>{habitData.dates.length}</div>
      )}
    </div>
  );
}

export default HabitRow;
