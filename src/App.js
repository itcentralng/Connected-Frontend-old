import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import CreateMessage from './pages/CreateMessage';
import Messages from './pages/Messages';
import AddFiles from './pages/AddFiles';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const ProtectedRoute = ({ children }) => {
  // Wrapper component for protected routes
  //   const isAuth = !!user;
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* No Layout for Registration and Login pages */}
        <Route index element={<RegistrationPage />} />

        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />

        {/* Routes with Layout */}
        <Route
          // path="/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="addFiles" element={<AddFiles />} />
          <Route path="createMessage" element={<CreateMessage />} />
          <Route path="messages" element={<Messages />} />
        </Route>

        <Route path="*" element={<h1>404, page not found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
