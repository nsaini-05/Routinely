import styles from "./HabitRow.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import Row from "../../../ui/Row/Row";
import { useContext } from "react";
import { TableContext } from "../HabitsTable/HabitsTable";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import Modal from "../../../ui/Modal/Modal";
import HabitForm from "../HabitForm/HabitForm";
import { deleteHabitById } from "../../../services/habitsService";
import { MdEditNote } from "react-icons/md";
function HabitRow({ habitData, toggleHabit }) {
  const { selectedMonth } = useContext(TableContext);
  return (
    <div className={styles.row}>
      <div className={styles.actionsColumn}>
        <Row direction="row" gap="0.2rem">
          <div>
            <Modal>
              <Modal.Open id="edit-habit-form">
                <MdEditNote size={20} />
              </Modal.Open>
              <Modal.Window id="edit-habit-form" title="Update Habit">
                <HabitForm habitData={habitData} />
              </Modal.Window>
            </Modal>
          </div>
          <div>
            <MdDeleteOutline
              onClick={() =>
                deleteHabitById(
                  habitData.id,
                  habitData.createdMonth,
                  habitData.createdBy
                )
              }
              size={20}
            />
          </div>
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
