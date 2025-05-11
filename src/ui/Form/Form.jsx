import styles from "./Form.module.css";
import { useState } from "react";
import { Link } from "react-router";
function Form({
  fields,
  heading,
  subHeading,
  loading,
  onSubmit,
  footerMessage,
  furtherLinkText,
  furtherLink,
  btnText,
}) {
  const [formState, setFormState] = useState({});

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <div className={styles.formHolder}>
      <div className={styles.formContainer}>
        <div className={styles.formTitlesHolder}>
          <h1 className={styles.formTitle}>{heading}</h1>
          <h2 className={styles.subTitle}>{subHeading}</h2>
        </div>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          {fields.map((field, index) => {
            return (
              <div className={styles.formInputContainer} key={field.name}>
                <label className={styles.label} htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className={styles.formInput}
                  placeholder={field.placeholder}
                  autoFocus={index == 0 ? true : false}
                  onChange={(e) => handleInputChange(e)}
                  name={field.name}
                  id={field.name}
                  value={formState[field.name] || ""}
                  disabled={loading}
                  required={true}
                ></input>
              </div>
            );
          })}

          <button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFullWidth}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : btnText}
          </button>
        </form>
        <span>
          {footerMessage}
          <>
            <Link to={furtherLink} className={styles.link}>
              {furtherLinkText}
            </Link>
          </>
        </span>
      </div>
    </div>
  );
}

export default Form;
