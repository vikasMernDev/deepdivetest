import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Users = [
  { id: 1, email: "vikas@yopmail.com", password: "123456789" },
  { id: 2, email: "rahul.@yopmail.com", password: "987654321" },
  // Add more fake users as needed
];

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    const user = Users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login successful");
      nevigate('/dashboard')
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="login-page">
      <div id="login-form">
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
