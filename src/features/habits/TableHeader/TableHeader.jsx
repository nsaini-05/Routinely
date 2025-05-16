import styles from "./TableHeader.module.css";
import Row from "../../../ui/Row/Row";
import { useSelector } from "react-redux";
import { months } from "../../../utils/date-utils";
import { setSelectedMonth } from "../../../ui/displaySlice";
import { useDispatch } from "react-redux";
function TableHeader() {
  const dispatch = useDispatch();
  const {
    selectedMonth: { monthName: selectedMonthName, numberOfDays: daysInMonth },
  } = useSelector((store) => store.displayControls);

  const changeMonth = (month) => {
    dispatch(setSelectedMonth(month));
  };

  return (
    <div className={styles.row}>
      <div className={styles.actionsColumn}></div>
      <Row alignItems="center" justifyContent="flex-start">
        <div className={styles.columnTitle}>Month</div>
      </Row>
      <div className={styles.monthsContainer}>
        {months.map((month) => (
          <div
            className={`${styles.monthsTitle} ${
              selectedMonthName === month.monthName ? styles.activeMonth : ""
            }`}
            key={month.monthName}
            onClick={() => changeMonth(month)}
          >
            {month.monthName}
          </div>
        ))}
      </div>
      <div className={styles.total}></div>

      <div className={styles.actionsColumn}></div>
      <Row alignItems="center" justifyContent="flex-start">
        <div className={styles.columnTitle}>Habit</div>
      </Row>
      <div
        className={styles.datesContainer}
        style={{
          gridTemplateColumns: `repeat(${daysInMonth}, 1fr)`,
        }}
        key={selectedMonthName}
      >
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div
            key={i}
            className={styles.box}
            style={{ animationDelay: `${i * 30}ms` }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className={styles.columnTitle}>Total</div>
    </div>
  );
}

export default TableHeader;
