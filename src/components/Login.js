import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import Headerhome from "./Headerhome";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://103.186.185.127:8082/userlogin", {
        email,
        password,
      });
      console.log(res.data);

      localStorage.setItem("token", res.data.data.tokens.AccessToken.Token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      // Redirect to dashboard or wherever

      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      console.log("user :" + user);

      if (!user) {
        return <div>Loading...</div>;
      } else {
        console.log("roleId :" + user.userInfo.roleId);
        user.userInfo.roleId === 300
          ? navigate("/dashboardclient")
          : navigate("/dashboardfreelancer");
      }

      //   navigate("/dashboard");
    } catch (err) {
      // Handle error
      console.log(err);
      console.log(err.response);
    }
  };

  return (
    <div>
      <Headerhome />

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
