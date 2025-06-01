import styles from "./Button.module.css";
function Button({ type = "primary", label, onClick }) {
  return (
    <button className={styles[type]} onClick={onClick} type={type}>
      {label}
    </button>
  );
}

export default Button;
