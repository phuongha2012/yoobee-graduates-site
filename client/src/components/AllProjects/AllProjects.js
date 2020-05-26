import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

const AllProjects = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <p>See all our projects</p>
            <ProjectCard />
        </div>
    );
};

export default AllProjects;
