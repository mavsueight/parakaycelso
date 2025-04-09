import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import FruitsPage from './components/FruitsPage';
import MeatPage from './components/MeatPage';
import OrganicPage from './components/OrganicPage';
import BakeryPage from './components/BakeryPage';
import DairyPage from './components/DairyPage';
import Navbar from './components/Navbar'; // Import the Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar to the layout */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products/fruits" element={<FruitsPage />} />
        <Route path="/products/meat" element={<MeatPage />} />
        <Route path="/products/organic" element={<OrganicPage />} />
        <Route path="/products/bakery" element={<BakeryPage />} />
        <Route path="/products/dairy" element={<DairyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
