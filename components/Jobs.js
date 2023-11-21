import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Jobs() {
  // In a real application, you would fetch this data from your backend
  const jobs = [
    { id: 1, title: "Job 1" },
    { id: 2, title: "Job 2" },
    { id: 3, title: "Job 3" },
  ];

  return (
    <div>
      <Header />
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <Link to={`/job/${job.id}`}>{job.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
