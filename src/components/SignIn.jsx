import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <p className="auth-text">Sign up with</p>
        <button className="social-btn">
          <FaFacebookF style={{ marginRight: "8px" }} /> Facebook
        </button>
        <button className="social-btn">
          <FaGoogle style={{ marginRight: "8px" }} /> Google
        </button>

        <p className="switch-page">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
