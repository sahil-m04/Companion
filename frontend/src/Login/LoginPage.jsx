import React from 'react';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" placeholder="Enter your Email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="signin-link">
          New User ? <a href="/Signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
