import HabitsTable from "../features/habits/HabitsTable/HabitsTable";
function Dashboard() {
  return (
    <div>
      <HabitsTable>
        <HabitsTable.Header />
        <HabitsTable.Body />
        <HabitsTable.Footer />
      </HabitsTable>
    </div>
  );
}

export default Dashboard;
