import styles from "./SignUpForm.module.css";
import { useState } from "react";
import { signUp } from "../../../services/authService";
function SignUpForm() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signUp(formState);
  };

  return (
    <div className={styles.formHolder}>
      <div className={styles.formContainer}>
        <div className={styles.formTitlesHolder}>
          <h1 className={styles.formTitle}>Sign up to Routinely</h1>
          <h2 className={styles.subTitle}>
            Quick & Simple way to Build and Mantain Habits
          </h2>
        </div>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.formInputContainer}>
            <label className={styles.label} htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              className={styles.formInput}
              placeholder="John"
              autoFocus={true}
              onChange={(e) => handleInputChange(e)}
              name="fullName"
              id="fullName"
              value={formState.fullName}
            ></input>
          </div>
          <div className={styles.formInputContainer}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className={styles.formInput}
              placeholder="john@gmail.com"
              onChange={(e) => handleInputChange(e)}
              name="email"
              id="email"
              value={formState.email}
            ></input>
          </div>
          <div className={styles.formInputContainer}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className={styles.formInput}
              placeholder="*****"
              onChange={(e) => handleInputChange(e)}
              name="password"
              value={formState.password}
              id="password"
            ></input>
          </div>
          <button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFullWidth}`}
            type="submit"
          >
            Create An Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
