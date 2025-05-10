import { useState } from "react";
import { signUp } from "../../../services/authService";
import styles from "./SignUpForm.module.css";
import toast from "react-hot-toast";
import { asyncWrapper } from "../../../utils/asyncHelperUtils";
function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { data, error } = await asyncWrapper(() => signUp(formState));
    if (error) toast.error(error);
    setLoading(false);
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            ></input>
          </div>
          <button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFullWidth}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Create An Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
