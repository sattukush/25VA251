import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [apiData, setApiData] = useState(null);

  // ✅ Fixed API call
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())   // FIXED
      .then(data => setApiData(data.id));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email.includes('@')) tempErrors.email = "Invalid email (@ required)";
    if (formData.password.length < 6) tempErrors.password = "Password must be 6+ chars";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // FIXED

    if (validate()) {    // FIXED
      setSuccess("Registration Successful!");
      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <p style={{ fontSize: '12px' }}>
        API Id: <b>{apiData ? apiData : "Loading..."}</b>
      </p>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <input name="email" placeholder="Email" onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit">Register</button>
      </form>

      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default RegistrationForm;