import React, { useState } from 'react';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    googleLogin: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <button>Continue with Google</button>
    </div>
  );
}

export default LoginPage;
