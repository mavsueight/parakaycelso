import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/signup" style={styles.link}>Sign Up</Link>
      <Link to="/products/fruits" style={styles.link}>Fruits</Link>
      <Link to="/products/vegetables" style={styles.link}>Vegetables</Link>
      <Link to="/products/dairy" style={styles.link}>Dairy</Link>
      <Link to="/products/meat" style={styles.link}>Meat</Link>
      <Link to="/products/organic" style={styles.link}>Organic</Link>
      <Link to="/products/bakery" style={styles.link}>Bakery</Link>
      <Link to="/cart" style={styles.cartLink}>Cart</Link>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#2e7d32',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
  },
  cartLink: {
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f39c12',
    borderRadius: '5px',
  }
};

export default Navbar;
