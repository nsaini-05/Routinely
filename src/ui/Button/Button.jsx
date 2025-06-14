import styles from "./Button.module.css";
function Button({ type = "primary", label, onClick, disabled = false }) {
  return (
    <button
      className={styles[type]}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
