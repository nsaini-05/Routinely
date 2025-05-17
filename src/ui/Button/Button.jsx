import styles from "./Button.module.css";
function Button({ type, label, onClick }) {
  return (
    <button className={styles.primary} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
