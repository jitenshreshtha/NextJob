import React, { useState } from "react";

function PostJob() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    jobRequirements: "",
    jobType: "FullTime",
    experienceLevel: "",
    educationLevel: "",
    remotePolicy: "",
    location: "",
    salaryRangeMin: "",
    salaryRangeMax: "",
    benefits: "",
    applicationDeadline: "",
    applicationEmail: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();

    await fetch('http://localhost:5000/postJob',{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Job Description:</label>
          <input
            type="text"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Job Reqirements:</label>
          <input
            type="text"
            name="jobRequirements"
            value={formData.jobRequirements}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Job Type:</label>
          <select value={formData.jobType} name="jobType" onChange={handleChange}>
            <option value="FullTime">Full Time</option>
            <option value="PartTime">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>

        <div>
          <label>Experience Level:</label>
          <select value={formData.experienceLevel} name="experienceLevel" onChange={handleChange}>
            <option value="None">None</option>
            <option value="EntryLevel">Entry Level</option>
            <option value="MidLevel">Mid Level</option>
            <option value="SeniorLevel">Senior Level</option>
            <option value="Executive">Executive</option>
          </select>
        </div>

        <div>
          <label>Education Level:</label>
          <select value={formData.educationLevel} name="educationLevel" onChange={handleChange}>
            <option value="None">None</option>
            <option value="HighSchool">High School</option>
            <option value="AssociateDegree">Associate Degree</option>
            <option value="BachelorsDegree">Bachelor's Degree </option>
            <option value="MastersDegree">Master's Degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </div>

        <div>
          <label>Remote Policy</label>
          <select value={formData.remotePolicy}name="remotePolicy" onChange={handleChange}>
            <option value="Onsite">On-Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Salary Range(Min): </label>
          <input
            type="number"
            name="salaryRangeMin"
            value={formData.salaryRangeMin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Salary Range(Max): </label>
          <input
            type="number"
            name="salaryRangeMax"
            value={formData.salaryRangeMax}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Benefits:</label>
          <input
            type="text"
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Application Email:</label>
          <input
            type="email"
            name="applicationEmail"
            value={formData.applicationEmail}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Contact Information:</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Contact Email:</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Phone:</label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Post Job</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default PostJob;
