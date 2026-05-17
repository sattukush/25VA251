import React, { useState } from "react";

function StundentForm() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email === "admin@gmail.com" && user.password === "1234") {
      alert("Login Successful ✅");
    } else {
      alert("Invalid Credentials ❌");
    }
    //to reset data
    setUser({
      email: "",
    password: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default StundentForm;