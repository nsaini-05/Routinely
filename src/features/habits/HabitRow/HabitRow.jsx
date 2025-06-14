import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import ConfirmDialog from "../../../ui/ConfirmDialog/ConfirmDialog";
import Row from "../../../ui/Row/Row";
import { useContext } from "react";
import { TableContext } from "../HabitsTable/HabitsTable";
import Modal from "../../../ui/Modal/Modal";
import HabitForm from "../HabitForm/HabitForm";
function HabitRow({ habitData, toggleHabit }) {
  const { selectedMonth } = useContext(TableContext);

  return (
    <div className={styles.row}>
      <div className={styles.actionsColumn}>
        <Row direction="row" gap="0.2rem">
          <Modal>
            <Modal.Open id="edit-habit-form">
              <MdOutlineEditNote size={20} className={styles.actionButton} />
            </Modal.Open>
            <Modal.Window id="edit-habit-form" title="Update Habit">
              <HabitForm habitData={habitData} />
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Open id="delete-confirmation">
              <MdDeleteOutline size={18} className={styles.actionButton} />
            </Modal.Open>
            <Modal.Window id="delete-confirmation" title="Delete Habit">
              <ConfirmDialog habitData={habitData} />
            </Modal.Window>
          </Modal>
        </Row>
      </div>
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
            key={i + 1}
            onClick={() => toggleHabit(selectedMonth.monthId, i + 1, habitData)}
          >
            <Row>
              {habitData.dates.includes(i + 1) ? (
                <IoMdCheckmark size={20} />
              ) : (
                ""
              )}
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
