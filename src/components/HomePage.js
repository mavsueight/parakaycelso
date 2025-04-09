import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to FarmFresh</h1>
      <nav>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/products">Shop Now</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
