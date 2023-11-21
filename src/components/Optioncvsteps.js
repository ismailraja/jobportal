import React from "react";
import { Link } from "react-router-dom";
import "./Option.css";

function Optioncvsteps() {
  return (
    <div className="option">
          <h1>Welcome to Job Portal</h1>
       
          <br></br>

         <h1></h1> 1/10 Create your profile  5-10 min
      <h1>Join as a client or freelancer</h1>
      <Link to="/registerclient" className="option-button">
        I’m a client, hiring for a project
      </Link>
      <Link to="/registerfreelancer" className="option-button">
        I’m a freelancer, looking for work
      </Link>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default Optioncvsteps;
