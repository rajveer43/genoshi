// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDashboard from './pages/ProfileDashboard/ProfileDashboard';
import PricingPage from './pages/PricingPage/PricingPage';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfileDashboard/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        {/* Add more routes as needed */}
        <Route path="/" element={<ProfileDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
