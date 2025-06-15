import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useHabits } from "../../habits/useHabits";
import { months } from "../../../utils/date-utils";
import { useDispatch } from "react-redux";
import { setSelectedMonth } from "../../../ui/displaySlice";
import { useSelector } from "react-redux";
import Row from "../../../ui/Row/Row";
import styles from "./ChartView.module.css";
function ChartView() {
  const { habitLogs } = useHabits();
  const dispatch = useDispatch();

  const changeMonth = (month) => {
    dispatch(setSelectedMonth(month));
  };
  const {
    selectedMonth: { monthName: selectedMonthName },
  } = useSelector((store) => store.displayControls);

  return (
    <Row direction="column">
      <select
        value={selectedMonthName}
        onChange={(e) => {
          const selected = months.find((m) => m.monthName === e.target.value);
          changeMonth(selected);
        }}
        style={{
          padding: "8px 12px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          color: "#333",
          cursor: "pointer",
          marginBottom: "16px",
          width: "30%",
        }}
      >
        {months.map((month) => (
          <option
            key={month.monthName}
            value={month.monthName}
            style={{
              padding: "8px",
              backgroundColor:
                selectedMonthName === month.monthName ? "#eaeaea" : "#fff",
              color: "#000",
            }}
          >
            {month.monthName}
          </option>
        ))}
      </select>

      {habitLogs.length ? (
        <ResponsiveContainer width="100%" height={600}>
          <BarChart
            width={800}
            height={600}
            data={habitLogs}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="habitName" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />

            {/* Goals Per Month */}
            <Bar
              yAxisId="left"
              dataKey="goalsPerMonth"
              fill="#4E84C5"
              name="Goals Per Month"
              barSize={40}
            />

            {/* Completed */}
            <Bar
              yAxisId="right"
              dataKey="dates.length"
              fill="#EE5A18"
              name="Completed"
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <h4 className={styles.emptyMessage}>No Habits found for this month</h4>
      )}
    </Row>
  );
}

export default ChartView;
