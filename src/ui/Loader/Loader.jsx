import styles from "./Loader.module.css";
function Loader({ height = "100vh" }) {
  return (
    <div className={styles.formHolder} style={{ height }}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
