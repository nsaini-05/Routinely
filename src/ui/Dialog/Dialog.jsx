import styles from "./Dialog.module.css";
import Row from "../Row/Row";
import { IoMdClose } from "react-icons/io";

function Dialog({ title, children, onClose }) {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.dialogTitleHolder}>
          <Row alignItems="center" justifyContent="space-between">
            <span>{title}</span>
            <Row>
              <button className={styles.closeButton} onClick={onClose}>
                <IoMdClose size={20} />
              </button>
            </Row>
          </Row>
        </div>
        <div className={styles.dialogBody}>{children}</div>
      </div>
    </div>
  );
}

export default Dialog;
