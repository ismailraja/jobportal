import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Headerhome() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    navigate("/home");
    // Redirect to login page
  };

  return (
    <nav className="header">
      <h1>Welcome to Job Portal</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/option">Getting Started</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Headerhome;
