import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";

function Dashboardfreelancer() {
  return (
    <div>
      <Header />
      <h1>Welcome to the Freelancer Dashboard</h1>
      <Link to="/jobs">Go to Jobs</Link>
      <Link to="/Multistepcvbuilder">CV Builder</Link>
    </div>
  );
}

export default Dashboardfreelancer;
