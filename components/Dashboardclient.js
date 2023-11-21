import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";

function Dashboardclient() {
  return (
    <div>
      <Header />
      <h1>Welcome to the Client Dashboard</h1>
      <Link to="/jobs">Go to Jobs</Link>
      <Link to="/jobs">Post your requirement</Link>
    </div>
  );
}

export default Dashboardclient;
