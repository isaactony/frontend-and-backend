import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import './project.css';
import Sidebar from "../sidebar/Sidebar";

function ShowProjects () {
	// State to store added projects
	const [projects, setProjects] = useState(undefined);

	function showProjects () {
		fetch('http://localhost:3000/projects')
			.then((res) => res.json())
			.then((projects) => setProjects(projects))
			.catch((err) => alert('unable to get projects.'));
	}

	// function viewProject (id) {
	// 	fetch(`http://localhost/3000/projects/${id}`)
	// 		.then((res) => res.json())
	// 		.then((projectData) => projectData)
	// }

	function viewProject(id) {
		fetch(`http://localhost/3000/projects/${id}`)
		  .then((res) => res.json())
		  .then((projectData) => {
			// navigate(`/projectdets/${id}`); 
		  });

		}



	useEffect(() => {
		showProjects();
		return;
	}, []);

	return <section className="projects-container">
		{ projects && projects.length > 0 ? projects.map((project, index) => {
			return <div className="project" key={ index }>
				<section className="image-container">
					<img src={ process.env.PUBLIC_URL + '/projectImage.jpg' } alt='project placeholder' />
				</section>
				<section className="project-actions">
					<span>{ project.title }</span>
					<button className='secondary' onClick={ viewProject(project.id) }>view project</button>
				</section>
			</div>
		}) : <h1>No projects found.</h1> }
	</section>
}

const Project = () => {
	// Get the navigate function from useNavigate
	const navigate = useNavigate();

	// Function to handle "Add Project" button click
	const handleAddProject = () => {
		
		navigate("/add-project");
	};

	return (
		<>
		<Sidebar />

		<div className="project-container">
			<section className="project-container-header">
				<h2>Projects</h2>
				<button onClick={ handleAddProject } className="add-project-button primary">
					Add Project
				</button>
			</section>
			<ShowProjects />
		</div>
		</>
	);
};

export default Project