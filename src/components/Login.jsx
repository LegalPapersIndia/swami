import React from "react";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form">
          <input type="text" placeholder="Enter your email or phone number" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <div className="auth-divider">
          <span>or</span>
        </div>
        <p className="auth-text">Login with</p>
        <button className="social-btn">Facebook</button>
        <button className="social-btn">Google</button>
        <p className="switch-page">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
