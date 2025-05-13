import { Outlet } from "react-router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <ProtectedRoute>
      <div className={styles.mainContainer}>
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default AppLayout;
