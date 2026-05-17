import React, { useState } from "react";

function RegistrationForm() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name === "" || data.email === "" || data.password === "") {
      alert("Fill all details");
    } else {
      alert("Data Submitted");
    }
    setData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={data.name}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter E-mail"
            value={data.email}
            onChange={handleChange}
          />
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={handleChange}
          />
          <br></br>
          <button type="submit">Regiter Here!</button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;