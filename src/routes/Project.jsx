import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
import ProjectCard from "../Components/ProjectCard";
import ProjectData from "../assests/projectData";

const Project = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="PROJECTS" text="Some of my Personal Projects" />
            <ProjectCard projects={ProjectData} />
            <Footer />
        </div>
    );
};

export default Project;
