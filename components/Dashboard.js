import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";

function Dashboard() {


  return (
    <div>
      <Header />
      <h1>Welcome to the Dashboard</h1>
      <Link to="/jobs">Go to Jobs</Link>
    </div>
  );
}

export default Dashboard;
