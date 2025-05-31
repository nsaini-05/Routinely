import { useState } from "react";
import styles from "./HabitForm.module.css";
import Button from "../../../ui/Button/Button";
import Row from "../../../ui/Row/Row";

function HabitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            <Button label={"Save"}></Button>
            <Button label={"Back"} type="secondary"></Button>
          </Row>
        </div>
      </form>
    </div>
  );
}

export default HabitForm;
