import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const MyForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data or perform further actions
      console.log('Form submitted:', formData);
    } else {
      // Form is invalid, update the state with validation errors
      setErrors(validationErrors);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error for the current input
    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  // Function to validate the form data
  const validateForm = (data) => {
    const errors = {};

    // Example validation rules
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className='messageblock4'>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit"  className='btn2'>Submit</button>
    </form>
  );
};

export default MyForm;
