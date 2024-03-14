import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ projects }) => {
    return (
        <div className="project-container">
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.gitHub} target="_blank" rel="noreferrer">
                        gitHub
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;
