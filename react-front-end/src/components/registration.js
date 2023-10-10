import React, { useState, useEffect } from 'react';
import './Registration.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const RegistrationForm = () => {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  useEffect(()=> {
    if(isLoggedIn) {
      navigate('/home')
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (formData.password !== formData.passwordConfirm) {
      alert('Passwords do not match');
      return;
    }


    console.log('Registration data:', formData);

    try {
      const response = await axios.post('/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
      });
      
      if (response.status === 200) {
        // Authentication successful
        console.log('Authentication successful', response);
        await login() // Update the authentication state
        navigate('/home');
      }
      else {
        // Authentication failed, handle error and display a message to the user
        console.error('Authentication failed');
      }
    } catch (error) {
      alert("Email Already Exists")
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='registration'> 
      <div className="forms">
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
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  </div>
  );
};

export default RegistrationForm;
