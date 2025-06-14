import Button from "../../../ui/Button/Button";
import { TableContext } from "../HabitsTable/HabitsTable";
import { useContext } from "react";
import styles from "./TableFooter.module.css";
import Modal from "../../../ui/Modal/Modal";
import HabitForm from "../HabitForm/HabitForm";
function TableFooter() {
  const { habitsLoading } = useContext(TableContext);

  if (habitsLoading) return;

  return !habitsLoading ? (
    <div className={styles.footer}>
      <Modal>
        <Modal.Open id="create-habit-form">
          <Button type={"primary"} label="+ Add New"></Button>
        </Modal.Open>
        <Modal.Window id="create-habit-form" title="Add New Habit">
          <HabitForm />
        </Modal.Window>
      </Modal>
    </div>
  ) : null;
}

export default TableFooter;
