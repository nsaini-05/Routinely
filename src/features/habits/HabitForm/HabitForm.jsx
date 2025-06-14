import { useState } from "react";
import styles from "./HabitForm.module.css";
import Button from "../../../ui/Button/Button";
import Row from "../../../ui/Row/Row";
import { useSelector } from "react-redux";
import { useCreateHabits } from "../useCreateHabits";
import Loader from "../../../ui/Loader/Loader";
import { useUpdateHabits } from "../useUpdateHabit";

function HabitForm({ closeParentModal, habitData = null }) {
  const { inserting, createNewHabit } = useCreateHabits();
  const { isUpdating, updateHabit } = useUpdateHabits();
  const { userInfo } = useSelector((store) => store.auth);
  const { selectedMonth } = useSelector((store) => store.displayControls);

  const isUpdate = habitData ? true : false;

  const [formData, setFormData] = useState(() =>
    isUpdate
      ? {
          habitName: habitData.habitName,
          goalsPerMonth: habitData.goalsPerMonth,
          rolloverNextMonths: false,
          createdMonth: habitData.createdMonth,
          createdBy: habitData.createdBy,
          id: habitData.id,
        }
      : {
          habitName: "",
          goalsPerMonth: 1,
          rolloverNextMonths: false,
          createdMonth: selectedMonth.monthId,
          createdBy: userInfo?.sub || "",
        }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updateHabit(formData);
    } else {
      createNewHabit(formData);
    }
    closeParentModal();
  };

  if (inserting || isUpdating) return <Loader height="100%" />;

  return (
    <div className={styles.formWrapper}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label className={styles.formLabel}>Habit Name</label>
          <input
            type="text"
            name="habitName"
            value={formData.habitName}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel}>Monthly Goals</label>
          <input
            type="number"
            name="goalsPerMonth"
            value={formData.goalsPerMonth}
            onChange={handleChange}
            className={styles.formInput}
            min={1}
            max={30}
            required
          />
        </div>

        <div className={styles.formRow}>
          <Row gap={"1.6rem"}>
            <Button
              label={isUpdate ? "Update" : "Save"}
              type="primary"
            ></Button>
            <Button
              label={"Back"}
              type="secondary"
              onClick={closeParentModal}
            ></Button>
          </Row>
        </div>
      </form>
    </div>
  );
}

export default HabitForm;
