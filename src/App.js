import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
