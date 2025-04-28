import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SecurityReport from './pages/SecurityReport';
import Overview from './pages/Overview';
import VerificationForm from './components/VerificationForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/security" element={<SecurityReport />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/verify" element={<VerificationForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
