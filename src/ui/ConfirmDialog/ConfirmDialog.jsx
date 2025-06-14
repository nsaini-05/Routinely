import styles from "./ConfirmDialog.module.css";
import Button from "../Button/Button";
import Row from "../Row/Row";
import { useDeleteHabits } from "../../features/habits/useDeleteHabit";
function ConfirmDialog({ closeParentModal, habitData }) {
  console.log(habitData);
  const { isDeleting, deleteHabit } = useDeleteHabits();
  const handleDelete = () => {
    deleteHabit(habitData.id, habitData.createdMonth, habitData.createdBy);
    closeParentModal();
  };
  return (
    <div className={styles.confirmContainer}>
      <Row direction="column" gap={"1.6rem"}>
        <div className={styles.message}>
          {`Are you sure you want to delete the habit "${habitData.habitName}"?`}
        </div>
        <div className={styles.formRow}>
          <Row gap={"1.6rem"}>
            <Button
              label={"Delete"}
              type="primary"
              onClick={handleDelete}
              disabled={isDeleting}
            ></Button>
            <Button
              label={"Cancel"}
              type="secondary"
              onClick={closeParentModal}
              disabled={isDeleting}
            ></Button>
          </Row>
        </div>
      </Row>
    </div>
  );
}

export default ConfirmDialog;
