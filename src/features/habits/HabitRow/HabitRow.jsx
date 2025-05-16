import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";
function HabitRow({ habitData }) {
  const {
    selectedMonth: { monthName: selectedMonthName, numberOfDays: daysInMonth },
  } = useSelector((store) => store.displayControls);

  return (
    <div className={styles.row}>
      <div className={styles.actionsColumn}></div>
      <div className={styles.columnTitle}>{habitData.name} </div>
      <div
        className={styles.datesContainer}
        style={{
          gridTemplateColumns: `repeat(${daysInMonth}, 1fr)`,
        }}
      >
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div className={`box ${styles.checkbox}`}>
            {/* {habitData.dates.includes(i) ? <IoMdCheckmark size="1.6rem" /> : ""} */}
            i
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
