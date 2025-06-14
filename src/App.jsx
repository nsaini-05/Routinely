import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout/AppLayout";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate to="/dashboard"></Navigate>}
            ></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/stats" element={<Stats />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--background-main)",
            color: "var(--text-color-primary)",
            fontFamily: "inherit",
          },
        }}
      ></Toaster>
    </>
  );
}

export default App;
