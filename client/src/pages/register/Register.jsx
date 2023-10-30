import "./register.css";

import React, { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    password: "",
    bio: "",
    location: "",
    date_of_birth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log("User registered successfully");
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Aura Social</h3>
            <span className="loginDesc">
              Connect with your allies and the world around you on Aura
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                type="text"
                name="first_name"
                className="loginInput"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="last_name"
                className="loginInput"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="user_name"
                className="loginInput"
                placeholder="User Name"
                value={formData.user_name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="email"
                className="loginInput"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                className="loginInput"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <input
                type="text"
                name="bio"
                className="loginInput"
                placeholder="Bio"
                value={formData.bio}
                onChange={handleChange}
              />

              <input
                type="text"
                name="location"
                className="loginInput"
                placeholder="location"
                value={formData.location}
                onChange={handleChange}
              />

              <input
                type="date"
                name="date_of_birth"
                className="loginInput"
                placeholder="DOB"
                value={formData.date_of_birth}
                onChange={handleChange}
              />

              <button type="submit" className="loginButton">
                Sign Up
              </button>
              <button className="loginRegisterButton">
                Login into ya' Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
