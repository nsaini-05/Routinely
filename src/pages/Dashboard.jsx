import ProtectedRoute from "../ui/ProtectedRoute/ProtectedRoute";
function Dashboard() {
  return (
    <ProtectedRoute>
      <div>Hello from Dashboard</div>
    </ProtectedRoute>
  );
}

export default Dashboard;
