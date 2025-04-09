import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1>FarmFresh 🛒</h1>
        <nav style={styles.nav}>
          <Link to="/products/fruits" style={styles.link}>Fruits</Link>
          <Link to="/products/vegetables" style={styles.link}>Vegetables</Link>
          <Link to="/products/dairy" style={styles.link}>Dairy</Link>
          <Link to="/products/meat" style={styles.link}>Meat</Link>
          <Link to="/products/organic" style={styles.link}>Organic</Link>
          <Link to="/products/bakery" style={styles.link}>Bakery</Link>
        </nav>
      </header>

      <section style={styles.searchSection}>
        <input type="text" placeholder="Search FarmFresh products..." style={styles.searchInput} />
        <button style={styles.searchButton}>Search</button>
      </section>

      <section style={styles.welcome}>
        <h2>Welcome to FarmFresh</h2>
        <p>Buy fresh and organic products straight from the farm! 🍎🥦🧀🍗</p>
      </section>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#2e7d32',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  nav: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  searchSection: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  searchInput: {
    width: '300px',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  searchButton: {
    padding: '12px 20px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  welcome: {
    textAlign: 'center',
    marginTop: '40px',
  },
};

export default HomePage;
