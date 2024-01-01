import React, { useState } from "react";

const login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  console.log(formData);

  return (
    <>
      <input
        name="email"
        placeholder="Email"
        className=""
        type="text"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onSubmit={handleSubmit}> submit</button>
    </>
  );
};

export default login;
