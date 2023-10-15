import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setValidationMessage('Login successful!');
    } else {
      setValidationMessage('Invalid email or password');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="button" onClick={handleLogin}>Log In</button>
      </form>
      {validationMessage && <p className="validation-message">{validationMessage}</p>}
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
}
