import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src="./logo.png" alt="Logo" style={{ width: "8rem" }} />
      </div>
    </div>
  );
}

export default Sidebar;
