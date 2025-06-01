import { useState } from "react";
import styles from "./HabitForm.module.css";
import Button from "../../../ui/Button/Button";
import Row from "../../../ui/Row/Row";
import { useSelector } from "react-redux";
import { useCreateHabits } from "../useCreateHabits";
import Loader from "../../../ui/Loader/Loader";

function HabitForm({ closeParentModal, habitData = null }) {
  const { inserting, createNewHabit } = useCreateHabits();
  const { userInfo } = useSelector((store) => store.auth);
  const { selectedMonth } = useSelector((store) => store.displayControls);

  const isUpdate = habitData ? true : false;
  console.log(habitData);

  const [formData, setFormData] = useState(() =>
    isUpdate
      ? {
          habitName: habitData.habitName,
          goalsPerMonth: habitData.goalsPerMonth,
          rolloverNextMonths: false,
          createdMonth: habitData.createdMonth,
          createdBy: habitData.createdBy,
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
    createNewHabit(formData);
    closeParentModal();
    //RollOver Validation
  };

  if (inserting) return <Loader height="100%" />;

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

        {/* <div className={styles.formRow}>
          <label className={styles.formLabel}>RollOver</label>
          <select
            name="rolloverNextMonths"
            value={formData.rolloverNextMonths}
            onChange={handleChange}
            className={styles.formInput}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div> */}

        <div className={styles.formRow}>
          <Row gap={"1.6rem"}>
            <Button label={"Save"} type="primary"></Button>
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
