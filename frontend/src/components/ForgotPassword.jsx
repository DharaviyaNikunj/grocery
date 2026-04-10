import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import { loginStyles } from "../assets/dummyStyles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/forgot-password",
        {
          email,
          newPassword,
        }
      );

      setSuccess("Password changed successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className={loginStyles.page}>
      <Link to="/login" className={loginStyles.backLink}>
        <FaArrowLeft /> Back to Login
      </Link>

      <div className={loginStyles.loginCard}>
        <h2 className={loginStyles.title}>Reset Password</h2>

        <form onSubmit={handleSubmit} className={loginStyles.form}>
          <div className={loginStyles.inputContainer}>
            <FaEnvelope className={loginStyles.inputIcon} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={loginStyles.input}
            />
          </div>

          <div className={loginStyles.inputContainer}>
            <FaLock className={loginStyles.inputIcon} />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className={loginStyles.input}
            />
          </div>

          {error && <p className={loginStyles.error}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <button type="submit" className={loginStyles.submitButton}>
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
