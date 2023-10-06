import React, { useState } from 'react';
import './Registration.css';
import axios from 'axios'
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Working?")

    // Check if the passwords match
    if (formData.password !== formData.passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    // Now you can proceed with registration logic
    console.log('Registration data:', formData);
    axios.post('/register', {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    })
    .then((response) => {
      // Handle the registration success (e.g., redirect to login page)
      console.log('User registered successfully');
      // You can add redirection logic here
    })
    .catch((error) => {
      // Handle registration error (e.g., display an error message)
      console.error('Registration error:', error);
    });  };

  return (
    <div className='registration'>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit} action='/register' method='post'>
        <div className="form-div">
          <label htmlFor="email">Email: </label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="username">Username: </label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="passwordConfirm">Confirm Password: </label>
          <input
            className="form-control"
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" className="login-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
