import styles from "./Button.module.css";
function Button({ type, label }) {
  return <button className={styles.primary}>{label}</button>;
}

export default Button;
