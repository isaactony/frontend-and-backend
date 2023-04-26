import React, { useState, useEffect } from "react";

const ProjectDetails = ({ projectId }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/projects/" + projectId
        ); // Update fetch URL with your Rails backend URL
        if (response.ok) {
          const data = await response.json();
          setProjectData(data);
        } else {
          throw new Error("Failed to fetch project details");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjectDetails();
  }, [projectId]);

  if (!projectData) {
    return <div>Loading project details...</div>;
  }

  return (
    
    <div>
      <h2>Project Details</h2>
      <p>Project Name: {projectData.projectName}</p>
      <p>Description: {projectData.description}</p>
      <p>Owner: {projectData.owner}</p>
      <p>Members:</p>
      <ul>
        {projectData.members.map((member, index) => (
          <li key={index}>
            Name: {member.name}, Email: {member.email}
          </li>
        ))}
      </ul>
      <p>GitHub Link: {projectData.githubLink}</p>
      <p>Course: {projectData.course}</p>
    </div>
  );
};

export default ProjectDetails;
