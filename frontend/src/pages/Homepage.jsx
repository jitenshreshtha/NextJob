import React, { useState, useEffect } from "react";
import Header from "../components/Header";

function Homepage() {
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("http://localhost:5000/jobs");
      const data = await response.json();
      setjobs(data);
    };
    fetchJobs();
  }, []);
  return (
    <div>
      <Header />

      {jobs.length === 0 ? (
        <h3>No jobs available at the moment</h3>
      ) : (
        <div>
          {jobs.map((job,index) => (
            <div key={index}>
              <h3>{job.jobTitle}</h3>
              <p><strong>Company:</strong>{job.companyName}</p>
              <p><strong>Location:</strong>{job.location}</p>
              <p><strong>Type:</strong>{job.jobType}</p>
              <p><strong>Experience:</strong>{job.experienceLevel}</p>
              <p>{job.jobDescription}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
