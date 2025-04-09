import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Sign Up for FarmFresh</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Full Name" style={styles.input} />
        <input type="text" placeholder="Username" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button style={styles.button}>Sign Up</button>
        <p style={styles.orText}>or</p>
        <button style={styles.googleButton}>Sign up with Google</button>
      </form>
      <p style={styles.footerText}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '60px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  header: {
    marginBottom: '20px',
    color: '#2e7d32',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  orText: {
    margin: '15px 0',
    fontStyle: 'italic',
    color: '#777',
  },
  googleButton: {
    padding: '12px',
    backgroundColor: '#db4437',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '14px',
  },
};

export default SignUpPage;
