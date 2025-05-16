import styles from "./TableHeader.module.css";
import Row from "../../../ui/Row/Row";
const getMonthsArray = () => {
  const year = new Date().getFullYear();
  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const months = [
    { monthName: "Jan", numberOfDays: 31 },
    { monthName: "Feb", numberOfDays: isLeapYear(year) ? 29 : 28 },
    { monthName: "Mar", numberOfDays: 31 },
    { monthName: "Apr", numberOfDays: 30 },
    { monthName: "May", numberOfDays: 31 },
    { monthName: "Jun", numberOfDays: 30 },
    { monthName: "Jul", numberOfDays: 31 },
    { monthName: "Aug", numberOfDays: 31 },
    { monthName: "Sep", numberOfDays: 30 },
    { monthName: "Oct", numberOfDays: 31 },
    { monthName: "Nov", numberOfDays: 30 },
    { monthName: "Dec", numberOfDays: 31 },
  ];
  return months;
};

function TableHeader() {
  const allMonths = getMonthsArray();
  const date = new Date();
  const selectedMonth = date.getMonth();

  const datesArray = Array.from(
    { length: allMonths[selectedMonth].numberOfDays },
    (_, i) => i + 1
  );

  return (
    <div className={styles.row}>
      <div className={styles.actionsColumn}></div>
      <Row alignItems="center" justifyContent="flex-start">
        <div className={styles.columnTitle}>Month</div>
      </Row>
      <div className={styles.monthsContainer}>
        {allMonths.map((month, index) => (
          <div
            className={`${styles.monthsTitle} ${
              selectedMonth === index ? styles.activeMonth : ""
            }`}
            key={month.monthName}
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
        style={{ gridTemplateColumns: `repeat(${datesArray.length}, 1fr)` }}
      >
        {datesArray.map((date) => (
          <div key={date} className={styles.box}>
            {date}
          </div>
        ))}
      </div>
      <div className={styles.columnTitle}>Total</div>
    </div>
  );
}

export default TableHeader;
