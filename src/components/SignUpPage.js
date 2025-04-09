import React, { useState } from 'react';

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    googleConnect: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <label>
          <input
            type="checkbox"
            name="googleConnect"
            onChange={() => setFormData((prevData) => ({ ...prevData, googleConnect: !prevData.googleConnect }))}
          />
          Connect with Google
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
