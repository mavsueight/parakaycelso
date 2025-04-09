import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import FruitsPage from './components/FruitsPage'; // ✅ Added FruitsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/fruits" element={<FruitsPage />} /> {/* ✅ Fruits Route */}
      </Routes>
    </Router>
  );
}

export default App;
