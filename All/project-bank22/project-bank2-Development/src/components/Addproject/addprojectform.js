import React, { useState } from "react";
import "./Addproject.css"; 
import Sidebar from "../sidebar/Sidebar";
const ProjectForm = () => {
  const [name, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [github_link, setGithubLink] = useState("");
  const [course, setCourse] = useState("");
  const [members, setMembers] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      name,
      description,
      github_link,
      members
      };

    let url = '';
		switch (course) {
			case 'Android Development':
				url = 'http://127.0.0.1:3000/courses/1/projects';
				break;
			case 'Full-Stack Development':
				url = 'http://127.0.0.1:3000/courses/2/projects';
				break;
			case 'Data Science':
				url = 'http://127.0.0.1:3000/courses/3/projects';
				break;
			case 'Cybersecurity':
				url = 'http://127.0.0.1:3000/courses/4/projects';
				break;
			default:
				break;
		}

    try {
      if (url !== '') {

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        });

        if (response.ok) {
          console.log("Project data submitted successfully:", projectData);
          // Clear form inputs
          setProjectName("");
          setDescription("");
          setGithubLink("");
          setCourse("");
        } else {
          console.error("Failed to submit project data:", response.status);
        }
      }
    } catch (error) {
      console.error("Failed to submit project data:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <h2 className="add-h">Add New Project</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="project-form">
          <label  className="project__label" htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="members">Members</label>
          <textarea
            id="members"
            value={members}
            placeholder="Members"
            onChange={(e) => setMembers(e.target.value)}
            required
          ></textarea>
          
          <label htmlFor="githubLink">GitHub Link</label>
          <input
            type="text"
            id="githubLink"
            placeholder="githubLink"
            value={github_link}
            onChange={(e) => setGithubLink(e.target.value)}
          />

          <label className="course-select">
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="">Select a course</option>
              <option value="Android Development">Android Development</option>
              <option value="Full-Stack Development">
                Full-Stack Development
              </option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </label>
          <button className="addnew__project" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ProjectForm;
