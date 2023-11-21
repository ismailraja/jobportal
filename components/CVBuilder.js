import React, { useState } from "react";
import "./CVBuilder.css";

function CVBuilder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [languages, setLanguages] = useState("");
  const [projects, setProjects] = useState("");
  //value = { references };

  const [references, setReferences] = useState("");
  const [publications, setPublications] = useState("");
  //const [publications, setPublications] = useState("");
  //

  const [courses, setCourses] = useState("");
  const [interests, setInterests] = useState("");
  const [summary, setSummary] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [workHistory, setWorkHistory] = useState("");

  const [certifications, setCertifications] = useState("");
  const [awards, setAwards] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [volunteerWork, setVolunteerWork] = useState("");
  const [additionalSkills, setAdditionalSkills] = useState("");
  // const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the CV data to your server
  };

  return (
    <div className="cv-builder">
      <h1>CV Builder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Skills:
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>
        <label>
          Education:
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </label>
        <label>
          Experience:
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>
        <label>
          Languages:
          <textarea
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />
        </label>
        <label>
          Projects:
          <textarea
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />
        </label>

        <label>
          Hobbies:
          <textarea
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </label>
        <label>
          References:
          <textarea
            value={references}
            onChange={(e) => setReferences(e.target.value)}
          />
        </label>
        <label>
          Publications:
          <textarea
            value={publications}
            onChange={(e) => setPublications(e.target.value)}
          />
        </label>
        <label>
          Volunteer Work:
          <textarea
            value={volunteerWork}
            onChange={(e) => setVolunteerWork(e.target.value)}
          />
        </label>
        <label>
          Additional Skills:
          <textarea
            value={additionalSkills}
            onChange={(e) => setAdditionalSkills(e.target.value)}
          />
        </label>
        <label>
          Awards:
          <textarea
            value={awards}
            onChange={(e) => setAwards(e.target.value)}
          />
        </label>
        <label>
          Certifications:
          <textarea
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
          />
        </label>
        <label>
          Courses:
          <textarea
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
          />
        </label>
        <label>
          Interests:
          <textarea
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </label>
        <label>
          Languages:
          <textarea
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />
        </label>
        <label>
          Projects:
          <textarea
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />
        </label>

        <label>
          Skills:
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>
        <label>
          Summary:
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </label>
        <label>
          Work Experience:
          <textarea
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
          />
        </label>
        <label>
          Work History:
          <textarea
            value={workHistory}
            onChange={(e) => setWorkHistory(e.target.value)}
          />
        </label>

        <button type="submit">Save CV</button>
      </form>
    </div>
  );
}

export default CVBuilder;
