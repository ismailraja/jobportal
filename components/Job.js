import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Job() {
  // In a real application, you would fetch this data from your backend
  const job = { id: 1, title: "Job 1", description: "Job description" };

  // Get the job id from the URL
  const { id } = useParams();

  return (
    <div>
      <Header />

      <h1>Job {id}</h1>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
    </div>
  );
}

export default Job;
