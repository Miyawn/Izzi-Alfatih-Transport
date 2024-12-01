// src/components/LoginForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <span>+62 896 3736 9338</span>
        <span>•</span>
        <span>izaifahtransport@gmail.com</span>
        <span style={styles.trackLink}>TRACK & TRACE →</span>
      </div>

      <div style={styles.mainContent}>
        <img
          src="../src/assets/loginbg.png" // Ganti dengan URL gambar truk Anda
          alt="Truck"
          style={styles.truckImage}
        />

        <div style={styles.loginContainer}>
          <h2 style={styles.title}>Login</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type here"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.footerText}>
              <span>Don't have an account? </span>
              <a href="/register" style={styles.registerLink}>Register</a>
            </div>
            <button type="submit" style={styles.button}>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#f9f9f9',
  },
  trackLink: {
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80vh',
  },
  truckImage: {
    maxWidth: '40%',
    height: 'auto',
  },
  loginContainer: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  footerText: {
    fontSize: '14px',
    color: '#666',
  },
  registerLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#041182',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default LoginForm;