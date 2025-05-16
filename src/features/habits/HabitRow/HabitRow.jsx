import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
// import { deleteHabit, setRecordToEdit, updateHabit } from "../HabitsSlice";
import { useSelector } from "react-redux";
function HabitRow({ habitData }) {
  const datesArray = Array.from({ length: 30 }, (_, i) => i + 1);
  const toggleHabitStatus = (dateToUpdate) => {
    // if (habitData.dates.includes(dateToUpdate)) {
    //   dispatch(
    //     updateHabit({
    //       ...habitData,
    //       dates: habitData.dates.filter((date) => date !== dateToUpdate),
    //     })
    //   );
    // } else {
    //   dispatch(
    //     updateHabit({
    //       ...habitData,
    //       dates: [...habitData.dates, dateToUpdate],
    //     })
    //   );
    // }
  };

  const hanldeDelete = (id) => {
    // const confirm = window.confirm(
    //   "Are you sure you want to delete the record ?"
    // );
    // if (confirm) dispatch(deleteHabit(id));
  };

  return (
    <div className={styles.row}>
      <div className={styles.actionButtons}>
        <button
          className={`primary ${styles.actionButton}`}
          onClick={() => hanldeDelete(habitData.id)}
        >
          <MdDeleteOutline size={20} />
        </button>
        <button className={`primary ${styles.actionButton}`}>
          <MdOutlineEdit size={20} className="action-icon" />
        </button>
      </div>
      <div className={styles.title}>{habitData.name} </div>
      <div
        className={styles.datesContainer}
        style={{ gridTemplateColumns: `repeat(${datesArray.length}, 1fr)` }}
      >
        {datesArray.map((date) => (
          <div
            key={date}
            className={`box ${styles.checkbox}`}
            onClick={() => toggleHabitStatus(date)}
          >
            {habitData.dates.includes(date) ? (
              <IoMdCheckmark size="1.6rem" />
            ) : (
              ""
            )}
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
