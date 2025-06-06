import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register/*" element={<Registration />} />
      <Route
        path="/dashboard/*"
        element={<Dashboard />}
      />
    </Routes>
  );
}

export default App;