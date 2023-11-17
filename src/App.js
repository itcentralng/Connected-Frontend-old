import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import CreateMessage from "./pages/CreateMessage";
import Messages from "./pages/Messages";
import AddFiles from "./pages/AddFiles";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* No Layout for Registration and Login pages */}
        <Route index element={<RegistrationPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* Routes with Layout */}
        <Route
          // path="/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/addfile" element={<AddFiles />} />
          <Route path="/createmessage" element={<CreateMessage />} />
          <Route path="/messages" element={<Messages />} />
        </Route>

        <Route path="*" element={<h1>404, page not found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
